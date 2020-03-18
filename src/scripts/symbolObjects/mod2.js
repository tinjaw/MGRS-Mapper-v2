// * MODIFIER 2 OBJECT * //
// * Sector 2 Modifiers reflect the MOBILITY of a unit or SIZE/RANGE/ALTITUDE of unit equipment ex- Air Assault, Wheeled, Mountain, etc * //
// ! If any Mod2 object is a mobility indicator, then you MUST add in the key-value "mobility: true". Refer to "Amphibious" as a template
// ! MOBILITY INDICATORS: These are only used for equipment and depicts the mobility feature that is NOT intrinsic to the piece of equipment itself. For example; a self propelled howitzer moving by train would get the "Rail" mobility indicator because the railway is not a part of a self propelled howitzer. These mobility indicators are put at the bottom of equipment symbols. An object like a heavy truck would have the wheeled indicator but since it is intrinsic to a truck it will not be placed below the symbol.
// ! The following are the only mobility indicators: Wheeled (limited cross country), Wheeled (cross country), Tracked, Wheeled and Tracked Combination, Towed, Railway, Over-snow, Sled, Pack Animals, Barge and Amphibious.
// ! Refer to 5-17 in ADRP 1-02 (AUG 2018)
//! Refer to "Amphibious" if you need to learn how to reconstruct a mobility indicator
const mod2Object = {
  None: {
    type: 'Default',
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
  Bicycle: {
    type: 'Infantry',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M89,132a11,11 0 1,0 22,0a11,11 0 1,0 -22,0',
          transform: 'translate(0,3)',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(0,10)';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(0,7)';
        return propertyToModify;
      },
    },
  },
  Mountain: {
    type: 'Infantry',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M90,140 L100,120 110,140z',
          transform: 'translate(0,6)',
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
  'Motorized (Outdated)': {
    type: 'Mobility',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,50L100,150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.d = 'M100,30L100,170';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.d = 'M100,43L100,156';
        return propertyToModify;
      },
    },
  },
  'Over Snow (Prime Mover)': {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'M122 143H87 M88 123a10 10 0 000 20',
            strokeWidth: 3,
          },
        };
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
      get mobility() {
        return this.friendly;
      },
    },
  },
  'Pack Animal': {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'm 84,143 9,-15 7,15 7,-15 9,15',
            strokeWidth: 3,
          },
        };
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
      get mobility() {
        return this.friendly;
      },
    },
  },
  Railroad: {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'M60,120 l80,0 M60,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M74,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M116,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M130,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
            transform: 'translate(0,14)',
            strokeWidth: 3,
          },
        };
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(20,33) scale(0.8)';
        return propertyToModify;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(20,43) scale(0.8)';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        return this.unknown;
      },
      get mobility() {
        return this.friendly;
      },
    },
  },
  Riverine: {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'm 70,125 c0,20 60,20 60,0z',
            strokeWidth: 3,
          },
        };
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
      get mobility() {
        return this.friendly;
      },
    },
  },
  Ski: {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'm 95,147 -9,-8 m 28,0 -9,8 m -15,-24 20,20 m 0,-20 -20,20',
            strokeWidth: 3,
          },
        };
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
      get mobility() {
        return this.friendly;
      },
    },
  },
  Towed: {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'M85 134h30m-40 0a5 5 0 1010 0 5 5 0 10-10 0m40 0a5 5 0 1010 0 5 5 0 10-10 0',
          },
        };
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
      get mobility() {
        return this.friendly;
      },
    },
  },
  'Tracked or Self-Propelled': {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'm 85,127 30,0 c 10,0 10,15 0,15 l -30,0 c -10,0 -10,-15 0,-15',
          },
        };
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
      get mobility() {
        return this.friendly;
      },
    },
  },
  Wheeled: {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'M76,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M96,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M116,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
          },
        };
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
      get mobility() {
        return this.friendly;
      },
    },
  },
  'VTOL (Vertical Take-off and Landing)': {
    type: 'Aerial',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'VTOL',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '143';
        propertyToModify.text_1.fontSize = '19';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Close Range': {
    type: 'Aerial',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CR',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Very Heavy': {
    type: 'Unit Modifier',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'VH',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Heavy: {
    type: 'Unit Modifier',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'H',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Medium: {
    type: 'Unit Modifier',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'M',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Light: {
    type: 'Unit Modifier',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'L',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Long Range': {
    type: 'Distance Modifier',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'LR',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Short Range': {
    type: 'Distance Modifier',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'SR',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Low to Medium Altitude': {
    type: 'Aerial',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'LMA',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'High Altitude': {
    type: 'Aerial',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'HA',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Medium to High Altitude': {
    type: 'Aerial',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'MHA',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Medium Altitude': {
    type: 'Aerial',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'MA',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Medium Range': {
    type: 'Distance Modifier',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'MR',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Launcher (Unmanned Aerial System)': {
    type: 'Aerial',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M80,140 L115,120 120,140',
          transform: 'translate(0,6)',
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
  'Recovery (Unmanned Aerial System)': {
    type: 'Aerial',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,125 c0,20 60,20 60,0',
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
  Decontamination: {
    type: 'CBRN',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'DCN',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Laboratory: {
    type: 'CBRN',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'LAB',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '145';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Casualty Staging': {
    type: 'Medical',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CS',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Dental: {
    type: 'Medical',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'D',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Psychological Medical Unit': {
    type: 'Medical',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'P',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Veterinary: {
    type: 'Veterinary',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'V',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Analysis: {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,120 0,-35 m 0,60 -30,-25 60,0 z',
          transform: 'translate(55,77) scale(0.45)',

        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(55,86) scale(0.45)';
        return propertyToModify;
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
      get neutral() {
        return this.hostile;
      },
    },
  },
  'Direction Finding': {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 120,120 0,-60 m 0,58 -30,-25 z m0,0 30, -25z',
          transform: 'translate(154,171) scale(0.45) rotate(180)',
          strokeWidth: 6,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(154,180) scale(0.45) rotate(180)';
        return propertyToModify;
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
      get neutral() {
        return this.hostile;
      },
    },
  },
  'Electric Ranging': {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M120,130 c-40,20 -80,-45 -40,-70 z M100,95 L140,75',
          transform: 'translate(70,103) scale(0.3)',
          strokeWidth: 6,
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(70,110) scale(0.3)';
        return propertyToModify;
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
      get neutral() {
        return this.hostile;
      },
    },
  },
  Intercept: {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,120 0,-35 m 0,60 -30,-25 60,0 z',
          transform: 'translate(55,77) scale(0.45)',
          strokeWidth: 6,
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(55,86) scale(0.45)';
        return propertyToModify;
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
      get neutral() {
        return this.hostile;
      },
    },
  },
  Jamming: {
    type: 'Military Intelligence',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'M25 120c10 0 0 10 10 10s0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10m-150 5c10 0 0 10 10 10s0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10',
          },
        };
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return {
          mobility: true,
          path_1: {
            d: 'M126 146c-8 0 0-8-8-8s0 8-8 8 0-8-8-8 0 8-8 8 0-8-8-8 0 8-8 8 0-8-10-8m70-4c-8 0 0-8-8-8s0 8-8 8 0-8-8-8 0 8-8 8 0-8-8-8 0 8-8 8 0-8-8-8 0 8-8 8 0-8-8-8 0 8-5 8',
          },
        };
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        return {
          mobility: true,
          path_1: {
            d: 'M133 150c-9 0 0-10-9-10-10 0 0 10-10 10-9 0 0-10-9-10-10 0 0 10-10 10-9 0 0-10-9-10s0 10-9 10c-10 0 0-10-13-10m83-4c-9 0 0-10-9-10-10 0 0 10-10 10-9 0 0-10-9-10s0 10-9 10c-10 0 0-10-10-10-9 0 0 10-9 10-10 0 0-10-10-10-9 0 0 10-9 10s0-10-9-10c-10 0 0 10-7 10',
          },
        };
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        return {
          mobility: true,
          path_1: {
            d: 'M45 45l110 110m-110 0L155 45M45 124c10 0 0 10 10 10s0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10m-110 5c10 0 0 10 10 10s0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10 0-10 10-10 0 10 10 10',
          },
        };
      },
      get mobility() {
        return this.friendly;
      },
    },
  },
  Search: {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 120,120 0,-60 m 0,58 -30,-25 z m0,0 30, -25z',
          transform: 'translate(46,92) scale(0.45)',
          strokeWidth: 6,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(46,101) scale(0.45)';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(46,97) scale(0.45)';
        return propertyToModify;
      },
    },
  },
  Tactical: {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'TAC',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        return propertyToModify;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Support: {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'SPT',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        return propertyToModify;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Strategic: {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'STR',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        return propertyToModify;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Supply: {
    type: 'Quartermaster',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M25,120 l150,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M57,130 l85,0',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'M45,130 l111,0',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'M45,120 l110,0',
        },
      },
    },
  },
  Intermodal: {
    type: 'Transportation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,129 40,0 0,-4 8,9 -8,9 0,-4 -40,0 0,4 -8,-9 8,-9 z',
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
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.d = 'm 80,133 40,0 0,-4 8,9 -8,9 0,-4 -40,0 0,4 -8,-9 8,-9 z';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        return this.unknown;
      },
    },
  },
  'Recovery (Maintenance)': {
    type: 'Maintenance',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'M77,126 c8,0 8,16 0,16 m6,-8 l35,0 m6,-8 c-8,0 -8,16 0,16',
            strokeWidth: 3,
          },
        };
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
      get mobility() {
        return this.friendly;
      },
    },
  },
  'Cross Country Vehicle': {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'M67,130 l65,0 M70,137a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M95,137a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M120,137a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
          },
        };
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(20,30) scale(0.8)';
        return propertyToModify;
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
      get neutral() {
        return this.hostile;
      },
      get mobility() {
        return this.friendly;
      },
    },
  },
  'Mine Layer Launcher': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,130 0,10 40,0 0,-10 z',
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
  'Limited Cross Country Vehicle': {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'M67,132 l65,0 M67,139a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M122,139a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
          },
        };
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(20,30) scale(0.8)';
        return propertyToModify;
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
      get neutral() {
        return this.hostile;
      },
      get mobility() {
        return {
          mobility: true,
          path_1: {
            d: 'M67,128 l65,0 M67,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M122,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
          },
        };
      },
    },
  },
  'Wheeled and Tracked': {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'M68 135a7 7 0 1014 0 7 7 0 10-14 0m25-7h30c10 0 10 15 0 15H93c-10 0-10-15 0-15',
          },
        };
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(20,30) scale(0.8)';
        return propertyToModify;
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
      get neutral() {
        return this.hostile;
      },
      get mobility() {
        return {
          mobility: true,
          path_1: {
            d: 'M68 135a7 7 0 1014 0 7 7 0 10-14 0m25-7h30c10 0 10 15 0 15H93c-10 0-10-15 0-15',
          },
        };
      },
    },
  },
  Production: {
    type: 'Installation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'PROD',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        return propertyToModify;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Repair: {
    type: 'Installation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'RPR',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        return propertyToModify;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Research: {
    type: 'Installation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'RSH',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        return propertyToModify;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Service: {
    type: 'Installation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'SVC',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        return propertyToModify;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Storage: {
    type: 'Installation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'STOR',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        return propertyToModify;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Test Facility': {
    type: 'Installation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'TEST',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        return propertyToModify;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '155';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.hostile));
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  'Premature IED': {
    type: 'Activity',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'P',
          x: '100',
          y: '145',
          fontSize: '22',
          textAnchor: 'middle',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '155';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '150';
        return propertyToModify;
      },
    },
  },
  Rail: {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'M60,120 l80,0 M60,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M74,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M116,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M130,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
            transform: 'translate(0,14)',
          },
        };
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(31,49) scale(0.7)';
        return propertyToModify;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(25,50) scale(0.75)';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        return this.unknown;
      },
      get mobility() {
        return this.friendly;
      },
    },
  },
  Airborne: {
    type: 'Capabilities',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M75,140 C75,125 100,125 100,140 C100,125 125,125 125,140',
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
  'Air Assault': {
    type: 'Capabilities',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M85,55 L100,75 115,55',
          transform: 'translate(0,66)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(0,76)';
        return propertyToModify;
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
      get neutral() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(0,73)';
        return propertyToModify;
      },
    },
  },
  Amphibious: {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          // * Mobility is a special key that when matched up with equipment will translate the path below the symbol in getMod2Data() * //
          mobility: true,
          path_1: {
            d: 'm 25,145 c 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 20,20',
          },
        };
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return {
          mobility: true,
          path_1: {
            d: 'M 70.4 142.4 C 74.8 137 66.8 125 81.4 125 C 100.2 125 81.4 145 100.2 145 C 119 145 100.2 125 119 125 C 133.3 125 125.7 136.6 129.7 142.1',
            transform: 'translate(15, 23) scale(0.85)',
          },
        };
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        return {
          mobility: true,
          path_1: {
            d: 'M 64 144.9 C 80.4 143.9 63.1 125 81.4 125 C 100.2 125 81.4 145 100.2 145 C 119 145 100.2 125 119 125 C 137.1 125 120.2 143.6 135.9 144.9',
          },
        };
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        return {
          mobility: true,
          path_1: {
            d: 'M 45 125 C 61.7 125.9 44.2 145 62.6 145 C 81.4 145 62.6 125 81.4 125 C 100.2 125 81.4 145 100.2 145 C 119 145 100.2 125 119 125 C 137.8 125 119 145 137.8 145 C 155.9 145 138.9 126.2 154.8 125',
          },
        };
      },
      get mobility() {
        return this.friendly;
      },
    },
  },
  Sled: {
    type: 'Mobility',
    affiliation: {
      get friendly() {
        return {
          mobility: true,
          path_1: {
            d: 'M115,125 C125,125 125,135 115,135 L85,135 C75,135 75,125 85,125',
          },
        };
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(1,7)';
        return propertyToModify;
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
      get neutral() {
        return this.hostile;
      },
      get mobility() {
        return {
          mobility: true,
          path_1: {
            d: 'M150,120 c25,0,25,18,0,18H47c-25,0-25-18,0-18',
            transform: 'translate(1,10)',
          },
        };
      },
    },
  },
};

export default mod2Object;
