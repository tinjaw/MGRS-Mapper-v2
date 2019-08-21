// * UNIT SIZE OBJECT * //
const unitSizeObject = {
  none: {
    friendly: {
      d: '',
    },
    get friendlyTemplated() {
      return this.friendly;
    },
    get hostile() {
      return this.friendly;
    },
    get hostileTemplated() {
      return this.friendly;
    },
    get unknown() {
      return this.friendly;
    },
    get pending() {
      return this.friendly;
    },
    get neutral() {
      return this.friendly;
    },
  },
  squad: {
    friendly: {
      d: 'M92.5,30a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0',
    },
    get friendlyTemplated() {
      return this.friendly;
    },
    hostile: {
      d: 'M92.5,8a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0',
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
      d: 'M92.5,25a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0',
    },
  },
};

export default unitSizeObject;
