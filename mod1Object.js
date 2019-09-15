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
  Assault: {
    type: 'Aviation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'ASLT',
          x: '100',
          y: '71',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        // https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
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
  Bridging: {
    type: 'Engineer',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,75 5,-5 30,0 5,5 m -40,-20 5,5 30,0 5,-5',
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
};

export default mod1Object;
