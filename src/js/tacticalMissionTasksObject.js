// * Tactical Mission Tasks Object * //

const tacticalMissionTasksObject = {
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
  Ambush: {
    type: 'Enemy Tasks',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm -140 50 h 120 l -27 -15 m 28 15 l -27 15 m -93 65 c 60 -60 60 -100 0 -160 m 0 20 h 18 z m 0 20 h 33 z m 0 21 h 42 z m 0 40 h 41 z m 0 19 h 33 z m 0 20 h 18 z',
          strokeLinejoin: 'bevel',
          transform: 'translate(20,50)',
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
  'Attack by Fire': {
    type: 'Enemy Tasks',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm -140 50 h 120 l -27 -15 m 27 15 l -27 15 m -93 35 v -100 l -30 -30 m 30 129.5 l -30 30',
          strokeLinejoin: 'round',
          transform: 'translate(20,50)',
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
  Block: {
    type: 'Enemy Tasks',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm -140 50 h 40 m 40 0 h 50 m 0 60 v -120',
          strokeLinejoin: 'round',
          transform: 'translate(20,50)',
        },
        text_1: {
          symbolText: 'B',
          x: '-60',
          y: '116',
          fontSize: '45',
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

export default tacticalMissionTasksObject;
