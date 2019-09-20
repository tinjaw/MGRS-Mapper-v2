// * MODIFIER 2 OBJECT * //
// * Sector 2 Modifiers reflect the MOBILITY of a unit or SIZE/RANGE/ALTITUDE of unit equipment ex- Air Assault, Wheeled, Mountain, etc * //
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
    },
  },
};

export default mod2Object;
