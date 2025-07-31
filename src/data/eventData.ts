export interface Run {
  game: string;
  teamMog: string;
  mogTime: string;
  teamChoco: string;
  chocoTime: string;
  teamTonberry: string;
  tonberryTime: string;
  commentators: string;
}

export interface ScheduleItem {
  game: string;
  estimatedTime: string;
  startEDT: string;
  startCEST: string;
  startJST: string;
}

export interface Split {
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

export const eventRuns: Run[] = [
  {
    game: "Final Fantasy",
    teamMog: "Rossy__",
    mogTime: "",
    teamChoco: "Gyre",
    chocoTime: "",
    teamTonberry: "Deln",
    tonberryTime: "",
    commentators: "cleartonic, Fireblend"
  },
  {
    game: "Final Fantasy II",
    teamMog: "Poorscythe",
    mogTime: "",
    teamChoco: "Knickknacksnacks",
    chocoTime: "",
    teamTonberry: "Boodamedz",
    tonberryTime: "",
    commentators: "Alanim, justforfun"
  },
  {
    game: "Final Fantasy III",
    teamMog: "Engidave",
    mogTime: "",
    teamChoco: "Jetabb",
    chocoTime: "",
    teamTonberry: "SaintVonJester",
    tonberryTime: "",
    commentators: "Claude, Muttski"
  },
  {
    game: "Final Fantasy IV",
    teamMog: "Riversmccown",
    mogTime: "",
    teamChoco: "Nydra",
    chocoTime: "",
    teamTonberry: "Possumorpheus",
    tonberryTime: "",
    commentators: "nocturne, the_roth"
  },
  {
    game: "Final Fantasy V",
    teamMog: "Kyoslilmonster",
    mogTime: "",
    teamChoco: "Cereth",
    chocoTime: "",
    teamTonberry: "CuddleBunion",
    tonberryTime: "",
    commentators: "Plusle, Shanz"
  },
  {
    game: "Final Fantasy VI",
    teamMog: "Osteoclave",
    mogTime: "",
    teamChoco: "LCC",
    chocoTime: "",
    teamTonberry: "Jackimus",
    tonberryTime: "",
    commentators: "Essentia, Kyoslilmonster"
  },
  {
    game: "Final Fantasy VII",
    teamMog: "Kreaper",
    mogTime: "",
    teamChoco: "Tojju",
    chocoTime: "",
    teamTonberry: "CritRocket",
    tonberryTime: "",
    commentators: "Adalsteinsson, Neviutz"
  },
  {
    game: "Final Fantasy VIII",
    teamMog: "Luzbelheim",
    mogTime: "",
    teamChoco: "Muttski",
    chocoTime: "",
    teamTonberry: "AceZephyr",
    tonberryTime: "",
    commentators: "Cordellium, Rossy__"
  },
  {
    game: "Final Fantasy IX",
    teamMog: "Savez",
    mogTime: "",
    teamChoco: "Drunkmunk",
    chocoTime: "",
    teamTonberry: "Strat",
    tonberryTime: "",
    commentators: "Metasigma, Spikevegeta"
  },
  {
    game: "Final Fantasy X",
    teamMog: "Elren_VI",
    mogTime: "",
    teamChoco: "Caracarn",
    chocoTime: "",
    teamTonberry: "Mr_Shasta",
    tonberryTime: "",
    commentators: "Flobberworm4, Highspirits"
  },
  {
    game: "Final Fantasy XI",
    teamMog: "Scotch",
    mogTime: "",
    teamChoco: "DeciusMus",
    chocoTime: "",
    teamTonberry: "Feenie",
    tonberryTime: "",
    commentators: "Aalyama, Conniechiwa"
  },
  {
    game: "Final Fantasy XII",
    teamMog: "Zer0skar_",
    mogTime: "",
    teamChoco: "AlecK47",
    chocoTime: "",
    teamTonberry: "Toji",
    tonberryTime: "",
    commentators: "Doombom, ffmasterfoobar"
  },
  {
    game: "Final Fantasy XIII",
    teamMog: "Zheal",
    mogTime: "",
    teamChoco: "Leonis07",
    chocoTime: "",
    teamTonberry: "Joshimuz",
    tonberryTime: "",
    commentators: "Draex, MajinPhil"
  },
  {
    game: "Final Fantasy XIV",
    teamMog: "HeyZeus",
    mogTime: "",
    teamChoco: "Angelym",
    chocoTime: "",
    teamTonberry: "Fhyber",
    tonberryTime: "",
    commentators: "Alanim, Poorscythe"
  },
  {
    game: "Final Fantasy XV",
    teamMog: "Lunamedic",
    mogTime: "",
    teamChoco: "Zheal",
    chocoTime: "",
    teamTonberry: "MrTyton",
    tonberryTime: "",
    commentators: "Claude, SaintVonJester"
  },
  {
    game: "Final Fantasy XVI",
    teamMog: "Aithere",
    mogTime: "",
    teamChoco: "BowieTheHero",
    chocoTime: "",
    teamTonberry: "Vaan",
    tonberryTime: "",
    commentators: "AceZephyr, Toji"
  },
  {
    game: "Final Fantasy Tactics",
    teamMog: "Claude",
    mogTime: "",
    teamChoco: "Adalsteinsson",
    chocoTime: "",
    teamTonberry: "Megacoconut",
    tonberryTime: "",
    commentators: "Ashe, Elmagus"
  },
  {
    game: "Chocobo GP",
    teamMog: "Poorscythe",
    mogTime: "",
    teamChoco: "Ghostwheel",
    chocoTime: "",
    teamTonberry: "Kyoslilmonster",
    tonberryTime: "",
    commentators: "CuddleBunion, Muttski"
  },
  {
    game: "Theatrhythm Final Bar Line",
    teamMog: "Leonis07",
    mogTime: "",
    teamChoco: "Aithere",
    chocoTime: "",
    teamTonberry: "Zer0skar_",
    tonberryTime: "",
    commentators: "Rossy__, ffmasterfoobar"
  },
  {
    game: "Stranger of Paradise: Final Fantasy Origin",
    teamMog: "Ashe",
    mogTime: "",
    teamChoco: "Scotch",
    chocoTime: "",
    teamTonberry: "HeyZeus",
    tonberryTime: "",
    commentators: "AceZephyr, Vaan"
  }
];

export const eventSchedule: ScheduleItem[] = [
  {
    game: "Final Fantasy",
    estimatedTime: "2:30:00",
    startEDT: "9:00 AM",
    startCEST: "3:00 PM",
    startJST: "10:00 PM"
  },
  {
    game: "Final Fantasy II",
    estimatedTime: "3:00:00",
    startEDT: "11:30 AM",
    startCEST: "5:30 PM",
    startJST: "12:30 AM"
  },
  {
    game: "Final Fantasy III",
    estimatedTime: "3:30:00",
    startEDT: "2:30 PM",
    startCEST: "8:30 PM",
    startJST: "3:30 AM"
  },
  {
    game: "Final Fantasy IV",
    estimatedTime: "4:00:00",
    startEDT: "6:00 PM",
    startCEST: "12:00 AM",
    startJST: "7:00 AM"
  },
  {
    game: "Final Fantasy V",
    estimatedTime: "4:30:00",
    startEDT: "10:00 PM",
    startCEST: "4:00 AM",
    startJST: "11:00 AM"
  },
  {
    game: "Final Fantasy VI",
    estimatedTime: "4:00:00",
    startEDT: "2:30 AM",
    startCEST: "8:30 AM",
    startJST: "3:30 PM"
  },
  {
    game: "Final Fantasy VII",
    estimatedTime: "3:30:00",
    startEDT: "6:30 AM",
    startCEST: "12:30 PM",
    startJST: "7:30 PM"
  },
  {
    game: "Final Fantasy VIII",
    estimatedTime: "3:00:00",
    startEDT: "10:00 AM",
    startCEST: "4:00 PM",
    startJST: "11:00 PM"
  },
  {
    game: "Final Fantasy IX",
    estimatedTime: "9:00:00",
    startEDT: "1:00 PM",
    startCEST: "7:00 PM",
    startJST: "2:00 AM"
  },
  {
    game: "Final Fantasy X",
    estimatedTime: "10:00:00",
    startEDT: "10:00 PM",
    startCEST: "4:00 AM",
    startJST: "11:00 AM"
  },
  {
    game: "Final Fantasy XI",
    estimatedTime: "4:00:00",
    startEDT: "8:00 AM",
    startCEST: "2:00 PM",
    startJST: "9:00 PM"
  },
  {
    game: "Final Fantasy XII",
    estimatedTime: "3:00:00",
    startEDT: "12:00 PM",
    startCEST: "6:00 PM",
    startJST: "1:00 AM"
  },
  {
    game: "Final Fantasy XIII",
    estimatedTime: "5:00:00",
    startEDT: "3:00 PM",
    startCEST: "9:00 PM",
    startJST: "4:00 AM"
  },
  {
    game: "Final Fantasy XIV",
    estimatedTime: "6:00:00",
    startEDT: "8:00 PM",
    startCEST: "2:00 AM",
    startJST: "9:00 AM"
  },
  {
    game: "Final Fantasy XV",
    estimatedTime: "4:30:00",
    startEDT: "2:00 AM",
    startCEST: "8:00 AM",
    startJST: "3:00 PM"
  },
  {
    game: "Final Fantasy XVI",
    estimatedTime: "3:30:00",
    startEDT: "6:30 AM",
    startCEST: "12:30 PM",
    startJST: "7:30 PM"
  },
  {
    game: "Final Fantasy Tactics",
    estimatedTime: "3:00:00",
    startEDT: "10:00 AM",
    startCEST: "4:00 PM",
    startJST: "11:00 PM"
  },
  {
    game: "Chocobo GP",
    estimatedTime: "1:30:00",
    startEDT: "1:00 PM",
    startCEST: "7:00 PM",
    startJST: "2:00 AM"
  },
  {
    game: "Theatrhythm Final Bar Line",
    estimatedTime: "2:00:00",
    startEDT: "2:30 PM",
    startCEST: "8:30 PM",
    startJST: "3:30 AM"
  },
  {
    game: "Stranger of Paradise: Final Fantasy Origin",
    estimatedTime: "3:00:00",
    startEDT: "4:30 PM",
    startCEST: "10:30 PM",
    startJST: "5:30 AM"
  }
];

export const eventSplits: Split[] = [
];

export const pastEventsData = [
];