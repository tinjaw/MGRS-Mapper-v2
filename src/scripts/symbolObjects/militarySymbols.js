// * MILITARY SYMBOLS OBJECT * //
const militarySymbolsObject = {
  'Default Land Unit': {
    type: 'Land Unit',
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
  'Firearms Retailer': {
    type: 'Installation - Commercial',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M85.1 123H84v-3.2a9 9 0 01-2.3-.3l-2.3-.7v-1.9c.7.5 1.5.8 2.2 1l2.3.4v-4.9a8.3 8.3 0 01-3.5-1.3 3.3 3.3 0 01-1.1-2.5c0-1.2.4-2.1 1.2-2.8.8-.7 1.9-1.1 3.4-1.2v-2.5H85v2.5l1.9.2 1.8.5v1.9l-1.8-.7c-.6-.2-1.3-.3-1.9-.3v4.6c1.6.3 2.8.7 3.6 1.3.8.6 1.1 1.5 1.1 2.6 0 1.2-.4 2.2-1.2 2.9-.8.7-2 1.1-3.5 1.2v3.3m-1.1-11.5v-4.4c-.8.1-1.5.3-1.9.7-.4.4-.7.9-.7 1.5s.2 1.1.6 1.4c.4.3 1.1.6 2 .7m1.1 2.1v4.7a4 4 0 002.1-.8c.5-.4.7-.9.7-1.6 0-.6-.2-1.1-.7-1.5-.4-.4-1.1-.6-2.1-.8m22.6-21.9l-8 20.8.8.3 8-20.8-.8-.3zm-43 6.5v.8l.3 26v.8h.8l32.2-.2h.4l.2-.3 7.3-8.7.2-.2v-.3l-.2-10.1v-.4l-.3-.2-8.4-6.6-.2-.2h-.3l-31.3-.4h-.8zm1.6 1.6l30.2.3 7.9 6.2.2 9.4-6.9 8.2-31 .2-.3-24.3zm31.1-14.4h14.4v7.7c-2.1 0-6.2 1.4-7.8.9-1.6-.5-5-2.1-6.6-2.2v-6.4zm-25.5 0h22.1v7.9c0 .8 4 1.9 4.8 2.2l5.2 2 9.6-1.2 1 3.6 1.4 4.9c.3.5 1.3 3.2 1.3 4.1v.2c0 1.5-.9 2.5-.9 4.7h18l-1.1-3.9-.8-2.4-4-13.4c-.3-.5-.6-.9-.6-1.7 0-1.7 5.2-5.5 6.2-7.1l-3.6-11.1H71.8v11.1z',
          stroke: 'none',
          fill: 'black',
        },
        path_2: {
          d: 'M85.1 113.6v4.7a4 4 0 002.1-.8c.5-.4.7-.9.7-1.6 0-.6-.2-1.1-.7-1.5-.4-.4-1.1-.6-2.1-.8m-1.1-2.1v-4.4c-.8.1-1.5.3-1.9.7-.4.4-.7.9-.7 1.5s.2 1.1.6 1.4c.4.3 1.1.6 2 .7M66.4 99.8l.3 24.3 31-.2 6.9-8.2-.2-9.4-7.9-6.2-30.2-.3zm17.7 3.3h1.1v2.5l1.9.2 1.8.4v1.9l-1.8-.7c-.6-.2-1.3-.3-1.9-.3v4.6c1.6.3 2.8.7 3.6 1.3.8.6 1.2 1.5 1.2 2.7 0 1.2-.4 2.2-1.2 2.9-.8.7-2 1.1-3.5 1.2v3.3h-1.1v-3.2a10.5 10.5 0 01-4.6-1.1v-1.9c.7.5 1.5.8 2.2 1.1a9 9 0 002.3.3v-4.9a8.3 8.3 0 01-3.5-1.3 3.3 3.3 0 01-1.1-2.5c0-1.2.4-2.1 1.2-2.8.8-.7 1.9-1.1 3.4-1.2v-2.5z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
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
  'Hazardous Materials Production': {
    type: 'Installation - Commercial',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 104.7,71.8 h 5 v 15 h 11.1 v -15 h 5 v 15 h 7.5 v 41.4 h -67.4 V 86.8 h 38.8 v -15 z m -40,57.9 h 69.8 V 85.5 h -7.1 v -15.2 h -8 v 15.2 h -8 v -15.2 h -8 v 15.2 h -38.6 v 44.1 l 0,0 z m 15.5,-21.8 h 38.6 l -19.3,18.6 -19.3,-18.6 z m 21.8,-16.8 c 0.5,0.4 4.3,3.8 4.3,4.3 v 12 h -4.3 V 91.1 z m -5,-0 0,16.3 h -4.3 l 0.1,-12.2 4.1,-4.1 0,0 z m -12.1,12 c 0,-0.4 3.1,-3.2 3.6,-3.6 v 7.8 h -3.6 v -4.3 z m 25.7,-3.6 3.7,3.4 c -0.2,0.4 -0.2,-0.2 -0.2,0.5 v 4 h -3.6 v -7.9 z m 9.4,8.2 -20.5,-20 -20.4,20 20.4,19.9 20.5,-19.9 z',
          stroke: 'none',
          fill: 'black',
        },
        path_2: {
          d: 'm 99.5,126.5 19.3,-18.6 -38.6,0 z m 0,1 -20.4,-19.9 20.4,-20 20.5,20 -20.5,19.8 z m 5.2,-40.8 h -38.8 v 41.4 h 67.4 V 86.8 h -7.5 v -15 h -5 v 15 h -11.1 v -15 h -5 v 15 z m 5.9,20.6 h 3.6 v -4 c 0,-0.7 -0,-0.1 0.2,-0.5 l -3.7,-3.4 v 7.9 z m -8.6,0 h 4.3 v -12 c 0,-0.4 -3.8,-3.9 -4.3,-4.3 v 16.3 z m -9.3,0 4.3,0 -0,-16.3 -4.1,4.1 z m -7.8,-4.3 v 4.3 h 3.6 v -7.9 c -0.5,0.3 -3.6,3.2 -3.6,3.6 z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
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
  'Warehouse/Storage Facility/Building': {
    type: 'Installation - Facility',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 104.1,74.8 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 69.6 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z',
          strokeWidth: 3,
          fill: 'rgb(236,236,236)',
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
  'Water Treatment Facility': {
    type: 'Installation - Water',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 65,90 50,0 c 10,0 20,10 20,20 m -40,-30 20,0 m -10,0 0,10',
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
  School: {
    type: 'Installation - Civilian',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 98.4,96.4 H 83.7 v 31.7 h 32 V 96.4 H 100.9 V 84.6 c 0,-0.6 6.5,-3 7.5,-3.4 1.3,-0.5 6.9,-3 7.9,-3 -0.3,-0.4 -14.7,-6.3 -15.7,-6.3 H 98.4 V 96.4 z',
          fill: 'black',
          strokeWidth: 3,
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
  Telecommunications: {
    type: 'Installation - Signal',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,105 20,0 0,0 m -25,15 15,-30 15,30 m -55,-40 25,10 0,-10 15,10 15,-10 0,10 25,-10',
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
  'Raw Material Mine': {
    type: 'Installation - Raw Material',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 105,85 10,10 5,-5 c -5,-5 -10,-5 -15,-5 z M 95,85 85,95 80,90 c 5,-5 10,-5 15,-5 z m -5,5 30,30 m -40,0 30,-30',
          fill: 'black',
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
  'Mass Grave': {
    type: 'Installation - Other',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M73 95h10m-5-5v15m8-20v30H71V85zm30 10h10m-5-5v15m-8-20v30h15V85zM94 95h10m-5-5v15m-7-20h15v30H92z',
          strokeWidth: 3,
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
  'Food Cache (Class I)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 12.5,3.5 a 22.5,22.5 0 0,1 0,43 a 22.5,22.5 0 1,0 0,-43 z',
          transform: 'translate(120,115) scale(-0.8,-0.8)',
        },
        path_2: {
          d: 'M25,120 l150,0',
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
  'Printed Media': {
    type: 'Installation - Media',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 65,100 75,0 M90,90a10,10 0 1,0 20,0a10,10 0 1,0 -20,0 M90,110a10,10 0 1,0 20,0a10,10 0 1,0 -20,0',
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
  'Nuclear Power Plant': {
    type: 'Installation - Energy Facility Infrastructure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M87 124c-8-4-13-13-13-22h14c0 4 3 8 6 10l-7 12zm39-22c0 9-5 18-13 23l-7-13c3-2 6-6 6-10h14zM87 79c8-5 18-5 26 0l-7 12c-3-2-9-2-12 0l-7-12zm21 23c0 4-4 8-8 8s-8-4-8-8c0-5 4-8 8-8s8 3 8 8z',
          fill: 'black',
          strokeWidth: 1,
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
  'Electric Power Plant': {
    type: 'Installation - Energy Facility Infrastructure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 150 150 l 20 -50 l 20 50 l 20 -50 l 20 50',
          transform: 'translate(43,55) scale(0.3)',
          strokeWidth: 6,
        },
        path_2: {
          d: 'm 100,60.5 c -16.4,0 -29.6,13.2 -29.6,29.6 0,12.8 8.3,23.9 19.7,27.8 l 0,19.7 c 3.2,1.2 6.3,1.8 9.9,1.8 3.6,0 6.7,-0.6 9.9,-1.8 l 0,-19.8 c 11.5,-3.9 19.8,-15 19.7,-27.8 0,-16.4 -13.2,-29.6 -29.6,-29.6 z',
          transform: 'translate(40,40) scale(0.6)',
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
  'Broadcast Transmitter Antennae': {
    type: 'Installation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,60 20,20 20,-20 m -20,0 0,80',
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
  Economic: {
    type: 'Installation',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ECON',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
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
  'Safe House': {
    type: 'Installation',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SAFE',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
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
  'Blacklist Location': {
    type: 'Installation',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'BLK',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Gray List Location': {
    type: 'Installation',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'GRAY',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
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
  'White List Location': {
    type: 'Installation',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'WHT',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Aircraft Production and Assembly': {
    type: 'Installation - Aircraft',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 95.1,109.3 c 0,0 -20.8,4.9 -30.1,6.7 -2.2,0.4 -5.7,0.2 -6.5,-2 -0.4,-1.1 3.3,-6.6 6.5,-7.3 8.7,-1.9 25.7,-5.5 25.7,-5.5 l 3.1,-16.1 4,-0.8 0.3,15.9 25.6,-5.8 6.5,-13.2 5.3,-1.4 -3.3,16.1 14,4.8 -4.3,1.2 -13.7,-2.8 -23.6,6.7 31.6,11.8 -5.5,2.5 z',
          fill: 'black',
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
  'Terrorist Leader': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        text_1: {
          symbolText: 'T',
          x: '75',
          y: '90',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'E',
          x: '75',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_3: {
          symbolText: 'R',
          x: '75',
          y: '130',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_4: {
          symbolText: 'L',
          x: '125',
          y: '90',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_5: {
          symbolText: 'D',
          x: '125',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_6: {
          symbolText: 'R',
          x: '125',
          y: '130',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  'Terrorist Group': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'TER',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  'Targeted Group': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'TGT',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  'Religious Group': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'REL',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  Speaker: {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        text_1: {
          symbolText: 'S',
          x: '75',
          y: '90',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'P',
          x: '75',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_3: {
          symbolText: 'K',
          x: '75',
          y: '130',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  Leader: {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        text_1: {
          symbolText: 'L',
          x: '75',
          y: '90',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'D',
          x: '75',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_3: {
          symbolText: 'R',
          x: '75',
          y: '130',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  Gang: {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'GANG',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
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
  'Foreign Fighters': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'FF',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  'Displaced Persons/Refugees/Evacuees': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'DPRE',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
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
  'Rape Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'R',
          x: '75',
          y: '100',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'A',
          x: '75',
          y: '120',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  'Piracy Victims (Multiple)': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        text_1: {
          symbolText: 'PI',
          x: '100',
          y: '73',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  'Kidnap Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'K',
          x: '75',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  'Hijack Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'H',
          x: '75',
          y: '110',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  'Murder Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'M',
          x: '75',
          y: '100',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'U',
          x: '75',
          y: '120',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  'Execution Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'E',
          x: '75',
          y: '100',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'X',
          x: '75',
          y: '120',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  'Assassination Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 79 74 l 45 54',
        },
        text_1: {
          symbolText: 'A',
          x: '75',
          y: '100',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
        },
        text_2: {
          symbolText: 'S',
          x: '75',
          y: '120',
          textAnchor: 'middle',
          fontSize: '22',
          fontWeight: 'bold',
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
  'Attempted Criminal Activities Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z',
        },
        path_2: {
          d: 'm 52 74 l 96 51',
          strokeDashArray: '10,6',
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
  'Attempted Criminal Activities Multiple Victims': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_4: {
          d: 'm 52 74 l 96 51',
          strokeDashArray: '10,6',
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
  'Criminal Activities Multiple Victims': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_4: {
          d: 'm 52 74 l 96 51',
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
  'Criminal Activities Victim': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10 z m -19 -40 l 40 45',
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
  'Unspecified Organization': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_2: {
          d: 'm 80 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
        },
        path_3: {
          d: 'm 135 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
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
  'Unspecified Individual': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108 85 c 0 10 -15 10 -15 0 c 0 -10 15 -10 15 0 z m -8 7.3 l 0 25 m -10 -20 l 20 0 m -10 20 l -8 10 m 8 -10 l 8 10',
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
  'U.S. Marshals Service': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100 70l7 20 22 1-18 13 7 20-18-12-18 12 7-20-17-13 21-1zm0-5a35 35 0 100 70 35 35 0 000-70zm0 5a30 30 0 110 60 30 30 0 010-60z',
          strokeWidth: 2,
          fill: 'black',
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
  'U.S. Secret Service (USSS)': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USSS',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
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
  'Transportation Security Agency (TSA)': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'TSA',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  Spy: {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SPY',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  Prison: {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M63 68v5h7v33c-3 1-6 4-6 7s2 4 2 5v9h-3v5h75v-5h-2v-9c2-5 0-11-4-12V73h6v-5H63zm12 5h12v35l-3 3-2 3-3 7-3-4 1-3v-2l-2-5V73zm17 0h18v18l-3-5c-2-2-3-3-6-3h-1l-5 2-2 1-1 2V73zm22 0h13v34l-3 4 1 6-2 3-3-6c-2-3-3-5-6-5V73zm-14 12h1c4 0 8 5 8 10v1c0 4-4 10-8 10h-2c-4 0-8-6-7-10 0-5 3-11 8-11zm10 16v6l-3-1 3-5zm-18 3l2 3h-2v-3zm-21 4c2 0 4 2 4 5 0 5-5 7-7 4s-1-9 3-9zm60 0c2 0 3 3 3 5 0 4-1 4-2 5h-3l-2-3v-2c-1-2 1-5 4-5zm-25 0l4 1v18H92v-17l6-1 8-1zm8 3c3 1 3 2 5 5 1 3 3 5 3 8l1 1 4-6v8h-13v-16zm-27 0v16H75v-8c1 0 2 6 4 6s2-5 3-7c1-3 2-6 5-7zm47 9v7h-2v-7h2zm-66 0l2 1v6h-2v-7z',
          stroke: 'none',
          fill: 'black',
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
  'Police Department': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 100,118 C 76,109 85,95 82,82 c 6,7 12,7 18,0 6,7 12,7 18,0 -3,13 6,27 -18,36 z',
          strokeWidth: 3,
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
  Pirates: {
    type: 'Civilian Authorities - Pirates',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M143 80c0 1 1 3-3 9-5 8-11 14-18 19a83 83 0 01-13 8l-4-2h0l4-2c12-6 14-10 14-10s-3 3-14 9l-4 3-4-2a102 102 0 0034-24l7-9c1-1 1-2 1 1zm-3 6l-5 7-7 8 8-8 4-7zm-22 33l-2 1c-1 1-1 1-6-1-2-1-11-3-18-8l-14-9s2 4 14 10c10 6 13 6 17 8l7 2v3l-16-5-21-12c-7-5-13-11-17-19-4-6-4-8-4-9 0-3 1-2 1-1l7 9a90 90 0 0039 26 110 110 0 0013 5zm-51 2c1 0 2 1 2 3s-2 2-2 2l2 1 2-1c1 0-2 3-4 3s-3-2-3-4c0-3 1-4 3-4zm4 0l2 2 1 1-1-1 1-2 2 1 2 2-1-2v-1l2 2v3h-7c-1 0-2-1-2-3-1-2 0-2 1-2zm6-3s0 2-2 2-2-1-2-3 1-3 3-3l4 2 3 4 2 1-1 3 1 4 1 1 1-1c1 0 2 1 2 3s-1 2-3 2-3-1-4-3l-2-7-2-5h-1zm8 2l-2-1 9-3a27 27 0 003 2l-4 1-6 1zm15 0l-15 5v-3l6-2 5-2 4 2zm14 8l1 1 1-1 1-4-1-3 2-1 3-4 4-2c1 0 3 1 3 3s-1 3-2 3l-2-2h-1l-2 5-2 7c-1 2-2 3-4 3s-3-1-3-2 0-3 2-3zm10-7v1l-1 2 2-2 2-1c2 0 1 1 1 1a5 5 0 01-1 2 2 2 0 001-1c0-2 1-2 2-2s1 0 1 2-1 2-2 3h-7c-2 0-1-2 0-3l2-2zm8 6l2-1c0-1-3 0-3-2s1-3 3-3 3 1 3 4c0 2-2 4-3 4-3 0-4-3-4-3l2 1z',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M101 68c13 0 23 9 23 20s-10 20-23 20-23-9-23-20 10-20 23-20z',
          strokeWidth: 2,
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
  'Law Enforcement Agency': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100 61c-3 0-4 2-4 4l2 4-8 14H76c0-3-2-4-4-4-3 0-4 1-4 4 0 2 1 4 4 4h1l8 13-8 14h-1c-3 0-4 2-4 4s1 4 4 4c2 0 4-2 4-4 0 0 0 0 0 0h14l8 13-2 4c0 2 2 4 4 4s4-1 4-4l-2-3 8-14h14s0 0 0 0c0 2 2 4 4 4 3 0 4-2 4-4s-1-4-4-4h-1l-8-14 8-14 1 1c3 0 4-2 4-5 0-2-1-4-4-4-2 0-4 2-4 4v1h-15l-7-14 2-4c0-2-2-4-4-4z',
          strokeWidth: 1,
          fill: 'black',
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
  'Nongovernmental Agency (NGO)': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'NGO',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Internal Security Force': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ISF',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Governmental Agency': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'GO',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Fire Fighting/Fire Protection': {
    type: 'Civilian Authorities - Protection',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 120,90 -5,5 -10,-10 5,-5 -20,0 5,5 -10,10 -5,-5 0,20 5,-5 10,10 -5,5 20,0 -5,-5 10,-10 5,5 z',
          fill: 'black',
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
  'Federal Bureau of Investigation (FBI)': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'FBI',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Environmental Protection': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,80 -10,15 5,0 -10,10 5,0 -10,10 15,0 0,5 10,0 0,-5 15,0 -10,-10 5,0 -10,-10 5,0 z',
          strokeWidth: 3,
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
  'Emergency Operations (Management)': {
    type: 'Civilian Authorities - Persons/Groups/Orgs',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100 65l15 26 15 27c3-6 5-12 5-18 0-19-16-35-35-35zm0 0a35 35 0 00-30 53l15-27 15-26zm-30 53c6 10 17 17 30 17s24-7 30-17H70z',
          fill: 'black',
        },
        path_2: {
          d: 'M70 118l30-53 30 53z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
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
  'Drug Enforcement Agency (DEA)': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'DEA',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Department of Justice': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100 62l-1 5v6l-1 1c-1-2-4-3-7-3h-1c-6 0-10 5-15 5h-1c-2 0-2-2-3 0l3 1-6 19-4 9-1 4c-1 2-1 4-3 4 2 3 8 8 13 8h3c6 0 11-4 14-8h-2L75 77l4 1 10-2h1c4 0 4 4 5 4h3v49H86v3h-5v2h-3v4h45v-4h-4v-2h-4v-3h-12V80h3c1 0 1-4 5-4l10 2h1l3-1-3 9-3 10-4 9-1 5-1 2-2 1c2 3 8 8 14 8h2c6 0 12-5 14-8h-1l-14-36 3-2-2 1h-1c-5 0-9-5-15-5h-1c-3 0-6 1-7 3-1-1-2 0-2-2l2-3-2-7h-1zm26 19l12 32h-24l12-32zm-51 0l12 32H63l12-32z',
          fill: 'black',
          stroke: 'none',
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
  'Customs Service': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M116 70l2 3h10v-3h-12zm1 5l-1 1h1v1c0 3 3 5 6 5 4 0 5-3 5-7h-11zm-6 9l-13 9-7 5c-2 1-6 3-6 6l3 3h1l22-15v13l15-21h-15zm-36 0l-2 1v24l1 2h5V84h-4zm4 27v24h27v-24H79zm52-27l-8 10-7 11h12v5h-16v25h8l1-8 2-9 2 17h9V87l-3-3',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M118 73l-1 2h11v-2h-10zm8 11l-15 21 1 5h16v-5h-12l7-11 8-10h-5z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
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
  'Coast Guard': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 75,100 0,-35 50,0 0,35 20,0 -15,35 -60,0 -15,-35 z',
          fill: 'rgb(236,236,236)',
        },
        path_2: {
          d: 'm 135,100 -15,35 -10,0 15,-35 z',
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
  'Bureau of Alcohol, Tobacco & Firearms (ATF)': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ATF',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Border Patrol': {
    type: 'Civilian Authorities - Law Enforcement',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M123 67c-3 0-6 2-6 5v1h12v-1c0-3-2-5-6-5zm-14 8v1h9v5l3 3 4-1c3-1 4-4 3-7h10v-1h-29zm-14 7c-2 0-3 2-3 3 0 2 4 6 5 8 1 1 4 6 6 6s8-5 10-6v13l13-20h-14c-2 0-7 6-8 6l-4-5-4-5h-1zm35 4l-14 20h12v5h-15v22h8l1-15h2l2 15h8V88l-4-2zm-63 5l-4 6 16 11 8 6 4 3 3 3v13h12v-11l1-3-1-2-1-2c-1-2-3-3-5-3-3 0-2 0-5-2l-4-3-8-5-16-11zm1 2l5 3v7l-5-3v-7zm10 6l5 4v7l-5-3v-8zm9 7l6 4-1 7-5-3v-8z',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M117 73v2h12v-2h-12zm9 13l-13 20v5h15v-5h-12l14-20h-4zm-58 7v7l5 3v-7l-5-3zm10 6v8l5 3v-7l-5-4zm9 7v8l5 3 1-7-6-4z',
          fill: 'rgb(236,236,236)',
          stroke: 'none',
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
  'Railhead Installation': {
    type: 'Installation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M60,120 l80,0M60,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0M74,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0M116,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0M130,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
          transform: 'translate(0,-20)',
          fill: 'rgb(236,236,236)',
          strokeWidth: 3,
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
  Airport: {
    type: 'Installation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M80,70 l40,0 M80,80 l25,-25',
          transform: 'translate(-100,-35) scale(2)',
          strokeWidth: 3,
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
  'Allied Command Operations (NATO)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ACO',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'U.S. Army Southern Command (USARSO)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USARSO',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
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
  'U.S. Army Pacific Command (USARPAC)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USARPAC',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
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
  'U.S. Army North Command (USARNORTH)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USARNORTH',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        text: {
          symbolText: 'USARNORTH',
          x: '100',
          y: '105',
          textAnchor: 'middle',
          fontSize: '15',
          fontWeight: 'bold',
        },
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
        return this.hostile;
      },
    },
  },
  'U.S. Army Europe Command (USAREUR)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USAREUR',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
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
  'U.S. Army Central Command (USARCENT)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USARCENT',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        text: {
          symbolText: 'USARCENT',
          x: '100',
          y: '105',
          textAnchor: 'middle',
          fontSize: '15',
          fontWeight: 'bold',
        },
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
        return this.hostile;
      },
    },
  },
  'U.S. Army Africa Command (USARAF)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'USARAF',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
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
  'U.S. Southern Command (SOUTHCOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SOUTHCOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        text: {
          symbolText: 'SOUTHCOM',
          x: '100',
          y: '105',
          textAnchor: 'middle',
          fontSize: '15',
          fontWeight: 'bold',
        },
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
        return this.hostile;
      },
    },
  },
  'U.S. Pacific Command (PACOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'PACOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
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
  'U.S. Northern Command (NORTHCOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'NORTHCOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        text: {
          symbolText: 'NORTHCOM',
          x: '100',
          y: '105',
          textAnchor: 'middle',
          fontSize: '15',
          fontWeight: 'bold',
        },
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
        return this.hostile;
      },
    },
  },
  'U.S. European Command (EUCOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'EUCOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
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
  'U.S. Central Command (CENTCOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'CENTCOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
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
      neutral: {
        text: {
          symbolText: 'CENTCOM',
          x: '100',
          y: '105',
          textAnchor: 'middle',
          fontSize: '15',
          fontWeight: 'bold',
        },
      },
    },
  },
  'U.S. Africa Command (AFRICOM)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'AFRICOM',
          x: '100',
          y: '110',
          textAnchor: 'middle',
          fontSize: '20',
          fontWeight: 'bold',
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
  'Human Resources': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'HR',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Contracting Support': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'KS',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Army Field Support': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'AFS',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Rigger Unit': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80, 90 a 20,20 0 1,1 40,0 Z l 20 40 l 20 -40',
          fill: 'rgb(236,236,236)',
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
  'Transportation Unit': {
    type: 'Sustainment - Transportation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19 M80,100a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
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
  'Surveillance (Battlefield Surveillance)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,80 -25,40 50,0 z',
          fill: 'black',
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
  Sustainment: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SUST',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
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
  Support: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SPT',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Special Operations Forces': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SOF',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Special Troops': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ST',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Special Forces': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SF',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Space Unit': {
    type: 'Intergalactic Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100.87 61.15l-3.36 29.8-11.28-5.96 6.71 8.85-14.77 3.07H77.1h.54-.54 1.07l14.5 4.15-4.83 8.31 9.67-6.32 3.49 29.8 3.5-29.8 11.27 5.96-6.71-8.85 14.77-3.07h1.07-.54.54-1.07l-14.24-3.07 6.72-8.3-10.74 5.77-4.7-30.34z',
          fill: 'black',
          stroke: 'none',
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
  Signal: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M25,50 100,110 100,90 175,150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M57,70 100,110 100,90 143,130',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'M50,65 100,110 100,90 150,135',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'M45,45 100,110 100,90 155,155',
        },
      },
    },
  },
  'Security (Internal Security Forces)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SEC',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
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
  'Sea, Air, Land (SEAL)': {
    type: 'Land Unit - Navy',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'SEAL',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
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
  'Isolated Personnel': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 70 75 l 30 12 l 30 -12 m -30 12 l 0 50 l 30 0 l -60 0',
          transform: 'translate(20,20) scale(0.8)',
        },
        path_2: {
          d: 'M 90, 70 a 10,10 0 1,1 20,0 a 10,10 0 1,1 -20,0',
          fill: 'black',
          transform: 'translate(20,17) scale(0.8)',
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
  'Quartermaster Unit': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 118,100 c 0,15 15,15 15,0 0,-15 -15,-15 -15,0 z m 0,0 -48,0 0,10 10,0 0,-10',
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
  'Public Affairs': {
    type: 'Sustainment - Personnel',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'PA',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Psychological Operations/MISO': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0',
          fill: 'black',
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
  'Personnel Services': {
    type: 'Sustainment - Personnel',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'PS',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Ordnance Unit': {
    type: 'Sustainment - Ordnance',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 90,97 83,83 m 27,14 7,-14 M 95,95 90,81 m 15,14 5,-14 m 10,26.5 c 0,6.9 -9,12.5 -20,12.5 -11,0 -20,-5.6 -20,-12.5 0,-6.9 9,-12.5 20,-12.5 11,0 20,5.6 20,12.5 z',
          fill: 'rgb(239,239,239)',
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
  'Naval Unit': {
    type: 'Sea Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 82 103c0 11 2 13 2 13l3-2c3 4 8 7 13 7h1c5 0 10-3 13-7l3 2s2-2 2-13l-10 6 2 2s-4 4-10 4h-1c-6 0-10-4-10-4l2-2-10-6z',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M105 85c0 3-2 5-5 5s-5-2-5-5 2-5 5-5 5 2 5 5zm-20 5h30m-15 0v30',
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
  'Mortar Unit': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,111 l0,-30 M90,90 l10,-10 10,10 M95,115a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
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
  'Maneuver Enhancement': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 85,80 0,25 15,15 15,-15 0,-25 z',
          fill: 'black',
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
  'Maintenance Unit': {
    type: 'Sustainment - Maintenance',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M72,90 c10,0 10,20 0,20 m8,-10 l40,0 m8,-10 c-10,0 -10,20 0,20',
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
  'NATO Liaison': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'LO',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Interpreter/Translator': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 65,90 15,0 0,-10 20,20 -20,20 0,-10 -15,0 z',
          fill: 'rgb(239,239,239)',
        },
        path_2: {
          d: 'm 135,90 -15,0 0,-10 -20,20 20,20 0,-10 15,0 z',
          fill: 'black',
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
  'Military History': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'MH',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Military Intelligence': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'MI',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Military Police': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'MP',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Missile Defense': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'MD',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  Missile: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M90,120 L90,90 C90,80 110,80 110,90 L110,120 M100,120 L100,82',
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
  'Information Operations': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'IO',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Ammunition (Ordnance Unit)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 ',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 ',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 ',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 ',
        },
      },
    },
  },
  'Ammunition Cache (Class V)': {
    type: 'Sustainment - Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 M25,120 l150,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 M50,120 l102,0',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 M35,120 l128,0',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'm 90,112 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0 M45,120 l112,0',
        },
      },
    },
  },
  'Air-Naval Gunfire Liaison Company (ANGLICO)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M25 150L175 50m-72 9a3 3 0 01-6 0 3 3 0 016 0zm-12 3h18m-9 0v18m-40 5l40 15 40-15v30l-40-15-40 15z',
          fill: 'black',
        },
        path_2: {
          d: 'M91 62h18m-9 0v18M89 70l1 8 1-2c3 3 6 5 9 5h0c3-1 6-2 8-5l2 2 1-8a26 26 0 01-6 3l1 1a9 9 0 01-6 3h0a9 9 0 01-6-3l1-1a25 25 0 01-6-3zm-4 30a15 15 0 1030 0 15 15 0 10-30 0',
          stroke: 'none',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M65 137l72-72zm-4-51l40 15 40-15v30l-40-15-40 15V90zm44-41c0 3-2 5-5 5s-5-2-5-5 2-5 5-5 5 2 5 5zm-20 5h30m-15 0v30',
          fill: 'black',
        },
        path_2: {
          d: 'M81 62c0 11 2 13 2 13l3-2c3 4 8 7 13 7h1c5 0 10-3 13-7l3 2s2-2 2-13l-10 6 2 2s-4 4-10 4v0h-1c-6 0-10-4-10-4l2-2-10-6zm4 38a15 15 0 1030 0 15 15 0 10-30 0z',
          stroke: 'black',
          fill: 'black',
          strokeWidth: 1,
        },
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
        path_1: {
          d: 'M45 155L155 45m-52 14a3 3 0 01-6 0 3 3 0 016 0zm-12 3h18m-9 0v18m-40 5l40 15 40-15v30l-40-15-40 15z',
          fill: 'black',
        },
        path_2: {
          d: 'M91 62h18m-9 0v18M89 70l1 8 1-2c3 3 6 5 9 5h0c3-1 6-2 8-5l2 2 1-8a26 26 0 01-6 3l1 1a9 9 0 01-6 3h0a9 9 0 01-6-3l1-1a25 25 0 01-6-3zm-4 30a15 15 0 1030 0 15 15 0 10-30 0',
          stroke: 'black',
          fill: 'black',
          strokeWidth: 1,
        },
      },
    },
  },
  'Air and Missile Defense': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M25,150 C25,110 175,110 175,150',
        },
        text: {
          symbolText: 'MD',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M70,142 C70,115 130,115 130,142',
        },
        text: {
          symbolText: 'MD',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'm 55,135 c 10,-20 80,-20 90,0',
        },
        text: {
          symbolText: 'MD',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'M45,150 C45,110 155,110 155,150',
        },
        text: {
          symbolText: 'MD',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '35',
          fontWeight: 'bold',
        },
      },
    },
  },
  Finance: {
    type: 'Sustainment - Financial',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,95 10,-10 20,0 10,10 m -40,0 0,20 40,0 0,-20 z',
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
  'Hospital with Surgical Capability': {
    type: 'Sustainment - Medical',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,50L100,150M25,100L175,100',
        },
        path_2: {
          d: 'm 100 66 a 5 5 0 0 1 0 10 a 5 5 0 0 1 0 -10 m 0 20 a 5 5 0 0 1 0 10 a 5 5 0 0 1 0 -10 v -10 m 5 -5 l 30 10 l -30 10',
          transform: 'translate(20,45)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_1: {
            d: 'M100,28L100,172M28,100L172,100',
          },
          path_2: {
            d: this.friendly.path_2.d,
            transform: 'translate(31,55) scale(0.8)',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_1: {
            d: 'M100,30.75L100,169.25M30.75,100L169.25,100',
          },
        };
        const modifiedTarget = { ...this.hostile, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        const propertyToModify = {
          path_1: {
            d: 'M100,45L100,155M45,100L155,100',
          },
          path_2: {
            d: this.friendly.path_2.d,
            transform: 'translate(22,55) scale(0.9)',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  'Medical Treatment Facility (Hospital)': {
    type: 'Sustainment - Medical',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,50L100,150M25,100L175,100 M70,90 l0,20 M130,90 l0,20',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M100,28L100,172M28,100L172,100 M70,90 l0,20 M130,90 l0,20',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'M100,30.75L100,169.25M30.75,100L169.25,100 M70,90 l0,20 M130,90 l0,20',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'M100,45L100,155M45,100L155,100 M70,90 l0,20 M130,90 l0,20',
        },
      },
    },
  },
  Medical: {
    type: 'Sustainment - Medical',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M100,50L100,150M25,100L175,100',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M100,28L100,172M28,100L172,100',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'M100,30.75L100,169.25M30.75,100L169.25,100',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path_1: {
          d: 'M100,45L100,155M45,100L155,100',
        },
      },
    },
  },
  Engineer: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M60,120 L60,80 140,80 140,120 M100,80 L100,110',
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
  'Combined Arms': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 70,80 60,40 m 0,-40 -60,40 m 55,-40 c 25,0 25,40 0,40 l -50,0 C 50,120 50,80 75,80 z',
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
  'Civil-Military Cooperation (NATO)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,80 80,0 0,20 c 0,25 -80,25 -80,0 z',
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
  'Chaplain (Religious Support)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'REL',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  'Civil Affairs': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'CA',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  Administrative: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        text: {
          symbolText: 'ADM',
          x: '100',
          y: '115',
          textAnchor: 'middle',
          fontSize: '42',
          fontWeight: 'bold',
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
  CBRN: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85',
        },
        circle_1: {
          cx: '74',
          cy: '90',
          r: '6',
        },
        circle_2: {
          cx: '126',
          cy: '90',
          r: '6',
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
  'CBRN and High-Yield Explosives': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85',
        },
        path_2: {
          d: 'm 90,80 20,0 10,20 -10,20 -20,0 -10,-20 z',
          fill: 'rgb(239, 239, 239)',
        },
        circle_1: {
          cx: '73',
          cy: '90',
          r: '6',
        },
        circle_2: {
          cx: '127',
          cy: '90',
          r: '6',
        },
        text: {
          symbolText: 'E',
          x: '100',
          y: '113',
          textAnchor: 'middle',
          fontSize: '35',
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
  'Infantry Fighting Vehicle': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,50 L175,150 M25,150 L175,50 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M55,50L55,150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M65,65 L137,137 M65, 137 L137, 65 Z M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M55,72L55,128 Z',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M50,65L150,135M50,135L150,65 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M55,65L55,135',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,45L155,155M45,155L155,45 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M55,45L55,155',
        },
      },
    },
  },
  'Medium Infantry (Stryker Unit)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,50l150,100m-150,0l150,-100 Z M90,60l20,0c10,0 10,15 0,15l-20,0c-10,0 -10,-15 0,-15 Z M65,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M95,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M125,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M65,65 L137,137 M65, 137 L137, 65 Z M90,60l20,0c10,0 10,15 0,15l-20,0c-10,0 -10,-15 0,-15 Z M76,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M96,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M116,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M50,65L150,135M50,135L150,65 M90,60l20,0c10,0 10,15 0,15l-20,0c-10,0 -10,-15 0,-15 Z M76,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M96,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M116,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,45L155,155M45,155L155,45 M90,60l20,0c10,0 10,15 0,15l-20,0c-10,0 -10,-15 0,-15 Z M76,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M96,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M116,135a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
        },
      },
    },
  },
  'Mechanized Armored Infantry': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,50 L175,150 M25,150 L175,50 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M60,70L140,130M60,130L140,70 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M50,65L150,135M50,135L150,65 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,45L155,155M45,155L155,45 M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
        },
      },
    },
  },
  Music: {
    type: 'Sustainment - Music',
    affiliation: {
      friendly: {
        path: {
          d: 'm 99.6,110.5 c -4.8,-1.4 -10.9,2.2 -10.4,7.7 1,2.5 6.2,2.4 9.6,-0.2 1.9,-1.5 2.7,-3.8 2.3,-6.9 l -0.1,-21.3 c 12.7,5.8 7.6,14.8 5.6,20.7 4.7,-4.9 5.8,-13.2 1.5,-17.9 -4.4,-4.6 -5,-7 -8.4,-13 z',
          fill: 'black',
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
  'Petroleum Oil And Lubricants (POL)': {
    type: 'Sustainment - POL',
    affiliation: {
      friendly: {
        path: {
          d: 'm 100,119 0,-24 m 0,0 C 99,95 85,81 85,81 l 30,0 z',
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
  'Armored reconnaissance (Cavalry)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M25,150L175,50',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M65, 137 L137, 65 Z',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M50,135L150,65',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z M45,155L155,45',
        },
      },
    },
  },
  Cavalry: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,150L175,50',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M65, 137 L137, 65 Z',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M50,135L150,65',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,155L155,45',
        },
      },
    },
  },
  'CBRN Chemical Recon': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85',
        },
        path_2: {
          d: 'M25,150L175,50',
        },
        circle_1: {
          cx: '74',
          cy: '90',
          r: '6',
        },
        circle_2: {
          cx: '126',
          cy: '90',
          r: '6',
        },
        text: {
          symbolText: 'C',
          x: '100',
          y: '77',
          textAnchor: 'middle',
          fontSize: '30',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M65,137L137,65',
          },
        };
        // There has to be a better way to do this instead of spamming this const in every affiliation...
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M50,135L150,65',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        // https://stackoverflow.com/questions/37932434/how-to-change-a-property-on-an-object-without-mutating-it
        const propertyToModify = {
          path_2: {
            d: 'M45,155L155,45',
          },
        };
        // So basically all modifiedTarget does is copy the properties of the friendly key. propertyToModify then edits the path_2 key with new data
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
      },
    },
  },
  Infantry: {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,50 L175,150 M25,150 L175,50',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M65,65 L137,137 M65, 137 L137, 65',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M50,65L150,135M50,135L150,65',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,45L155,155M45,155L155,45',
        },
      },
    },
  },
  'Anti-Armor (Anti-Tank)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,150 L100,52 175,150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M60,132 L100,30 140,132',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M55,135 L100,33 145,135',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,150 L100,47 155,150',
        },
      },
    },
  },
  'Armored Track Unit': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z',
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
  'Field Artillery': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M85,100a15,15 0 1,0 30,0a15,15 0 1,0 -30,0',
          fill: 'black',
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
  'Helicopter/Rotary-wing aviation': {
    type: 'Land Unit',
    flightCapable: true,
    affiliation: {
      friendly: {
        path: {
          d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10',
          fill: 'black',
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
  'Army Aviation/Fixed-wing aviation': {
    type: 'Land Unit',
    flightCapable: true,
    affiliation: {
      friendly: {
        path: {
          d: 'M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z',
          fill: 'black',
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
  'Unmanned Aerial Surveillance': {
    type: 'Land Unit',
    flightCapable: true,
    affiliation: {
      friendly: {
        path: {
          d: 'm 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z',
          fill: 'black',
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
  'Air Reconnaissance (Cavalry)': {
    type: 'Land Unit',
    flightCapable: true,
    affiliation: {
      friendly: {
        path: {
          d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M25,150L175,50',
          fill: 'black',
        },
        flying: {
          path: {
            d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M45,150 L139,60',
            fill: 'black',
          },
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M65, 137 L137, 65 Z',
          fill: 'black',
        },
        flying: {
          path: {
            d: 'M 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M45,150 L145,60',
            fill: 'black',
          },
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M65, 137 L137, 65 Z',
          fill: 'black',
        },
        flying: {
          path: {
            d: 'M 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M65,150 L135,55',
            fill: 'black',
          },
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'm 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M45,155L155,45',
          fill: 'black',
        },
        flying: {
          path: {
            d: 'M 60 85 l 40 15 l 40 -15 l 0 30 l -40 -15 l -40 15 l 0 -30 l 27 10 M45,150 L156,50',
            fill: 'black',
          },
        },
      },
    },
  },
  'Air Defense Artillery (Radar Dome)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,150 C25,110 175,110 175,150',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M70,142 C70,115 130,115 130,142',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'm 55,135 c 10,-20 80,-20 90,0',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,150 C45,110 155,110 155,150',
        },
      },
    },
  },
  //! EQUIPMENT
  'Weapon System - Grenade Launcher - Medium': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,60 0,80 M 85,75 100,60 115,75',
        },
        circle_2: {
          cx: '100',
          cy: '90',
          r: '15',
          fill: 'none',
        },
        path_2: {
          d: 'm 85,125 30,0 m -30,-10 30,0',
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
  //! Graphic Control Measures
  Airfield: {
    type: 'Graphic Control Measure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M80,70 l40,0 M80,80 l25,-25',
          transform: 'translate(-300,-240) scale(4)',
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
    type: 'Graphic Control Measure',
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
  Checkpoint: {
    type: 'Graphic Control Measure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z',
        },
        text_1: {
          symbolText: 'CKP',
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
  'Amnesty Point': {
    type: 'Graphic Control Measure',
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
  'Target Reference Point': {
    type: 'Graphic Control Measure',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 60,45 100,0 m -50,-50 0,100',
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
    type: 'Graphic Control Measure',
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
  //! Tactical Mission Tasks
  Ambush: {
    type: 'Tactical Mission Task',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 0 45 h 120 l -27 -15 m 28 15 l -27 15 m -93 65 c 60 -60 60 -100 0 -160 m 0 20 h 18 z m 0 20 h 33 z m 0 21 h 42 z m 0 40 h 41 z m 0 19 h 33 z m 0 20 h 18 z',
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
    type: 'Tactical Mission Task',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 0 45 h 120 l -27 -15 m 27 15 l -27 15 m -93 35 v -100 l -30 -30 m 30 129.5 l -30 30',
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
    type: 'Tactical Mission Task',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 0 45 h 40 m 40 0 h 50 m 0 60 v -120',
          strokeLinejoin: 'round',
          transform: 'translate(20,50)',
        },
        text_1: {
          symbolText: 'B',
          x: '80',
          y: '112',
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

export default militarySymbolsObject;
