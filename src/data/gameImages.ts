export const gameImages: Record<string, string> = {
  'Final Fantasy I': '/images/games/ff1.png',
  'Final Fantasy II': '/images/games/ff2.png',
  'Final Fantasy III': '/images/games/ff3.png',
  'Final Fantasy IV': '/images/games/ff4.png',
  'Final Fantasy V': '/images/games/ff5.png',
  'Final Fantasy VI': '/images/games/ff6.png',
  'Final Fantasy VII': '/images/games/ff7.png',
  'Final Fantasy VIII': '/images/games/ff8.png',
  'Final Fantasy IX': '/images/games/ff9.png',
  'Final Fantasy X': '/images/games/ff10.png',
  'Final Fantasy X-2': '/images/games/ff10-2.png',
  'Final Fantasy XII': '/images/games/ff12.png',
  'Final Fantasy XIII': '/images/games/ff13.png',
  'Final Fantasy XIII-2': '/images/games/ff13-2.png',
  'Lightning Returns: Final Fantasy XIII': '/images/games/ff13-lr.png',
  'Final Fantasy XV': '/images/games/ff15.png',
  'Final Fantasy XVI': '/images/games/ff16.png',
  'Final Fantasy Tactics': '/images/games/fft.png',
  'Final Fantasy Tactics Advance': '/images/games/ffta.png',
  'Final Fantasy Tactics A2': '/images/games/ffta2.png',
  'Final Fantasy Type-0': '/images/games/ff-type0.png',
  'Crisis Core: Final Fantasy VII': '/images/games/ff7-cc.png',
  'Stranger of Paradise: Final Fantasy Origin': '/images/games/sop.png',
  'World of Final Fantasy': '/images/games/woff.png',
  'Final Fantasy Mystic Quest': '/images/games/ffmq.png',
  'Final Fantasy Crystal Chronicles': '/images/games/ffcc.png',
  'Dissidia Final Fantasy': '/images/games/dissidia.png',
  'Final Fantasy Dissidia': '/images/games/dissidia.png',
  'Final Fantasy Fables: Chocobo Tales': '/images/games/ff-chocobo-tales.png',
  'Final Fantasy Tactics A2: Grimoire of the Rift': '/images/games/ffta2.png',
  'Final Fantasy Adventure': '/images/games/ff-adventure.png',
  'Final Fantasy Legend 2': '/images/games/ff-legend2.png',
  'Final Fantasy Legend II': '/images/games/ff-legend2.png',
  'Chocobo GP': '/images/games/chocobo-gp.png',
  'Final Fantasy VII Remake': '/images/games/ff7-remake.png',
  'Final Fantasy VII Rebirth': '/images/games/ff7-rebirth.png',
  'Dirge of Cerberus: Final Fantasy VII': '/images/games/ff7-doc.png',
  'Theatrhythm Final Bar Line': '/images/games/theatrhythm.png',
  'Final Fantasy Type-0 HD': '/images/games/ff-type0.png',
  'FF1': '/images/games/ff1.png',
  'FF2': '/images/games/ff2.png',
  'FF3': '/images/games/ff3.png',
  'FF4': '/images/games/ff4.png',
  'FF5': '/images/games/ff5.png',
  'FF6': '/images/games/ff6.png',
  'FF7': '/images/games/ff7.png',
  'FF8': '/images/games/ff8.png',
  'FF9': '/images/games/ff9.png',
  'FF10': '/images/games/ff10.png',
  'FF10-2': '/images/games/ff10-2.png',
  'FF12': '/images/games/ff12.png',
  'FF13': '/images/games/ff13.png',
  'FF13-2': '/images/games/ff13-2.png',
  'LR:FF13': '/images/games/ff13-lr.png',
  'FF15': '/images/games/ff15.png',
  'FF16': '/images/games/ff16.png',
  'FFT': '/images/games/fft.png',
  'FFTA': '/images/games/ffta.png',
  'FFTA2': '/images/games/ffta2.png',
  'Type-0': '/images/games/ff-type0.png',
  'CCFF7': '/images/games/ff7-cc.png',
  'WoFF': '/images/games/woff.png',
  'FFMQ': '/images/games/ffmq.png',
  'FFCC': '/images/games/ffcc.png',
  'FF7R': '/images/games/ff7-remake.png',
  'FF7 Remake': '/images/games/ff7-remake.png',
  'FF7 Rebirth': '/images/games/ff7-rebirth.png',
  'DOC': '/images/games/ff7-doc.png',
  'Theatrhythm': '/images/games/theatrhythm.png',
  'default': '/images/games/ff1.png'
};

export function getGameImage(gameName: string): string {
  if (gameImages[gameName]) {
    return gameImages[gameName];
  }
  
  // Remove platform/category suffixes to find base game name
  const cleanedGameName = gameName
    .replace(/\s*\(Pixel Remaster\)\s*/i, '')
    .replace(/\s*\(PC\)\s*/i, '')
    .replace(/\s*\(Glitchless\)\s*/i, '')
    .replace(/\s*\(PSP\)\s*/i, '')
    .replace(/\s*\(PS1\)\s*/i, '')
    .replace(/\s*\(PS2\)\s*/i, '')
    .replace(/\s*\(PS4\)\s*/i, '')
    .replace(/\s*\(PS5\)\s*/i, '')
    .replace(/\s*\(Xbox\)\s*/i, '')
    .replace(/\s*\(Switch\)\s*/i, '')
    .replace(/\s*\(Steam\)\s*/i, '')
    .replace(/\s*\(Mobile\)\s*/i, '')
    .replace(/\s*\(iOS\)\s*/i, '')
    .replace(/\s*\(Android\)\s*/i, '')
    .replace(/\s*\(CSR\)\s*/i, '')
    .replace(/\s*\(Any%\)\s*/i, '')
    .replace(/\s*\(Story\)\s*/i, '')
    .replace(/\s*\(NMG Easy\)\s*/i, '')
    .replace(/\s*\(Easy\)\s*/i, '')
    .replace(/\s*\(No CC\)\s*/i, '')
    .replace(/\s*\(PSX\)\s*/i, '')
    .replace(/\s*\(NMG\)\s*/i, '')
    .replace(/\s*\(All Characters & Espers - Glitchless\)\s*/i, '')
    .replace(/\s*\(CSR Manip\)\s*/i, '')
    .replace(/\s*\(PC \(3D\) Any%\)\s*/i, '')
    .replace(/\s*\(PC Cadet\)\s*/i, '')
    .trim();
  
  if (gameImages[cleanedGameName]) {
    return gameImages[cleanedGameName];
  }
  
  const lowerGameName = cleanedGameName.toLowerCase();
  for (const [key, value] of Object.entries(gameImages)) {
    if (lowerGameName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerGameName)) {
      return value;
    }
  }
  
  return gameImages['default'];
}