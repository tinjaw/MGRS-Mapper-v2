// * MODIFIER 2 OBJECT * //
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
          fill: 'none',
          transform: 'translate(0,14)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(0,9)';
        return propertyToModify;
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
        return this.friendly;
      },
    },
  },
};

export default mod2Object;
