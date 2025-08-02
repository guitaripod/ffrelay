import React, { useState, useEffect } from 'react';
import { parseRunData, parseSplitsData, fetchPastEventData } from '../lib/googleSheets';
import styles from './LiveDashboard.module.css';

interface PastEventProps {
  name: string;
  sheetId: string;
}

interface TeamResults {
  mog: number;
  choco: number;
  tonberry: number;
}

export default function PastEventDisplay({ name, sheetId }: PastEventProps) {
  const [eventData, setEventData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded && !eventData) {
      fetchPastEventData(sheetId).then(data => {
        setEventData(data);
        setLoading(false);
      }).catch(err => {
        setLoading(false);
      });
    }
  }, [isExpanded, sheetId, name, eventData]);

  const calculateFinalResults = () => {
    if (!eventData || !eventData.splits) return null;

    const splits = parseSplitsData(eventData.splits);
    const totals: TeamResults = {
      mog: 0,
      choco: 0,
      tonberry: 0
    };

    splits.forEach(split => {
      if (split.type === 'game' && split.mogTime && split.chocoTime && split.tonberryTime) {
        const parseTime = (timeStr: string): number => {
          if (!timeStr || timeStr === '#DIV/0!' || timeStr === '') return 0;
          const parts = timeStr.split(':').map(Number);
          if (parts.length === 3) {
            return parts[0] * 3600 + parts[1] * 60 + parts[2];
          } else if (parts.length === 2) {
            return parts[0] * 60 + parts[1];
          }
          return 0;
        };

        totals.mog += parseTime(split.mogTime);
        totals.choco += parseTime(split.chocoTime);
        totals.tonberry += parseTime(split.tonberryTime);
      }
    });

    return totals;
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getWinner = (totals: TeamResults) => {
    const min = Math.min(totals.mog, totals.choco, totals.tonberry);
    if (min === totals.mog) return 'Team Mog';
    if (min === totals.choco) return 'Team Choco';
    return 'Team Tonberry';
  };

  return (
    <div className={styles.pastEventItem}>
      <div 
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h5>{name}</h5>
        <span>{isExpanded ? '▼' : '▶'}</span>
      </div>
      
      {isExpanded && (
        <div className={styles.pastEventResults}>
          {loading ? (
            <p>Loading event data...</p>
          ) : eventData ? (
            <>
              {(() => {
                const totals = calculateFinalResults();
                if (!totals || (totals.mog === 0 && totals.choco === 0 && totals.tonberry === 0)) {
                  return <p>No results available for this event.</p>;
                }
                
                const winner = getWinner(totals);
                return (
                  <>
                    <p><strong>Winner:</strong> {winner}</p>
                    <div style={{ marginTop: '0.5rem' }}>
                      <p style={{ color: '#6B7BED' }}>Team Mog: {formatTime(totals.mog)}</p>
                      <p style={{ color: '#E94B9C' }}>Team Choco: {formatTime(totals.choco)}</p>
                      <p style={{ color: '#4CAF50' }}>Team Tonberry: {formatTime(totals.tonberry)}</p>
                    </div>
                  </>
                );
              })()}
            </>
          ) : (
            <p>Failed to load event data.</p>
          )}
        </div>
      )}
    </div>
  );
}