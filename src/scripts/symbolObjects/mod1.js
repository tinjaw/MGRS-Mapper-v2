// * MODIFIER 1 OBJECT * //
// * Sector 1 Modifiers reflect the specific capability of a unit (Armored, Bridging, Sniper, etc) * //
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
  'Border Security': {
    type: 'Security',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'BOR',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Aerial Assault': {
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
        return this.hostile;
      },
    },
  },
  'Aerial Attack': {
    type: 'Aviation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'A',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Search and Rescue': {
    type: 'Aviation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'SAR',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Unmanned Aerial System (UAS)': {
    type: 'Aviation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,60 20,13 20,-13 0,-5 -20,10 -20,-10 z',
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
  'Aerial Utility': {
    type: 'Aviation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'U',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Biological: {
    type: 'CBRN',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'B',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Chemical: {
    type: 'CBRN',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'C',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Decontamination: {
    type: 'CBRN',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'D',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Nuclear: {
    type: 'CBRN',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'N',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Radiological: {
    type: 'CBRN',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'R',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Smoke: {
    type: 'CBRN',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'S',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Bridging: {
    type: 'Engineer',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,75 5,-5 30,0 5,5 m -40,-20 5,5 30,0 5,-5',
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
  'Engineer - Combat': {
    type: 'Engineer',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CBT',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Construction: {
    type: 'Engineer',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CON',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Diving: {
    type: 'Engineer',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 104.6,64.8 c 0,2.7 -2.1,4.8 -4.6,4.8 -2.5,0 -4.6,-2.2 -4.6,-4.8 0,-2.7 2.1,-4.8 4.6,-4.8 2.5,0 4.6,2.2 4.6,4.8 z m 0,8.7 4.6,4.8 -18.3,0 4.6,-4.8 M 108.3,60 l 4.6,0 0,9.6 -4.6,0 m -16.5,0 -4.6,0 0,-9.6 4.6,0 m 17.4,4.8 c 0,5.3 -4.1,9.6 -9.2,9.6 -5.1,0 -9.2,-4.3 -9.2,-9.6 0,-5.3 4.1,-9.6 9.2,-9.6 5.1,0 9.2,4.3 9.2,9.6 z',
          transform: 'translate(20,10) scale(0.8)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(0,-5)';
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
        return this.hostile;
      },
    },
  },
  Drilling: {
    type: 'Engineer',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,58 5,15 10,0 5,-15 z',
          fill: 'black',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(0,-5)';
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
        return this.hostile;
      },
    },
  },
  'Naval Construction (Seabee)': {
    type: 'Engineer',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M102.6 56a3 3 0 0 1-6 0A3 3 0 0 1 102.6 56Z M90.6 59h18m-9 0V77',
          strokeWidth: 3,
          transform: 'translate(10, 6) scale(0.91)',
        },
        path_2: {
          d: 'M89 66.6c0 6.8 1.1 8 1.1 8l1.4-1.1c2.2 2.2 5 4 8 4.1h.7c3.1-.1 5.9-1.9 8-4.1l1.4 1.1s1.1-1.2 1.2-8A25.8 25.8 0 0 1 105 70.4l1.2 1a9.1 9.1 0 0 1-6.2 2.7H99.9a9.3 9.3 0 0 1-6.2-2.7l1.2-1A24.8 24.8 0 0 1 89 66.6Z',
          fill: 'black',
          transform: 'translate(10, 6) scale(0.91)',
          strokeWidth: 1,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(10, 3) scale(0.91)';
        propertyToModify.path_2.transform = 'translate(10, 3) scale(0.91)';
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
        return this.hostile;
      },
    },
  },
  'Engineer - General': {
    type: 'Engineer',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'GEN',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Geospatial: {
    type: 'Engineer',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M91 69c6 3 12 3 18 0M100 60l9 18M91 78l9-18V54',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.d = 'M91 57c6 3 12 3 18 0M100 48l9 18M91 66l9-18V42';
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
        propertyToModify.path_1.transform = 'translate(0,-5)';
        return propertyToModify;
      },
    },
  },
  'Fire Direction Center (FDC)': {
    type: 'Artillery',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'FDC',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Meteorological: {
    type: 'Artillery',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'MET',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Multiple Rocket Launcher': {
    type: 'Artillery',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M85,80 l15,-15 15,15 M85,70 l15,-15 15,15',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.d = 'M85,75 l15,-15 15,15 M85,67 l15,-15 15,15';
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
        return this.hostile;
      },
    },
  },
  'Single Rocket Launcher': {
    type: 'Artillery',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M85,70 l15,-15 15,15',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.d = 'M85,67 l15,-15 15,15';
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
        return this.hostile;
      },
    },
  },
  'Sound Ranging': {
    type: 'Artillery',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'SDR',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Survey: {
    type: 'Artillery',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 108,78 -8,-8 m 0,0 -8,8 m 8,-8 0,-15 15,8 z',
          fill: 'black',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.d = 'm 108,75 -8,-8 m 0,0 -8,8 m 8,-8 0,-15 15,8 z';
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
        return this.hostile;
      },
    },
  },
  'Target Acquisition': {
    type: 'Artillery',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'TA',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Mortar: {
    type: 'Infantry',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,60 0,60 M 85,75 100,60 115,75 M90,130a10,10 0 1,0 20,0a10,10 0 1,0 -20,0',
          transform: 'translate(73,38) scale(0.27)',
          strokeWidth: 9,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(70,30) scale(0.3)';
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
        propertyToModify.path_1.transform = 'translate(70,32) scale(0.3)';
        return propertyToModify;
      },
    },
  },
  Sniper: {
    type: 'Infantry',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M75,60 l20,0 M100,76 l0,-18 M125,60 l-20,0',
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
  Weapons: {
    type: 'Infantry',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'W',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Electro-Optical': {
    type: 'Maintenance',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'EO',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'NATO Medical Role 1': {
    type: 'Medical',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: '1',
          x: '112',
          y: '72',
          fontSize: '22',
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
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '60';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'NATO Medical Role 2': {
    type: 'Medical',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: '2',
          x: '112',
          y: '72',
          fontSize: '22',
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
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '60';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'NATO Medical Role 3': {
    type: 'Medical',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: '3',
          x: '112',
          y: '72',
          fontSize: '22',
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
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '60';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'NATO Medical Role 4': {
    type: 'Medical',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: '4',
          x: '112',
          y: '72',
          fontSize: '22',
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
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.y = '60';
        return propertyToModify;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  'Counter Intelligence': {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CI',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Electronic Warfare': {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'EW',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Sensor: {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,56 c -2,5 -5,8 -10,10 5,2 8,5 10,10 2,-5 5,-8 10,-10 -5,-2 -8,-5 -10,-10 z',
          fill: 'black',
          strokeWidth: 1,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.d = 'm 100,51 c -2,5 -5,8 -10,10 5,2 8,5 10,10 2,-5 5,-8 10,-10 -5,-2 -8,-5 -10,-10 z';
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
        return this.hostile;
      },
    },
  },
  'Signals Intelligence': {
    type: 'Military Intelligence',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,56 0,23 m -15,-18 5,-5 5,5 5,-5 5,5 5,-5 5,5',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.d = 'm 100,51 0,23 m -15,-18 5,-5 5,5 5,-5 5,5 5,-5 5,5';
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
        return this.hostile;
      },
    },
  },
  'Tactical Exploitation': {
    type: 'Police',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'TE',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Criminal Investigation Division (CID)': {
    type: 'Police',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CID',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Detention: {
    type: 'Police',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'DET',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Dog: {
    type: 'Police',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'DOG',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Special Weapons & Tactics (SWAT)': {
    type: 'Police',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'SWAT',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '17';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Explosive Ordnance Disposal (EOD)': {
    type: 'Ordnance',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'EOD',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Mortuary Affairs': {
    type: 'Quartermaster',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,95 20,0 m -10,-10 0,30 m -15,-35 30,0 0,40 -30,0 z',
          transform: 'translate(31,16) scale(0.7) rotate(-90 85,85)',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(31,12) scale(0.7) rotate(-90 85,85)';
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
        return this.hostile;
      },
    },
  },
  Pipeline: {
    type: 'Quartermaster',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 92,66 -12,0 m 12,8 -12,0 m 28,0 12,0 m -12,-8 12,0 m -20,-11 0,7 m -5,-7 10,0 m -13,7 0,16 16,0 0,-16 -16,0',
          transform: 'translate(10,5) scale(0.9)',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(10,0) scale(0.9)';
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
        return this.hostile;
      },
    },
  },
  Water: {
    type: 'Quartermaster',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,55 20,0 m -10,10 0,-10 m -25,10 40,0 c 10,0 15,5 15,10',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(10,0) scale(0.9)';
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
        return this.hostile;
      },
    },
  },
  Postal: {
    type: 'Personnel',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,57 15,0 c 0,5 0,10 10,15 -15,0 -20,0 -25,-15 z',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.d = 'm 90,53 15,0 c 0,5 0,10 10,15 -15,0 -20,0 -25,-15 z';
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
        return this.hostile;
      },
    },
  },
  Retrans: {
    type: 'Signal',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'RTNS',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Digital Signal': {
    type: 'Signal',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'DIG',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Enhanced Signal': {
    type: 'Signal',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'ENH',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Mobile Subscriber Equipment': {
    type: 'Signal',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'MSE',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Network Operations': {
    type: 'Signal',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'NET',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Satellite: {
    type: 'Signal',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M32.8,47H2V2.1h30.8V47z M107.8,2H77v44.8h30.8V2z M70.2,7.3H39.5v34.5h30.7V7.3z M14.3,24.5h80.9  M54.3,23.9v33.3',
          strokeWidth: 3,
          transform: 'translate(82,54) scale(0.34)',
          fill: 'black',
        },
        path_2: {
          d: 'M30.4,67.7c16-12,34-12,50,0',
          transform: 'translate(82,54) scale(0.34)',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(82,52) scale(0.34)';
        propertyToModify.path_2.transform = 'translate(82,52) scale(0.34)';
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
        return this.hostile;
      },
    },
  },
  'Combat Camera': {
    type: 'Signal',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 120,60 -11,0 m 11,10 -14,0 m 4,-14 -30,0 0,18 25,0 z m 10,1 0,16z',
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
  'Command Post Node': {
    type: 'Cyberspace',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CPN',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Joint Node Network': {
    type: 'Cyberspace',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'JNN',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  Airfield: {
    type: 'Transportation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,70 40,0 M 80,80 111,55',
          strokeWidth: 3,
          transform: 'translate(12, 5) scale(0.9)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(12, -1) scale(0.9)';
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
        propertyToModify.path_1.transform = 'translate(12, 1) scale(0.9)';
        return propertyToModify;
      },
    },
  },
  Railway: {
    type: 'Transportation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M60,120 l80,0 M60,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M74,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M116,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0 M130,125a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
          strokeWidth: 3,
          transform: 'translate(0, -60)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(30, -20) scale(0.7)';
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
        propertyToModify.path_1.transform = 'translate(30, -25) scale(0.7)';
        return propertyToModify;
      },
    },
  },
  Seaport: {
    type: 'Transportation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M102.6 56a3 3 0 0 1-6 0A3 3 0 0 1 102.6 56Z M90.6 59h18m-9 0V77',
          strokeWidth: 3,
          transform: 'translate(10, 6) scale(0.91)',
        },
        path_2: {
          d: 'M89 66.6c0 6.8 1.1 8 1.1 8l1.4-1.1c2.2 2.2 5 4 8 4.1h.7c3.1-.1 5.9-1.9 8-4.1l1.4 1.1s1.1-1.2 1.2-8A25.8 25.8 0 0 1 105 70.4l1.2 1a9.1 9.1 0 0 1-6.2 2.7H99.9a9.3 9.3 0 0 1-6.2-2.7l1.2-1A24.8 24.8 0 0 1 89 66.6Z',
          fill: 'black',
          transform: 'translate(10, 6) scale(0.91)',
          strokeWidth: 1,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(10, 3) scale(0.91)';
        propertyToModify.path_2.transform = 'translate(10, 3) scale(0.91)';
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
        return this.hostile;
      },
    },
  },
  Watercraft: {
    type: 'Capability',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M0.1,0.1l16.5,0 M0.1,0c0,2.5,3.7,4.5,8.2,4.5 s8.2-2,8.2-4.5 z',
          strokeWidth: 1,
          transform: 'translate(76, 58) scale(2.8)',
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
  Area: {
    type: 'Capability',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'AREA',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Close Protection': {
    type: 'Capability',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CLP',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Cross Cultural Communication': {
    type: 'Capability',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CCC',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Crowd and Riot Control': {
    type: 'Capability',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CRC',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Direct Communications (NATO)': {
    type: 'Capability',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 105,65 5,5 -5,5 Z m -11,10 -5,-5 5,-5 Z M 90,70 c 20,0 20,0 20,0',
          strokeWidth: 3,
          transform: 'translate(0, -5)',
        },
        path_2: {
          d: 'm 15,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -40,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z',
          transform: 'translate(109.5, 65)',
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
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(0, -8)';
        propertyToModify.path_2.transform = 'translate(109.5, 63)';
        return propertyToModify;
      },
    },
  },
  'Echelon of Support - Theatre': {
    type: 'Command - Echelon of Support',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'XXXXX',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '16';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Echelon of Support - Army': {
    type: 'Command - Echelon of Support',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'XXXX',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '18';
        propertyToModify.text_1.y = '69';
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
        return this.hostile;
      },
    },
  },
  'Echelon of Support - Corps': {
    type: 'Command - Echelon of Support',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'XXX',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Echelon of Support - Division': {
    type: 'Command - Echelon of Support',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'XX',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Echelon of Support - Brigade': {
    type: 'Command - Echelon of Support',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'X',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Force: {
    type: 'Command - Marine Corps',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'F',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Forward: {
    type: 'Command',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'FWD',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Headquarters: {
    type: 'Command',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M25,70 l150,0',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M59,70 l85,0',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path_1: {
          d: 'M45,70 l110,0',
        },
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        return this.unknown;
      },
    },
  },
  Maintenance: {
    type: 'Capability',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 84,62 32,0 m 4,-5 c -5,0 -5,10 0,10 M 80,57 c 5,0 5,10 0,10',
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
  Medevac: {
    type: 'Capability',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M120,95 l9,0 0,-9 9,0 0,-9 -9,0 0,-9 -9,0 0,9 -9,0 0,9 9,0 Z',
          fill: 'black',
          transform: 'scale(0.8)',
          strokeWidth: 2,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.d = 'M120,82 l9,0 0,-9 9,0 0,-9 -9,0 0,-9 -9,0 0,9 -9,0 0,9 9,0 Z';
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
        propertyToModify.path_1.d = 'M107,83 l9,0 0,-9 9,0 0,-9 -9,0 0,-9 -9,0 0,9 -9,0 0,9 9,0 Z';
        propertyToModify.path_1.transform = 'scale(0.89)';
        return propertyToModify;
      },
    },
  },
  'Mobile Advisor Support (NATO)': {
    type: 'Activity',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 106,65 5,5 -5,5 Z M 86,70 c 25,0 25,0 25,0',
          strokeWidth: 3,
          transform: 'translate(0, -5)',
        },
        path_2: {
          d: 'm 15,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -40,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z',
          transform: 'translate(109.5, 65)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(-1,-5)';
        propertyToModify.path_2.transform = 'translate(108,65)';
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
        propertyToModify.path_1.transform = 'translate(-1,-12)';
        propertyToModify.path_2.transform = 'translate(108,58)';
        return propertyToModify;
      },
    },
  },
  'Mobility Support': {
    type: 'Capability',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'MS',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Multinational Support': {
    type: 'Capability',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'MN',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Multinational Specialized Unit': {
    type: 'Capability',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'MSU',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Operations: {
    type: 'Activity',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'OPS',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Petroleum, Oil & Lubricants (POL)': {
    type: 'Supply',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,119 0,-24 m 0,0 C 99,95 85,81 85,81 l 30,0 z',
          transform: 'translate(46,11) scale(0.54)',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(46,2) scale(0.54)';
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
        propertyToModify.path_1.transform = 'translate(46,8) scale(0.54)';
        return propertyToModify;
      },
    },
  },
  Radar: {
    type: 'Signal',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 85,55 c 0.1,21.4 11.7,24.6 25,25 M 116,55 101,67.5 101,55 86.6,66.9',
          strokeWidth: 3,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_1: {
            d: this.friendly.path_1.d,
            strokeWidth: this.friendly.path_1.strokeWidth,
            transform: 'translate(0,-6)',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
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
        return this.hostile;
      },
    },
  },
  Bus: {
    type: 'Equipment',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'BUS',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Cargo: {
    type: 'Equipment',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'C',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Command and Control': {
    type: 'Command',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'C2',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Multifunctional: {
    type: 'Capability',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'MF',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Coal: {
    type: 'Energy Installation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'CO',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Geothermal: {
    type: 'Energy Installation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'GT',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Hydroelectric: {
    type: 'Energy Installation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'HY',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Natural Gas': {
    type: 'Energy Installation',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'NG',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Nuclear Power': {
    type: 'Energy Installation',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M94.1 75c-3.6-2-6-6.2-5.9-10.3h6.4c0 1.8 1.2 3.8 2.7 4.7l-3.2 5.5zm17.7-10.2c0 4.1-2.3 8.2-5.9 10.3l-3.2-5.6c1.5-.9 2.7-3 2.7-4.7h6.4zM94.1 54.6c3.5-2.2 8.2-2.2 11.8 0l-3.2 5.5c-1.5-.9-4-.9-5.4 0L94 54.6zm9.5 10.2c0 2-1.6 3.6-3.6 3.6s-3.5-1.6-3.5-3.6 1.6-3.5 3.5-3.5c2 0 3.6 1.5 3.6 3.5z',
          fill: 'black',
          stroke: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_1: {
            d: this.friendly.path_1.d,
            fill: this.friendly.path_1.fill,
            stroke: this.friendly.path_1.stroke,
            transform: 'translate(0,-8)',
          },
        };
        const modifiedTarget = { ...this.friendly, ...propertyToModify };
        return modifiedTarget;
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
        return this.friendly;
      },
    },
  },
  Radio: {
    type: 'Signal',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'RAD',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Telephone: {
    type: 'Signal',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'T',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Television: {
    type: 'Signal',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'TV',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Displaced Persons/Refugees/Evacuees': {
    type: 'Civil',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'DPRE',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Shipyard: {
    type: 'Naval',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'YRD',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Training: {
    type: 'Activity',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'TNG',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  'Water Treatment Purification': {
    type: 'Capability',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'PURE',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Hijacking: {
    type: 'Activity',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'MTG',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Laboratory: {
    type: 'Activity',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'LAB',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Piracy: {
    type: 'Activity',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'PI',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Trafficking: {
    type: 'Activity',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'TFK',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Meeting: {
    type: 'Activity',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'MTG',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Bomb: {
    type: 'Capability',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'BOMB',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Mine: {
    type: 'Capability',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 120,100 c 0,5.5 -9,10 -20,10 -11,0 -20,-4.5 -20,-10 0,-5.5 9,-10 20,-10 11,0 20,4.5 20,10 z m -5,-20 -30,40 m 0,-40 30,40 m -15,-40 0,40',
          fill: 'black',
          transform: 'translate(64,28) scale(0.36)',
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
  'Emergency Collection Evacuation Point': {
    type: 'Activity',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'ECEP',
          x: '100',
          y: '72',
          fontSize: '22',
          textAnchor: 'middle',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.text_1.fontSize = '19';
        propertyToModify.text_1.y = '65';
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
        return this.hostile;
      },
    },
  },
  Eviction: {
    type: 'Activity',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: 'EV',
          x: '100',
          y: '72',
          fontSize: '22',
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
  'Suspicious Activity': {
    type: 'Activity',
    affiliation: {
      friendly: {
        text_1: {
          symbolText: '?',
          x: '100',
          y: '72',
          fontSize: '22',
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
  Armored: {
    type: 'Armor',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 90,60 20,0 c 10,0 10,15 0,15 L 90,75 C 80,75 80,60 90,60',
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
        const propertyToModify = JSON.parse(JSON.stringify(this.friendly));
        propertyToModify.path_1.transform = 'translate(110,77.5) scale(-0.4,-0.4)';
        return propertyToModify;
      },
    },
  },
};

export default mod1Object;
