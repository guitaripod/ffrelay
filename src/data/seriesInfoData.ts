import type { SeriesInfoData } from '../lib/googleSheets';

export const seriesInfoData: SeriesInfoData = {
  title: "Final Fantasy Series Relay Race",
  nextEvent: {
    name: "FF Series Relay Race X",
    dates: "August 1-4, 2025",
    infoLink: "https://bit.ly/ffrelayX",
    watchLink: "https://www.twitch.tv/rpglimitbreak"
  },
  eventInfo: [
    "A speedrunning relay race featuring games from the Final Fantasy series",
    "Three teams compete to complete games as fast as possible",
    "Teams: Mog, Choco, and Tonberry"
  ],
  eventHistory: {
    description: "The Final Fantasy Relay Race series began in 2015 and has grown into a beloved community event featuring speedrunners from around the world.",
    events: [
      {
        name: "Relay I",
        date: "04/07/2015",
        teams: "2",
        winner: "Mog",
        moreInfo: "Link",
        vodLink: "https://www.youtube.com/playlist?list=PL8PZB25uZuZ5Wz6EBM2aNl3P14fSg2JHA"
      },
      {
        name: "Relay II",
        date: "17/06/2016",
        teams: "2",
        winner: "Choco",
        moreInfo: "Link",
        vodLink: "https://www.youtube.com/playlist?list=PL8PZB25uZuZ4YUukrBiV_mY-mWBLKOHQ7"
      },
      {
        name: "Relay III",
        date: "07/04/2017",
        teams: "3",
        winner: "Choco",
        moreInfo: "Link",
        vodLink: "https://www.youtube.com/playlist?list=PL8PZB25uZuZ6aOdJAaOT1N85I3PpX7VSJ"
      },
      {
        name: "Relay IV",
        date: "29/09/2017",
        teams: "2",
        winner: "Mog",
        moreInfo: "Link",
        vodLink: "https://www.youtube.com/playlist?list=PL8PZB25uZuZ7eB_LNUF94SflWW5avgBkI"
      },
      {
        name: "Relay IV - Interlude",
        date: "23/11/2018",
        teams: "2",
        winner: "Choco",
        moreInfo: "Link",
        vodLink: "https://www.youtube.com/playlist?list=PL8PZB25uZuZ5cklrEUt1HrmwmI6eZlprJ"
      },
      {
        name: "Relay V",
        date: "05/06/2020",
        teams: "3",
        winner: "Choco",
        moreInfo: "Link",
        vodLink: "https://www.youtube.com/playlist?list=PL8PZB25uZuZ4_nxL8SZ8ZdSck0A8BBFl6"
      },
      {
        name: "Relay VI",
        date: "28/05/2021",
        teams: "3",
        winner: "Choco",
        moreInfo: "Link",
        vodLink: "https://www.youtube.com/playlist?list=PL8PZB25uZuZ6ugQ27OwL06lYH7hNS7uPt"
      },
      {
        name: "Relay VII",
        date: "26/08/2022",
        teams: "3",
        winner: "Tonberry",
        moreInfo: "Link",
        vodLink: "https://www.youtube.com/watch?v=I7p73l86Dh0&list=PL8PZB25uZuZ7hLbpwdGHDi5iqgiibMDHw&pp=iAQB"
      },
      {
        name: "Relay VIII",
        date: "25/08/2023",
        teams: "3",
        winner: "Mog",
        moreInfo: "Link",
        vodLink: "https://www.youtube.com/playlist?list=PL8PZB25uZuZ7n6ARniTsxPGqzmw3UA05i"
      },
      {
        name: "Relay IX",
        date: "16/08/2024",
        teams: "3",
        winner: "Mog",
        moreInfo: "Link",
        vodLink: "https://www.youtube.com/playlist?list=PL8PZB25uZuZ41Pw_roh1edmEZPqIAR3zb"
      }
    ]
  },
  teamInfo: {
    description: "Each team is led by a captain who organizes their team's strategy and runner assignments.",
    teams: [
      {
        name: "Mog",
        captain: "TBD",
        members: []
      },
      {
        name: "Choco",
        captain: "TBD",
        members: []
      },
      {
        name: "Tonberry",
        captain: "TBD",
        members: []
      }
    ]
  },
  rules: [
    "Each team must complete all scheduled games",
    "Runners can only participate for one team",
    "Game order must be followed as scheduled",
    "Timer starts when the first runner gains control",
    "Timer stops on loss of control at the end of each game"
  ],
  schedule: [
    {
      game: "Final Fantasy",
      runners: ["TBD", "TBD", "TBD"],
      estimate: "2:30:00"
    },
    {
      game: "Final Fantasy II",
      runners: ["TBD", "TBD", "TBD"],
      estimate: "3:00:00"
    },
    {
      game: "Final Fantasy III",
      runners: ["TBD", "TBD", "TBD"],
      estimate: "3:30:00"
    },
    {
      game: "Final Fantasy IV",
      runners: ["TBD", "TBD", "TBD"],
      estimate: "4:00:00"
    },
    {
      game: "Final Fantasy V",
      runners: ["TBD", "TBD", "TBD"],
      estimate: "4:30:00"
    },
    {
      game: "Final Fantasy VI",
      runners: ["TBD", "TBD", "TBD"],
      estimate: "4:00:00"
    },
    {
      game: "Final Fantasy VII",
      runners: ["TBD", "TBD", "TBD"],
      estimate: "3:30:00"
    },
    {
      game: "Final Fantasy VIII",
      runners: ["TBD", "TBD", "TBD"],
      estimate: "3:00:00"
    },
    {
      game: "Final Fantasy IX",
      runners: ["TBD", "TBD", "TBD"],
      estimate: "9:00:00"
    },
    {
      game: "Final Fantasy X",
      runners: ["TBD", "TBD", "TBD"],
      estimate: "10:00:00"
    }
  ],
  gameHistory: [
    {
      game: "Final Fantasy I",
      timesPlayed: 11,
      relays: [
        { relayName: "Relay I", platform: "PSP" },
        { relayName: "Relay II", platform: "GBA" },
        { relayName: "Relay III", platform: "PSP" },
        { relayName: "Relay IV", platform: "GBA" },
        { relayName: "Relay IV - Interlude", platform: "PSP" },
        { relayName: "Relay V", platform: "GBA" },
        { relayName: "Relay VI", platform: "PSP" },
        { relayName: "Relay VII", platform: "Pixel Remaster" },
        { relayName: "Relay VIII", platform: "NES" },
        { relayName: "Relay IX", platform: "Pixel Remaster" },
        { relayName: "Relay X", platform: "Pixel Remaster" }
      ]
    },
    {
      game: "Final Fantasy II",
      timesPlayed: 11,
      relays: [
        { relayName: "Relay I", platform: "PSP" },
        { relayName: "Relay II", platform: "PSP" },
        { relayName: "Relay III", platform: "GBA" },
        { relayName: "Relay IV", platform: "GBA" },
        { relayName: "Relay IV - Interlude", platform: "PSP" },
        { relayName: "Relay V", platform: "PSP" },
        { relayName: "Relay VI", platform: "PSP" },
        { relayName: "Relay VII", platform: "Pixel Remaster" },
        { relayName: "Relay VIII", platform: "Pixel Remaster" },
        { relayName: "Relay IX", platform: "Pixel Remaster" },
        { relayName: "Relay X", platform: "Pixel Remaster" }
      ]
    },
    {
      game: "Final Fantasy III",
      timesPlayed: 10,
      relays: [
        { relayName: "Relay I", platform: "NES" },
        { relayName: "Relay II", platform: "NES" },
        { relayName: "Relay III", platform: "NES" },
        { relayName: "Relay IV", platform: "DS" },
        { relayName: "Relay V", platform: "NES" },
        { relayName: "Relay VI", platform: "PC (3D)" },
        { relayName: "Relay VII", platform: "Pixel Remaster" },
        { relayName: "Relay VIII", platform: "Pixel Remaster" },
        { relayName: "Relay IX", platform: "Pixel Remaster" },
        { relayName: "Relay X", platform: "Pixel Remaster" }
      ]
    },
    {
      game: "Final Fantasy IV",
      timesPlayed: 10,
      relays: [
        { relayName: "Relay I", platform: "SNES" },
        { relayName: "Relay II", platform: "SNES" },
        { relayName: "Relay III", platform: "SNES" },
        { relayName: "Relay IV", platform: "PSP" },
        { relayName: "Relay V", platform: "SNES" },
        { relayName: "Relay VI", platform: "SNES" },
        { relayName: "Relay VII", platform: "Pixel Remaster" },
        { relayName: "Relay VIII", platform: "PC (3D)" },
        { relayName: "Relay IX", platform: "Pixel Remaster" },
        { relayName: "Relay X", platform: "PC (3D)" }
      ]
    },
    {
      game: "Final Fantasy V",
      timesPlayed: 10,
      relays: [
        { relayName: "Relay I", platform: "SNES" },
        { relayName: "Relay II", platform: "SNES" },
        { relayName: "Relay III", platform: "SNES" },
        { relayName: "Relay IV", platform: "SNES" },
        { relayName: "Relay V", platform: "SNES" },
        { relayName: "Relay VI", platform: "SNES" },
        { relayName: "Relay VII", platform: "SNES" },
        { relayName: "Relay VIII", platform: "Pixel Remaster" },
        { relayName: "Relay IX", platform: "SNES" },
        { relayName: "Relay X", platform: "Pixel Remaster" }
      ]
    },
    {
      game: "Final Fantasy VI",
      timesPlayed: 10,
      relays: [
        { relayName: "Relay I", platform: "SNES" },
        { relayName: "Relay II", platform: "SNES" },
        { relayName: "Relay III", platform: "SNES" },
        { relayName: "Relay IV", platform: "SNES" },
        { relayName: "Relay V", platform: "SNES" },
        { relayName: "Relay VI", platform: "SNES" },
        { relayName: "Relay VII", platform: "SNES" },
        { relayName: "Relay VIII", platform: "Pixel Remaster" },
        { relayName: "Relay IX", platform: "Pixel Remaster" },
        { relayName: "Relay X", platform: "SNES" }
      ]
    },
    {
      game: "Final Fantasy VII",
      timesPlayed: 8,
      relays: [
        { relayName: "Relay I", platform: "PS1" },
        { relayName: "Relay II", platform: "PS1" },
        { relayName: "Relay III", platform: "PC" },
        { relayName: "Relay IV", platform: "PS1" },
        { relayName: "Relay V", platform: "PS1" },
        { relayName: "Relay VII", platform: "PS1" },
        { relayName: "Relay VIII", platform: "PS1" },
        { relayName: "Relay IX", platform: "PS1" }
      ]
    },
    {
      game: "Final Fantasy VIII",
      timesPlayed: 10,
      relays: [
        { relayName: "Relay I", platform: "PC" },
        { relayName: "Relay II", platform: "PC" },
        { relayName: "Relay III", platform: "PC" },
        { relayName: "Relay IV", platform: "PS1" },
        { relayName: "Relay V", platform: "PS1" },
        { relayName: "Relay VI", platform: "PS1" },
        { relayName: "Relay VII", platform: "PC" },
        { relayName: "Relay VIII", platform: "PC" },
        { relayName: "Relay IX", platform: "PS1" },
        { relayName: "Relay X", platform: "PC" }
      ]
    },
    {
      game: "Final Fantasy IX",
      timesPlayed: 11,
      relays: [
        { relayName: "Relay I", platform: "PS1" },
        { relayName: "Relay II", platform: "PS1" },
        { relayName: "Relay III", platform: "PS1" },
        { relayName: "Relay IV", platform: "PS1" },
        { relayName: "Relay IV - Interlude", platform: "PS1" },
        { relayName: "Relay V", platform: "PS1" },
        { relayName: "Relay VI", platform: "PS1" },
        { relayName: "Relay VII", platform: "PS1" },
        { relayName: "Relay VIII", platform: "PC" },
        { relayName: "Relay IX", platform: "PC" },
        { relayName: "Relay X", platform: "PS1" }
      ]
    },
    {
      game: "Final Fantasy X",
      timesPlayed: 10,
      relays: [
        { relayName: "Relay I", platform: "PS2" },
        { relayName: "Relay II", platform: "PS2" },
        { relayName: "Relay III", platform: "PS3" },
        { relayName: "Relay IV", platform: "PS2" },
        { relayName: "Relay V", platform: "PS2" },
        { relayName: "Relay VI", platform: "PC" },
        { relayName: "Relay VII", platform: "PC" },
        { relayName: "Relay VIII", platform: "PC" },
        { relayName: "Relay IX", platform: "PC" },
        { relayName: "Relay X", platform: "PC" }
      ]
    },
    {
      game: "Final Fantasy X-2",
      timesPlayed: 5,
      relays: [
        { relayName: "Relay II", platform: "PS2" },
        { relayName: "Relay III", platform: "PS3" },
        { relayName: "Relay IV - Interlude", platform: "PS2" },
        { relayName: "Relay VIII", platform: "PC" },
        { relayName: "Relay X", platform: "PC" }
      ]
    },
    {
      game: "Final Fantasy XII",
      timesPlayed: 11,
      relays: [
        { relayName: "Relay I", platform: "PS2" },
        { relayName: "Relay II", platform: "PS2" },
        { relayName: "Relay III", platform: "PS2" },
        { relayName: "Relay IV", platform: "PS2" },
        { relayName: "Relay IV - Interlude", platform: "PS2" },
        { relayName: "Relay V", platform: "PS2" },
        { relayName: "Relay VI", platform: "TZA" },
        { relayName: "Relay VII", platform: "TZA" },
        { relayName: "Relay VIII", platform: "TZA" },
        { relayName: "Relay IX", platform: "TZA" },
        { relayName: "Relay X", platform: "PS2" }
      ]
    },
    {
      game: "Final Fantasy XIII",
      timesPlayed: 10,
      relays: [
        { relayName: "Relay I", platform: "PS3/PC" },
        { relayName: "Relay II", platform: "PS3" },
        { relayName: "Relay III", platform: "PS3/PC" },
        { relayName: "Relay IV", platform: "PS3/PC" },
        { relayName: "Relay V", platform: "PC" },
        { relayName: "Relay VI", platform: "PC" },
        { relayName: "Relay VII", platform: "PC" },
        { relayName: "Relay VIII", platform: "PC" },
        { relayName: "Relay IX", platform: "PC" },
        { relayName: "Relay X", platform: "PC" }
      ]
    },
    {
      game: "Final Fantasy XIII-2",
      timesPlayed: 6,
      relays: [
        { relayName: "Relay II", platform: "PC" },
        { relayName: "Relay III", platform: "PS3/PC" },
        { relayName: "Relay IV - Interlude", platform: "PC" },
        { relayName: "Relay V", platform: "PS3/PC" },
        { relayName: "Relay VI", platform: "PC" },
        { relayName: "Relay VIII", platform: "PC" }
      ]
    },
    {
      game: "Lightning Returns: Final Fantasy XIII",
      timesPlayed: 6,
      relays: [
        { relayName: "Relay II", platform: "PS3/PC" },
        { relayName: "Relay III", platform: "PC" },
        { relayName: "Relay IV - Interlude", platform: "PC" },
        { relayName: "Relay V", platform: "PS3/PC" },
        { relayName: "Relay VI", platform: "PC" },
        { relayName: "Relay VIII", platform: "PC" }
      ]
    },
    {
      game: "Final Fantasy XV",
      timesPlayed: 7,
      relays: [
        { relayName: "Relay III", platform: "PS4" },
        { relayName: "Relay V", platform: "PS4/PC" },
        { relayName: "Relay VI", platform: "PC" },
        { relayName: "Relay VII", platform: "PS5" },
        { relayName: "Relay VIII", platform: "PS5" },
        { relayName: "Relay IX", platform: "PC" },
        { relayName: "Relay X", platform: "PC" }
      ]
    },
    {
      game: "Final Fantasy XVI",
      timesPlayed: 2,
      relays: [
        { relayName: "Relay IX", platform: "PS5" },
        { relayName: "Relay X", platform: "PS5/PC" }
      ]
    },
    {
      game: "Final Fantasy Mystic Quest",
      timesPlayed: 4,
      relays: [
        { relayName: "Relay II", platform: "SNES" },
        { relayName: "Relay IV", platform: "SNES" },
        { relayName: "Relay VI", platform: "SNES" },
        { relayName: "Relay VIII", platform: "SNES" }
      ]
    },
    {
      game: "Final Fantasy Tactics",
      timesPlayed: 2,
      relays: [
        { relayName: "Relay II", platform: "PS1" },
        { relayName: "Relay IV", platform: "PS1" }
      ]
    },
    {
      game: "Chocobo GP",
      timesPlayed: 1,
      relays: [
        { relayName: "Relay VII", platform: "Switch" }
      ]
    },
    {
      game: "World of Final Fantasy",
      timesPlayed: 4,
      relays: [
        { relayName: "Relay IV - Interlude", platform: "PC" },
        { relayName: "Relay VI", platform: "PC" },
        { relayName: "Relay VII", platform: "PC" },
        { relayName: "Relay X", platform: "PC" }
      ]
    },
    {
      game: "Final Fantasy Type-0 HD",
      timesPlayed: 4,
      relays: [
        { relayName: "Relay III", platform: "PC" },
        { relayName: "Relay IV - Interlude", platform: "PC" },
        { relayName: "Relay IX", platform: "PC" },
        { relayName: "Relay X", platform: "PC" }
      ]
    },
    {
      game: "Crisis Core: Final Fantasy VII",
      timesPlayed: 1,
      relays: [
        { relayName: "Relay IV - Interlude", platform: "PSP" }
      ]
    },
    {
      game: "Crisis Core: Final Fantasy VII Reunion",
      timesPlayed: 1,
      relays: [
        { relayName: "Relay VIII", platform: "PS5/PC" }
      ]
    },
    {
      game: "Dirge of Cerberus: Final Fantasy VII",
      timesPlayed: 2,
      relays: [
        { relayName: "Relay IV - Interlude", platform: "PS2" },
        { relayName: "Relay VII", platform: "PS2" }
      ]
    },
    {
      game: "Final Fantasy VII Remake",
      timesPlayed: 2,
      relays: [
        { relayName: "Relay VI", platform: "PS5" },
        { relayName: "Relay X", platform: "PC/PS5" }
      ]
    },
    {
      game: "Final Fantasy VII Rebirth",
      timesPlayed: 2,
      relays: [
        { relayName: "Relay IX", platform: "PS5" },
        { relayName: "Relay X", platform: "PC/PS5" }
      ]
    },
    {
      game: "Final Fantasy Crystal Chronicles",
      timesPlayed: 4,
      relays: [
        { relayName: "Relay IV - Interlude", platform: "GCN" },
        { relayName: "Relay V", platform: "GCN" },
        { relayName: "Relay VI", platform: "Switch" },
        { relayName: "Relay VII", platform: "GCN" }
      ]
    },
    {
      game: "Final Fantasy Dissidia",
      timesPlayed: 1,
      relays: [
        { relayName: "Relay IV - Interlude", platform: "PSP" }
      ]
    },
    {
      game: "Final Fantasy Fables: Chocobo Tales",
      timesPlayed: 1,
      relays: [
        { relayName: "Relay IV - Interlude", platform: "DS" }
      ]
    },
    {
      game: "Final Fantasy Tactics Advance",
      timesPlayed: 1,
      relays: [
        { relayName: "Relay VIII", platform: "GBA" }
      ]
    },
    {
      game: "Final Fantasy Tactics A2: Grimoire of the Rift",
      timesPlayed: 1,
      relays: [
        { relayName: "Relay IX", platform: "DS" }
      ]
    },
    {
      game: "Final Fantasy Adventure",
      timesPlayed: 1,
      relays: [
        { relayName: "Relay IX", platform: "GB" }
      ]
    },
    {
      game: "Stranger of Paradise: Final Fantasy Origin",
      timesPlayed: 2,
      relays: [
        { relayName: "Relay VII", platform: "PS5" },
        { relayName: "Relay X", platform: "PC/XSS" }
      ]
    },
    {
      game: "Final Fantasy Legend 2",
      timesPlayed: 1,
      relays: [
        { relayName: "Relay X", platform: "GB" }
      ]
    }
  ],
  runnerHistory: [
    {
      name: "KaguyaNicky",
      runCount: 9,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF8"] },
        { relayName: "Relay II", games: ["FF1"] },
        { relayName: "Relay III", games: ["FF2"] },
        { relayName: "Relay IV", games: ["FF2"] },
        { relayName: "Relay V", games: ["FF2"] },
        { relayName: "Relay VI", games: ["FF12"] },
        { relayName: "Relay VII", games: ["FF4"] },
        { relayName: "Relay VIII", games: ["FF3"] },
        { relayName: "Relay IX", games: ["FFTA2"] }
      ]
    },
    {
      name: "zer0skar_i",
      runCount: 9,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF12"] },
        { relayName: "Relay III", games: ["FF12"] },
        { relayName: "Relay IV", games: ["FF12"] },
        { relayName: "Relay V", games: ["FF12"] },
        { relayName: "Relay VI", games: ["FF13-2"] },
        { relayName: "Relay VII", games: ["FF3"] },
        { relayName: "Relay VIII", games: ["FF13-2"] },
        { relayName: "Relay IX", games: ["FF5"] }
      ]
    },
    {
      name: "MrZwanzig",
      runCount: 7,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF13"] },
        { relayName: "Relay III", games: ["FF5"] },
        { relayName: "Relay IV", games: ["FF13"] },
        { relayName: "Relay V", games: ["FF5"] },
        { relayName: "Relay VII", games: ["FF5"] },
        { relayName: "Relay VIII", games: ["FF1"] },
        { relayName: "Relay IX", games: ["FF2"] }
      ]
    },
    {
      name: "Metako",
      runCount: 6,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF7"] },
        { relayName: "Relay III", games: ["FF8"] },
        { relayName: "Relay IV", games: ["FF9"] },
        { relayName: "Relay V", games: ["FF3"] },
        { relayName: "Relay VII", games: ["FF5"] }
      ]
    },
    {
      name: "Roosta",
      runCount: 6,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF12"] },
        { relayName: "Relay III", games: ["FF12"] },
        { relayName: "Relay V", games: ["FF12"] },
        { relayName: "Relay VI", games: ["FF12"] },
        { relayName: "Relay VIII", games: ["FF12"] }
      ]
    },
    {
      name: "Dyne",
      runCount: 5,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF6"] },
        { relayName: "Relay VI", games: ["FF6"] },
        { relayName: "Relay VII", games: ["FF6"] },
        { relayName: "Relay VIII", games: ["FF6"] },
        { relayName: "Relay IX", games: ["FF6"] }
      ]
    },
    {
      name: "Kayarune",
      runCount: 5,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF13"] },
        { relayName: "Relay VI", games: ["FF13"] },
        { relayName: "Relay VII", games: ["FF13"] },
        { relayName: "Relay VIII", games: ["FF13"] },
        { relayName: "Relay IX", games: ["FF13"] }
      ]
    },
    {
      name: "KyosLilMonster",
      runCount: 5,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF15"] },
        { relayName: "Relay V", games: ["FF15"] },
        { relayName: "Relay VI", games: ["FF15"] },
        { relayName: "Relay VIII", games: ["FF15"] },
        { relayName: "Relay IX", games: ["FF15"] }
      ]
    },
    {
      name: "Muttski",
      runCount: 5,
      relayParticipation: [
        { relayName: "Relay IV", games: ["FF7"] },
        { relayName: "Relay V", games: ["FF9"] },
        { relayName: "Relay VI", games: ["FF8"] },
        { relayName: "Relay VII", games: ["FF7"] },
        { relayName: "Relay IX", games: ["FF9"] }
      ]
    },
    {
      name: "PoorScythe",
      runCount: 5,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF2"] },
        { relayName: "Relay VI", games: ["FF3"] },
        { relayName: "Relay VII", games: ["FF3"] },
        { relayName: "Relay VIII", games: ["FF2"] }
      ]
    },
    {
      name: "Rupan2525",
      runCount: 5,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF7"] },
        { relayName: "Relay VI", games: ["FF5"] },
        { relayName: "Relay VII", games: ["FF4"] },
        { relayName: "Relay VIII", games: ["FF3"] },
        { relayName: "Relay IX", games: ["FF2"] }
      ]
    },
    {
      name: "6chi8",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF6"] },
        { relayName: "Relay VII", games: ["FF3"] },
        { relayName: "Relay VIII", games: ["FF6"] },
        { relayName: "Relay IX", games: ["FF3"] }
      ]
    },
    {
      name: "Bakvorm",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF10-2"] },
        { relayName: "Relay III", games: ["FF10-2"] },
        { relayName: "Relay VIII", games: ["FF10-2"] }
      ]
    },
    {
      name: "BlueHarvey",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF12"] },
        { relayName: "Relay VI", games: ["FF12"] },
        { relayName: "Relay VIII", games: ["FF4"] },
        { relayName: "Relay IX", games: ["FF12"] }
      ]
    },
    {
      name: "BrainBugged",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay VI", games: ["WoFF"] },
        { relayName: "Relay VII", games: ["WoFF"] },
        { relayName: "Relay VIII", games: ["FFTA"] },
        { relayName: "Relay IX", games: ["FFTA2"] }
      ]
    },
    {
      name: "CrimsonInferno",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF10"] },
        { relayName: "Relay VII", games: ["WoFF"] },
        { relayName: "Relay VIII", games: ["FF5"] },
        { relayName: "Relay IX", games: ["Type-0"] }
      ]
    },
    {
      name: "Desa35",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF12"] },
        { relayName: "Relay VIII", games: ["FF12"] },
        { relayName: "Relay IX", games: ["FF12"] }
      ]
    },
    {
      name: "eLmaGus",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF6"] },
        { relayName: "Relay II", games: ["FFMQ"] },
        { relayName: "Relay VI", games: ["FFMQ"] },
        { relayName: "Relay VIII", games: ["FFMQ"] }
      ]
    },
    {
      name: "Flobberworm4",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF10"] },
        { relayName: "Relay II", games: ["FF10"] },
        { relayName: "Relay III", games: ["FF10"] },
        { relayName: "Relay IV", games: ["FF10"] }
      ]
    },
    {
      name: "Kanri",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF13-2"] },
        { relayName: "Relay III", games: ["FF13-2"] },
        { relayName: "Relay V", games: ["FF13-2"] }
      ]
    },
    {
      name: "Leonis07",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF1"] },
        { relayName: "Relay III", games: ["FF1"] },
        { relayName: "Relay IV", games: ["FF1"] }
      ]
    },
    {
      name: "LogicDolphin",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF13"] },
        { relayName: "Relay II", games: ["FF13"] },
        { relayName: "Relay III", games: ["FF13"] },
        { relayName: "Relay V", games: ["FF13"] }
      ]
    },
    {
      name: "VerySydney",
      runCount: 4,
      relayParticipation: [
        { relayName: "Relay V", games: ["FFCC"] },
        { relayName: "Relay VI", games: ["FFCC"] },
        { relayName: "Relay VII", games: ["FFCC"] }
      ]
    },
    {
      name: "Aexoden",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF4"] },
        { relayName: "Relay VI", games: ["FF5"] },
        { relayName: "Relay VII", games: ["FF5"] }
      ]
    },
    {
      name: "Barbatos",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF15"] },
        { relayName: "Relay VII", games: ["FF15"] },
        { relayName: "Relay VIII", games: ["FF15"] }
      ]
    },
    {
      name: "ChrisTenarium",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF10-2"] },
        { relayName: "Relay VI", games: ["FF10"] }
      ]
    },
    {
      name: "Crrool",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF2"] },
        { relayName: "Relay IV", games: ["FF4"] }
      ]
    },
    {
      name: "D_Winds",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay V", games: ["LRFF13"] },
        { relayName: "Relay VIII", games: ["LRFF13"] },
        { relayName: "Relay IX", games: ["FF15"] }
      ]
    },
    {
      name: "Daspharaoh",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay VI", games: ["LRFF13"] },
        { relayName: "Relay VIII", games: ["FF13-2"] },
        { relayName: "Relay IX", games: ["Type-0"] }
      ]
    },
    {
      name: "Deln",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF2"] },
        { relayName: "Relay II", games: ["FF2"] },
        { relayName: "Relay VII", games: ["FF2"] }
      ]
    },
    {
      name: "Elbody",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF1"] },
        { relayName: "Relay II", games: ["FF8"] },
        { relayName: "Relay III", games: ["FF8"] }
      ]
    },
    {
      name: "FellVisage",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay III", games: ["Type-0"] },
        { relayName: "Relay VII", games: ["SoP"] }
      ]
    },
    {
      name: "FoxyJira",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF2"] },
        { relayName: "Relay VIII", games: ["FF10"] },
        { relayName: "Relay IX", games: ["FF10"] }
      ]
    },
    {
      name: "HabKeineName",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay VI", games: ["WoFF"] },
        { relayName: "Relay VII", games: ["WoFF"] },
        { relayName: "Relay VIII", games: ["FF12"] }
      ]
    },
    {
      name: "KingSPi",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay V", games: ["LRFF13"] },
        { relayName: "Relay VI", games: ["LRFF13"] },
        { relayName: "Relay VIII", games: ["LRFF13"] }
      ]
    },
    {
      name: "Koinu93",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay III", games: ["Type-0"] },
        { relayName: "Relay VII", games: ["FF10"] }
      ]
    },
    {
      name: "MLSTRM",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF13"] },
        { relayName: "Relay II", games: ["LRFF13"] },
        { relayName: "Relay III", games: ["LRFF13"] }
      ]
    },
    {
      name: "PeteSwanson",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF9"] },
        { relayName: "Relay VIII", games: ["FF9"] },
        { relayName: "Relay IX", games: ["FF16"] }
      ]
    },
    {
      name: "Rhyderrr",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF13-2"] },
        { relayName: "Relay IV", games: ["FF3"] },
        { relayName: "Relay VI", games: ["FF3"] }
      ]
    },
    {
      name: "Seri",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF2"] },
        { relayName: "Relay VI", games: ["FF2"] },
        { relayName: "Relay IX", games: ["FF1"] }
      ]
    },
    {
      name: "Talbrik",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF1"] },
        { relayName: "Relay VII", games: ["FF2"] },
        { relayName: "Relay VIII", games: ["FF2"] }
      ]
    },
    {
      name: "Tojju",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF10"] },
        { relayName: "Relay II", games: ["FF10"] },
        { relayName: "Relay III", games: ["FF9"] }
      ]
    },
    {
      name: "TranceQuina",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF9"] },
        { relayName: "Relay VIII", games: ["FFMQ"] }
      ]
    },
    {
      name: "Yidamoda",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF15"] },
        { relayName: "Relay VI", games: ["FF15"] },
        { relayName: "Relay IX", games: ["FF15"] }
      ]
    },
    {
      name: "Z3R01337",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF13"] },
        { relayName: "Relay VIII", games: ["FF13"] },
        { relayName: "Relay IX", games: ["FF13"] }
      ]
    },
    {
      name: "Zic",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF4"] },
        { relayName: "Relay VIII", games: ["FF5"] },
        { relayName: "Relay IX", games: ["FF4"] }
      ]
    },
    {
      name: "Zinfogel",
      runCount: 3,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF5"] },
        { relayName: "Relay III", games: ["FF5"] },
        { relayName: "Relay IV", games: ["FF5"] }
      ]
    },
    {
      name: "AwesomeWaves",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF8"] },
        { relayName: "Relay IX", games: ["FF5"] }
      ]
    },
    {
      name: "Bdewd",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF6"] },
        { relayName: "Relay VIII", games: ["FF5"] }
      ]
    },
    {
      name: "Bodcap",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF8"] },
        { relayName: "Relay IX", games: ["FF5"] }
      ]
    },
    {
      name: "Camp4r",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF10"] },
        { relayName: "Relay VII", games: ["FF10"] }
      ]
    },
    {
      name: "CaracarnVi",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF9"] },
        { relayName: "Relay III", games: ["FF9"] }
      ]
    },
    {
      name: "Claude",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay II", games: ["FFT"] },
        { relayName: "Relay IV", games: ["FFT"] }
      ]
    },
    {
      name: "CloudyFinal",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF7"] }
      ]
    },
    {
      name: "Colin",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF7"] },
        { relayName: "Relay VIII", games: ["FF7"] }
      ]
    },
    {
      name: "ConnorCordell",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay IV", games: ["FF8"] },
        { relayName: "Relay IX", games: ["FF8"] }
      ]
    },
    {
      name: "Cronokirby",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF1"] },
        { relayName: "Relay II", games: ["FF3"] }
      ]
    },
    {
      name: "DSharper",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF10-2"] },
        { relayName: "Relay VIII", games: ["FF10-2"] }
      ]
    },
    {
      name: "Dubldrop",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF2"] },
        { relayName: "Relay IV", games: ["FF2"] }
      ]
    },
    {
      name: "Easley",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF9"] },
        { relayName: "Relay IX", games: ["FF1"] }
      ]
    },
    {
      name: "Fathlo23",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF4"] },
        { relayName: "Relay III", games: ["FF6"] }
      ]
    },
    {
      name: "Fhelwanger",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF9"] },
        { relayName: "Relay VI", games: ["FF7Remake"] }
      ]
    },
    {
      name: "FoxySaucado",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF13-2"] },
        { relayName: "Relay IX", games: ["Type-0"] }
      ]
    },
    {
      name: "Freddeh",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF12"] },
        { relayName: "Relay II", games: ["FF12"] }
      ]
    },
    {
      name: "Goran",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF7Remake"] },
        { relayName: "Relay VIII", games: ["CCFF7R"] }
      ]
    },
    {
      name: "Hawk_Snow",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF13-2"] },
        { relayName: "Relay VI", games: ["FF13-2"] }
      ]
    },
    {
      name: "Hello1nternet",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF7Remake"] },
        { relayName: "Relay VIII", games: ["CCFF7R"] }
      ]
    },
    {
      name: "Hiroshige",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF10"] },
        { relayName: "Relay IX", games: ["FF10"] }
      ]
    },
    {
      name: "Hoishin",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF12"] },
        { relayName: "Relay IV", games: ["FF12"] }
      ]
    },
    {
      name: "Hollow648",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF9"] },
        { relayName: "Relay III", games: ["FF9"] }
      ]
    },
    {
      name: "Im_Nightshade",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF6"] },
        { relayName: "Relay IX", games: ["FF6"] }
      ]
    },
    {
      name: "IndiSR",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF1"] }
      ]
    },
    {
      name: "IonicKarma",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF3"] },
        { relayName: "Relay IX", games: ["FF3"] }
      ]
    },
    {
      name: "Jenja",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF5"] },
        { relayName: "Relay II", games: ["FFMQ"] }
      ]
    },
    {
      name: "Kakkkun",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay IV", games: ["FF5"] },
        { relayName: "Relay V", games: ["FF3"] }
      ]
    },
    {
      name: "Kibetha",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay IV", games: ["FF1"] },
        { relayName: "Relay V", games: ["FF1"] }
      ]
    },
    {
      name: "LCC",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF6"] },
        { relayName: "Relay V", games: ["FF6"] }
      ]
    },
    {
      name: "Liin1",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF6"] },
        { relayName: "Relay III", games: ["FF6"] }
      ]
    },
    {
      name: "LionMusashi",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF6"] },
        { relayName: "Relay VIII", games: ["FF6"] }
      ]
    },
    {
      name: "LittleTonbi",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FFCC"] }
      ]
    },
    {
      name: "LuchoDreamer",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF13"] },
        { relayName: "Relay IV", games: ["FF13"] }
      ]
    },
    {
      name: "Luzbel",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF8"] },
        { relayName: "Relay V", games: ["FF8"] }
      ]
    },
    {
      name: "Manaclaw",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay V", games: ["FFCC"] },
        { relayName: "Relay VI", games: ["FFCC"] }
      ]
    },
    {
      name: "Matty_Iceman",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF15"] },
        { relayName: "Relay VIII", games: ["FF15"] }
      ]
    },
    {
      name: "MMM",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF13"] },
        { relayName: "Relay IX", games: ["FF13"] }
      ]
    },
    {
      name: "NachoYacopu",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF3"] },
        { relayName: "Relay III", games: ["FF3"] }
      ]
    },
    {
      name: "Nepf",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF9"] },
        { relayName: "Relay IV", games: ["FF9"] }
      ]
    },
    {
      name: "NT1_Evolution",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF7:DoC"] }
      ]
    },
    {
      name: "Olson",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF13"] },
        { relayName: "Relay VI", games: ["FF13"] }
      ]
    },
    {
      name: "Ossy3126",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF13"] },
        { relayName: "Relay VII", games: ["FF13"] }
      ]
    },
    {
      name: "Patorikku13",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF2"] },
        { relayName: "Relay VII", games: ["FF1"] }
      ]
    },
    {
      name: "Qazplm",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay IV", games: ["FF3"] }
      ]
    },
    {
      name: "Ricyosma",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF13-2"] }
      ]
    },
    {
      name: "RiversMcCown",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF4"] },
        { relayName: "Relay V", games: ["FF4"] }
      ]
    },
    {
      name: "RJTheDestroyer",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF7"] },
        { relayName: "Relay IX", games: ["FF7"] }
      ]
    },
    {
      name: "SevenS1ns",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF7"] },
        { relayName: "Relay II", games: ["FF7"] }
      ]
    },
    {
      name: "Shug_ssb",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF8"] },
        { relayName: "Relay VI", games: ["FF8"] }
      ]
    },
    {
      name: "Sk84uhlivin",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF3"] },
        { relayName: "Relay IV", games: ["FF7"] }
      ]
    },
    {
      name: "Starcrawl",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF10"] },
        { relayName: "Relay IV", games: ["FF10"] }
      ]
    },
    {
      name: "Swed",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF5"] },
        { relayName: "Relay III", games: ["FF5"] }
      ]
    },
    {
      name: "Syo",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF8"] },
        { relayName: "Relay IX", games: ["FF8"] }
      ]
    },
    {
      name: "Takaze",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay IV", games: ["FF6"] },
        { relayName: "Relay V", games: ["FF6"] }
      ]
    },
    {
      name: "Thebroodles",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF9"] },
        { relayName: "Relay IX", games: ["FF8"] }
      ]
    },
    {
      name: "TheSabin",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF6"] },
        { relayName: "Relay IV", games: ["FF6"] }
      ]
    },
    {
      name: "WoadyB",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF12"] },
        { relayName: "Relay IX", games: ["FF7Rebirth"] }
      ]
    },
    {
      name: "xShonnen",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay V", games: ["LRFF13"] },
        { relayName: "Relay VI", games: ["FF13-2"] }
      ]
    },
    {
      name: "Zheal",
      runCount: 2,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF7"] },
        { relayName: "Relay IX", games: ["FF7"] }
      ]
    },
    {
      name: "Adrianmamba",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["CCFF7R"] }
      ]
    },
    {
      name: "Aithere",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay II", games: ["FFT"] }
      ]
    },
    {
      name: "Ajneb174",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF7"] }
      ]
    },
    {
      name: "Akiyoshi",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["LRFF13"] }
      ]
    },
    {
      name: "Albrecht84",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF13"] }
      ]
    },
    {
      name: "aleksaster",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FFTA2"] }
      ]
    },
    {
      name: "Angel_KAL",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF16"] }
      ]
    },
    {
      name: "ArisCarroll",
      runCount: 1,
      relayParticipation: [

      ]
    },
    {
      name: "Arithium1",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF7"] }
      ]
    },
    {
      name: "Artus",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF1"] }
      ]
    },
    {
      name: "Ayymart",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF9"] }
      ]
    },
    {
      name: "Bichphuongballz",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IV", games: ["FFMQ"] }
      ]
    },
    {
      name: "BigSid",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF7Rebirth"] }
      ]
    },
    {
      name: "Bombom",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF9"] }
      ]
    },
    {
      name: "BOWIEtheHERO",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FFAdventure"] }
      ]
    },
    {
      name: "Boxmeister",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF2"] }
      ]
    },
    {
      name: "Bramhallthefifth",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF8"] }
      ]
    },
    {
      name: "CaptoftheDorks",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF1"] }
      ]
    },
    {
      name: "Cereth",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF5"] }
      ]
    },
    {
      name: "ChocoBungle",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF10-2"] }
      ]
    },
    {
      name: "Chowzter",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IV", games: ["FF8"] }
      ]
    },
    {
      name: "Chyrad",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FFTA"] }
      ]
    },
    {
      name: "CityHall",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF7:DoC"] }
      ]
    },
    {
      name: "Closetowar",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF10"] }
      ]
    },
    {
      name: "Couch_23",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF4"] }
      ]
    },
    {
      name: "CreativeEly",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF6"] }
      ]
    },
    {
      name: "Crow",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FFAdventure"] }
      ]
    },
    {
      name: "Dair",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF6"] }
      ]
    },
    {
      name: "DaMidget2000",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["LRFF13"] }
      ]
    },
    {
      name: "DarkLightBoco",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF5"] }
      ]
    },
    {
      name: "Dash_Retro",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF7"] }
      ]
    },
    {
      name: "Davesterio",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF7"] }
      ]
    },
    {
      name: "Desch",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF4"] }
      ]
    },
    {
      name: "Dillonismyname",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF10"] }
      ]
    },
    {
      name: "Dragondarch",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF1"] }
      ]
    },
    {
      name: "DragonSentinal",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["Type-0"] }
      ]
    },
    {
      name: "DTG",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF15"] }
      ]
    },
    {
      name: "DynamiteDanTNT",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF7:DoC"] }
      ]
    },
    {
      name: "enk",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["LRFF13"] }
      ]
    },
    {
      name: "Fatmn",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF8"] }
      ]
    },
    {
      name: "FumoFumoMeiling",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FFMQ"] }
      ]
    },
    {
      name: "Gael",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF3"] }
      ]
    },
    {
      name: "GarfieldTheLightning",
      runCount: 1,
      relayParticipation: [

      ]
    },
    {
      name: "Gaugagu",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF7"] }
      ]
    },
    {
      name: "GocuComeBack",
      runCount: 1,
      relayParticipation: [

      ]
    },
    {
      name: "Grayfox",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF10"] }
      ]
    },
    {
      name: "Groggydog",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["ChocoboGP"] }
      ]
    },
    {
      name: "JamesRuns",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF4"] }
      ]
    },
    {
      name: "JT24418",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["SoP"] }
      ]
    },
    {
      name: "Kaeldori",
      runCount: 1,
      relayParticipation: [

      ]
    },
    {
      name: "KainDeschain",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF1"] }
      ]
    },
    {
      name: "Kariohki",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["ChocoboGP"] }
      ]
    },
    {
      name: "kashiwa",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF4"] }
      ]
    },
    {
      name: "KeeperBK",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF9"] }
      ]
    },
    {
      name: "KillerOrcas",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FFCC"] }
      ]
    },
    {
      name: "LenaleeLuna",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF12"] }
      ]
    },
    {
      name: "Lilsharkie",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay II", games: ["LRFF13"] }
      ]
    },
    {
      name: "Logeek044",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF8"] }
      ]
    },
    {
      name: "Madelon",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF12"] }
      ]
    },
    {
      name: "Madhyama",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF10"] }
      ]
    },
    {
      name: "Malagron",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF15"] }
      ]
    },
    {
      name: "Misut0",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF5"] }
      ]
    },
    {
      name: "Moonblazewolf",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FFTA"] }
      ]
    },
    {
      name: "MrMizzow",
      runCount: 1,
      relayParticipation: [

      ]
    },
    {
      name: "Myohmyke",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF4"] }
      ]
    },
    {
      name: "MythikdawnSC",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF9"] }
      ]
    },
    {
      name: "Nakuri",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF3"] }
      ]
    },
    {
      name: "Nashlax",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF3"] }
      ]
    },
    {
      name: "Neerrm",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF4"] }
      ]
    },
    {
      name: "Neviutz",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["LRFF13"] }
      ]
    },
    {
      name: "Nightbox",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF10"] }
      ]
    },
    {
      name: "Nocashnocash",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF4"] }
      ]
    },
    {
      name: "Penguin8r",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF4"] }
      ]
    },
    {
      name: "Phek1200",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF7"] }
      ]
    },
    {
      name: "Phoenix158sda",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF10-2"] }
      ]
    },
    {
      name: "Possa",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF2"] }
      ]
    },
    {
      name: "prieR",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FFAdventure"] }
      ]
    },
    {
      name: "R-0109",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FFMQ"] }
      ]
    },
    {
      name: "Rainbowunicorn",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF16"] }
      ]
    },
    {
      name: "Ranmaru",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF15"] }
      ]
    },
    {
      name: "ratyu",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FFCC"] }
      ]
    },
    {
      name: "Relxert",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["SoP"] }
      ]
    },
    {
      name: "Rinimt",
      runCount: 1,
      relayParticipation: [

      ]
    },
    {
      name: "RoryExtraLife",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF4"] }
      ]
    },
    {
      name: "Rotamota",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["WoFF"] }
      ]
    },
    {
      name: "Rudyxx",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF15"] }
      ]
    },
    {
      name: "sebyds",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF9"] }
      ]
    },
    {
      name: "Sent",
      runCount: 1,
      relayParticipation: [

      ]
    },
    {
      name: "SephorianBlue",
      runCount: 1,
      relayParticipation: [

      ]
    },
    {
      name: "ShadowDeathFox",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF13-2"] }
      ]
    },
    {
      name: "Shadoweh",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF4"] }
      ]
    },
    {
      name: "ShaneZell",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF1"] }
      ]
    },
    {
      name: "ShiyugamiGaru",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["ChocoboGP"] }
      ]
    },
    {
      name: "SLAMDUNKWizard",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF2"] }
      ]
    },
    {
      name: "Solimuse",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF1"] }
      ]
    },
    {
      name: "Soll_Ashelia",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF3"] }
      ]
    },
    {
      name: "SomeGirl",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF2"] }
      ]
    },
    {
      name: "Sonicglenjamin",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF8"] }
      ]
    },
    {
      name: "Soph",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF8"] }
      ]
    },
    {
      name: "Suikoboj",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF1"] }
      ]
    },
    {
      name: "SweetCheeryBoyJP",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IV", games: ["FFT"] }
      ]
    },
    {
      name: "Sylleath",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF9"] }
      ]
    },
    {
      name: "Sylverfyre",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IV", games: ["FFMQ"] }
      ]
    },
    {
      name: "The Roth",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF4"] }
      ]
    },
    {
      name: "The_Sid",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IX", games: ["FF7Rebirth"] }
      ]
    },
    {
      name: "ThisGuyAreSick",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF1"] }
      ]
    },
    {
      name: "Thunderclaude",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF1"] }
      ]
    },
    {
      name: "Tokuher0",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF1"] }
      ]
    },
    {
      name: "TRSLinitaa",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay V", games: ["FFCC"] }
      ]
    },
    {
      name: "TwirlinCurtis",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF5"] }
      ]
    },
    {
      name: "Tybalt",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FFMQ"] }
      ]
    },
    {
      name: "VaeVictus",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay IV", games: ["FF4"] }
      ]
    },
    {
      name: "Val",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF7"] }
      ]
    },
    {
      name: "Vanni_van",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF4"] }
      ]
    },
    {
      name: "Vermillion",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF10"] }
      ]
    },
    {
      name: "Webster141",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay I", games: ["FF9"] }
      ]
    },
    {
      name: "Wisteria_paon",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VII", games: ["FF9"] }
      ]
    },
    {
      name: "Wolverine023",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF10"] }
      ]
    },
    {
      name: "WQ",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF8"] }
      ]
    },
    {
      name: "Xeidin",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VIII", games: ["FF8"] }
      ]
    },
    {
      name: "yelsraek",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay VI", games: ["FF4"] }
      ]
    },
    {
      name: "Yogidamonk",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay V", games: ["FF3"] }
      ]
    },
    {
      name: "Zefferss",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay II", games: ["FF13-2"] }
      ]
    },
    {
      name: "ZellyFF",
      runCount: 1,
      relayParticipation: [
        { relayName: "Relay III", games: ["FF3"] }
      ]
    }
  ]
};