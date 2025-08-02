interface SheetData {
  values?: string[][];
}

interface EventData {
  info: string[][];
  schedule: string[][];
  splits: string[][];
  chart?: any[];
  pastEvents?: PastEventData[];
}

interface PastEventData {
  name: string;
  url: string;
  sheetId: string;
  data?: EventData;
}

interface ExpandedSplit {
  type: 'game' | 'split';
  name: string;
  game?: string;
  splits?: ExpandedSplit[];
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

const SHEETS_API_KEY = 'AIzaSyBhiqVypmyLHYPmqZYtvdSvxEopcLZBdYU'; // Public API key for read-only access
const MAIN_SHEET_ID = '1zFDwltDCFDQPiBPPac0bR0DgM712koEVghPmhnjCGos';
const SERIES_INFO_SHEET_ID = '1mTGdHVfBYguR4nLr9MbrRX2wH2KliuyXDHP63M3lKvI';

const PAST_EVENT_SHEETS: Record<string, string> = {
};

function extractSheetId(url: string): string | null {
  const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : null;
}

async function fetchSheetData(sheetId: string, range: string = 'A1:Z1000'): Promise<SheetData> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${SHEETS_API_KEY}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet data: ${response.statusText}`);
    }
    const data = await response.json();
    
    
    return data;
  } catch (error) {
    return { values: [] };
  }
}

export interface SeriesInfoData {
  title: string;
  nextEvent: {
    name: string;
    dates: string;
    infoLink: string;
    watchLink: string;
  };
  eventInfo: string[];
  eventHistory: {
    description: string;
    events: Array<{
      name: string;
      date: string;
      teams: string;
      winner: string;
      moreInfo: string;
      vodLink: string;
    }>;
  };
  teamInfo: {
    description: string;
    teams: Array<{
      name: string;
      captain: string;
      members: string[];
    }>;
  };
  rules: string[];
  schedule: Array<{
    game: string;
    runners: string[];
    estimate: string;
  }>;
  gameHistory: Array<{
    game: string;
    timesPlayed: number;
    relays: Array<{
      relayName: string;
      platform: string;
    }>;
  }>;
  runnerHistory: Array<{
    name: string;
    runCount: number;
    relayParticipation: Array<{
      relayName: string;
      games: string[];
    }>;
  }>;
}

export async function fetchSeriesInfo(): Promise<SeriesInfoData | null> {
  const data = await fetchSheetData(SERIES_INFO_SHEET_ID, 'A1:Z1000');
  
  if (!data.values || data.values.length === 0) {
    return null;
  }
  
  const rows = data.values;
  const result: SeriesInfoData = {
    title: '',
    nextEvent: {
      name: '',
      dates: '',
      infoLink: '',
      watchLink: ''
    },
    eventInfo: [],
    eventHistory: {
      description: '',
      events: []
    },
    teamInfo: {
      description: '',
      teams: []
    },
    rules: [],
    schedule: [],
    gameHistory: [],
    runnerHistory: []
  };
  
  let currentSection = '';
  let inEventHistoryTable = false;
  let skipNextLine = false;
  
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const content = row.find(cell => cell && cell.trim() !== '') || '';
    const contentIndex = row.findIndex(cell => cell && cell.trim() !== '');
    
    if (!content) continue;
    
    if (skipNextLine) {
      skipNextLine = false;
      continue;
    }
    
    if (content.includes('Final Fantasy Series Relay Race') && !content.includes('Race X') && i < 5) {
      result.title = content;
    } else if (content === 'Next Event:') {
      if (i + 1 < rows.length) {
        result.nextEvent.name = rows[i + 1][contentIndex] || '';
      }
      if (i + 2 < rows.length) {
        result.nextEvent.dates = rows[i + 2][contentIndex] || '';
      }
      if (i + 3 < rows.length && rows[i + 3][contentIndex]?.includes('bit.ly')) {
        result.nextEvent.infoLink = rows[i + 3][contentIndex];
      }
      if (i + 4 < rows.length && rows[i + 4][contentIndex]?.includes('Twitch.tv')) {
        result.nextEvent.watchLink = rows[i + 4][contentIndex];
      }
      skipNextLine = true;
    } else if (content === 'Event Info') {
      currentSection = 'eventInfo';
    } else if (content === 'Event History') {
      currentSection = 'eventHistory';
    } else if (content === 'Team Information' || content === 'Team Info') {
      currentSection = 'teamInfo';
    } else if (content === 'Rules') {
      currentSection = 'rules';
    } else if (content === 'Schedule' || content === 'Game Schedule') {
      currentSection = 'schedule';
    } else if (content === 'Game History') {
      currentSection = 'gameHistory';
      if (i + 1 < rows.length) {
        const headerRow = rows[i + 1];
        
        let timesPlayedIndex = -1;
        const relayNames = [];
        
        // Find column indices for times played and relay names
        for (let j = 0; j < headerRow.length; j++) {
          if (headerRow[j] && headerRow[j].includes('Times played')) {
            timesPlayedIndex = j;
          } else if (headerRow[j] && headerRow[j].includes('Relay')) {
            relayNames.push({ index: j, name: headerRow[j] });
          }
        }
        
        if (relayNames.length > 0) {
          
          for (let gameRowIdx = i + 2; gameRowIdx < rows.length; gameRowIdx++) {
            const gameRow = rows[gameRowIdx];
            
            // Find the game name (first non-empty cell)
            let gameName = '';
            let foundGame = false;
            for (let j = 0; j < gameRow.length; j++) {
              if (gameRow[j] && gameRow[j].trim() !== '') {
                gameName = gameRow[j].trim();
                foundGame = true;
                break;
              }
            }
            
            if (!foundGame || gameName === 'Runner History' || gameName === 'Number of games') {
              break;
            }
            
            if (!gameName || !gameName.includes('Fantasy')) continue;
            
            const timesPlayed = timesPlayedIndex >= 0 ? parseInt(gameRow[timesPlayedIndex]) || 0 : parseInt(gameRow[gameRow.length - 1]) || 0;
            
            const relays = [];
            for (const relay of relayNames) {
              if (gameRow[relay.index] && gameRow[relay.index].trim() !== '') {
                relays.push({
                  relayName: relay.name,
                  platform: gameRow[relay.index].trim()
                });
              }
            }
            
            result.gameHistory.push({
              game: gameName,
              timesPlayed: timesPlayed,
              relays: relays
            });
          }
        }
      }
    } else if (content === 'Runner History') {
      currentSection = 'runnerHistory';
      if (i + 1 < rows.length) {
        const headerRow = rows[i + 1];
        
        let nameIndex = -1;
        let runCountIndex = -1;
        let relayStartIndex = -1;
        
        for (let j = 0; j < headerRow.length; j++) {
          if (headerRow[j] === 'Name') nameIndex = j;
          else if (headerRow[j] === 'Run count') {
            runCountIndex = j;
            relayStartIndex = j + 1;
          }
        }
        
        if (nameIndex >= 0 && runCountIndex >= 0) {
          const relayColumns = [];
          for (let j = relayStartIndex; j < headerRow.length; j++) {
            if (headerRow[j] && headerRow[j].includes('Relay')) {
              relayColumns.push({ index: j, name: headerRow[j] });
            }
          }
          
          for (let runnerRowIdx = i + 2; runnerRowIdx < rows.length; runnerRowIdx++) {
            const runnerRow = rows[runnerRowIdx];
            
            if (!runnerRow[nameIndex] || runnerRow[nameIndex].trim() === '') {
              break;
            }
            
            const runnerName = runnerRow[nameIndex].trim();
            const runCount = parseInt(runnerRow[runCountIndex]) || 0;
            
            if (runnerName && runCount > 0) {
              const relayParticipation = [];
              
              for (const relay of relayColumns) {
                if (runnerRow[relay.index] && runnerRow[relay.index].trim() !== '') {
                  const gameName = runnerRow[relay.index].trim();
                  relayParticipation.push({
                    relayName: relay.name,
                    games: [gameName]
                  });
                }
              }
              
              result.runnerHistory.push({
                name: runnerName,
                runCount: runCount,
                relayParticipation: relayParticipation
              });
            }
          }
        }
      }
    } else if (currentSection === 'eventInfo') {
      if (!content.includes('Event History') && !content.includes('Team Information')) {
        result.eventInfo.push(content);
      }
    } else if (currentSection === 'eventHistory') {
      if (content.includes('The Final Fantasy Series Relay Race has been')) {
        result.eventHistory.description = content;
      } else if (content === 'Event' && row[contentIndex + 2] === 'Date') {
        inEventHistoryTable = true;
      } else if (inEventHistoryTable && content.includes('Relay') && contentIndex < row.length - 2) {
        result.eventHistory.events.push({
          name: content || '',
          date: row[contentIndex + 2] || '',
          teams: row[contentIndex + 3] || '',
          winner: row[contentIndex + 4] || '',
          moreInfo: row[contentIndex + 5] || '',
          vodLink: row[contentIndex + 6] || ''
        });
      } else if (content === 'Game History') {
        inEventHistoryTable = false;
      }
    } else if (currentSection === 'teamInfo') {
      if (content.includes('Teams are made') || content.includes('team information')) {
        result.teamInfo.description = content;
      } else if (content.includes('Team') && (content.includes('Mog') || content.includes('Choco') || content.includes('Tonberry'))) {
        const teamName = content.replace('Team ', '');
        let captain = '';
        let members = [];
        
        for (let j = i + 1; j < rows.length && j < i + 10; j++) {
          const nextContent = rows[j].find(cell => cell && cell.trim() !== '') || '';
          if (nextContent.includes('Captain:')) {
            captain = nextContent.replace('Captain:', '').trim();
          } else if (nextContent.includes('Team') || nextContent === 'Rules' || nextContent === 'Schedule') {
            break;
          } else if (nextContent && !nextContent.includes('Captain') && captain) {
            members.push(nextContent);
          }
        }
        
        if (captain || members.length > 0) {
          result.teamInfo.teams.push({
            name: teamName,
            captain: captain,
            members: members
          });
        }
      }
    } else if (currentSection === 'rules') {
      if (!content.includes('Schedule') && !content.includes('Game Schedule') && 
          !content.includes('Team') && content.length > 5) {
        result.rules.push(content);
      }
    } else if (currentSection === 'schedule') {
      if (content === 'Game' && row[contentIndex + 1] === 'Runners') {
        continue;
      } else if (contentIndex < row.length - 1 && row[contentIndex + 1]) {
        const game = content;
        const runners = row[contentIndex + 1];
        const estimate = row[contentIndex + 2] || '';
        
        if (game && runners && !game.includes('Team')) {
          result.schedule.push({
            game: game,
            runners: runners.split(' / '),
            estimate: estimate
          });
        }
      }
    }
  }
  
  return result;
}

export async function fetchAllEventData(): Promise<EventData> {
  const [infoData, scheduleData, splitsData] = await Promise.all([
    fetchSheetData(MAIN_SHEET_ID, 'Info!A1:H500'),
    fetchSheetData(MAIN_SHEET_ID, 'Schedule!A1:E100'),
    fetchSheetData(MAIN_SHEET_ID, 'Live Splits!A1:Q500')
  ]);

  const eventData: EventData = {
    info: infoData.values || [],
    schedule: scheduleData.values || [],
    splits: splitsData.values || [],
    pastEvents: []
  };

  const pastEventPromises = Object.entries(PAST_EVENT_SHEETS).map(async ([name, sheetId]) => {
    try {
      const [info, schedule, splits] = await Promise.all([
        fetchSheetData(sheetId, 'Info!A1:H500'),
        fetchSheetData(sheetId, 'Schedule!A1:E100'),
        fetchSheetData(sheetId, 'Live Splits!A1:Q500')
      ]);
      
      return {
        name,
        url: `https://docs.google.com/spreadsheets/d/${sheetId}`,
        sheetId,
        data: {
          info: info.values || [],
          schedule: schedule.values || [],
          splits: splits.values || []
        }
      };
    } catch (error) {
      return {
        name,
        url: `https://docs.google.com/spreadsheets/d/${sheetId}`,
        sheetId,
        data: {
          info: [],
          schedule: [],
          splits: []
        }
      };
    }
  });

  eventData.pastEvents = await Promise.all(pastEventPromises);

  return eventData;
}

export async function fetchPastEventData(sheetId: string): Promise<EventData> {
  const [infoData, scheduleData, splitsData] = await Promise.all([
    fetchSheetData(sheetId, 'Info!A1:H500'),
    fetchSheetData(sheetId, 'Schedule!A1:E100'),
    fetchSheetData(sheetId, 'Live Splits!A1:Q500')
  ]);

  return {
    info: infoData.values || [],
    schedule: scheduleData.values || [],
    splits: splitsData.values || [],
    pastEvents: []
  };
}

export function parseRunData(info: string[][]) {
  const runs = [];
  let foundHeader = false;
  
  for (const row of info) {
    if (row[0] === 'Game' && row[1] === 'Team Mog') {
      foundHeader = true;
      continue;
    }
    
    if (foundHeader && row[0] && row[0] !== '' && !row[0].includes('Highlights')) {
      runs.push({
        game: row[0],
        teamMog: row[1] || '',
        mogTime: row[2] || '',
        teamChoco: row[3] || '',
        chocoTime: row[4] || '',
        teamTonberry: row[5] || '',
        tonberryTime: row[6] || '',
        commentators: row[7] || ''
      });
    }
  }
  
  return runs;
}

export function parseScheduleData(schedule: string[][]) {
  const scheduleData = [];
  let foundHeader = false;
  
  for (const row of schedule) {
    if (row[0] === 'Game' && row[1] === 'Time') {
      foundHeader = true;
      continue;
    }
    
    if (foundHeader && row[0] && row[0] !== '') {
      const startEDT = row[2];
      const startCEST = row[3];
      const startJST = row[4];
      
      scheduleData.push({
        game: row[0],
        estimatedTime: row[1],
        startEDT: startEDT ? formatExcelDate(startEDT) : '',
        startCEST: startCEST ? formatExcelDate(startCEST) : '',
        startJST: startJST ? formatExcelDate(startJST) : ''
      });
    }
  }
  
  return scheduleData;
}

export function parseSplitsData(splits: string[][]): ExpandedSplit[] {
  const splitsData: ExpandedSplit[] = [];
  let pendingSplits: ExpandedSplit[] = []; // Accumulate splits until we find a game row
  
  // Find the header row that contains 'Name' or 'Split Name'
  let headerRow = -1;
  for (let i = 0; i < Math.min(20, splits.length); i++) {
    if (splits[i] && (splits[i][0] === 'Name' || splits[i][0] === 'Split Name')) {
      headerRow = i;
      break;
    }
  }
  
  if (headerRow === -1) {
    return [];
  }
  
  for (let i = headerRow + 1; i < splits.length; i++) {
    const row = splits[i];
    if (!row || !row[0] || row[0].trim() === '') continue;
    
    const name = row[0].trim();
    
    // Detect if this row represents a game (not a split within a game)
    const isGameRow = name.includes('Final Fantasy') || 
                      name.includes('FF') ||
                      name.includes('Stranger of Paradise') ||
                      name.includes('Theatrhythm') ||
                      name.includes('Chocobo') ||
                      name.includes('Dissidia') ||
                      name.includes('Crisis Core') ||
                      name.includes('Dirge of Cerberus') ||
                      name.includes('Lightning Returns') ||
                      name.includes('World of Final Fantasy');
    
    if (isGameRow) {
      const currentGame: ExpandedSplit = {
        type: 'game',
        name: name,
        splits: pendingSplits,
        isCollapsed: true,
        teamMog: row[2] || '',
        teamChoco: row[3] || '',
        teamTonberry: row[4] || '',
        mogTime: row[6] || '',
        chocoTime: row[7] || '',
        tonberryTime: row[8] || '',
        mogSplit: row[10] || '',
        chocoSplit: row[11] || '',
        tonberrySplit: row[12] || '',
        mogSegment: row[14] || '',
        chocoSegment: row[15] || '',
        tonberrySegment: row[16] || ''
      };
      
      splitsData.push(currentGame);
      pendingSplits = [];
    } else {
      const split: ExpandedSplit = {
        type: 'split',
        name: name,
        game: '',
        teamMog: row[2] || '',
        teamChoco: row[3] || '',
        teamTonberry: row[4] || '',
        mogTime: row[6] || '',
        chocoTime: row[7] || '',
        tonberryTime: row[8] || '',
        mogSplit: row[10] || '',
        chocoSplit: row[11] || '',
        tonberrySplit: row[12] || '',
        mogSegment: row[14] || '',
        chocoSegment: row[15] || '',
        tonberrySegment: row[16] || ''
      };
      pendingSplits.push(split);
    }
  }
  
  return splitsData;
}

function formatExcelDate(value: any): string {
  if (typeof value === 'number') {
    // Excel stores times as fractional days, convert to hours/minutes
    const totalMinutes = Math.round((value % 1) * 24 * 60);
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  }
  if (typeof value === 'string') {
    // Remove leading numbers and @ symbols, then remove seconds if present
    let cleaned = value.replace(/^\d+\s*/, '').replace(/^@\s*/, '').trim();
    // Remove :00 seconds from time format (e.g., "09:00:00" -> "09:00")
    cleaned = cleaned.replace(/(\d{1,2}:\d{2}):\d{2}/, '$1');
    return cleaned;
  }
  return value?.toString() || '';
}