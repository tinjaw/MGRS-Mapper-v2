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
  Pirates: {
    type: 'Civilian Authorities',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M474.2,64.7c-0.2,5.8,2.3,17.7-19.8,54.5-24.6,41.1-62.6,75.3-99.9,103a462.7,462.7,0,0,1-69.4,42.2c-6.2-2-13.9-4.7-22.4-8h-0.2c5.9-3,12.4-6.2,19.4-10,68.8-36.6,81.6-58.7,81-59.3s-17.9,19.6-77.2,54.1q-13,7.5-26.5,13.7c-6.7-2.8-13.2-5.8-18.8-8.6,28.8-12.5,59.5-28,84.7-44.7C363.7,176,400.1,146,429,112.4c26.4-30.8,37.3-46.6,38.9-49.7C470.6,57.7,474.8,51,474.2,64.7ZM456.6,98.6c-0.8-.3-6.7,15-27.5,40.5s-39.4,40.8-38.6,41.6,16.8-10.5,41.1-40.8C453.5,112.6,457.5,98.8,456.6,98.6Zm-123,183.8s0.3,4.3-9.4,7.9c-5.7,2.1-6.8,3.2-37.3-7.7-9.2-3.3-59.2-17.6-99.8-41.4-58.9-34.5-75.6-54.9-76.6-54.1s12.1,22.7,80.4,59.3c54.1,29,72.9,32.3,95.2,40.2,27.4,9.7,30.2,9.9,33.9,14.4s2.5,15.4,2.5,15.4-49.6-14.1-86.8-29.8c-41.5-17.5-79.9-36.6-116.9-64.3s-74.7-61.9-99.2-103C-2.2,82.4.3,70.5,0.1,64.7c-0.6-13.7,3.6-7,6.2-2.1,1.7,3.1,12.4,19,38.6,49.7C73.6,146,109.7,176,148.2,201.6c35.3,23.5,73.7,40.6,110.8,55.7A613.3,613.3,0,0,0,333.7,282.3ZM49.2,293.8c8.8,0,14.2,6.9,14.2,15.2,0,14-12.4,13.2-12.7,15.6s3.6,4.1,9.8,3.1c4.2-.7,8-7.1,9.6-5.2s-8.7,14.6-18.5,14.6-20.8-9.2-20.8-22.3C30.6,299.8,38.8,293.8,49.2,293.8Zm22.5-.2c7.2,0,8.3,2.5,10.4,9.4s6.3,8,7.3,7.9-2.7-2.8-4.6-8.1-4.1-10,5.2-10,8.9,3.8,10.2,7.3c2.1,5.6,7.7,9.8,8.5,9.8s-4.4-5.4-5.6-10.2-0.8-6.7,4.4-6.7,7.1,5,10.8,11.7,6.6,19,.2,19.6c-9.5.9-37.6,1.7-41.4-.6-6.7-4.1-9.2-9.4-11-17.1C63.8,297.1,64,293.6,71.6,293.6Zm32.3-15.2c-1,1.3-1.2,8.1-9.4,8.1s-13.9-5.8-13.9-16.2,7.3-15.8,17.1-15.8,17.7,4.4,25.4,13.3,10.3,19.6,14.2,22.9c5.6,4.7,13.1,3.5,13.7,4.6s-7,4.6-6.9,14.7,0.7,18.2,3.4,22.8,5.8,7.9,6.9,7.7,1.2-7.3,7.9-7.3,11,4.8,11,14.8-7.9,12.7-18.1,12.7-18.9-6.2-22.3-17.5-6.5-26.4-10.6-37.5-11.4-23.3-13.5-25.4S105,277.1,103.9,278.4Zm46.3,12.1c-10.4-.6-11.4-8.2-11.4-8.2s20.1-5.9,48.1-15.6a147.6,147.6,0,0,0,17.9,9l-19.8,6.8C161,290.3,156.5,290.9,150.2,290.5Zm82.1-2.5c-37.7,15.4-83.1,28.2-83.1,28.2s-1.6-10.5,2.5-15.4,11.7-6.4,34.1-14.4l24.7-8.5C221,283.3,225.9,285.3,232.4,288Zm77.3,45.1c6.6,0,6.8,7.1,7.9,7.3s4.1-3.1,6.8-7.7,4.1-15,3.7-23.7-5.7-11.1-5.3-12.7,6.7-2.5,11.5-6.6,6.7-13,14.2-21.9,15.5-13.3,25.2-13.3,16.9,5.4,16.9,15.8-5.8,16.2-13.8,16.2-8.3-6.9-9.3-8.1-2.7-.2-4.7,1.9-9.3,14.4-13.4,25.4-7.2,26.2-10.5,37.5-12,17.5-22.1,17.5-18-2.7-18-12.7S302.5,333.1,309.7,333.1ZM364,292.9c5.2,0,5.3,3,4.3,6.7s-5.6,10.2-5.6,10.2,6.4-4.2,8.5-9.8c1.3-3.5,1.2-7.3,10.1-7.3s6.8,5.4,5.2,10a25.5,25.5,0,0,1-4.5,8.1,11.7,11.7,0,0,0,7.2-7.9c2.1-6.8,3.1-9.4,10.3-9.4s7.8,3.5,5.6,12.9c-1.9,7.7-4.3,13-11,17.1-3.8,2.3-31.7,1.5-41.1.6-6.4-.6-3-13.7.2-19.6S359.7,292.9,364,292.9Zm46.7,34.7c6.2,0.5,9.9-1.3,9.7-3.1s-12.6-1.7-12.6-15.6c0-8.3,5.4-15.2,14-15.2,10.3,0,18.4,6,18.4,21,0,13.1-10.1,22.5-20.7,22.3-15.7-.4-20.4-13-18.4-14.6S405.2,327.2,410.7,327.7Z',
          fill: 'black',
          stroke: 1,
        },
        path_2: {
          d: 'M239.1,2.5c71.2,0,129,49.2,129,110s-57.8,110-129,110-129-49.2-129-110S167.9,2.5,239.1,2.5Z',
          strokeWidth: 12,
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
    type: 'Civilian Authorities',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 99.6,51 c -2.8,0 -5,2.3 -5,5.3 0,2.1 1.2,3.9 2.8,4.7 L 87.8,78.3 69.5,78.4 c -0.1,-2.8 -2.3,-5.1 -5,-5.1 -2.8,0 -5,2.3 -5,5.3 0,2.9 2.2,5.3 5,5.3 0.7,0 1.4,-0.2 2,-0.4 l 9.2,16.8 -9.4,17.2 c -0.6,-0.2 -1.2,-0.4 -1.8,-0.4 -2.8,0 -5,2.4 -5,5.3 0,2.9 2.2,5.3 5,5.3 2.8,0 5,-2.3 5,-5.3 0,-0.1 -0,-0.2 -0,-0.3 l 18.3,0.1 9.5,17.1 c -1.6,0.9 -2.7,2.6 -2.7,4.6 0,2.9 2.3,5.3 5,5.3 2.8,0 5,-2.3 5,-5.3 0,-1.9 -0.9,-3.5 -2.3,-4.4 l 9.6,-17.3 18.7,-0.1 c -0,0.1 -0,0.2 -0,0.3 0,2.9 2.3,5.3 5,5.3 2.8,0 5,-2.3 5,-5.3 0,-2.9 -2.2,-5.3 -5,-5.3 -0.8,0 -1.5,0.2 -2.1,0.5 l -9.5,-17.4 9.5,-17.4 c 0.6,0.3 1.4,0.5 2.1,0.5 2.8,0 5,-2.4 5,-5.3 0,-2.9 -2.2,-5.3 -5,-5.3 -2.8,0 -5,2.3 -5,5.3 0,0.1 0,0.2 0,0.3 L 111.8,78.3 102.1,60.8 c 1.5,-0.9 2.5,-2.6 2.5,-4.5 0,-2.9 -2.2,-5.3 -5,-5.3 z',
          fill: 'black',
          transform: 'translate(20,20) scale(0.8)',
          stroke: 3,
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
    type: 'Civilian Authorities',
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
    type: 'Civilian Authorities',
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
    type: 'Civilian Authorities',
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
    type: 'Civilian Authorities',
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
    type: 'Civilian Authorities',
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
    type: 'Civilian Authorities',
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
    type: 'Civilian Authorities',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 100 65 L 115.2 91.3 L 130.3 117.5 C 133.3 112.4 135 106.4 135 100 C 135 80.7 119.3 65 100 65 z M 100 65 C 80.7 65 65 80.7 65 100 C 65 106.4 66.7 112.4 69.7 117.5 L 84.8 91.3 L 100 65 z M 69.7 117.5 C 75.7 128 87 135 100 135 C 113 135 124.3 128 130.3 117.5 L 100 117.5 L 69.7 117.5 z',
          fill: 'black',
        },
        path_2: {
          d: 'M 69.7,117.5 100,65 l 30.3,52.5 z',
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
    type: 'Civilian Authorities',
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
    type: 'Civilian Authorities',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 100.2 62.3 C 100.1 63.2 99 66.3 98.7 67.4 C 97.8 69.9 99.4 70 99.4 72.3 L 99.4 73 C 99.4 73.7 98.9 73.5 98.3 73.8 C 96.6 72.4 94.2 71 91.3 71 L 90 71 C 84.2 71 80 75.5 74.6 75.5 L 73.9 75.5 C 72.3 75.5 71.5 74.1 71.3 75.8 L 74.3 77.2 C 71.8 82.4 69.9 89.7 67.5 95.5 C 66.3 98.6 65.3 101.6 64.1 104.7 C 63.5 106.3 63.1 107.7 62.5 109.3 C 62 110.5 61.8 113.1 60.2 113.2 C 62.4 116.4 68 120.5 73.3 120.5 L 76 120.5 C 81.6 120.5 87.3 116.6 89.5 113.2 L 88.2 113.2 L 75.4 77.2 L 74.5 77.2 L 74.5 77 L 75.4 77.2 L 78.6 77.7 L 79.3 77.7 L 89.3 76.2 L 90.4 76.3 C 93.7 76.3 93.8 80.2 94.7 80.2 L 97.7 80.2 L 97.7 129.2 L 86.1 129.2 L 86.1 131.5 L 81.4 131.5 L 81.4 134.1 L 77.5 134.1 L 77.5 138.2 L 123.3 138.2 L 123.3 133.9 L 119.3 133.9 L 119.3 131.6 L 114.5 131.6 L 114.5 129.2 L 102.6 129.2 L 102.6 80.2 L 106 80.2 C 107 80.2 106.6 76.4 110.7 76.4 L 111.3 76.4 L 121.2 77.7 L 122.2 77.7 L 125.4 77.3 C 124.3 79.7 123.1 83.8 122.1 86.4 C 120.9 89.6 119.9 92.6 118.7 95.8 C 117.5 98.9 116.6 101.9 115.4 105 C 114.9 106.4 114.2 108.1 113.7 109.6 C 113.4 110.4 113.1 111.1 112.9 111.9 C 112.5 113.2 112.8 113.2 111.2 113.2 C 113.3 116.4 119.2 120.5 124.6 120.5 L 127.2 120.5 C 132.6 120.5 138.8 116.4 140.9 113.2 L 139.8 113.2 L 126.4 77.1 C 127.4 76.9 129.3 76.2 129.3 75.3 C 129.3 74.5 127.8 75.5 126.7 75.5 L 126.3 75.5 C 120.8 75.5 116.6 71 110.9 71 L 109.6 71 C 106.7 71 104.2 72.4 102.6 73.8 C 101.8 73.4 101.3 73.6 101.3 72.3 C 101.3 71.9 102.4 68.8 102.5 68.5 L 100.6 62.3 L 100.2 62.3 z M 126.1 80.8 L 137.8 113.2 L 114.1 113.2 L 126.1 80.8 z M 74.8 80.8 L 86.5 113.2 L 63.1 113.1 L 74.8 80.8 z',
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
    type: 'Civilian Authorities',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 115.5 69.8 C 115.8 70.4 116.9 72.9 117.5 72.9 L 128.3 72.9 L 128.3 69.8 L 115.5 69.8 z M 117.3 74.7 C 116.8 74.7 116 75.7 115.8 76.1 L 117.2 76.1 L 117.2 76.8 C 117.2 79.6 119.8 81.8 122.8 81.8 C 126.5 81.8 128.3 78.6 128.3 74.7 L 117.3 74.7 z M 111.3 83.6 C 110.5 83.6 99.4 91.8 97.8 92.9 C 95.6 94.4 93 96.1 91 97.7 C 89.1 99.2 85.4 100.5 85.4 103.6 L 85.4 104 C 85.4 104.7 87.1 106.7 88.2 106.7 L 88.8 106.7 C 90.2 106.7 108 93.4 111.3 91.7 L 111.3 105.3 L 126 83.6 L 111.3 83.6 z M 75.3 83.6 C 74.5 83.6 73.4 84.4 73.4 85 L 73.4 108.9 C 73.4 109.8 73.9 110.2 74.4 110.5 L 78.5 110.5 L 78.5 83.6 L 75.3 83.6 z M 78.5 110.5 L 78.5 135.2 L 105.6 135.2 L 105.6 110.5 L 78.5 110.5 z M 130.5 83.6 C 129.6 83.6 123.8 92.9 122.9 94.2 C 121.9 95.7 115.7 104.5 115.5 105.3 L 127.6 105.3 L 127.6 110.3 L 111.5 110.3 L 111.5 134.8 L 119.6 134.8 C 120.6 134.8 121.1 127.9 121.3 126.6 C 121.7 123.9 122.4 120.4 122.6 117.8 L 122.9 117.8 L 125.4 134.8 L 133.9 134.8 L 133.9 86.7 C 133.9 85.6 131.9 83.6 130.7 83.6 L 130.5 83.6',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M 117.5 72.9 L 117.3 74.7 L 128.3 74.7 L 128.3 72.9 L 117.5 72.9 z M 126 83.7 L 111.3 105.3 L 111.5 110.3 L 127.7 110.3 L 127.7 105.3 L 115.5 105.3 C 115.7 104.5 121.9 95.7 122.9 94.3 C 123.8 92.9 129.6 83.7 130.5 83.7 L 126 83.7 z',
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
    type: 'Civilian Authorities',
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
    type: 'Civilian Authorities',
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
    type: 'Civilian Authorities',
    affiliation: {
      friendly: {
        path_1: {
          d: 'M 122.8 66.8 C 119.9 66.8 117.4 68.6 117.4 71.6 L 117.4 73.1 L 128.7 73.1 L 128.7 72.4 C 128.7 68.8 126.5 66.8 122.8 66.8 z M 108.6 74.8 L 108.6 76 L 117.6 76 L 117.5 77.5 L 118 80.8 C 119.1 81.5 118.9 82.5 120.8 83.5 C 122.1 84.1 124 84 125.2 83.4 C 127.5 82.4 129 79.2 128.3 76 L 137.5 76 L 137.5 74.8 L 108.6 74.8 z M 94.8 82.1 C 93.3 82.1 92 83.5 92 85 L 92 85.2 C 92 86.6 96 91.3 97 92.6 C 98.2 94.3 100.8 98.8 103.2 98.8 C 104.5 98.8 111.1 93.7 112.6 92.8 L 112.6 106.2 L 126.4 85.6 C 123 85.6 114.9 85.2 112.2 85.9 C 110.2 86.4 105 91.6 103.6 91.7 C 103.4 91 100.6 87.5 100 86.5 C 99.2 85.4 97.2 82.1 95.6 82.1 L 94.8 82.1 z M 130.4 85.6 C 129.6 85.6 117.5 104.1 116.3 106.2 L 128.1 106.2 L 128.1 110.6 L 112.5 110.6 L 112.5 133.2 L 120.7 133.2 L 122 117.5 L 124.3 117.5 L 125.6 133.2 L 133.5 133.2 L 133.5 87.9 C 133.5 87.2 131.2 85.6 130.4 85.6 z M 66.9 90.7 C 66.5 91.4 62.5 96.9 62.5 96.9 C 62.5 97.8 76.7 107.2 78.5 108.3 C 81.4 110.2 83.9 112.1 86.7 114 C 88.2 115 89.4 115.9 90.8 116.8 C 92.1 117.7 94.1 118.5 94.1 120.4 L 94.1 133.2 L 105.5 133.2 L 105.5 121.7 C 105.5 120.6 107.2 119 107.2 118.8 C 107.2 117.6 106.1 118.6 105.6 116.9 C 105.2 115.4 105.4 115.6 104.5 114.5 C 103.5 113.1 101.9 112 99.8 112 C 96.8 112 97.6 111.8 95.3 110.3 C 93.9 109.3 92.5 108.4 91.2 107.4 C 88.7 105.5 85.8 103.5 83.2 101.8 C 80.9 100.3 68.2 91 66.9 90.7 z M 67.9 92.6 L 72.7 95.7 L 72.8 103 L 67.9 99.9 L 67.9 92.6 z M 77.8 99.3 L 82.6 102.6 L 82.6 110 L 77.8 106.6 L 77.8 99.3 z M 87.4 106.2 L 92.5 109.5 L 92.4 116.9 L 87.4 113.5 L 87.4 106.2 z',
          fill: 'black',
          stroke: 'none',
        },
        path_2: {
          d: 'M 117.4 73.1 L 117.4 74.8 L 128.7 74.8 L 128.7 73.1 L 117.4 73.1 z M 126.4 85.6 L 112.6 106.2 L 112.6 110.6 L 128.1 110.6 L 128.1 106.2 L 116.4 106.2 C 117.5 104.1 129.6 85.6 130.4 85.6 L 126.4 85.6 z M 67.9 92.6 L 67.9 99.9 L 72.8 103 L 72.7 95.7 L 67.9 92.6 z M 77.8 99.3 L 77.8 106.6 L 82.6 110 L 82.6 102.6 L 77.8 99.3 z M 87.4 106.2 L 87.4 113.5 L 92.4 116.9 L 92.5 109.5 L 87.4 106.2 z',
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
          d: 'M 82.3 102.6 C 82.3 113.9 84.2 115.9 84.2 115.9 L 86.5 114.1 C 90.2 117.8 94.8 120.8 99.9 120.9 L 100.5 120.9 L 101 120.9 C 106.2 120.8 110.8 117.8 114.4 114.1 L 116.7 115.9 C 116.7 115.9 118.6 113.9 118.7 102.6 C 113.9 106.8 108.9 109 108.9 109 L 110.9 110.7 C 110.9 110.7 106.8 115.2 100.5 115.2 L 100.5 115.2 C 100.5 115.2 100.4 115.2 100.4 115.2 C 94.2 115.2 90 110.7 90 110.7 L 92 109 C 92 109 87 106.8 82.3 102.6 z',
          fill: 'black',
          strokeWidth: 1,
        },
        path_2: {
          d: 'm 105,85 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -20,5 30,0 m -15,0 0,30',
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
          d: 'M25,150L175,50 M102.6 59a3 3 0 0 1-6 0A3 3 0 0 1 102.6 59ZM90.6 62h18m-9 0V80 M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z',
          fill: 'black',
        },
        path_2: {
          d: 'M90.6 62h18m-9 0V80M89 69.6c0 6.8 1.1 8 1.1 8l1.4-1.1c2.2 2.2 5 4 8 4.1h.7c3.1-.1 5.9-1.9 8-4.1l1.4 1.1s1.1-1.2 1.2-8A25.8 25.8 0 0 1 105 73.4l1.2 1a9.1 9.1 0 0 1-6.2 2.7H99.9a9.3 9.3 0 0 1-6.2-2.7l1.2-1A24.8 24.8 0 0 1 89 69.6Z M85,100a15,15 0 1,0 30,0a15,15 0 1,0 -30,0',
          stroke: 'black',
          fill: 'black',
          strokeWidth: 1,
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path_1: {
          d: 'M65, 137 L137, 65 Z M61,86 l40,15 l40-15 v30 l-40-15l-40,15 V90 Z m 44,-41 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -20,5 30,0 m -15,0 0,30',
          fill: 'black',
        },
        path_2: {
          d: 'M81 62C81 73 83 75 83 75L86 73C89 77 94 80 99 80H100C105 80 110 77 113 73L116 75C116 75 118 73 118 62 113 66 108 68 108 68L110 70C110 70 106 74 100 74V74C100 74 99 74 99 74 93 74 89 70 89 70L91 68C91 68 86 66 81 62z M85,100a15,15 0 1,0 30,0a15,15 0 1,0 -30,0 Z',
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
          d: 'M45,155L155,45 M102.6 59a3 3 0 0 1-6 0A3 3 0 0 1 102.6 59ZM90.6 62h18m-9 0V80 M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z',
          fill: 'black',
        },
        path_2: {
          d: 'M90.6 62h18m-9 0V80M89 69.6c0 6.8 1.1 8 1.1 8l1.4-1.1c2.2 2.2 5 4 8 4.1h.7c3.1-.1 5.9-1.9 8-4.1l1.4 1.1s1.1-1.2 1.2-8A25.8 25.8 0 0 1 105 73.4l1.2 1a9.1 9.1 0 0 1-6.2 2.7H99.9a9.3 9.3 0 0 1-6.2-2.7l1.2-1A24.8 24.8 0 0 1 89 69.6Z M85,100a15,15 0 1,0 30,0a15,15 0 1,0 -30,0',
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
  Hospital: {
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
