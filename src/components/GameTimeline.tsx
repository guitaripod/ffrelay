import React, { useEffect, useState } from 'react';
import styles from './GameTimeline.module.css';
import { getGameImage } from '../data/gameImages';

interface GameTimelineProps {
  games: Array<{
    name: string;
    completed: boolean;
    current?: boolean;
  }>;
  totalProgress: number; // 0-100
}

export default function GameTimeline({ games, totalProgress }: GameTimelineProps) {
  const [spritePosition, setSpritePosition] = useState(0);

  useEffect(() => {
    // Find current game index
    const currentGameIdx = games.findIndex(g => g.current);
    
    if (currentGameIdx >= 0 && games.length > 0) {
      // Position based on actual game position
      const position = (currentGameIdx / Math.max(games.length - 1, 1)) * 100;
      setSpritePosition(position);
    } else {
      // Fall back to completed games position
      const completedCount = games.filter(g => g.completed).length;
      const position = games.length > 1 
        ? (completedCount / (games.length - 1)) * 100 
        : 0;
      setSpritePosition(position);
    }
  }, [totalProgress, games]);

  return (
    <div className={styles.timeline}>
      <div className={styles.gamesRow}>
        {games.map((game, index) => (
          <div 
            key={index} 
            className={styles.gameItem}
            style={{ 
              position: 'absolute',
              left: `${(index / Math.max(games.length - 1, 1)) * 100}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div className={`${styles.gameImage} ${game.current ? styles.current : ''}`}>
              <img src={getGameImage(game.name)} alt={game.name} />
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.progressLine}>
        <div className={styles.lineTrack}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${totalProgress}%` }}
          />
          {games.map((game, index) => (
            <div 
              key={index} 
              className={styles.checkpoint}
              style={{ left: `${(index / (games.length - 1)) * 100}%` }}
            >
              {game.completed && (
                <svg className={styles.checkmark} viewBox="0 0 24 24" width="20" height="20">
                  <path 
                    fill="#4CAF50" 
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
        
        <div 
          className={styles.warrior}
          style={{ left: `${spritePosition}%` }}
        >
          <div className={styles.moogle}>
            <div className={styles.moogleHead}></div>
            <div className={styles.mooglePom}></div>
            <div className={styles.moogleBody}></div>
            <div className={styles.moogleWings}></div>
          </div>
        </div>
      </div>
    </div>
  );
}