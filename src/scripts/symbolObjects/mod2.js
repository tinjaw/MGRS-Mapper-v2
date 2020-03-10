// * MODIFIER 2 OBJECT * //
// * Sector 2 Modifiers reflect the MOBILITY of a unit or SIZE/RANGE/ALTITUDE of unit equipment ex- Air Assault, Wheeled, Mountain, etc * //
// ! If any Mod2 object is a mobility indicator, then you MUST add in the key-value "mobility: true". Refer to "Amphibious" as a template
// ! MOBILITY INDICATORS: These are only used for equipment and depicts the mobility feature that is NOT intrinsic to the piece of equipment itself. For example; a self propelled howitzer moving by train would get the "Rail" mobility indicator because the railway is not a part of a self propelled howitzer. These mobility indicators are put at the bottom of equipment symbols. An object like a heavy truck would have the wheeled indicator but since it is intrinsic to a truck it will not be placed below the symbol.
// ! The following are the only mobility indicators: Wheeled (limited cross country), Wheeled (cross country), Tracked, Wheeled and Tracked Combination, Towed, Railway, Over-snow, Sled, Pack Animals, Barge and Amphibious.
// ! Refer to 5-17 in ADRP 1-02 (AUG 2018)
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
