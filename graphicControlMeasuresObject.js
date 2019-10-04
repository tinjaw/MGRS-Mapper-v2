// * Graphic Control Measures Object * //

const graphicControlMeasuresObject = {
  None: {
    type: 'None',
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
  Airfield: {
    type: 'Point',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M80,70 l40,0 M80,80 l25,-25',
          transform: 'translate(-300,-155) scale(4)',
          strokeWidth: '2',
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
  'Action Point': {
    type: 'Point',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z',
        },
        text_1: {
          symbolText: 'A',
          x: '100',
          y: '-20',
          fontSize: '35',
          textAnchor: 'middle',
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
  'Amnesty Point': {
    type: 'Point',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z',
        },
        text_1: {
          symbolText: 'AMN',
          x: '100',
          y: '-20',
          fontSize: '30',
          textAnchor: 'middle',
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
  'Fly to Point (Normal)': {
    type: 'Point',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z',
        },
        text_1: {
          symbolText: 'FTP',
          x: '100',
          y: '-20',
          fontSize: '30',
          textAnchor: 'middle',
        },
        text_2: {
          symbolText: 'NRM',
          x: '100',
          y: '30',
          fontSize: '30',
          textAnchor: 'middle',
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

export default graphicControlMeasuresObject;
