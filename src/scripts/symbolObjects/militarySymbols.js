// * MILITARY SYMBOLS OBJECT * //
const militarySymbolsObject = {
  'Default Land Unit': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: '',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  //! EQUIPMENT
  'Nonlethal Weapon': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,60 0,80 M 80,60 l40,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Nonlethal Weapon (Taser)': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,60 0,80 M 80,60 l40,0',
        },
        text_1: {
          symbolText: 'Z',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Nonlethal Weapon (Water Cannon)': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,60 0,80 M 80,60 l40,0',
        },
        text_1: {
          symbolText: 'W',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Armored Fighting Vehicle': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,100 30,-30 30,30 -30,30 z m 60.5,-30 0,60 m -61,-60 0,60 0,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Armored Personnel Carrier': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 30,-15 30,15 m -60,-15 0,60 60,0 0,-60',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Armored Protected Vehicle': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Tank: {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 60,0 m -60,40 60,0 m -60,-50 0,60 0,0 m 60,-60 0,60',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Tank - Light': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 60,0 m -60,40 60,0 m -60,-50 0,60 0,0 m 60,-60 0,60z m -60,30 60,0z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Tank - Medium': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 60,0 m -60,40 60,0 m -60,-50 0,60 0,0 m 60,-60 0,60z m -60,23 60,0z m 0,15 60,0z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Tank - Heavy': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 60,0 m -60,40 60,0 m -60,-50 0,60 0,0 m 60,-60 0,60z m -60,20 60,0z m 0,10 60,0z m 0,10 60,0z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Helicopter: {
    type: 'Equipment',
    flightCapable: true,
    affiliation: {
      friendly: {
        path_1: {
          d: 'M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Medical Evacuation Helicopter': {
    type: 'Equipment',
    flightCapable: true,
    affiliation: {
      friendly: {
        path_1: {
          d: 'M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z M95.5,80 l9,0 0,-9 9,0 0,-9 -9,0 0,-9 -9,0 0,9 -9,0 0,9 9,0 Z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fixed Wing Aircraft': {
    type: 'Equipment',
    flightCapable: true,
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Unmanned Aerial Vehicle (UAV)': {
    type: 'Equipment',
    flightCapable: true,
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Train or Locomotive': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,70 0,60 60,0 0,-30 -30,0 0,-30 z M70,136a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M82,136a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M108,136a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M120,136a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
          transform: 'translate(16,10) scale(0.85)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Railcar or Boxcar': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 c 0,15 60,15 60,0 l 0,45 -60,0 z M70,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M82,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M108,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M120,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
          transform: 'translate(16,10) scale(0.85)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Flatcar: {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60 86 v 30 h 80 v -30z M60,122a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M72,122a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M118,122a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M130,122a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Utility Vehicle (Personnel or Cargo)': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 c 0,15 60,15 60,0 l 0,45 -60,0 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Limited Cross Country Utility Vehicle': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 c 0,15 60,15 60,0 l 0,45 -60,0 z M70,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M120,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Cross Country Utility Vehicle': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 c 0,15 60,15 60,0 l 0,45 -60,0 z M70,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M95,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M120,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Semi-Trailer and Truck': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 c 0,15 60,15 60,0 l 0,45 -60,0 z m 70,15 0,20 m -10,-10 10,0 M70,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M82,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M120,131a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Bridge: {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,115 10,-10 40,0 10,10 m -60,-30 10,10 40,0 10,-10',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fixed Bridge': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,115 10,-10 40,0 10,10 m -60,-30 10,10 40,0 10,-10 M 100,70 100,130',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Floating Girder Bridge': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,115 10,-10 40,0 10,10 m -60,-30 10,10 40,0 10,-10 M 110, 80 90,80 90,120 110,120',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Hollow Deck Bridge': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,115 10,-10 40,0 10,10 m -60,-30 10,10 40,0 10,-10 M 110, 80 90,80 90,120 110,120 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Floating Bridge': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,115 10,-10 40,0 10,10 m -60,-30 10,10 40,0 10,-10 M 80,125 c 0,10 40,10 40,0 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Drill: {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 85,80 5,40 20,0 5,-40 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Earthmover: {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,60 0,20 m -25,-15 5,-5 40,0 5,5 m -55,15 60,0 m -60,40 60,0 m 0,-50 0,60 m -60,-60 0,60 0,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Mine Clearing Equipment': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,80 0,15 -30,25 60,0 -30,-25',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Mine Laying Equipment': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 120,100 c 0,5.5 -9,10 -20,10 -11,0 -20,-4.5 -20,-10 0,-5.5 9,-10 20,-10 11,0 20,4.5 20,10 z m -5,-20 -30,40 m 0,-40 30,40 m -15,-40 0,40',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Broadcast Transmitter Antennae Equipment': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,60 20,20 20,-20 m -20,0 0,80',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'CBRN Equipment': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85',
        },
        path_2: {
          d: 'M69,90a6,6 0 1,0 12,0a6,6 0 1,0 -12,0',
          fill: 'black',
        },
        path_3: {
          d: 'M119,90a6,6 0 1,0 12,0a6,6 0 1,0 -12,0',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Computer: {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,132 0,-10 -35,0 0,-50 70,0 0,50 -35,0 m -25,10 50,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Weapon System - Grenade Launcher - Medium': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,60 0,80 M 85,75 100,60 115,75',
        },
        circle_2: {
          cx: '100',
          cy: '90',
          r: '15',
          fill: 'none',
        },
        path_2: {
          d: 'm 85,125 30,0 m -30,-10 30,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Sensor: {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,60 c 0,15 25,40 40,40 -15,0 -40,25 -40,40 0,-15 -25,-40 -40,-40 15,0 40,-25 40,-40 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Radar Equipment': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M72,95 l30,-25 0,25 30,-25 M70,70 c0,35 15,50 50,50',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Military Information Support Operations': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Laser: {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,55 0,25 10,5 -20,5 20,5 -20,5 10,5 0,15 10,5 -20,5 20,5 -20,5 20,5 M 90,65 100,55 110,65',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Generator: {
    type: 'Equipment',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'G',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Piracy (Boat)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 105,80 0,20 20,0 z m -5,25 0,-25 m -30,25 10,15 40,0 10,-15 z',
          fill: 'rgb(236,236,236)',
        },
        text_1: {
          symbolText: 'PI',
          x: '100',
          y: '72',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Hijacking (Boat)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 105,80 0,20 20,0 z m -5,25 0,-25 m -30,25 10,15 40,0 10,-15 z',
          fill: 'rgb(236,236,236)',
        },
        text_1: {
          symbolText: 'H',
          x: '100',
          y: '72',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Hijacking (Airplane)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 95.1,109.3 c 0,0 -20.8,4.9 -30.1,6.7 -2.2,0.4 -5.7,0.2 -6.5,-2 -0.4,-1.1 3.3,-6.6 6.5,-7.3 8.7,-1.9 25.7,-5.5 25.7,-5.5 l 3.1,-16.1 4,-0.8 0.3,15.9 25.6,-5.8 6.5,-13.2 5.3,-1.4 -3.3,16.1 14,4.8 -4.3,1.2 -13.7,-2.8 -23.6,6.7 31.6,11.8 -5.5,2.5 z',
          fill: 'black',
        },
        text_1: {
          symbolText: 'H',
          x: '100',
          y: '72',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Hijacking (Vehicle)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,125 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 35,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m -35,0 20,0 m 15,0 5,0 0,-20 0,-20 -20,0 -20,0 0,20 -20,0 0,20 5,0',
          fill: 'rgb(236,236,236)',
        },
        path_2: {
          d: 'm 95,90 0,15 10,0 0,-15 z',
        },
        path_3: {
          d: 'm 100,125 0,-20',
        },
        text_1: {
          symbolText: 'H',
          x: '100',
          y: '72',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Triage: {
    type: 'Activity - Operation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M92 69c-5 0-8 3-8 6v8h-3c-7 0-7 5-10 9-2 2-8 2-8 9v30h74v-28l-2-7-6-4c-3-3-2-9-10-9h-3v-7c0-5-3-7-8-7H92zm-2 7h20v7H90v-7zm5 14h9v9l8-4 5 8-8 4 8 5-5 8-8-5v9h-9v-9l-7 5-5-8 8-5-8-4 5-8 7 4v-9z',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M112 120l5-8-8-5 8-4-5-8-7 4v-9H95v9l-7-4-5 8 8 4-8 5 5 8 7-5v9h10v-9z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Warrant Served': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'WNT',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Unexploded Ordnance (UXO)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'UXO',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Meeting: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'MTG',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Sabotage: {
    type: 'Activity - Incident (Beastie Boys)',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SAB',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Smuggling: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SMGL',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Rock Throwing': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,60 25,25 M 70,65 95,90 M 60,80 80,100 m 45,-5 5,15 -5,15 -20,10 -20,-5 -5,-20 5,-5 10,0 5,-10 10,-5 15,5 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Theft: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'THF',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Sniping: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 60 85 L 90 85 L 60 85 z M 110 85 L 140 85 L 110 85 z M 100 90 L 100 115 L 100 90 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Drive-by Shooting': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 95,85 5,-5 5,5 m -5,-5 0,30 m -15,0 30,0 m 5,5 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -30,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Shooting: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 93.2,89.7 h 16.8 v 9.3 c -2.6,0 -7.3,1.6 -9,1 -2.3,-0.8 -5.4,-2 -7.8,-2.6 v -7.8 l 0,0 z m -30,0 h 26.1 v 9.6 c 0,0.9 4.1,2 5,2.3 1.9,0.6 3.6,1.4 5.5,2 2,0.7 3.4,0.4 6,-0.1 1.6,-0.3 5.7,-0.4 6.6,-0.9 0.6,2.7 4.6,14 4.6,15.2 0,1.6 -1.2,4 -1.3,5.7 l 21.5,0 -8.2,-25.9 7.8,-7.7 c -0.8,-1.6 -4.1,-13.4 -5.2,-13.4 h -68.4 v 13.2 l 0,0 z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Searching or Foraging': {
    type: 'Activity - Operation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 140,105 c -10,0 -5,0 -10,0 -15,0 -5,-15 -20,-15 -15,0 -5,20 -20,20 -15,0 -5,-20 -20,-20 -10,0 -10,10 -10,10 m 70,0 10,5 -10,5',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Robbery: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ROB',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Burglary: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'BUR',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Jailbreak: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M63 68v5h7v33c-3 1-6 4-6 7s2 4 2 5v9h-3v5h75v-5h-2v-9c2-5 0-11-4-12V73h6v-5H63zm12 5h12v35l-3 3-2 3-3 7-3-4 1-3v-2l-2-5V73zm17 0h18v18l-3-5c-2-2-3-3-6-3h-1l-5 2-2 1-1 2V73zm22 0h13v34l-3 4 1 6-2 3-3-6c-2-3-3-5-6-5V73zm-14 12h1c4 0 8 5 8 10v1c0 4-4 10-8 10h-2c-4 0-8-6-7-10 0-5 3-11 8-11zm10 16v6l-3-1 3-5zm-18 3l2 3h-2v-3zm-21 4c2 0 4 2 4 5 0 5-5 7-7 4s-1-9 3-9zm60 0c2 0 3 3 3 5 0 4-1 4-2 5h-3l-2-3v-2c-1-2 1-5 4-5zm-25 0l4 1v18H92v-17l6-1 8-1zm8 3c3 1 3 2 5 5 1 3 3 5 3 8l1 1 4-6v8h-13v-16zm-27 0v16H75v-8c1 0 2 6 4 6s2-5 3-7c1-3 2-6 5-7zm47 9v7h-2v-7h2zm-66 0l2 1v6h-2v-7z',
          stroke: 'none',
          fill: 'black',
        },
        path_2: {
          d: 'm 70,130 L130,70',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Vandalism, Loot, Ransack, Plunder': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 115,100 c 0,-5 5,-10 10,-10 M 85,100 C 85,95 80,90 75,90 m 5,25 c -0.5,-29.5 40,-30 40,0 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Black Market': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'BM',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Riot: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'RIOT',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Poisoning: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 85,95 c 0,-20 30,-20 30,0 0,20 -30,20 -30,0 z m -15,10 60,15 m -60,0 60,-15',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Patrolling: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 131,97 0,-14 5,0 c 4,0 4,7 0,7 l -5,0 m -71,15 15,10 M 60,105 75,95 m -15.76,10 40,0 -15,-15 40,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Infiltration: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'INFL',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Improvised Explosive Device (IED)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'IED',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Raid on House': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,100 60,0 m -30,-20 -30,20 0,35 60,0 0,-35 -30,-20 z',
          fill: 'rgb(236,236,236)',
        },
        text_1: {
          symbolText: 'RAID',
          x: '100',
          y: '77',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'House or Home': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,100 60,0 m -30,-20 -30,20 0,35 60,0 0,-35 -30,-20 z',
          fill: 'rgb(236,236,236)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Graffiti: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 110,80 c -10,0 -10,10 0,10 10,0 10,10 0,10 -10,0 -10,10 0,10 10,0 10,10 0,10 M 90,80 c -10,0 -10,10 0,10 10,0 10,10 0,10 -10,0 -10,10 0,10 10,0 10,10 0,10',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fire (Wildfire)': {
    type: 'Activity - Fire',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M111 140l7-7 8-9c4-5 8-15 8-24v-6l-1-3-5 10c0 1-8 9-8 6 0-4 3-8 3-13l-1-14-2 5-2 5-7 8-2-5c0-4 4-9 4-13v-1c0-2-2-3-3-5l-4-5v3l-1 7-4 4-4-5v-4c0-4 4-9 4-13 0-1 0-4-2-4 0 8-12 19-12 22 0 4 4 9 4 16v2l-1 1-1-2-3-1-3-4c-2-2-5-7-5-11l-3 9v3c0 9 6 15 6 18-3-1-6-3-8-6l-7-9c0 6 2 11 3 15l2 8 3 5 9 9 4 5 5 3 6 3v-13H85l10-12h-8l10-11h-7l11-17 12 17h-7l10 11h-8l10 12h-13v13l6-3z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fire (Smoke)': {
    type: 'Activity - Fire',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M99 69c0-2 5-5 7-6 5-1 7 1 10 4l2 4c1 2 2 1 4 2l6 8c5 0 10 5 10 10v1c0 3-1 5-3 6l-3 3c-1 0-2 0-2 2-1 4-4 9-10 9 4 5 3 8 0 13 0 4 0 6-3 8-2 3-4 3-9 3 1-1 2-1 2-3l2-3 2-6v-2l-1-4c-1 6-2 7-6 9 0-8 4-7-2-13 0 3 0 5-2 6l-3-2v-1l3-7-1-3c0 3-3 8-5 10-2 1-1 2 0 5l1 5v1c-3 0-4-6-6-8v10l5 6-4 1a10 10 0 01-9-9v-5s-5-5-4-9v-2l-2-2-2-3-3 1c-6 0-11-5-11-11 0-5 4-10 9-10h2c1-3 6-6 10-5l-1-5v-1a10 10 0 0112-9l5 3zm0-2l-6-2h-2c-5 0-11 6-10 12l1 3h-1c-4 0-7 3-9 6-2-1-6 1-8 3-1 1-3 4-3 7v1c0 4 2 8 4 9l5 3h6l3 4c-1 1 0 4 1 6l1 2 2 2-1 3c0 6 5 12 11 12l5-1c3 1 7 3 9 0h4c2 1 7-2 8-3 1-2 3-6 2-9l3-6v-3l-1-3c4-1 8-6 8-10l6-4 2-7c0-6-4-12-10-12-1-4-5-8-10-9 0-4-5-9-10-9-4 0-9 3-10 6zm16 39l1-1c0-3-4-6-8-6h-2v1h2l3 1c2 1 3 2 4 5zM80 93v2l1 3s-4 3-4 5l1 1 3-4 4-3h5l-4-1-4 2-1-4c0-4 4-8 9-8h3v-1l-2-1h-2c-4 0-9 5-9 9zm19-16l1 1 6-2h1c5 0 10 4 10 9v1l-5-1h-1c-1 0-4 0-4 2h1l3-1h2c2 0 6 2 7 4 2 2 2 3 2 7l1-1c0-4-2-8-5-9 0-7-4-13-11-13h-1c-3 0-6 2-7 3z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fire (Non-Residential)': {
    type: 'Activity - Fire',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 121.2,122.3 -6.2,0 0,5.9 6.2,0 z m -12.1,0 -6.1,0 0,5.9 6.1,0 z m -12.2,0 -5.9,0 0,5.9 5.9,0 z m -12.3,0 -5.7,0 0,5.9 5.7,0 z m 30.4,-4.8 h 6.1 v -6.2 h -2.5 c -1.2,0 -2.5,1.5 -3.6,1.8 v 4.4 z m -5.9,-6.2 -6.1,0 0,6.2 6.1,0 z m -12.2,0 -5.9,0 0,6.2 5.9,0 z m -12.3,0 -5.7,0 0,6.2 5.7,0 z m 25,-33.4 c 0,-3.4 3.4,-7.4 3.4,-9.1 0,-1.4 -0.8,-4.2 -1.8,-4.6 0,7.1 -8.6,12.8 -8.6,15.7 v 0.4 c 0,0.7 1.9,5.2 2.3,6.6 0.4,1.7 1.4,5.6 1.6,7.3 -6.2,-0.1 -7.3,-9.8 -10.3,-11.8 l -0.3,3 0,4.6 c 0,4.7 3.4,11.4 5.6,13.9 1,1.1 4.2,3.7 5.5,4.3 0.8,0.4 6.3,3 6.6,3 1.4,0 9.2,-7.2 10.5,-8.6 2.5,-2.5 4,-9.6 4,-14.8 v -0.7 l -0.7,-5.7 c -1,0.6 -2.1,5.6 -2.8,7 -1.5,3.2 -1.8,3.1 -5.4,4 -0.3,-12.2 6.7,-8.3 -2.7,-19.1 0,4.9 -0.9,7.9 -4.1,9.6 -1.4,-0.7 -3,-2.7 -3,-4.8 z m -14.8,26.4 h 3.6 c -0.1,-0.6 -0.3,-1.4 -1.1,-1.4 h -1.2 v -2.7 c 0,-0.9 -0.9,-2.4 -1.4,-3 v 7 z m -16.4,-28.6 h 3.9 v 28.6 h 8.9 v -28.6 h 3.6 v 5.4 c 0.3,-0.2 1.4,-1.4 1.4,-1.8 v -5 h -6.4 v 28.6 h -6.4 v -28.6 h -6.1 v 28.6 h -5.2 v 32.7 h 54.8 v -30.7 c -0.4,0.2 -1.1,1 -1.1,1.6 v 27.5 h -52.5 v -29.8 h 5.2 v -28.6 h -0 z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fire (Residential)': {
    type: 'Activity - Fire',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 91.5,88.3 -0.7,-3 -30.1,25.2 15.6,0.1 v 25.6 h 50.5 v -25.6 h 12.4 c -0.4,-0.5 -7.6,-5.9 -8,-5.9 -0.3,0 -1.2,1.6 -1.4,1.9 l 1.4,1.4 h -2.4 c -0.7,0.5 -4.9,3.1 -4.9,3.8 v 22.3 h -18.3 v -12.9 h -8.7 v 12.9 h -18.1 v -23.5 h 22.6 l -2.2,-2.7 -30.7,-0.1 L 91.5,88.3 z m 27.6,28 -8.2,0 0,8.5 8.2,0 z m -27,0.2 -8.7,0 0,8.2 8.7,0 z m 11,-36.4 c 0,0.9 2.1,5.3 2.5,6.9 0.4,1.8 1.5,6.1 1.5,7.8 -7.1,-1.6 -6.9,-9.9 -10.3,-12.2 -1.7,7.5 0.8,15.1 3.7,19.5 2.4,3.6 2.6,3.4 6,6 0.4,0.4 7.9,4.3 7.9,4.3 2,0 9.6,-7.1 11.1,-8.6 1.8,-1.8 5.6,-10.8 5.6,-14.4 V 83.5 c 0,-1.9 -0.3,-3.2 -1.4,-4 0,2 -1.8,7 -2.6,8.4 -0.8,1.8 -4.3,4.2 -6.3,4.7 v -1.7 c 0,-4.4 2.4,-6.8 2.4,-10.1 0,-2 -4,-7.2 -5.2,-8 0,5.4 -0.7,8 -4.2,9.8 -1.2,-0.7 -3.1,-2.6 -3.1,-4.4 v -1 c 0,-1.5 1.8,-5.4 2.5,-6.6 2,-3.9 0.5,-3.8 -0.4,-7 h -0.4 c -1.3,5.5 -0.8,4.8 -3.8,8.9 -1,1.4 -5.4,5.9 -5.4,7.5 z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fire (School)': {
    type: 'Activity - Fire',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M131 73l-19-7h-3v30h-1c0 6-3 15-6 19l-6 6-7 5v8h44V96h-20V81l18-8zM82 85c0-3 4-8 4-10l-2-5-1 5-3 4-5 6c-2 3 0 5 2 8l2 10c-7-1-8-11-11-13l-1 8c0 5 4 12 6 15l6 4 4 2 3 2c2 0 10-8 11-9 2-2 6-11 6-15v-6l-1-4-3 9c-1 1-7 5-7 3v-1c0-4 3-7 3-10v-1l-6-7v6l-4 4-3-5z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fire (Special Needs)': {
    type: 'Activity - Fire',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M75 134h50v-29l-3 2v25H77v-30h-2v32zm18-5h2c4 0 8-2 9-5l-1-3c-1 0-2 5-9 5-4 0-7-4-8-6v-6l3-4v-3c-4 1-8 8-6 13 1 4 5 9 10 9zm-4-31l1 2 1 15h11l5 10 6-2-1-3-4 1-4-9H94v-3h7v-2h-8v-6c4-1 3-7-1-7-2 0-3 2-3 4zm20-7v1h-1c-3-2-7-6-7-11l-2 6v1c0 5 3 11 5 13 3 4 7 5 11 7 2 0 10-5 10-6 2-2 5-10 5-12l-2-9-2 7-5 4v-3l2-9-4-6-1 6-3 3c-1-1-2-2-2-5v-1l2-8v-3l-1 3-2 3-4 5c-2 3-2 3-1 6l2 8zm24 10l-3-2-1 2 3 2zm-66 0l1 2 16-10 8-6 4-2 2-4-31 20z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fire (Origin)': {
    type: 'Activity - Fire',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M98 92l2-8h0v-2l-4 6-2 3-2 4s4 10 2 10l-3-1-2-3-2-6-2 4 1 6 1 4 2 4-5-4-4-5c0 6 3 14 6 17l6 5 9 2h1l8-2 5-5c3-4 5-9 5-15v-5l-2 3-1 3c-1 1-3 4-5 4h0l2-8v-1l-1-7h0l-2 6-5 4v-2l1-8h0l-1-4-2-2h0c0 4-1 7-4 8l-2-4v-1h0z',
          fill: 'black',
          strokeWidth: 1,
        },
        path_2: {
          d: 'm 113,126.9 c 0,6.3 -5.1,11.4 -11.4,11.4 -6.3,0 -11.4,-5.1 -11.4,-11.4 0,-6.3 5.1,-11.4 11.4,-11.4 6.3,0 11.4,5.1 11.4,11.4 z',
          fill: 'rgb(236,236,236)',
          transform: 'translate(20,18) scale(0.8)',
        },
        text_1: {
          symbolText: 'X',
          x: '101.25',
          y: '125',
          textAnchor: 'middle',
          fontSize: '14',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fire (Hot Spot)': {
    type: 'Activity - Fire',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M98 92l2-8h0v-2l-4 6-2 3-2 4s4 10 2 10l-3-1-2-3-2-6-2 4 1 6 1 4 2 4-5-4-4-5c0 6 3 14 6 17l6 5 9 2h1l8-2 5-5c3-4 5-9 5-15v-5l-2 3-1 3c-1 1-3 4-5 4h0l2-8v-1l-1-7h0l-2 6-5 4v-2l1-8h0l-1-4-2-2h0c0 4-1 7-4 8l-2-4v-1h0z',
          fill: 'black',
          strokeWidth: 1,
        },
        path_2: {
          d: 'm 113,126.9 c 0,6.3 -5.1,11.4 -11.4,11.4 -6.3,0 -11.4,-5.1 -11.4,-11.4 0,-6.3 5.1,-11.4 11.4,-11.4 6.3,0 11.4,5.1 11.4,11.4 z',
          fill: 'rgb(236,236,236)',
          transform: 'translate(20,18) scale(0.8)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fire (Arson)': {
    type: 'Activity - Fire',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M98 92l2-8h0v-2l-4 6-2 3-2 4s4 10 2 10l-3-1-2-3-2-6-2 4 1 6 1 4 2 4-5-4-4-5c0 6 3 14 6 17l6 5 9 2h1l8-2 5-5c3-4 5-9 5-15v-5l-2 3-1 3c-1 1-3 4-5 4h0l2-8v-1l-1-7h0l-2 6-5 4v-2l1-8h0l-1-4-2-2h0c0 4-1 7-4 8l-2-4v-1h0z',
          transform: 'translate(5,0)',
          fill: 'black',
          strokeWidth: 1,
        },
        text_1: {
          symbolText: 'A',
          x: '75',
          y: '90',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'S',
          x: '75',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_3: {
          symbolText: 'N',
          x: '75',
          y: '130',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fire (Event)': {
    type: 'Activity - Fire',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M98 92l2-8h0v-2l-4 6-2 3-2 4s4 10 2 10l-3-1-2-3-2-6-2 4 1 6 1 4 2 4-5-4-4-5c0 6 3 14 6 17l6 5 9 2h1l8-2 5-5c3-4 5-9 5-15v-5l-2 3-1 3c-1 1-3 4-5 4h0l2-8v-1l-1-7h0l-2 6-5 4v-2l1-8h0l-1-4-2-2h0c0 4-1 7-4 8l-2-4v-1h0z',
          fill: 'black',
          strokeWidth: 1,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Extortion (Ukrainian Hryvnia)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: '₴',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '52',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Extortion (Yuan)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: '¥',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '52',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Extortion (Pounds)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: '£',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '52',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Extortion (Euros)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: '€',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '52',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Extortion (Dollars)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: '$',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '52',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Explosion: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 110,55 5,20 15,-10 0,15 15,5 -15,10 15,10 -15,5 5,15 -20,-5 -5,20 -10,-15 -10,20 -5,-25 -20,10 5,-15 L 55,105 70,95 60,85 70,80 70,65 85,75 90,55 100,70 z',
          transform: 'translate(40,45) scale(0.6)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Exfiltration: {
    type: 'Activity - Operation',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'VOTE',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Emergency Medical Operation': {
    type: 'Activity - Operation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,60 0,22.7 -19.7,-11.3 -10,17.3 L 80,100 l -19.7,11.3 10,17.3 L 90,117.3 90,140 l 20,0 0,-22.7 19.7,11.3 10,-17.3 L 120,100 l 19.7,-11.3 -10,-17.3 L 110,82.7 110,60 90,60 z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Election, Voting or Polling Place': {
    type: 'Activity',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'VOTE',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Drug Related Activity (Illegal)': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'DRUG',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Booby Trap': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 85,105 15,-25 15,25 m -35,5 c 0,-10 40,-10 40,0 0,10 -40,10 -40,0 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Mass Demonstration': {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'MASS',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Bombing: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'BOMB',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Arrest: {
    type: 'Activity - Incident',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 92.5,100 15,0 m -2.5,-10 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -5,5 0,20 m 20,-15 c 0,11 -9,20 -20,20 -11,0 -20,-9 -20,-20 0,-11 9,-20 20,-20 11,0 20,9 20,20 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Tented Camp': {
    type: 'Installation - Tents',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 65,124.4 10,-37 25,-10 25,10 10,37 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Firearms Retailer': {
    type: 'Installation - Commercial',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M85.1 123H84v-3.2a9 9 0 01-2.3-.3l-2.3-.7v-1.9c.7.5 1.5.8 2.2 1l2.3.4v-4.9a8.3 8.3 0 01-3.5-1.3 3.3 3.3 0 01-1.1-2.5c0-1.2.4-2.1 1.2-2.8.8-.7 1.9-1.1 3.4-1.2v-2.5H85v2.5l1.9.2 1.8.5v1.9l-1.8-.7c-.6-.2-1.3-.3-1.9-.3v4.6c1.6.3 2.8.7 3.6 1.3.8.6 1.1 1.5 1.1 2.6 0 1.2-.4 2.2-1.2 2.9-.8.7-2 1.1-3.5 1.2v3.3m-1.1-11.5v-4.4c-.8.1-1.5.3-1.9.7-.4.4-.7.9-.7 1.5s.2 1.1.6 1.4c.4.3 1.1.6 2 .7m1.1 2.1v4.7a4 4 0 002.1-.8c.5-.4.7-.9.7-1.6 0-.6-.2-1.1-.7-1.5-.4-.4-1.1-.6-2.1-.8m22.6-21.9l-8 20.8.8.3 8-20.8-.8-.3zm-43 6.5v.8l.3 26v.8h.8l32.2-.2h.4l.2-.3 7.3-8.7.2-.2v-.3l-.2-10.1v-.4l-.3-.2-8.4-6.6-.2-.2h-.3l-31.3-.4h-.8zm1.6 1.6l30.2.3 7.9 6.2.2 9.4-6.9 8.2-31 .2-.3-24.3zm31.1-14.4h14.4v7.7c-2.1 0-6.2 1.4-7.8.9-1.6-.5-5-2.1-6.6-2.2v-6.4zm-25.5 0h22.1v7.9c0 .8 4 1.9 4.8 2.2l5.2 2 9.6-1.2 1 3.6 1.4 4.9c.3.5 1.3 3.2 1.3 4.1v.2c0 1.5-.9 2.5-.9 4.7h18l-1.1-3.9-.8-2.4-4-13.4c-.3-.5-.6-.9-.6-1.7 0-1.7 5.2-5.5 6.2-7.1l-3.6-11.1H71.8v11.1z',
          stroke: 'none',
          fill: 'black',
        },
        path_2: {
          d: 'M85.1 113.6v4.7a4 4 0 002.1-.8c.5-.4.7-.9.7-1.6 0-.6-.2-1.1-.7-1.5-.4-.4-1.1-.6-2.1-.8m-1.1-2.1v-4.4c-.8.1-1.5.3-1.9.7-.4.4-.7.9-.7 1.5s.2 1.1.6 1.4c.4.3 1.1.6 2 .7M66.4 99.8l.3 24.3 31-.2 6.9-8.2-.2-9.4-7.9-6.2-30.2-.3zm17.7 3.3h1.1v2.5l1.9.2 1.8.4v1.9l-1.8-.7c-.6-.2-1.3-.3-1.9-.3v4.6c1.6.3 2.8.7 3.6 1.3.8.6 1.2 1.5 1.2 2.7 0 1.2-.4 2.2-1.2 2.9-.8.7-2 1.1-3.5 1.2v3.3h-1.1v-3.2a10.5 10.5 0 01-4.6-1.1v-1.9c.7.5 1.5.8 2.2 1.1a9 9 0 002.3.3v-4.9a8.3 8.3 0 01-3.5-1.3 3.3 3.3 0 01-1.1-2.5c0-1.2.4-2.1 1.2-2.8.8-.7 1.9-1.1 3.4-1.2v-2.5z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Firearms Manufacturer': {
    type: 'Installation - Commercial',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M104 75h5v13h9V75h5v13h7v37H70V88h34V75zm-36 51h63V87h-7V74h-7v13h-7V74h-7v13H68v39zm26-26h11v6h-6l-5-1v-5zm-19 0h17v6l3 2 4 1 7-1 1 3 1 4 1 3v3h13l-1-3v-1l-3-10-1-2 5-5-3-8H75v8z',
          stroke: 'none',
          fill: 'black',
        },
        path_2: {
          d: 'M94 100h11v6h-6l-5-1v-5zm10-25v13H70v37h60V88h-7V75h-5v13h-10V75h-4zM75 92h44l3 8-5 5v2l4 10v1l1 3h-13v-3l-1-4-1-3-1-3-7 1-4-1-3-2v-6H75v-9z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Chemical Plant': {
    type: 'Installation - Commercial',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M94 90h-1v2l1 2v3c0 3-2 6-5 9-2 3-5 6-5 10v1c0 2 2 4 4 5l6 2h11v-1l6-1 2-2 2-3c0-5-2-8-5-11-2-2-4-5-5-9v-3-1l1-1-1-2h-1-9-1zm1 2h8-8zm1 2h7v4c1 4 4 7 6 10s4 5 4 8l-1 3-2 2-6 1H94l-5-2c-2-1-3-2-3-4 0-3 3-6 5-9 3-3 5-6 5-10h1v-3zm-7 20v2c0 3 6 4 10 4h3c3 0 8-2 8-4v-1c0-3-6-9-7-12h-7l-7 11zm15-39h5v13h10V75h4v13h7v37H70V88h34V75zm-36 51h63V87h-7V74h-7v13h-7V74h-7v13H68v39z',
          stroke: 'none',
          fill: 'black',
        },
        path_2: {
          d: 'M104 75v13H70v37h60V88h-7V75h-4v13h-10V75h-5zM94 90h11l2 2-1 1-1 1v3l5 10c3 3 5 6 5 10l-1 4-3 2-6 1H95l-7-2c-2-1-4-3-4-5v-1c0-4 3-7 5-10 3-3 5-6 5-9v-3l-1-2v-2h1zm1 2h8-8zm1 2v4c0 3-3 6-5 9s-5 6-5 10l3 4 5 1h10l6-1 2-2 1-3c0-3-2-5-4-8s-5-6-6-10v-1-3h-7zm0 9h7c1 3 7 9 7 12v1c0 2-5 4-8 4h-3c-4 0-10-1-10-4v-2l7-11z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Commercial Infrastructure': {
    type: 'Installation - Commercial',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M102 109v7l3-1 1-3-1-2-3-1m-2-3v-7l-3 1-1 2 1 2 3 1m5-30v13H70v37h60V88h-7V75h-4v13h-10V75h-5zm-5 17h2v4h3l3 1v3l-3-1-3-1v7l6 3 1 4c0 2 0 3-2 4l-5 2v5h-2v-5h-3l-4-2v-3a13 13 0 007 3v-8l-5-2-2-4 2-4 5-2v-4z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
        path_2: {
          d: 'M102 123h-2v-5h-3l-4-1v-3l4 1 3 1v-8l-5-2-2-4 2-4 5-2v-4h2v4l3 1h3v3l-3-1h-3v7l5 2c2 1 2 2 2 4s0 3-2 4l-5 2v5m-2-18v-6l-3 1-1 2 1 2 3 1m2 4v7l3-1 1-3-1-2-3-1m3-34h4v13h10V75h4v13h7v37H70V88h35V75zm-36 51h62V87h-6V74h-8v13h-7V74h-7v13H69v39z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Hazardous Materials Production': {
    type: 'Installation - Commercial',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 104.7,71.8 h 5 v 15 h 11.1 v -15 h 5 v 15 h 7.5 v 41.4 h -67.4 V 86.8 h 38.8 v -15 z m -40,57.9 h 69.8 V 85.5 h -7.1 v -15.2 h -8 v 15.2 h -8 v -15.2 h -8 v 15.2 h -38.6 v 44.1 l 0,0 z m 15.5,-21.8 h 38.6 l -19.3,18.6 -19.3,-18.6 z m 21.8,-16.8 c 0.5,0.4 4.3,3.8 4.3,4.3 v 12 h -4.3 V 91.1 z m -5,-0 0,16.3 h -4.3 l 0.1,-12.2 4.1,-4.1 0,0 z m -12.1,12 c 0,-0.4 3.1,-3.2 3.6,-3.6 v 7.8 h -3.6 v -4.3 z m 25.7,-3.6 3.7,3.4 c -0.2,0.4 -0.2,-0.2 -0.2,0.5 v 4 h -3.6 v -7.9 z m 9.4,8.2 -20.5,-20 -20.4,20 20.4,19.9 20.5,-19.9 z',
          stroke: 'none',
          fill: 'black',
        },
        path_2: {
          d: 'm 99.5,126.5 19.3,-18.6 -38.6,0 z m 0,1 -20.4,-19.9 20.4,-20 20.5,20 -20.5,19.8 z m 5.2,-40.8 h -38.8 v 41.4 h 67.4 V 86.8 h -7.5 v -15 h -5 v 15 h -11.1 v -15 h -5 v 15 z m 5.9,20.6 h 3.6 v -4 c 0,-0.7 -0,-0.1 0.2,-0.5 l -3.7,-3.4 v 7.9 z m -8.6,0 h 4.3 v -12 c 0,-0.4 -3.8,-3.9 -4.3,-4.3 v 16.3 z m -9.3,0 4.3,0 -0,-16.3 -4.1,4.1 z m -7.8,-4.3 v 4.3 h 3.6 v -7.9 c -0.5,0.3 -3.6,3.2 -3.6,3.6 z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Warehouse/Storage Facility/Building': {
    type: 'Installation - Facility',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 104.1,74.8 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 69.6 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z',
          strokeWidth: 3,
          fill: 'rgb(236,236,236)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Water Treatment Facility': {
    type: 'Installation - Water',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 65,90 50,0 c 10,0 20,10 20,20 m -40,-30 20,0 m -10,0 0,10',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  School: {
    type: 'Installation - Civilian',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 98.4,96.4 H 83.7 v 31.7 h 32 V 96.4 H 100.9 V 84.6 c 0,-0.6 6.5,-3 7.5,-3.4 1.3,-0.5 6.9,-3 7.9,-3 -0.3,-0.4 -14.7,-6.3 -15.7,-6.3 H 98.4 V 96.4 z',
          fill: 'black',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Telecommunications: {
    type: 'Installation - Signal',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,105 20,0 0,0 m -25,15 15,-30 15,30 m -55,-40 25,10 0,-10 15,10 15,-10 0,10 25,-10',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Raw Material Mine': {
    type: 'Installation - Raw Material',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 105,85 10,10 5,-5 c -5,-5 -10,-5 -15,-5 z M 95,85 85,95 80,90 c 5,-5 10,-5 15,-5 z m -5,5 30,30 m -40,0 30,-30',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Mass Grave': {
    type: 'Installation - Other',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M73 95h10m-5-5v15m8-20v30H71V85zm30 10h10m-5-5v15m-8-20v30h15V85zM94 95h10m-5-5v15m-7-20h15v30H92z',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Agriculture and Food Infrastructure': {
    type: 'Installation - Agriculture',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M80 128h-8v-21l7-14 14-7 15 7 7 14v21h-7v-18H80v18zm37-39h15v39h-12v-18h3l-6-10V89zm0-2c0-5 3-9 7-9h1c4 0 7 4 7 9h-15zm-12-5h9l-1 5v6l-3-4-5-2v-5zm0-3c0-3 4-7 7-7h1c3 0 5 2 6 4l-4 4h-10v-1zm-12 2l-10 5-5 2-4 3-2 5-3 4-6 9h3v23h18v-17h19v17h33V88c0-8-4-13-11-13h-2c-1-3-6-7-10-7-7 0-11 6-11 12v5l-9-4z',
          fill: 'black',
          strokeWidth: 1,
        },
        path_2: {
          d: 'M80 110h28v18h7v-21l-8-14-14-7-14 7-7 13v22h7v-18zm37-10l6 10h-3v18h12V89h-15v11zm0-13h15c0-5-3-9-7-9h-1c-4 0-7 4-7 9zm-12 0l5 2 3 4v-6l1-5h-9v5zm0-8v1h10l5-5c-2-1-4-3-7-3h-1c-3 0-7 4-7 7z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Agriculture Laboratory': {
    type: 'Installation - Agriculture',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 98.4,77.9 -0.1,0.3 2.6,0.6 0,-0.3 z m 2.1,7.3 0.4,-3.2 -0.3,-0.1 -0.4,3.2 z m -3.8,-16.8 0.1,-0.2 -1.4,-0.3 1,-2.6 -0.4,-0.3 -1.7,5.7 0.1,0 0.3,-0.1 0.7,-2.4 z m -1,5.3 c 0.8,0 0.5,-1.7 0.8,-2.3 l -0.4,-0.1 -0.4,2.4 z m 1.4,-5.5 0.6,-2.6 -0.4,-0.1 -0.6,2.7 z m 0.2,-2.7 0.1,-0.3 -1,-0.2 -0.1,0.2 z M 98.6,92.5 c 0.9,-0.2 0.8,-1.8 1.1,-2.6 l 0.9,0.4 -1.4,4.2 -0.6,-2 z m -0.2,-0.4 0.1,0.2 c -0.5,-0.1 -0.8,-1.3 -0.8,-1.9 l 0.4,0.6 -0.3,-2.2 1.6,0.8 c -0,0.7 -0.4,2.3 -0.9,2.4 z m -0.9,-2.3 -0.6,-1.4 c 0.4,0.1 0.6,0.3 0.6,0.9 v 0.5 z m 2.6,-4.4 -0.6,3.9 -1.7,-0.8 v -3.4 -0.3 l 2.3,0.6 z m -2.6,-1.1 0.4,0.1 v 0.4 h -0.4 v 3.5 l -0.8,-0.4 0.1,0.4 h -0.2 c 0,-0.9 -1.2,-2.8 -1.6,-3.5 0.1,-0.1 0.1,-0.1 0.1,-0.4 v -0.4 l 2.4,0.6 0,-0.4 z m 6.1,-1.7 2.5,0.6 v 0.4 c 0,0.2 0,0.2 0.1,0.3 -1.2,0 -1.9,0.4 -2.8,0.8 l 0.2,-2 z m -6.1,1.7 -2.4,-0.8 0.1,-1.8 v -1 l 2.4,0.5 -0.2,3 z m 8.6,-1.6 c -0.3,0 -2.3,-0.4 -2.4,-0.6 0,0 0.2,-2.3 0.2,-2.7 l 2.2,0.4 0.1,1.6 -0,1.2 z m -12.7,-2.4 c 0.4,0 0.7,0.2 1.1,0.2 0.8,0.2 0.4,0.1 0.4,0.7 v 2.1 c -0.3,-0 -0.7,-0.2 -1,-0.3 -0.7,-0.2 -0.5,0.1 -0.5,-0.4 v -2.4 z m 10.7,-4.2 1.7,0.4 0.3,3 -2.2,-0.4 0.2,-3 z m -6.4,5.2 v -0.4 l -2.4,-0.5 0.3,-2.8 2.4,0.5 -0.2,2.9 h 0.3 v 0.4 h -0.3 z m -4,-4.2 1.6,0.4 -0.3,2.9 -1.5,-0.4 0.2,-2.9 z m 7.6,1.4 0.3,-3.1 2.4,0.6 -0.3,3 -2.4,-0.5 z m -0.4,-0.1 0.4,0.1 v 0.4 c 0.4,0 2.3,0.4 2.4,0.6 0,0.1 -0.2,2.3 -0.2,2.6 -0.8,0 -1.6,-0.4 -2.3,-0.4 -0.2,0 -0.2,0.2 -0.2,0.4 l 2.4,0.5 -0.2,2.2 h 0.2 c -0.5,0.7 -1.1,1.6 -1.4,2.4 -0.3,0.8 -0.7,2.1 -1.1,2.8 l -0.9,-0.4 0.6,-4 h -0.2 l -0.2,-0.1 v -0.4 l -2.3,-0.7 0.2,-3 2.5,0.5 v -0.3 h 0.4 l 0.2,-2.8 h -0.3 l -0.3,2.7 -2.4,-0.4 0.2,-2.9 c -0.3,-0.1 -0.2,0 -0.3,-0.4 h 0.2 l 0.2,0.1 0.4,-3.2 2.4,0.6 -0.3,3.1 z m 3.2,-5.4 v -0.3 l 0.3,0.1 v 0.3 c 1,0.1 1.1,0.1 1.2,1 0,0.3 0.2,1.8 0.3,1.9 l -1.7,-0.3 v 0.4 h -0.3 v -0.5 l -2.4,-0.6 0.3,-2.5 2.3,0.4 z m 0.2,-0.2 0.2,-2.9 c 0.6,0.1 0.7,2.4 0.8,3.1 l -1,-0.2 z m -5.1,-0.9 2.4,0.5 -0.3,2.6 -2.4,-0.6 0.4,-2.5 z m 4.9,0.8 c -3.3,-0.8 -2,0 -2,-3.3 l 2.2,0.4 -0.2,2.9 z m -4.4,-3.8 c 3.2,0.8 1.9,-0.2 1.9,3.2 l -2.3,-0.5 0.4,-2.7 z m -2.5,-0.4 2.1,0.4 -0.4,2.7 -2.2,-0.4 0.4,-2.6 z m 7.1,1.3 v -0.4 l -2.2,-0.4 0.2,-2.6 c 0.3,0 0.7,0.1 1.1,0.2 0.6,0.1 0.5,0 0.7,0.6 0.3,1 0.3,0.9 0.3,2.2 l 0.3,0.4 -0.4,0.1 z m -4.1,-3.9 1.8,0.4 -0.2,2.6 -2.1,-0.4 0.4,-2.6 z m 2.3,-2.2 1.4,2.6 -1.5,-0.2 0.1,-2.4 z m -1.6,-1.6 0,-0.1 1.2,1.2 -0.1,0 c 0.3,-0.1 0.3,-0.1 0.4,0.3 l -0.2,-0.2 -0.2,2.6 -1.8,-0.4 0.7,-3.5 z m -2.9,3 c 0.5,-1.1 0.3,-3.4 1.9,-3.4 0.3,0 0.2,0 0.5,0.1 l -0.6,3.7 -1.8,-0.4 z m -0.4,-0.1 0.4,0.1 v 0.3 l 1.8,0.4 -0.4,2.6 -2.1,-0.4 v 0.2 l -0.1,0.2 -0.2,-0.1 h -0.2 l -0.5,2.6 -1.6,-0.3 v 0.3 c 0.5,0 1,0.3 1.4,0.3 0.2,0 0,-0.2 0.5,-0.2 v 0.4 l 2.2,0.4 -0.3,2.4 -2.4,-0.6 v 0.4 l 2.3,0.6 -0.3,3.1 -2.4,-0.6 0.4,-3.2 h -0.4 c -0,0.8 -0.3,1.7 -0.3,2.4 -0,0.8 -0,0.7 -0.7,0.5 -0.2,-0 -0.9,-0.1 -0.9,-0.3 -0,-0.3 0.2,-2 0.3,-2.4 0.2,-1.2 0.5,-0.4 1.7,-0.3 l 0.1,-0.3 c -0.2,-0.1 -1.6,-0.3 -1.6,-0.5 0,-0.8 0.4,-1.5 0.4,-2.3 -0.6,0.1 -0.7,2.3 -0.8,3 -0.1,0.8 -0.4,2.6 -0.4,3.3 0,0.8 -0.2,2.4 -0.2,3.5 0,1.3 -0.1,2.4 -0.1,3.8 h 0.3 v -0.9 l 1.5,0.4 v 1 l -3.4,-0.5 h -0.1 c -5,0 -8.8,9.7 -8.8,15.4 0,2.3 0.8,5.4 2,6.2 0.7,-1.4 1.3,-3.1 2,-4.6 0.8,-1.5 1.4,-3.1 2.1,-4.6 0.3,-0.7 0.7,-1.5 1,-2.2 0.4,-0.8 0.8,-1.5 1.8,-1.2 0.9,0.3 1.9,3.2 2.1,4.6 0.5,3.8 0,9 0.6,12.6 0.7,4 2.3,6.4 5.4,8 1,-0.4 2.5,-0.6 3.4,-1.2 0.9,-0.6 1.8,-1.2 2.4,-2.2 1.2,-1.8 2,-4.1 2,-7.2 l 0,-0.6 -0.3,-5.6 v -0.3 c 0,-2.7 0.5,-8.3 2.8,-8.3 h 0.1 c 1.4,0 2,0.6 2.6,1.4 0.6,0.8 1.2,1.4 1.8,2.2 1.2,1.5 2.6,2.9 2.6,5.5 v 0.6 l 0.4,0.1 c 0.4,-1.6 1.8,-2.8 1.8,-5.2 v -1.5 c 0,-3.5 -1.4,-6.2 -3,-8.3 -0.8,-1.1 -1.8,-2 -2.8,-2.8 -0.7,-0.5 -2.7,-1.9 -3.8,-1.9 l -0.8,-0 -2.3,0.4 c -0.2,-0.8 0.1,-2 -0.1,-3.1 -0.1,-0.8 -0.2,-2.5 -0.2,-3.3 -0.2,-2.1 -0.5,-4.2 -0.9,-6.1 -0.6,-3.3 -2,-8.2 -4.6,-9.4 v 0.3 l -0.4,-0.1 0.1,-0.3 -0.8,-0.1 c -0.9,-0.1 -1.9,0.8 -2.3,1.3 -0.2,0.3 -1.7,2 -0.8,2 0.2,-0.6 1.3,-2.2 1.8,-2.4 l -0.8,2.7 z m 3,20.4 1.6,0.5 0.2,-0 c -0.1,-0.5 -1.4,-0.6 -1.8,-0.8 v 0.4 z m 3.6,-9.8 0.2,-2.6 -0.2,-0.1 -0.2,2.6 z',
          fill: 'rgb(236,236,236)',
          strokeWidth: 1,
        },
        text_1: {
          symbolText: 'LAB',
          x: '100',
          y: '140',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Armament Production Facility': {
    type: 'Installation - Facility',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 60,0 m -60,40 60,0 m -60,-50 0,60 0,0 m 60,-60 0,60',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Engineering Equipment Production Facility': {
    type: 'Installation - Facility',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,60 20,0 m -10,0 0,20 m -30,0 60,0 m -60,-10 0,60 0,0 m 60,-60 0,60 m -60,-10 60,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Equipment Production Facility': {
    type: 'Installation - Facility',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,120 0,20 m 0,-60 0,-20 m 18.1,28.4 16,-9.6 m -16,31.2 16,12 M 82.5,110 66.1,122 M 82.5,88.8 66.5,78 M80,100a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Animal Feedlot': {
    type: 'Installation - Other',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M122 107l-1-2v-2h16l-1 13h-13v-1l-1-8zm16 4v-2l1-6v-2h-20l2 11v1l1 4h-1 16v-1l1-5zm-15-28c-3-1-5 0-7 1h-1l-1 2h-1l-6-2h-1l-4 1-8 1-9 1h-5l-7-1-7 1-1-1c-3 2-3 5-3 8l-1 10v2l1-1h1V93l1 6 1 4v1l-1 13h3v-4l2-5c1 2 4 4 4 7v1l-1 1h1l4-1-2-3-2-5s2-2 2-5c4 3 3 3 10 3h6l4-1v3l-1 8h3l1-11c0 1 3 7 2 9v2h4l-2-7v-1l3-1 2-2 3-4c4-5 3-2 10-4v-1h1c1 1 2 0 2-1v-1c0-2-2-2-2-5l-4-4 6-3zm15 28v-2 3zm-17-4v-2 2z',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M121 105l1 2 1 8v1h13l1-13h-16v2z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Materiel: {
    type: 'Installation - Sustainment',
    affiliation: {
      friendly: {
        path_2: {
          d: 'M25 120h150',
        },
        text_1: {
          symbolText: 'MAT',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Commercial Food Distribution Center': {
    type: 'Installation - Sustainment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M110 112a18 18 0 010-34 18 18 0 100 34z',
        },
        path_2: {
          d: 'M25 120h150',
        },
        text_1: {
          symbolText: 'COM',
          x: '100',
          y: '72',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Food Production Center': {
    type: 'Installation - Sustainment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M110 112a18 18 0 010-34 18 18 0 100 34z',
        },
        path_2: {
          d: 'M25 120h150',
        },
        text_1: {
          symbolText: 'PROD',
          x: '100',
          y: '72',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Food Retail Center': {
    type: 'Installation - Sustainment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M110 112a18 18 0 010-34 18 18 0 100 34z',
        },
        path_2: {
          d: 'M25 120h150',
        },
        text_1: {
          symbolText: 'RTL',
          x: '100',
          y: '72',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Rations (Class I)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M110 112a18 18 0 010-34 18 18 0 100 34z',
        },
        path_2: {
          d: 'M25 120h150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Clothing And Equipment (Class II)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M101 114l5-1 1-5V82l-1-4-5-2v-1h18v1l-5 2-1 4v26l1 5 5 1v1h-18v-1zm9-39h0zm-29 39l5-1 1-5V82l-1-4-5-2v-1h18v1l-5 2-1 4v26l1 5 5 1v1H81v-1zm9-39h0z',
          fill: 'black',
          strokeWidth: 2,
        },
        path_2: {
          d: 'M25 120h150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Petroleum/Oils/Lubricant (POL) (Class III)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,120 0,-20 -15,-20 30,0 -15,20',
        },
        path_2: {
          d: 'M25 120h150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Construction and Barrier Materials (Class IV)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M60,120 L60,80 140,80 140,120 M100,80 L100,110',
        },
        path_2: {
          d: 'M25 120h150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Ammunition of All Types (Class V)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,110 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0',
        },
        path_2: {
          d: 'M25 120h150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Personal Demand Items (Class VI)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 85,95 30,0 m -15,15 0,-20 m -10,30 10,-10 10,10',
        },
        circle: {
          cx: '100',
          cy: '85',
          r: '5',
          fill: 'none',
        },
        path_2: {
          d: 'M25 120h150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Major End Items (Class VII)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M130 100a10 10 0 11-20 0 10 10 0 0120 0zm-41 0a9 9 0 11-18 0 9 9 0 0118 0z',
          fill: 'black',
        },
        path_2: {
          d: 'M85 95c10-10 20-10 30 0',
        },
        path_3: {
          d: 'M25 120h150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_3: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_3: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_3: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Medical Supplies (Class VIII)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,120 l0,-70 M175,85 l-150,0',
        },
        path_2: {
          d: 'M25 120h150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Repair Parts (Class IX)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,110 0,10 m 0,-30 0,-10 m 8.7,14.2 8.4,-4.8 m -8.4,15.9 8,5.4 m -25.4,-5.4 -8.2,5.4 m 8.2,-16.3 -8,-5.4',
        },
        circle: {
          cx: '100',
          cy: '100',
          r: '10',
          fill: 'none',
        },
        path_2: {
          d: 'M25 120h150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Civil Affairs Materiel (Class X)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CA',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
        path_2: {
          d: 'M25 120h150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M49,120 l102,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M35,120 l128,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_2: {
            d: 'M45,120 l112,0',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Printed Media': {
    type: 'Installation - Media',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 65,100 75,0 M90,90a10,10 0 1,0 20,0a10,10 0 1,0 -20,0 M90,110a10,10 0 1,0 20,0a10,10 0 1,0 -20,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Nuclear Power Plant': {
    type: 'Installation - Energy Facility Infrastructure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M87 124c-8-4-13-13-13-22h14c0 4 3 8 6 10l-7 12zm39-22c0 9-5 18-13 23l-7-13c3-2 6-6 6-10h14zM87 79c8-5 18-5 26 0l-7 12c-3-2-9-2-12 0l-7-12zm21 23c0 4-4 8-8 8s-8-4-8-8c0-5 4-8 8-8s8 3 8 8z',
          fill: 'black',
          strokeWidth: 1,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Electric Power Plant': {
    type: 'Installation - Energy Facility Infrastructure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 150 150 l 20 -50 l 20 50 l 20 -50 l 20 50',
          transform: 'translate(43,55) scale(0.3)',
          strokeWidth: 6,
        },
        path_2: {
          d: 'm 100,60.5 c -16.4,0 -29.6,13.2 -29.6,29.6 0,12.8 8.3,23.9 19.7,27.8 l 0,19.7 c 3.2,1.2 6.3,1.8 9.9,1.8 3.6,0 6.7,-0.6 9.9,-1.8 l 0,-19.8 c 11.5,-3.9 19.8,-15 19.7,-27.8 0,-16.4 -13.2,-29.6 -29.6,-29.6 z',
          transform: 'translate(40,40) scale(0.6)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Broadcast Transmitter Antennae': {
    type: 'Installation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,60 20,20 20,-20 m -20,0 0,80',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Farm or Ranch': {
    type: 'Installation - Agriculture',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 119.9,119 v -0.2 c 0,-2 1.5,-3.7 3.5,-3.7 h 0.4 c 2.2,0 3.7,1.6 3.7,4 v 0.6 c 0,1.2 -2.1,2.8 -3.7,2.8 h -0.4 c -1.9,0 -3.5,-1.6 -3.5,-3.5 z m -52,-10.7 c 1.3,-2 1.1,-2.7 3.2,-4.4 1.3,-1 3.3,-1.9 5.5,-1.9 h 0.6 c 4.7,0 9,4.1 9,8.8 v 1.1 c 0,5 -4,9.2 -8.8,9.2 H 76.9 c -5.4,0 -9.4,-4.2 -9.4,-9.6 0,-1.4 0.4,-1.6 0.4,-3 l 0,0 z m 7.9,-20.2 c -0.8,0 -1.5,-4.4 -1.8,-5.3 -0.2,-1 -1.3,-4.6 -1.3,-5.5 h 24.1 c 0.5,0 1.3,-0.8 1.3,-1.3 v -2.2 c 0,-0.7 -0.8,-1.1 -1.5,-1.1 h -31.8 c -0.7,0 -1.5,0.4 -1.5,1.1 v 2.2 c 0,0.5 0.8,1.3 1.3,1.3 h 3.5 l 2.6,16 -6.8,2.5 2.8,3.4 c -1,1.3 -2.3,2.1 -3.6,4.2 -0.4,0.8 -1.9,4.4 -1.9,5.5 v 2.2 c 0,5.4 1.6,8.8 4.3,11.5 2.3,2.3 6.5,4.8 11,4.8 h 0.4 c 8.8,0 15.8,-7.4 15.8,-16 h 13.4 c 0.6,0 1.9,1.4 2.4,1.8 h 8.6 c -1.1,1.6 -2.2,2.9 -2.2,5.7 0,4.6 3.9,8.6 8.6,8.6 4.4,0 8.8,-3.8 8.8,-7.9 v -2 c 0,-1.2 -1.5,-3.4 -2,-4.4 h 7.2 l 1,-4.6 h -7.2 v -0.6 l 1.2,-8.1 -0.1,-3.3 c 0,-0.6 -1.7,-2.1 -2.2,-2.4 l -16,-0.5 V 78.2 c 0,-0.5 -0.4,-0.9 -0.9,-0.9 -0.5,0 -0.9,0.4 -0.9,0.9 v 15.4 c -2.2,-0.2 -6,-0.4 -8.1,-0.4 -1.3,0 -2.9,0.1 -4.2,0 -2.1,-0.1 -2,-1.3 -2.9,-1.3 h -4.6 l 2,12.3 H 91.1 V 98.6 C 91.1,97.8 87.1,94.4 86.1,94.4 H 78.7 V 89.8 L 77.5,88.1 75.8,88 z M 88.1,92 c 0,0.5 0.1,0.2 0.2,0.9 h 0.6 c 0.9,0 8.5,-6.4 10.1,-6.8 V 85.4 c 0,-0.5 -0.2,-0.6 -0.6,-0.6 h -0.4 C 97.5,84.7 88.1,91.6 88.1,92 z',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M120 119c0 2 2 4 3 4h1l4-3v-1c0-2-2-4-4-4h-1c-2 0-3 2-3 4zm-52-11v3c0 6 4 10 9 10h1c4 0 8-4 8-9v-1c0-5-4-9-9-9l-6 2-3 4z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Grain Storage': {
    type: 'Installation - Agriculture',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M105 110l-2 2h-1l-1 6-1 6v6l3-10h-1v-4l1 3 2-3h-1v-2l1 2 2-3h0v-3l-1-1-1 1zm0 0l1-1 1 1v2l2-2v-1-2h0l1 2 3-6h0c1 1 0 3-1 3l-2 3h2c-1 1-1 2-3 2l-1 2 3-1-3 2-1-1-1 3h3l-3 1h-1l-1 3h4l-3 1h-1c-1 3-4 8-4 12v1l1 2h-2l-2-15h-1l-2-2 3 1-2-4-3-1h3l-1-3-3-1h3l-1-2h-1l-2-1h2v-1h-1l-1-2 1 1-3-6h1l3 6h0l1-2v2l-1 1 1 1 1-1h0v2l1 2 1-2-1 4 1 1 1-1v6l2-2v2l-1 1 1 4 1-6 1-6-1-1v-2l2 1v-3l-1-3 2 3 1-3-1-2 1 1 1-2h-1l1-3h0v2h1l2-6h0l-2 7 1-1-1 2-1 2 2-1c0 1-1 2-3 2v2l3-1-3 2h-1l-1 3 3-1zM87 90l6-2h8l12 2c0 2-10 3-13 3h-1c-3 0-11-1-12-3zm-6 34v2c0 6 0 12 6 12h26c3 0 4-2 5-3v-12c0-9 0-16-2-24-1-10-2-11-14-11h-4c-14 0-12 1-15 12v5l-1 6-1 13zm34-34l7 4h0l1-1v0c1-2-2-4-4-3h-4 0zm-39 1v1l2 2h0l7-3-5-1-4 1zm38-5v3l4-7-1-1h0c-3 0-3 2-3 5zm-32-3v1c0 2 3 6 4 6v-7l-1-2h-1l-2 2z',
          fill: 'rgb(236,236,236)',
          strokeWidth: 1,
        },
        text_1: {
          symbolText: 'STOR',
          x: '100',
          y: '75',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Bullion Storage': {
    type: 'Installation - Agriculture',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M104 119l-8 10h27l-10-10h-9zm-30 0l-8 10h27l-9-10H74h0zm51-14l-10 14 9 10 11-16zm-31 24l7-10H86zm5-21l9 10 10-14-9-8-10 12zm-19 10h27l-9-9h-9l-9 9zm34 0l10-14h-5l-10 14zm-39 0h4l6-7 6-7h-3l-13 14zm14-10h9l10-13h-7l-12 13z',
          fill: 'rgb(236,236,236)',
          strokeWidth: 1,
        },
        text_1: {
          symbolText: 'STOR',
          x: '100',
          y: '80',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Hazardous Material Storage': {
    type: 'Installation - Agriculture',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 9.4,8.2 -20.5,-20 -20.4,20 20.4,19.9 20.5,-19.9 z',
          fill: 'rgb(236,236,236)',
          transform: 'translate(115,105) scale(1.2)',
        },
        path_2: {
          d: 'm 21.8,-16.8 c 0.5,0.4 4.3,3.8 4.3,4.3 v 12 h -4.3 z m -5,-0 0,16.3 h -4.3 l 0.1,-12.2 4.1,-4.1 0,0 z m -12.1,12 c 0,-0.4 3.1,-3.2 3.6,-3.6 v 7.8 h -3.6 v -4.3 z m 25.7,-3.6 3.7,3.4 c -0.2,0.4 -0.2,-0.2 -0.2,0.5 v 4 h -3.6 v -7.9 z',
          fill: 'black',
          stroke: 'none',
          transform: 'translate(79,116) scale(1.2)',
        },
        text_1: {
          symbolText: 'STOR',
          x: '100',
          y: '80',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Water Storage Tower': {
    type: 'Installation - Agriculture',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M118 121l1 5v13h3l-1-19v-9c0-5 0-3 2-7v-4h-4V84l-8 3-10 1h-2c-8 0-12-3-18-4v16h-4v1l-1 4 3 3-1 31h3v-3l1-22 3 4 4 3 8 4v14h6v-14l9-5 3-3 3-3v7zm-18-36c7 0 23-4 25-8l-25-16-25 16c2 4 16 8 23 8h2z',
          fill: 'black',
        },
        path_2: {
          d: 'M98 85l-17-4v3c6 2 10 4 18 4h2l10-1 8-3v-3c-6 2-14 4-19 4h-2z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Automatic Teller Machine (ATM)': {
    type: 'Installation - Finance',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M74 116c5 0 15-6 17-6l8 4-6 6-5 6-14-10zm-16-6l12-2 11 5-9 3 16 11 6-8 27 13 21-47-50-17-7 12-3 6-4 6-3 5-3 6c-3 4 0 3-6 4l-7 2m62 21l-26-12 5-4 8 4 1-2-24-12-1 2 6 3-6 4-12-6 20-37h1l47 16-19 44zm7-31l2-2-6-2-1 2zm-2 5l1-2-6-2v2zm-22-7l2 2v2l-3 2-2-1 3-5zm-4-7c0-2 1-2 4-2h1l-2 5-3-2zm6-4h-4l-2 1-2 2v2c0 2 4 4 4 5l-2 5-3-2v-1l1-2-3-1-1 2v1c0 2 5 5 5 5l-1 2 2 1v-2l4 1h1l3-1 1-3c0-3-3-5-4-6l2-6h1l1 4 3 1v-2c0-2-2-4-4-4l1-3h-2l-1 1zm13 19l-1 2 5 2 2-2zM97 79l26 10-11 24-27-13 12-21zm-13 22l28 13 12-26-14-4-13-5-7 10-6 12zm32 11l5 2 1-2-5-2-1 2zm-26 0l4 3-6 6-6-4 8-5zm-9 5l7 5 7-7-5-3-9 5z',
          fill: 'black',
        },
        path_2: {
          d: 'M116 112l1-2 5 2-1 2-5-2zm3-7l6 2-2 2-5-2 1-2zm2-5l6 2-1 2-5-2v-2zm3-5l6 2-1 2-6-2 1-2zm-40 6l6-12 7-10a566 566 0 0127 9l-12 26-28-13zm56-15L92 70l-20 37 12 6 6-4-6-3 1-2 24 12-2 2-7-3-5 4 26 11 19-44zm-59 31l9-5 6 3-8 7-7-5zm-7-1l14 10 5-6 7-6-9-4c-1 0-12 6-17 6zm26-26v1l3 2 2-5h-1c-3 0-4 0-4 2zm1 13h2l3-2v-2l-2-2-3 6zm6-18h2l-1 2c2 1 4 3 4 5v2l-3-1-1-4h-1l-2 6c1 1 4 3 4 5v1l-1 3-4 1-4-1v2l-2-1v-2s-4-3-4-5v-1l1-2 3 1-1 2v1l2 2 3-5c0-1-4-3-4-5v-2l1-2 3-1h4v-1zm-22 15l27 13 11-24-26-9-12 20zm5 12l-8 5 6 4 6-6z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Bank: {
    type: 'Installation - Finance',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M75 116c0 4 0 10 2 12 1 2 5 8 7 8h1l5-2 8 2 9-2 9 2c1 0 6-7 6-9 2-3 1-5 1-9l-1-9h-1l-1-3v-1h0v-1l-3-6-3-5c-2-2-7-6-10-6h-5c-8 0-13 4-16 9l-5 8-3 9v2zm40-44l-8 1v-2l-6 2-3-2v3l-9-3v3l-2-1 7 12 5-1 7 1 9-13h0z',
          fill: 'rgb(236,236,236)',
          stroke: 'black',
          strokeWidth: 2,
        },
        text_1: {
          symbolText: '$',
          x: '100',
          y: '125',
          textAnchor: 'middle',
          fontSize: '45',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Federal Reserve Bank': {
    type: 'Installation - Finance',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M66 125h68v5H66v-5zm58-31h5v30h-5V94zm-11 0h5v30h-5V94zm-31 0h5v30h-5V94zm-11 0h5v30h-5V94zm28 2h2v1c3 0 6 2 6 5l-2 1-2-3-2-1v8c3 0 7 2 7 5v1c0 4-3 7-7 7v3h-2v-3l-5-2-3-4v-1h3c0 2 2 5 5 5v-9c-3 0-7-2-7-5v-2c0-3 3-5 6-5h1v-1zm-33-8h68v5H66v-5zm34-18l8 4 8 4 8 5 8 4H69l31-17zM64 87v6l1 1h5v30h-6v7h72v-7h-6V94h6v-7l-9-5-9-4-18-9-18 9-18 9zm37 31c1 0 4-2 4-4v-1c0-2-3-3-4-3v8zm-6-14l4 3v-8c-2 0-4 2-4 3v2z',
          stroke: 'none',
          fill: 'black',
        },
        path_2: {
          d: 'M134 130v-5H66v5zm-5-6V94h-5v30zm-11 0V94h-5v30zm-31 0V94h-5v30zm-11 0V94h-5v30zm-8-37h64l-8-4-8-5-8-4-8-4-32 16zm66 6v-5H66v5zm-33 25v-8c2 0 4 1 4 3v1c0 2-2 4-4 4zm-6-14v-2l4-3v8l-4-3zm4-7h-1c-3 0-6 2-6 5v2c0 3 4 5 7 5v9c-3 0-5-3-5-5h-3v1c0 2 2 4 3 4l5 2v3h2v-3c4 0 7-3 7-7v-1c0-3-4-5-7-5v-8l2 1 1 3h3c0-3-3-6-6-6v-1h-2v1z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Financial Exchange': {
    type: 'Installation - Finance',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M134 125v-2H67V76h-1v49zm-30-9L94 95l-6 15-5-7-13 13 1 1 12-12 6 7 3-7 1-3 2-3 9 20 18-27 8 16 1-1-9-18-9 14-9 13zm3-19v-8c2 0 4 2 4 4s-2 4-4 4zm-5-14c0-2 1-3 3-3h1v6c-2 0-4-1-4-3zm4-6h-1c-3 0-5 3-5 6v1l2 3 4 2v8c-3-1-4-2-4-5h-3v2l3 4 4 1v3h1v-3c3 0 6-2 6-5v-3c0-3-4-4-6-4v-7c2 0 3 1 3 3h3c0-3-3-6-6-6v-2h-1v2z',
          stroke: 'none',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Financial Services (Other)': {
    type: 'Installation - Finance',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'OTH',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: '$',
          x: '100',
          y: '120',
          textAnchor: 'middle',
          fontSize: '52',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Economic: {
    type: 'Installation',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ECON',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Safe House': {
    type: 'Installation',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SAFE',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Blacklist Location': {
    type: 'Installation',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'BLK',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Gray List Location': {
    type: 'Installation',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'GRAY',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'White List Location': {
    type: 'Installation',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'WHT',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Aircraft Production and Assembly': {
    type: 'Installation - Aircraft',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 95.1,109.3 c 0,0 -20.8,4.9 -30.1,6.7 -2.2,0.4 -5.7,0.2 -6.5,-2 -0.4,-1.1 3.3,-6.6 6.5,-7.3 8.7,-1.9 25.7,-5.5 25.7,-5.5 l 3.1,-16.1 4,-0.8 0.3,15.9 25.6,-5.8 6.5,-13.2 5.3,-1.4 -3.3,16.1 14,4.8 -4.3,1.2 -13.7,-2.8 -23.6,6.7 31.6,11.8 -5.5,2.5 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Terrorist Leader': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        text_1: {
          symbolText: 'T',
          x: '75',
          y: '90',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'E',
          x: '75',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_3: {
          symbolText: 'R',
          x: '75',
          y: '130',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_4: {
          symbolText: 'L',
          x: '125',
          y: '90',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_5: {
          symbolText: 'D',
          x: '125',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_6: {
          symbolText: 'R',
          x: '125',
          y: '130',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Terrorist Group': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'TER',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Targeted Group': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'TGT',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Religious Group': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'REL',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Speaker: {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        text_1: {
          symbolText: 'S',
          x: '75',
          y: '90',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'P',
          x: '75',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_3: {
          symbolText: 'K',
          x: '75',
          y: '130',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Leader: {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        text_1: {
          symbolText: 'L',
          x: '75',
          y: '90',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'D',
          x: '75',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_3: {
          symbolText: 'R',
          x: '75',
          y: '130',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Gang: {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'GANG',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Foreign Fighters': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'FF',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Displaced Persons/Refugees/Evacuees': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'DPRE',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Rape Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'R',
          x: '75',
          y: '100',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'A',
          x: '75',
          y: '120',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Piracy Victims (Multiple)': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'PI',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Kidnap Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'K',
          x: '75',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Hijack Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'H',
          x: '75',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Murder Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'M',
          x: '75',
          y: '100',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'U',
          x: '75',
          y: '120',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Execution Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'E',
          x: '75',
          y: '100',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'X',
          x: '75',
          y: '120',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Assassination Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'A',
          x: '75',
          y: '100',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'S',
          x: '75',
          y: '120',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Attempted Criminal Activities Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 52 74 l 96 51',
          strokeDashArray: '10,6',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Attempted Criminal Activities Multiple Victims': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_4: {
          d: 'm 52 74 l 96 51',
          strokeDashArray: '10,6',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Criminal Activities Multiple Victims': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_4: {
          d: 'm 52 74 l 96 51',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Criminal Activities Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z m -19 -40 l 40 45',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Unspecified Organization': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Unspecified Individual': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'U.S. Marshals Service': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100 70l7 20 22 1-18 13 7 20-18-12-18 12 7-20-17-13 21-1zm0-5a35 35 0 100 70 35 35 0 000-70zm0 5a30 30 0 110 60 30 30 0 010-60z',
          strokeWidth: 2,
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'U.S. Secret Service (USSS)': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USSS',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Transportation Security Agency (TSA)': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'TSA',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Spy: {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SPY',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Prison: {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M63 68v5h7v33c-3 1-6 4-6 7s2 4 2 5v9h-3v5h75v-5h-2v-9c2-5 0-11-4-12V73h6v-5H63zm12 5h12v35l-3 3-2 3-3 7-3-4 1-3v-2l-2-5V73zm17 0h18v18l-3-5c-2-2-3-3-6-3h-1l-5 2-2 1-1 2V73zm22 0h13v34l-3 4 1 6-2 3-3-6c-2-3-3-5-6-5V73zm-14 12h1c4 0 8 5 8 10v1c0 4-4 10-8 10h-2c-4 0-8-6-7-10 0-5 3-11 8-11zm10 16v6l-3-1 3-5zm-18 3l2 3h-2v-3zm-21 4c2 0 4 2 4 5 0 5-5 7-7 4s-1-9 3-9zm60 0c2 0 3 3 3 5 0 4-1 4-2 5h-3l-2-3v-2c-1-2 1-5 4-5zm-25 0l4 1v18H92v-17l6-1 8-1zm8 3c3 1 3 2 5 5 1 3 3 5 3 8l1 1 4-6v8h-13v-16zm-27 0v16H75v-8c1 0 2 6 4 6s2-5 3-7c1-3 2-6 5-7zm47 9v7h-2v-7h2zm-66 0l2 1v6h-2v-7z',
          stroke: 'none',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Police Department': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 100,118 C 76,109 85,95 82,82 c 6,7 12,7 18,0 6,7 12,7 18,0 -3,13 6,27 -18,36 z',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Pirates: {
    type: 'Civilian Authorities - Pirates',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M143 80c0 1 1 3-3 9-5 8-11 14-18 19a83 83 0 01-13 8l-4-2h0l4-2c12-6 14-10 14-10s-3 3-14 9l-4 3-4-2a102 102 0 0034-24l7-9c1-1 1-2 1 1zm-3 6l-5 7-7 8 8-8 4-7zm-22 33l-2 1c-1 1-1 1-6-1-2-1-11-3-18-8l-14-9s2 4 14 10c10 6 13 6 17 8l7 2v3l-16-5-21-12c-7-5-13-11-17-19-4-6-4-8-4-9 0-3 1-2 1-1l7 9a90 90 0 0039 26 110 110 0 0013 5zm-51 2c1 0 2 1 2 3s-2 2-2 2l2 1 2-1c1 0-2 3-4 3s-3-2-3-4c0-3 1-4 3-4zm4 0l2 2 1 1-1-1 1-2 2 1 2 2-1-2v-1l2 2v3h-7c-1 0-2-1-2-3-1-2 0-2 1-2zm6-3s0 2-2 2-2-1-2-3 1-3 3-3l4 2 3 4 2 1-1 3 1 4 1 1 1-1c1 0 2 1 2 3s-1 2-3 2-3-1-4-3l-2-7-2-5h-1zm8 2l-2-1 9-3a27 27 0 003 2l-4 1-6 1zm15 0l-15 5v-3l6-2 5-2 4 2zm14 8l1 1 1-1 1-4-1-3 2-1 3-4 4-2c1 0 3 1 3 3s-1 3-2 3l-2-2h-1l-2 5-2 7c-1 2-2 3-4 3s-3-1-3-2 0-3 2-3zm10-7v1l-1 2 2-2 2-1c2 0 1 1 1 1a5 5 0 01-1 2 2 2 0 001-1c0-2 1-2 2-2s1 0 1 2-1 2-2 3h-7c-2 0-1-2 0-3l2-2zm8 6l2-1c0-1-3 0-3-2s1-3 3-3 3 1 3 4c0 2-2 4-3 4-3 0-4-3-4-3l2 1z',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M101 68c13 0 23 9 23 20s-10 20-23 20-23-9-23-20 10-20 23-20z',
          strokeWidth: 2,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Law Enforcement Agency': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100 61c-3 0-4 2-4 4l2 4-8 14H76c0-3-2-4-4-4-3 0-4 1-4 4 0 2 1 4 4 4h1l8 13-8 14h-1c-3 0-4 2-4 4s1 4 4 4c2 0 4-2 4-4 0 0 0 0 0 0h14l8 13-2 4c0 2 2 4 4 4s4-1 4-4l-2-3 8-14h14s0 0 0 0c0 2 2 4 4 4 3 0 4-2 4-4s-1-4-4-4h-1l-8-14 8-14 1 1c3 0 4-2 4-5 0-2-1-4-4-4-2 0-4 2-4 4v1h-15l-7-14 2-4c0-2-2-4-4-4z',
          strokeWidth: 1,
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Nongovernmental Agency (NGO)': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'NGO',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Internal Security Force': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ISF',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Governmental Agency': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'GO',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fire Fighting/Fire Protection': {
    type: 'Civilian Authorities - Protection',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 120,90 -5,5 -10,-10 5,-5 -20,0 5,5 -10,10 -5,-5 0,20 5,-5 10,10 -5,5 20,0 -5,-5 10,-10 5,5 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Federal Bureau of Investigation (FBI)': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'FBI',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Environmental Protection': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,80 -10,15 5,0 -10,10 5,0 -10,10 15,0 0,5 10,0 0,-5 15,0 -10,-10 5,0 -10,-10 5,0 z',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Emergency Operations (Management)': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100 65l15 26 15 27c3-6 5-12 5-18 0-19-16-35-35-35zm0 0a35 35 0 00-30 53l15-27 15-26zm-30 53c6 10 17 17 30 17s24-7 30-17H70z',
          fill: 'black',
        },
        path_2: {
          d: 'M70 118l30-53 30 53z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Drug Enforcement Agency (DEA)': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'DEA',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Department of Justice': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100 62l-1 5v6l-1 1c-1-2-4-3-7-3h-1c-6 0-10 5-15 5h-1c-2 0-2-2-3 0l3 1-6 19-4 9-1 4c-1 2-1 4-3 4 2 3 8 8 13 8h3c6 0 11-4 14-8h-2L75 77l4 1 10-2h1c4 0 4 4 5 4h3v49H86v3h-5v2h-3v4h45v-4h-4v-2h-4v-3h-12V80h3c1 0 1-4 5-4l10 2h1l3-1-3 9-3 10-4 9-1 5-1 2-2 1c2 3 8 8 14 8h2c6 0 12-5 14-8h-1l-14-36 3-2-2 1h-1c-5 0-9-5-15-5h-1c-3 0-6 1-7 3-1-1-2 0-2-2l2-3-2-7h-1zm26 19l12 32h-24l12-32zm-51 0l12 32H63l12-32z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Customs Service': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M116 70l2 3h10v-3h-12zm1 5l-1 1h1v1c0 3 3 5 6 5 4 0 5-3 5-7h-11zm-6 9l-13 9-7 5c-2 1-6 3-6 6l3 3h1l22-15v13l15-21h-15zm-36 0l-2 1v24l1 2h5V84h-4zm4 27v24h27v-24H79zm52-27l-8 10-7 11h12v5h-16v25h8l1-8 2-9 2 17h9V87l-3-3',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M118 73l-1 2h11v-2h-10zm8 11l-15 21 1 5h16v-5h-12l7-11 8-10h-5z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Coast Guard': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 75,100 0,-35 50,0 0,35 20,0 -15,35 -60,0 -15,-35 z',
          fill: 'rgb(236,236,236)',
        },
        path_2: {
          d: 'm 135,100 -15,35 -10,0 15,-35 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Bureau of Alcohol, Tobacco & Firearms (ATF)': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ATF',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Border Patrol': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M123 67c-3 0-6 2-6 5v1h12v-1c0-3-2-5-6-5zm-14 8v1h9v5l3 3 4-1c3-1 4-4 3-7h10v-1h-29zm-14 7c-2 0-3 2-3 3 0 2 4 6 5 8 1 1 4 6 6 6s8-5 10-6v13l13-20h-14c-2 0-7 6-8 6l-4-5-4-5h-1zm35 4l-14 20h12v5h-15v22h8l1-15h2l2 15h8V88l-4-2zm-63 5l-4 6 16 11 8 6 4 3 3 3v13h12v-11l1-3-1-2-1-2c-1-2-3-3-5-3-3 0-2 0-5-2l-4-3-8-5-16-11zm1 2l5 3v7l-5-3v-7zm10 6l5 4v7l-5-3v-8zm9 7l6 4-1 7-5-3v-8z',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M117 73v2h12v-2h-12zm9 13l-13 20v5h15v-5h-12l14-20h-4zm-58 7v7l5 3v-7l-5-3zm10 6v8l5 3v-7l-5-4zm9 7v8l5 3 1-7-6-4z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Railhead Installation': {
    type: 'Installation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M60,120 l80,0M60,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0M74,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0M116,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0M130,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
          transform: 'translate(0,-20)',
          fill: 'rgb(236,236,236)',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Airport: {
    type: 'Installation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M80,70 l40,0 M80,80 l25,-25',
          transform: 'translate(-100,-35) scale(2)',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Allied Command Operations (NATO)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ACO',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'U.S. Army Southern Command (USARSO)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USARSO',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'U.S. Army Pacific Command (USARPAC)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USARPAC',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'U.S. Army North Command (USARNORTH)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USARNORTH',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        text: {
          symbolText: 'USARNORTH',
          x: '100',
          y: '105',
          textAnchor: 'middle',
          fontSize: '15',
          fontWeight: 'bold',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.hostile;
      },
    },
  },
  'U.S. Army Europe Command (USAREUR)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USAREUR',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'U.S. Army Central Command (USARCENT)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USARCENT',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        text: {
          symbolText: 'USARCENT',
          x: '100',
          y: '105',
          textAnchor: 'middle',
          fontSize: '15',
          fontWeight: 'bold',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.hostile;
      },
    },
  },
  'U.S. Army Africa Command (USARAF)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USARAF',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'U.S. Southern Command (SOUTHCOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SOUTHCOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        text: {
          symbolText: 'SOUTHCOM',
          x: '100',
          y: '105',
          textAnchor: 'middle',
          fontSize: '15',
          fontWeight: 'bold',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.hostile;
      },
    },
  },
  'U.S. Pacific Command (PACOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'PACOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'U.S. Northern Command (NORTHCOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'NORTHCOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        text: {
          symbolText: 'NORTHCOM',
          x: '100',
          y: '105',
          textAnchor: 'middle',
          fontSize: '15',
          fontWeight: 'bold',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.hostile;
      },
    },
  },
  'U.S. European Command (EUCOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'EUCOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'U.S. Central Command (CENTCOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'CENTCOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      neutral: {
        text: {
          symbolText: 'CENTCOM',
          x: '100',
          y: '105',
          textAnchor: 'middle',
          fontSize: '15',
          fontWeight: 'bold',
        },
      },
    },
  },
  'U.S. Africa Command (AFRICOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'AFRICOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Human Resources': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'HR',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Contracting Support': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'KS',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Army Field Support': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'AFS',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Rigger Unit': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80, 90 a 20,20 0 1,1 40,0 Z l 20 40 l 20 -40',
          fill: 'rgb(236,236,236)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Transportation Unit': {
    type: 'Sustainment - Transportation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19 M80,100a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Surveillance (Battlefield Surveillance)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,80 -25,40 50,0 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Sustainment: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SUST',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Support: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SPT',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Special Operations Forces': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SOF',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Special Troops': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ST',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Special Forces': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SF',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Space Unit': {
    type: 'Intergalactic Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100.87 61.15l-3.36 29.8-11.28-5.96 6.71 8.85-14.77 3.07H77.1h.54-.54 1.07l14.5 4.15-4.83 8.31 9.67-6.32 3.49 29.8 3.5-29.8 11.27 5.96-6.71-8.85 14.77-3.07h1.07-.54.54-1.07l-14.24-3.07 6.72-8.3-10.74 5.77-4.7-30.34z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Signal: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M25,50 100,110 100,90 175,150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M57,70 100,110 100,90 143,130',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'M50,65 100,110 100,90 150,135',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'M45,45 100,110 100,90 155,155',
        },
      },
    },
  },
  'Security (Internal Security Forces)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SEC',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Sea, Air, Land (SEAL)': {
    type: 'Land Unit - Navy',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SEAL',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Isolated Personnel': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 70 75 l 30 12 l 30 -12 m -30 12 l 0 50 l 30 0 l -60 0',
          transform: 'translate(20,20) scale(0.8)',
        },
        path_2: {
          d: 'M 90, 70 a 10,10 0 1,1 20,0 a 10,10 0 1,1 -20,0',
          fill: 'black',
          transform: 'translate(20,17) scale(0.8)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Quartermaster Unit': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 118,100 c 0,15 15,15 15,0 0,-15 -15,-15 -15,0 z m 0,0 -48,0 0,10 10,0 0,-10',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Public Affairs': {
    type: 'Sustainment - Personnel',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'PA',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Psychological Operations/MISO': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Personnel Services': {
    type: 'Sustainment - Personnel',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'PS',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Ordnance Unit': {
    type: 'Sustainment - Ordnance',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 90,97 83,83 m 27,14 7,-14 M 95,95 90,81 m 15,14 5,-14 m 10,26.5 c 0,6.9 -9,12.5 -20,12.5 -11,0 -20,-5.6 -20,-12.5 0,-6.9 9,-12.5 20,-12.5 11,0 20,5.6 20,12.5 z',
          fill: 'rgb(239,239,239)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Naval Unit': {
    type: 'Sea Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 82 103c0 11 2 13 2 13l3-2c3 4 8 7 13 7h1c5 0 10-3 13-7l3 2s2-2 2-13l-10 6 2 2s-4 4-10 4h-1c-6 0-10-4-10-4l2-2-10-6z',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M105 85c0 3-2 5-5 5s-5-2-5-5 2-5 5-5 5 2 5 5zm-20 5h30m-15 0v30',
          fill: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Mortar Unit': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,111 l0,-30 M90,90 l10,-10 10,10 M95,115a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Maneuver Enhancement': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 85,80 0,25 15,15 15,-15 0,-25 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Maintenance Unit': {
    type: 'Sustainment - Maintenance',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M72,90 c10,0 10,20 0,20 m8,-10 l40,0 m8,-10 c-10,0 -10,20 0,20',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'NATO Liaison': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'LO',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Interpreter/Translator': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 65,90 15,0 0,-10 20,20 -20,20 0,-10 -15,0 z',
          fill: 'rgb(239,239,239)',
        },
        path_2: {
          d: 'm 135,90 -15,0 0,-10 -20,20 20,20 0,-10 15,0 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Military History': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'MH',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Military Intelligence': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'MI',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Military Police': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'MP',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Missile Defense': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'MD',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Missile: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M90,120 L90,90 C90,80 110,80 110,90 L110,120 M100,120 L100,82',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Information Operations': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'IO',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Ammunition (Ordnance Unit)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 ',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 ',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 ',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 ',
        },
      },
    },
  },
  'Ammunition Cache (Class V)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 M25,120 l150,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 M50,120 l102,0',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 M35,120 l128,0',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 M45,120 l112,0',
        },
      },
    },
  },
  'Air-Naval Gunfire Liaison Company (ANGLICO)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M25 150L175 50m-72 9a3 3 0 01-6 0 3 3 0 016 0zm-12 3h18m-9 0v18m-40 5l40 15 40-15v30l-40-15-40 15z',
          fill: 'black',
        },
        path_2: {
          d: 'M91 62h18m-9 0v18M89 70l1 8 1-2c3 3 6 5 9 5h0c3-1 6-2 8-5l2 2 1-8a26 26 0 01-6 3l1 1a9 9 0 01-6 3h0a9 9 0 01-6-3l1-1a25 25 0 01-6-3zm-4 30a15 15 0 1030 0 15 15 0 10-30 0',
          stroke: 'none',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M65 137l72-72zm-4-51l40 15 40-15v30l-40-15-40 15V90zm44-41c0 3-2 5-5 5s-5-2-5-5 2-5 5-5 5 2 5 5zm-20 5h30m-15 0v30',
          fill: 'black',
        },
        path_2: {
          d: 'M81 62c0 11 2 13 2 13l3-2c3 4 8 7 13 7h1c5 0 10-3 13-7l3 2s2-2 2-13l-10 6 2 2s-4 4-10 4v0h-1c-6 0-10-4-10-4l2-2-10-6zm4 38a15 15 0 1030 0 15 15 0 10-30 0z',
          stroke: 'black',
          fill: 'black',
          strokeWidth: 1,
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        return this.hostile;
      },
      get pending() {
        return this.hostile;
      },
      neutral: {
        path_1: {
          d: 'M45 155L155 45m-52 14a3 3 0 01-6 0 3 3 0 016 0zm-12 3h18m-9 0v18m-40 5l40 15 40-15v30l-40-15-40 15z',
          fill: 'black',
        },
        path_2: {
          d: 'M91 62h18m-9 0v18M89 70l1 8 1-2c3 3 6 5 9 5h0c3-1 6-2 8-5l2 2 1-8a26 26 0 01-6 3l1 1a9 9 0 01-6 3h0a9 9 0 01-6-3l1-1a25 25 0 01-6-3zm-4 30a15 15 0 1030 0 15 15 0 10-30 0',
          stroke: 'black',
          fill: 'black',
          strokeWidth: 1,
        },
      },
    },
  },
  'Air and Missile Defense': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M25,150 C25,110 175,110 175,150',
        },
        text: {
          symbolText: 'MD',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M70,142 C70,115 130,115 130,142',
        },
        text: {
          symbolText: 'MD',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'm 55,135 c 10,-20 80,-20 90,0',
        },
        text: {
          symbolText: 'MD',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'M45,150 C45,110 155,110 155,150',
        },
        text: {
          symbolText: 'MD',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
    },
  },
  Finance: {
    type: 'Sustainment - Financial',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,95 10,-10 20,0 10,10 m -40,0 0,20 40,0 0,-20 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Hospital with Surgical Capability': {
    type: 'Sustainment - Medical',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,50L100,150M25,100L175,100',
        },
        path_2: {
          d: 'm 100 66 a 5 5 0 0 1 0 10 a 5 5 0 0 1 0 -10 m 0 20 a 5 5 0 0 1 0 10 a 5 5 0 0 1 0 -10 v -10 m 5 -5 l 30 10 l -30 10',
          transform: 'translate(20,45)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_1: {
            d: 'M100,28L100,172M28,100L172,100',
          },
          path_2: {
            d: this.friendly.path_2.d,
            transform: 'translate(31,55) scale(0.8)',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_1: {
            d: 'M100,30.75L100,169.25M30.75,100L169.25,100',
          },
        };
        const modifiedTarget = { ...this.hostile, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_1: {
            d: 'M100,45L100,155M45,100L155,100',
          },
          path_2: {
            d: this.friendly.path_2.d,
            transform: 'translate(22,55) scale(0.9)',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Medical Treatment Facility (Hospital)': {
    type: 'Sustainment - Medical',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,50L100,150M25,100L175,100 M70,90 l0,20 M130,90 l0,20',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M100,28L100,172M28,100L172,100 M70,90 l0,20 M130,90 l0,20',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'M100,30.75L100,169.25M30.75,100L169.25,100 M70,90 l0,20 M130,90 l0,20',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'M100,45L100,155M45,100L155,100 M70,90 l0,20 M130,90 l0,20',
        },
      },
    },
  },
  Medical: {
    type: 'Sustainment - Medical',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,50L100,150M25,100L175,100',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M100,28L100,172M28,100L172,100',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'M100,30.75L100,169.25M30.75,100L169.25,100',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'M100,45L100,155M45,100L155,100',
        },
      },
    },
  },
  Engineer: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M60,120 L60,80 140,80 140,120 M100,80 L100,110',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Combined Arms': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 60,40 m 0,-40 -60,40 m 55,-40 c 25,0 25,40 0,40 l -50,0 C 50,120 50,80 75,80 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Civil-Military Cooperation (NATO)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,80 80,0 0,20 c 0,25 -80,25 -80,0 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Chaplain (Religious Support)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'REL',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Civil Affairs': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'CA',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Administrative: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ADM',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  CBRN: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85',
        },
        circle_1: {
          cx: '74',
          cy: '90',
          r: '6',
        },
        circle_2: {
          cx: '126',
          cy: '90',
          r: '6',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'CBRN and High-Yield Explosives': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85',
        },
        path_2: {
          d: 'm 90,80 20,0 10,20 -10,20 -20,0 -10,-20 z',
          fill: 'rgb(239, 239, 239)',
        },
        circle_1: {
          cx: '73',
          cy: '90',
          r: '6',
        },
        circle_2: {
          cx: '127',
          cy: '90',
          r: '6',
        },
        text: {
          symbolText: 'E',
          x: '100',
          y: '113',
          textAnchor: 'middle',
          fontSize: '35',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Infantry Fighting Vehicle': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,50 L175,150 M25,150 L175,50 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M55,50L55,150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M65,65 L137,137 M65, 137 L137, 65 Z M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M55,72L55,128 Z',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M50,65L150,135M50,135L150,65 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M55,65L55,135',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,45L155,155M45,155L155,45 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M55,45L55,155',
        },
      },
    },
  },
  'Medium Infantry (Stryker Unit)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,50l150,100m-150,0l150,-100 Z M90,60l20,0c10,0 10,15 0,15l-20,0c-10,0 -10,-15 0,-15 Z M65,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M95,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M125,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M65,65 L137,137 M65, 137 L137, 65 Z M90,60l20,0c10,0 10,15 0,15l-20,0c-10,0 -10,-15 0,-15 Z M76,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M96,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M116,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M50,65L150,135M50,135L150,65 M90,60l20,0c10,0 10,15 0,15l-20,0c-10,0 -10,-15 0,-15 Z M76,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M96,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M116,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,45L155,155M45,155L155,45 M90,60l20,0c10,0 10,15 0,15l-20,0c-10,0 -10,-15 0,-15 Z M76,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M96,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M116,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
    },
  },
  'Mechanized Armored Infantry': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,50 L175,150 M25,150 L175,50 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M60,70L140,130M60,130L140,70 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M50,65L150,135M50,135L150,65 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,45L155,155M45,155L155,45 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
    },
  },
  Music: {
    type: 'Sustainment - Music',
    affiliation: {
      friendly: {
        path: {
          d: 'm 99.6,110.5 c -4.8,-1.4 -10.9,2.2 -10.4,7.7 1,2.5 6.2,2.4 9.6,-0.2 1.9,-1.5 2.7,-3.8 2.3,-6.9 l -0.1,-21.3 c 12.7,5.8 7.6,14.8 5.6,20.7 4.7,-4.9 5.8,-13.2 1.5,-17.9 -4.4,-4.6 -5,-7 -8.4,-13 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Petroleum Oil And Lubricants (POL)': {
    type: 'Sustainment - POL',
    affiliation: {
      friendly: {
        path: {
          d: 'm 100,119 0,-24 m 0,0 C 99,95 85,81 85,81 l 30,0 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Armored reconnaissance (Cavalry)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M25,150L175,50',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M65, 137 L137, 65 Z',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M50,135L150,65',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M45,155L155,45',
        },
      },
    },
  },
  Cavalry: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,150L175,50',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M65, 137 L137, 65 Z',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M50,135L150,65',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,155L155,45',
        },
      },
    },
  },
  'CBRN Chemical Recon': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85',
        },
        path_2: {
          d: 'M25,150L175,50',
        },
        circle_1: {
          cx: '74',
          cy: '90',
          r: '6',
        },
        circle_2: {
          cx: '126',
          cy: '90',
          r: '6',
        },
        text: {
          symbolText: 'C',
          x: '100',
          y: '77',
          textAnchor: 'middle',
          fontSize: '30',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M65,137L137,65',
          },
        };
        // There has to be a better way to do this instead of spamming this const in every affiliation...
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M50,135L150,65',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        // https://stackoverflow.com/questions/37932434/how-to-change-a-property-on-an-object-without-mutating-it
        const propertyToModify = {
          path_2: {
            d: 'M45,155L155,45',
          },
        };
        // So basically all modifiedTarget does is copy the properties of the friendly key. propertyToModify then edits the path_2 key with new data
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  Infantry: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,50 L175,150 M25,150 L175,50',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M65,65 L137,137 M65, 137 L137, 65',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M50,65L150,135M50,135L150,65',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,45L155,155M45,155L155,45',
        },
      },
    },
  },
  'Anti-Armor (Anti-Tank)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,150 L100,52 175,150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M60,132 L100,30 140,132',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M55,135 L100,33 145,135',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,150 L100,47 155,150',
        },
      },
    },
  },
  'Armored Track Unit': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Field Artillery': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M85,100a15,15 0 1,0 30,0a15,15 0 1,0 -30,0',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Helicopter/Rotary-wing aviation': {
    type: 'Land Unit',
    flightCapable: true,
    affiliation: {
      friendly: {
        path: {
          d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Army Aviation/Fixed-wing aviation': {
    type: 'Land Unit',
    flightCapable: true,
    affiliation: {
      friendly: {
        path: {
          d: 'M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Unmanned Aerial Surveillance': {
    type: 'Land Unit',
    flightCapable: true,
    affiliation: {
      friendly: {
        path: {
          d: 'm 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Air Reconnaissance (Cavalry)': {
    type: 'Land Unit',
    flightCapable: true,
    affiliation: {
      friendly: {
        path: {
          d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M25,150L175,50',
          fill: 'black',
        },
        flying: {
          path: {
            d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M45,150 L139,60',
            fill: 'black',
          },
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M65, 137 L137, 65 Z',
          fill: 'black',
        },
        flying: {
          path: {
            d: 'M 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M45,150 L145,60',
            fill: 'black',
          },
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M65, 137 L137, 65 Z',
          fill: 'black',
        },
        flying: {
          path: {
            d: 'M 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M65,150 L135,55',
            fill: 'black',
          },
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M45,155L155,45',
          fill: 'black',
        },
        flying: {
          path: {
            d: 'M 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M45,150 L156,50',
            fill: 'black',
          },
        },
      },
    },
  },
  'Air Defense Artillery (Radar Dome)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,150 C25,110 175,110 175,150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M70,142 C70,115 130,115 130,142',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'm 55,135 c 10,-20 80,-20 90,0',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,150 C45,110 155,110 155,150',
        },
      },
    },
  },
  //! Graphic Control Measures
  Airfield: {
    type: 'Graphic Control Measure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M80,70 l40,0 M80,80 l25,-25',
          transform: 'translate(-300,-240) scale(4)',
          strokeWidth: '2',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Action Point': {
    type: 'Graphic Control Measure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z',
        },
        text_1: {
          symbolText: 'A',
          x: '100',
          y: '-20',
          fontSize: '35',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Checkpoint: {
    type: 'Graphic Control Measure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z',
        },
        text_1: {
          symbolText: 'CKP',
          x: '100',
          y: '-20',
          fontSize: '30',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Amnesty Point': {
    type: 'Graphic Control Measure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z',
        },
        text_1: {
          symbolText: 'AMN',
          x: '100',
          y: '-20',
          fontSize: '30',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Target Reference Point': {
    type: 'Graphic Control Measure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,45 100,0 m -50,-50 0,100',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Fly to Point (Normal)': {
    type: 'Graphic Control Measure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z',
        },
        text_1: {
          symbolText: 'FTP',
          x: '100',
          y: '-20',
          fontSize: '30',
          textAnchor: 'middle',
        },
        text_2: {
          symbolText: 'NRM',
          x: '100',
          y: '30',
          fontSize: '30',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  //! Tactical Mission Tasks
  Ambush: {
    type: 'Tactical Mission Task',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 0 45 h 120 l -27 -15 m 28 15 l -27 15 m -93 65 c 60 -60 60 -100 0 -160 m 0 20 h 18 z m 0 20 h 33 z m 0 21 h 42 z m 0 40 h 41 z m 0 19 h 33 z m 0 20 h 18 z',
          strokeLinejoin: 'bevel',
          transform: 'translate(20,50)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Attack by Fire': {
    type: 'Tactical Mission Task',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 0 45 h 120 l -27 -15 m 27 15 l -27 15 m -93 35 v -100 l -30 -30 m 30 129.5 l -30 30',
          strokeLinejoin: 'round',
          transform: 'translate(20,50)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  Block: {
    type: 'Tactical Mission Task',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 0 45 h 40 m 40 0 h 50 m 0 60 v -120',
          strokeLinejoin: 'round',
          transform: 'translate(20,50)',
        },
        text_1: {
          symbolText: 'B',
          x: '80',
          y: '112',
          fontSize: '45',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
};

export default militarySymbolsObject;
