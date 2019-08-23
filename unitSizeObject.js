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
  region: {
    friendly: {
      d: 'M0,40l25,-25m0,25l-25,-25M35,40l25,-25m0,25l-25,-25M70,40l25,-25m0,25l-25,-25M105,40l25,-25m0,25l-25,-25M140,40l25,-25m0,25l-25,-25M175,40l25,-25m0,25l-25,-25',
    },
    get friendlyTemplated() {
      return this.friendly;
    },
    hostile: {
      d: 'M0,18l25,-25m0,25l-25,-25M35,18l25,-25m0,25l-25,-25M70,18l25,-25m0,25l-25,-25M105,18l25,-25m0,25l-25,-25M140,18l25,-25m0,25l-25,-25M175,18l25,-25m0,25l-25,-25',
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
      d: 'M0,35l25,-25m0,25l-25,-25M35,35l25,-25m0,25l-25,-25M70,35l25,-25m0,25l-25,-25M105,35l25,-25m0,25l-25,-25M140,35l25,-25m0,25l-25,-25M175,35l25,-25m0,25l-25,-25',
    },
  },
};

export default unitSizeObject;
