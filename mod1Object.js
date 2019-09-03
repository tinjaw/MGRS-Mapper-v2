// * MODIFIER 1 OBJECT * //
const mod1Object = {
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
  Foraging: {
    type: 'Activity',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 12.5,3.5 a 22.5,22.5 0 0,1 0,43 a 22.5,22.5 0 1,0 0,-43 z',
          fill: 'none',
          strokeWidth: '6',
          transform: 'translate(110,75) scale(-0.4,-0.4)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
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

export default mod1Object;
