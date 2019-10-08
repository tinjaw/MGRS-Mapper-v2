// * COMMAND POST OBJECT * //
const commandPostObject = {
  None: {
    type: 'Default/None',
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
  'Tactical Command Post': {
    type: 'Command Post',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M25,150 L25,250',
        },
        text_1: {
          symbolText: 'TAC',
          x: '100',
          y: '172',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M28,100 L28,272',
        },
        text_1: {
          symbolText: 'TAC',
          x: '100',
          y: '192',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'M30.75,100 L30.75,269.25',
        },
        text_1: {
          symbolText: 'TAC',
          x: '100',
          y: '192',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'M45,155 L45,255',
        },
        text_1: {
          symbolText: 'TAC',
          x: '100',
          y: '180',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
    },
  },
  'Main Command Post': {
    type: 'Command Post',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M25,150 L25,250',
        },
        text_1: {
          symbolText: 'MAIN',
          x: '100',
          y: '172',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M28,100 L28,272',
        },
        text_1: {
          symbolText: 'MAIN',
          x: '100',
          y: '192',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'M30.75,100 L30.75,269.25',
        },
        text_1: {
          symbolText: 'MAIN',
          x: '100',
          y: '192',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'M45,155 L45,255',
        },
        text_1: {
          symbolText: 'MAIN',
          x: '100',
          y: '180',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
    },
  },
};

export default commandPostObject;
