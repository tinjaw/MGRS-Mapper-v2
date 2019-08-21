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
  'CBRN Chemical Recon': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85',
          fill: 'none',
        },
        path_2: {
          d: 'M25,150L175,50',
        },
        circle_1: {
          cx: '75',
          cy: '90',
          r: '6',
        },
        circle_2: {
          cx: '125',
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
            fill: 'none',
          },
        };
        // There has to be a better way to do this instead of spamming this const in every affiliation...
        const modifiedTarget = Object.assign({}, this.friendly, propertyToModify);
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M50,135L150,65',
            fill: 'none',
          },
        };
        const modifiedTarget = Object.assign({}, this.friendly, propertyToModify);
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
            fill: 'none',
          },
        };
        // So basically all modifiedTarget does is copy the properties of the friendly key. propertyToModify then edits the path_2 key with new data
        const modifiedTarget = Object.assign({}, this.friendly, propertyToModify);
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
  'Unammed Aerial Surveillance': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'm 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z',
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
  'Air Defense Artillery (Radar Dome)': {
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,150 C25,110 175,110 175,150',
          fill: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M70,142 C70,115 130,115 130,142',
          fill: 'none',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'm 55,135 c 10,-20 80,-20 90,0',
          fill: 'none',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,150 C45,110 155,110 155,150',
          fill: 'none',
        },
      },
    },
  },
  'Weapon System - Grenade Launcher - Medium': {
    type: 'Equipment',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 100,60 0,80 M 85,75 100,60 115,75',
          fill: 'none',
        },
        circle_2: {
          cx: '100',
          cy: '90',
          r: '15',
          fill: 'none',
        },
        path_2: {
          d: 'm 85,125 30,0 m -30,-10 30,0',
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

export default militarySymbolsObject;
