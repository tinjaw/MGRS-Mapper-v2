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
        const modifiedTarget = Object.assign({}, this.friendly, propertyToModify);
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
        const modifiedTarget = Object.assign({}, this.friendly, propertyToModify);
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
        const modifiedTarget = Object.assign({}, this.friendly, propertyToModify);
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
  'Mechanized Infantry': {
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
  'Mechanized Armor': {
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
      hostile: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
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
  Ambush: {
    type: 'Tactical Mission Task',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm -140 50 h 120 l -27 -15 m 28 15 l -27 15 m -93 65 c 60 -60 60 -100 0 -160 m 0 20 h 18 z m 0 20 h 33 z m 0 21 h 42 z m 0 40 h 41 z m 0 19 h 33 z m 0 20 h 18 z',
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
          d: 'm -140 50 h 120 l -27 -15 m 27 15 l -27 15 m -93 35 v -100 l -30 -30 m 30 129.5 l -30 30',
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
