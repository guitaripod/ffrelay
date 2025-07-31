import React, { useState, useEffect, useCallback } from 'react';
import { fetchAllEventData, parseRunData, parseScheduleData, parseSplitsData } from '../lib/googleSheets';
import PastEventDisplay from './PastEventDisplay';
import { runnerData } from '../data/runnerData';
import { getGameImage } from '../data/gameImages';
import styles from './LiveDashboard.module.css';

interface Run {
  game: string;
  teamMog: string;
  mogTime: string;
  teamChoco: string;
  chocoTime: string;
  teamTonberry: string;
  tonberryTime: string;
  commentators: string;
}

interface ScheduleItem {
  game: string;
  estimatedTime: string;
  startEDT: string;
  startCEST: string;
  startJST: string;
}

interface Split {
  type: 'game' | 'split';
  name: string;
  game?: string;
  splits?: Split[];
  isCollapsed?: boolean;
  teamMog: string;
  teamChoco: string;
  teamTonberry: string;
  mogTime: string;
  chocoTime: string;
  tonberryTime: string;
  mogSplit: string;
  chocoSplit: string;
  tonberrySplit: string;
  mogSegment: string;
  chocoSegment: string;
  tonberrySegment: string;
}

interface UnifiedScheduleItem {
  game: string;
  estimatedTime: string;
  startEDT: string;
  startCEST: string;
  startJST: string;
  teamMog: string;
  teamChoco: string;
  teamTonberry: string;
  commentators: string;
  splits?: Split[];
  isExpanded?: boolean;
  gameIndex: number;
}

interface LiveDashboardProps {
  onLastUpdate?: (date: Date | null) => void;
}

export default function LiveDashboard({ onLastUpdate }: LiveDashboardProps) {
  const [unifiedSchedule, setUnifiedSchedule] = useState<UnifiedScheduleItem[]>([]);
  const [splits, setSplits] = useState<Split[]>([]);
  const [currentGameIndex, setCurrentGameIndex] = useState<number>(-1);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [pastEventData, setPastEventData] = useState<any[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchAllEventData();
      
      
      const parsedRuns = parseRunData(data.info);
      const parsedSchedule = parseScheduleData(data.schedule);
      const parsedSplits = parseSplitsData(data.splits);
      
      
      const normalizeGameName = (name: string): string => {
        // Remove parenthetical content (categories, versions, etc.)
        let normalized = name.replace(/\s*\([^)]*\)/g, '').trim();
        
        const romanToArabic: Record<string, string> = {
          ' I': ' 1', ' II': ' 2', ' III': ' 3', ' IV': ' 4', ' V': ' 5',
          ' VI': ' 6', ' VII': ' 7', ' VIII': ' 8', ' IX': ' 9', ' X': ' 10',
          ' XI': ' 11', ' XII': ' 12', ' XIII': ' 13', ' XIV': ' 14', ' XV': ' 15',
          ' XVI': ' 16'
        };
        
        for (const [roman, arabic] of Object.entries(romanToArabic)) {
          if (normalized.endsWith(roman)) {
            normalized = normalized.slice(0, -roman.length) + arabic;
          }
        }
        
        return normalized;
      };
      
      const unified: UnifiedScheduleItem[] = parsedSchedule.map((scheduleItem, index) => {
        const run = parsedRuns.find(r => r.game === scheduleItem.game);
        
        
        let gameData = parsedSplits.find(s => {
          if (s.type !== 'game') return false;
          if (s.name === scheduleItem.game) {
            return true;
          }
          const scheduleNameClean = scheduleItem.game.replace(/\s*\([^)]*\)/g, '').trim();
          const splitNameClean = s.name.replace(/\s*\([^)]*\)/g, '').trim();
          if (scheduleNameClean === splitNameClean) {
            return true;
          }
          return false;
        });
        
        if (!gameData) {
          const normalizedScheduleName = normalizeGameName(scheduleItem.game);
          gameData = parsedSplits.find(s => {
            if (s.type !== 'game') return false;
            const normalizedSplitName = normalizeGameName(s.name);
            if (normalizedSplitName === normalizedScheduleName) {
              return true;
            }
            return false;
          });
        }
        
        if (!gameData) {
          const specialCases: Record<string, string[]> = {
            'Final Fantasy I (Pixel Remaster)': ['Final Fantasy I', 'FF1'],
            'Final Fantasy Legend 2 (Glitchless)': ['Final Fantasy Legend 2', 'FFL2'],
            'Final Fantasy VIII (CSR)': ['Final Fantasy VIII', 'FF8'],
            'Stranger of Paradise: Final Fantasy Origin (Story)': ['Stranger of Paradise: Final Fantasy Origin', 'SoP'],
            'Final Fantasy VII Remake (NMG Easy)': ['Final Fantasy VII Remake', 'FF7R'],
            'Final Fantasy V (Pixel Remaster)': ['Final Fantasy V', 'FF5'],
            'Final Fantasy IV (PC (3D) Any%)': ['Final Fantasy IV', 'FF4'],
            'Final Fantasy XIII (Any%)': ['Final Fantasy XIII', 'FF13'],
            'Final Fantasy Type-0 HD (PC Cadet)': ['Final Fantasy Type-0 HD', 'Type-0'],
            'Final Fantasy VII Rebirth (Easy)': ['Final Fantasy VII Rebirth', 'FF7 Rebirth'],
            'Final Fantasy X (CSR Manip)': ['Final Fantasy X', 'FFX'],
            'Final Fantasy XVI (Story)': ['Final Fantasy XVI', 'FF16'],
            'Final Fantasy III (Pixel Remaster)': ['Final Fantasy III', 'FF3'],
            'Final Fantasy XII (PS2)': ['Final Fantasy XII', 'FF12'],
            'Final Fantasy II (Pixel Remaster)': ['Final Fantasy II', 'FF2'],
            'Final Fantasy X-2 (PC No CC)': ['Final Fantasy X-2', 'FFX-2'],
            'Final Fantasy IX (PSX)': ['Final Fantasy IX', 'FF9'],
            'Final Fantasy XV': ['Final Fantasy XV', 'FF15'],
            'Final Fantasy VI': ['Final Fantasy VI', 'FF6']
          };
          
          const possibleNames = specialCases[scheduleItem.game];
          if (possibleNames) {
            gameData = parsedSplits.find(s => {
              if (s.type !== 'game') return false;
              return possibleNames.some(name => s.name === name || s.name.includes(name));
            });
            if (gameData) {
            }
          }
        }
        
        const gameSplits = gameData ? [gameData, ...(gameData.splits || [])] : [];
        
        if (!gameData) {
        } else {
        }
        
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
      });
      
      setUnifiedSchedule(unified);
      setSplits(parsedSplits);
      setPastEventData(data.pastEvents || []);
      
      const completedGames = parsedSplits
        .filter(s => s.type === 'game' && s.mogSplit && s.chocoSplit && s.tonberrySplit)
        .map(s => s.name);
      
      const currentIndex = unified.findIndex(item => {
        if (completedGames.includes(item.game)) return false;
        
        const normalizedScheduleName = normalizeGameName(item.game);
        const isCompleted = completedGames.some(completedGame => {
          const normalizedCompletedName = normalizeGameName(completedGame);
          return normalizedCompletedName === normalizedScheduleName;
        });
        
        return !isCompleted;
      });
      
      setCurrentGameIndex(currentIndex);
      
      const updateTime = new Date();
      setLastUpdate(updateTime);
      if (onLastUpdate) {
        onLastUpdate(updateTime);
      }
      if (typeof window !== 'undefined' && (window as any).updateLastUpdateTime) {
        (window as any).updateLastUpdateTime(updateTime);
      }
      setLoading(false);
      
      if (typeof window !== 'undefined') {
        document.body.classList.add('dashboard-loaded');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      if (onLastUpdate) {
        onLastUpdate(null);
      }
    }
  }, [onLastUpdate]);

  useEffect(() => {
    fetchData();
    
    const interval = setInterval(fetchData, 30000);
    
    return () => {
      clearInterval(interval);
    };
  }, [fetchData]);

  const calculateTeamTotals = () => {
    const totals = {
      mog: 0,
      choco: 0,
      tonberry: 0
    };

    splits.forEach(split => {
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

  if (loading) {
    return (
      <div className={styles.liveDashboard}>
        <div className={styles.standingsDisplay}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={`${styles.teamTotal} ${styles.skeletonContainer}`}>
              <div className={styles.skeleton} style={{ width: '80px', height: '16px', margin: '0 auto 0.25rem' }} />
              <div className={styles.skeleton} style={{ width: '100px', height: '24px', margin: '0 auto' }} />
            </div>
          ))}
        </div>

        <div className={`${styles.compactTable} ${styles.unifiedTable}`}>
          <h4 className={styles.skeleton} style={{ width: '100px', height: '20px' }} />
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
              {[...Array(20)].map((_, index) => (
                <React.Fragment key={index}>
                  <tr className={styles.gameInfoRow}>
                    <td className={styles.gameName} rowSpan={2}>
                      <div className={styles.gameCell}>
                        <div className={`${styles.skeleton} ${styles.skeletonImage}`} style={{ width: '50px', height: '50px' }} />
                        <div className={styles.skeleton} style={{ width: '220px', height: '18px' }} />
                      </div>
                    </td>
                    <td className={styles.estimatedTime}>
                      <div className={styles.skeleton} style={{ width: '80px', height: '16px', margin: '0 auto' }} />
                    </td>
                    <td className={styles.timeZone}>
                      <div className={styles.skeleton} style={{ width: '90px', height: '16px', margin: '0 auto' }} />
                    </td>
                    <td className={styles.timeZone}>
                      <div className={styles.skeleton} style={{ width: '90px', height: '16px', margin: '0 auto' }} />
                    </td>
                    <td className={styles.timeZone}>
                      <div className={styles.skeleton} style={{ width: '90px', height: '16px', margin: '0 auto' }} />
                    </td>
                    <td className={styles.commentary} rowSpan={2}>
                      <div className={styles.skeleton} style={{ width: '120px', height: '16px', marginBottom: '4px' }} />
                      <div className={styles.skeleton} style={{ width: '180px', height: '16px' }} />
                    </td>
                  </tr>
                  <tr className={styles.runnersRow}>
                    <td className={`${styles.runner} ${styles.mog}`}>
                      <div className={styles.skeleton} style={{ width: '120px', height: '16px', margin: '0 auto' }} />
                    </td>
                    <td className={`${styles.runner} ${styles.choco}`}>
                      <div className={styles.skeleton} style={{ width: '120px', height: '16px', margin: '0 auto' }} />
                    </td>
                    <td className={`${styles.runner} ${styles.tonberry}`} colSpan={2}>
                      <div className={styles.skeleton} style={{ width: '120px', height: '16px', margin: '0 auto' }} />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.liveDashboard}>

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
                          width={50}
                          height={50}
                        />
                        <span>
                          {subSplits.length > 0 && (
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
                          )}
                          {item.game}
                          {subSplits.length > 0 && (
                            <span className={styles.splitsLabel}> ({subSplits.length} splits)</span>
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
                        {mogRunner?.speedrunProfile ? (
                          <a href={`https://www.speedrun.com/users/${mogRunner.speedrunProfile}`} target="_blank" rel="noopener noreferrer" className={styles.runnerLink}>
                            {item.teamMog}
                          </a>
                        ) : (
                          item.teamMog
                        )}
                        {mogRunner?.flag && (
                          <span className={styles.countryFlag}> {mogRunner.flag}</span>
                        )}
                      </span>
                    </td>
                    <td className={`${styles.runner} ${styles.choco}`} colSpan={1}>
                      <span className={styles.runnerName}>
                        {chocoRunner?.speedrunProfile ? (
                          <a href={`https://www.speedrun.com/users/${chocoRunner.speedrunProfile}`} target="_blank" rel="noopener noreferrer" className={styles.runnerLink}>
                            {item.teamChoco}
                          </a>
                        ) : (
                          item.teamChoco
                        )}
                        {chocoRunner?.flag && (
                          <span className={styles.countryFlag}> {chocoRunner.flag}</span>
                        )}
                      </span>
                    </td>
                    <td className={`${styles.runner} ${styles.tonberry}`} colSpan={2}>
                      <span className={styles.runnerName}>
                        {tonberryRunner?.speedrunProfile ? (
                          <a href={`https://www.speedrun.com/users/${tonberryRunner.speedrunProfile}`} target="_blank" rel="noopener noreferrer" className={styles.runnerLink}>
                            {item.teamTonberry}
                          </a>
                        ) : (
                          item.teamTonberry
                        )}
                        {tonberryRunner?.flag && (
                          <span className={styles.countryFlag}> {tonberryRunner.flag}</span>
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

      {pastEventData.length > 0 && (
        <div className={styles.pastEvents}>
          <h4>Past Event Results</h4>
          {pastEventData.map((event, index) => (
            <PastEventDisplay 
              key={index} 
              name={event.name} 
              sheetId={event.sheetId} 
            />
          ))}
        </div>
      )}

    </div>
  );
}