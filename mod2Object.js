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
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M60,120 l80,0 M60,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M74,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M116,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M130,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
          transform: 'translate(0,14)',
        },
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
};

export default mod2Object;
