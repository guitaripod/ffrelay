import React, { useState } from 'react';
import { eventRuns, eventSchedule, eventSplits, type Run, type ScheduleItem, type Split } from '../data/eventData';
import { getCountryFlag } from '../lib/speedruncom';
import { runnerData } from '../data/runnerData';
import { getGameImage } from '../data/gameImages';
import styles from './LiveDashboard.module.css';

interface UnifiedScheduleItem extends ScheduleItem {
  teamMog: string;
  teamChoco: string;
  teamTonberry: string;
  commentators: string;
  splits?: Split[];
  isExpanded?: boolean;
  gameIndex: number;
}

export default function LiveDashboardStatic() {
  const [unifiedSchedule, setUnifiedSchedule] = useState<UnifiedScheduleItem[]>(
    eventSchedule.map((scheduleItem, index) => {
      const run = eventRuns.find(r => r.game === scheduleItem.game);
      const gameSplits = eventSplits.filter(s => 
        (s.type === 'game' && s.name === scheduleItem.game) ||
        (s.game === scheduleItem.game)
      );
      
      return {
        ...scheduleItem,
        teamMog: run?.teamMog || '',
        teamChoco: run?.teamChoco || '',
        teamTonberry: run?.teamTonberry || '',
        commentators: run?.commentators || '',
        splits: gameSplits,
        isExpanded: false,
        gameIndex: index
      };
    })
  );

  const calculateTeamTotals = () => {
    const totals = {
      mog: 0,
      choco: 0,
      tonberry: 0
    };

    eventSplits.forEach(split => {
      if (split.type === 'game') {
        if (split.mogTime && !isExcelError(split.mogTime)) totals.mog += parseTime(split.mogTime);
        if (split.chocoTime && !isExcelError(split.chocoTime)) totals.choco += parseTime(split.chocoTime);
        if (split.tonberryTime && !isExcelError(split.tonberryTime)) totals.tonberry += parseTime(split.tonberryTime);
      }
    });

    return totals;
  };

  const toggleGameExpand = (index: number) => {
    const newSchedule = [...unifiedSchedule];
    newSchedule[index].isExpanded = !newSchedule[index].isExpanded;
    setUnifiedSchedule(newSchedule);
  };
  
  const formatTimeWithoutSeconds = (timeStr: string): string => {
    if (!timeStr || timeStr === '-') return '-';
    const match = timeStr.match(/(\d{1,2}:\d{2})(?::\d{2})?\s*(AM|PM)/i);
    if (match) {
      return `${match[1]} ${match[2]}`;
    }
    return timeStr;
  };

  const parseTime = (timeStr: string): number => {
    if (!timeStr || isExcelError(timeStr)) return 0;
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    return 0;
  };

  const isExcelError = (value: string): boolean => {
    const excelErrors = ['#DIV/0!', '#REF!', '#VALUE!', '#NULL!', '#N/A', '#NUM!', '#NAME?'];
    return excelErrors.includes(value);
  };

  const cleanExcelValue = (value: string, showEmptyAsDash: boolean = true): string => {
    if (isExcelError(value)) {
      return showEmptyAsDash ? '-' : '';
    }
    if (!value && showEmptyAsDash) {
      return '-';
    }
    return value || '';
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const teamTotals = calculateTeamTotals();
  const currentGameIndex = -1;

  return (
    <div className={styles.liveDashboard}>
      {(teamTotals.mog > 0 || teamTotals.choco > 0 || teamTotals.tonberry > 0) && (
        <div className={styles.standingsDisplay}>
          <div className={`${styles.teamTotal} ${styles.mog}`}>
            <span className={styles.teamLabel}>Team Mog</span>
            <span className={styles.teamTime}>{formatTime(teamTotals.mog)}</span>
          </div>
          <div className={`${styles.teamTotal} ${styles.choco}`}>
            <span className={styles.teamLabel}>Team Choco</span>
            <span className={styles.teamTime}>{formatTime(teamTotals.choco)}</span>
          </div>
          <div className={`${styles.teamTotal} ${styles.tonberry}`}>
            <span className={styles.teamLabel}>Team Tonberry</span>
            <span className={styles.teamTime}>{formatTime(teamTotals.tonberry)}</span>
          </div>
        </div>
      )}

      <div className={`${styles.compactTable} ${styles.unifiedTable}`}>
        <h4>SCHEDULE</h4>
        <table>
          <thead>
            <tr>
              <th>Game</th>
              <th>Est. Time</th>
              <th>EDT</th>
              <th>CEST</th>
              <th>JST</th>
              <th>Commentators</th>
            </tr>
          </thead>
          <tbody>
            {unifiedSchedule.map((item, index) => {
              const mogRunner = runnerData[item.teamMog as keyof typeof runnerData];
              const chocoRunner = runnerData[item.teamChoco as keyof typeof runnerData];
              const tonberryRunner = runnerData[item.teamTonberry as keyof typeof runnerData];
              const gameSplit = item.splits?.find(s => s.type === 'game');
              const subSplits = item.splits?.filter(s => s.type === 'split') || [];
              
              return (
                <React.Fragment key={index}>
                  <tr 
                    className={`${styles.gameInfoRow} ${index === currentGameIndex ? styles.current : ''} ${styles.clickableRow}`}
                    onClick={() => toggleGameExpand(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td className={styles.gameName} rowSpan={2}>
                      <div className={styles.gameCell}>
                        <img 
                          src={getGameImage(item.game)} 
                          alt={item.game} 
                          className={styles.gameIcon}
                          width={40}
                          height={40}
                        />
                        <span>
                          <button 
                            className={styles.expandButton}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleGameExpand(index);
                            }}
                            aria-label={item.isExpanded ? 'Collapse splits' : 'Expand splits'}
                          >
                            {item.isExpanded ? '▾' : '▸'}
                          </button>
                          {item.game}
                          {item.splits && item.splits.length > 0 && (
                            <span className={styles.splitsLabel}> Live splits</span>
                          )}
                        </span>
                      </div>
                    </td>
                    <td className={styles.estimatedTime}>{item.estimatedTime}</td>
                    <td className={styles.timeZone}>{formatTimeWithoutSeconds(item.startEDT)}</td>
                    <td className={styles.timeZone}>{formatTimeWithoutSeconds(item.startCEST)}</td>
                    <td className={styles.timeZone}>{formatTimeWithoutSeconds(item.startJST)}</td>
                    <td className={styles.commentary} rowSpan={2}>
                      <span className={styles.commentatorsLabel}>Commentators:</span>
                      <br />
                      {item.commentators}
                    </td>
                  </tr>
                  <tr className={`${styles.runnersRow} ${index === currentGameIndex ? styles.current : ''}`}>
                    <td className={`${styles.runner} ${styles.mog}`} colSpan={1}>
                      <span className={styles.runnerName}>
                        {item.teamMog}
                        {mogRunner?.countryCode && (
                          <span className={styles.countryFlag}> {getCountryFlag(mogRunner.countryCode)}</span>
                        )}
                      </span>
                    </td>
                    <td className={`${styles.runner} ${styles.choco}`} colSpan={1}>
                      <span className={styles.runnerName}>
                        {item.teamChoco}
                        {chocoRunner?.countryCode && (
                          <span className={styles.countryFlag}> {getCountryFlag(chocoRunner.countryCode)}</span>
                        )}
                      </span>
                    </td>
                    <td className={`${styles.runner} ${styles.tonberry}`} colSpan={2}>
                      <span className={styles.runnerName}>
                        {item.teamTonberry}
                        {tonberryRunner?.countryCode && (
                          <span className={styles.countryFlag}> {getCountryFlag(tonberryRunner.countryCode)}</span>
                        )}
                      </span>
                    </td>
                  </tr>
                  {item.isExpanded && item.splits && item.splits.length > 0 && (
                    <>
                      <tr className={styles.splitsHeaderRow}>
                        <td colSpan={6}>
                          <table className={styles.splitsSubTable}>
                            <thead>
                              <tr>
                                <th>Split</th>
                                <th className={styles.mog}>Mog</th>
                                <th className={styles.choco}>Choco</th>
                                <th className={styles.tonberry}>Tonberry</th>
                                <th className={styles.mog}>+/-</th>
                                <th className={styles.choco}>+/-</th>
                                <th className={styles.tonberry}>+/-</th>
                              </tr>
                            </thead>
                            <tbody>
                              {gameSplit && (
                                <tr className={styles.gameTotalRow}>
                                  <td>{item.game} Total</td>
                                  <td className={`${styles.time} ${styles.mog}`}>{cleanExcelValue(gameSplit.mogTime)}</td>
                                  <td className={`${styles.time} ${styles.choco}`}>{cleanExcelValue(gameSplit.chocoTime)}</td>
                                  <td className={`${styles.time} ${styles.tonberry}`}>{cleanExcelValue(gameSplit.tonberryTime)}</td>
                                  <td className={`${styles.split} ${styles.mog}`}>{cleanExcelValue(gameSplit.mogSplit)}</td>
                                  <td className={`${styles.split} ${styles.choco}`}>{cleanExcelValue(gameSplit.chocoSplit)}</td>
                                  <td className={`${styles.split} ${styles.tonberry}`}>{cleanExcelValue(gameSplit.tonberrySplit)}</td>
                                </tr>
                              )}
                              {subSplits.map((split, splitIndex) => (
                                <tr key={splitIndex} className={styles.splitDetailRow}>
                                  <td className={styles.splitName}>{split.name}</td>
                                  <td className={`${styles.time} ${styles.mog}`}>{cleanExcelValue(split.teamMog, false)}</td>
                                  <td className={`${styles.time} ${styles.choco}`}>{cleanExcelValue(split.teamChoco, false)}</td>
                                  <td className={`${styles.time} ${styles.tonberry}`}>{cleanExcelValue(split.teamTonberry, false)}</td>
                                  <td className={`${styles.segment} ${styles.mog}`}>{cleanExcelValue(split.mogSegment)}</td>
                                  <td className={`${styles.segment} ${styles.choco}`}>{cleanExcelValue(split.chocoSegment)}</td>
                                  <td className={`${styles.segment} ${styles.tonberry}`}>{cleanExcelValue(split.tonberrySegment)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}