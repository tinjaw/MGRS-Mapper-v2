// * UNIT SIZE OBJECT * //
const unitSizeObject = {
  none: {
    affiliation: {
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
  },
  team: {
    affiliation: {
      friendly: {
        d: 'M85,30a15,15 0 1,0 30,0a15,15 0 1,0 -30,0 M80,40L120,20',
        fill: 'none',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M85,8a15,15 0 1,0 30,0a15,15 0 1,0 -30,0 M80,18L120,-2',
        fill: 'none',
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
        d: 'M85,25a15,15 0 1,0 30,0a15,15 0 1,0 -30,0 M80,35L120,15',
        fill: 'none',
      },
    },
  },
  squad: {
    affiliation: {
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
  },

  section: {
    affiliation: {
      friendly: {
        d: 'M107.5,30a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0 M77.5,30a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M107.5,8a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0 M77.5,8a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0',
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
        d: 'M107.5,25a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0 M77.5,25a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0',
      },
    },
  },

  platoon: {
    affiliation: {
      friendly: {
        d: 'M92.5,30a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0 M62.5,30a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0 M122.5,30a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M92.5,8a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0 M62.5,8a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0 M122.5,8a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0',
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
        d: 'M92.5,25a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0 M62.5,25a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0 M122.5,25a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0',
      },
    },
  },

  troop: {
    affiliation: {
      friendly: {
        d: 'M100,40L100,15',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M100,18L100,-7',
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
        d: 'M100,35L100,10',
      },
    },
  },

  squadron: {
    affiliation: {
      friendly: {
        d: 'M90,40L90,15 M110,40L110,15',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M90,18L90,-7 M110,18L110,-7',
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
        d: 'M90,35L90,10 M110,35L110,10',
      },
    },
  },

  regiment: {
    affiliation: {
      friendly: {
        d: 'M100,40L100,15 M120,40L120,15 M80,40L80,15',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M100,18L100,-7 M120,18L120,-7 M80,18L80,-7',
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
        d: 'M100,35L100,10 M120,35L120,10 M80,35L80,10',
      },
    },
  },

  brigade: {
    affiliation: {
      friendly: {
        d: 'M87.5,40 l25,-25 m0,25 l-25,-25',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M87.5,18 l25,-25 m0,25 l-25,-25',
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
        d: 'M87.5,35 l25,-25 m0,25 l-25,-25',
      },
    },
  },

  division: {
    affiliation: {
      friendly: {
        d: 'M70,40 l25,-25 m0,25 l-25,-25 M105,40 l25,-25 m0,25 l-25,-25',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M70,18 l25,-25 m0,25 l-25,-25 M105,18 l25,-25 m0,25 l-25,-25',
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
        d: 'M70,35 l25,-25 m0,25 l-25,-25 M105,35 l25,-25 m0,25 l-25,-25',
      },
    },
  },

  corps: {
    affiliation: {
      friendly: {
        d: 'M52.5,40 l25,-25 m0,25 l-25,-25 M87.5,40 l25,-25 m0,25 l-25,-25 M122.5,40 l25,-25 m0,25 l-25,-25',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M52.5,18 l25,-25 m0,25 l-25,-25 M87.5,18 l25,-25 m0,25 l-25,-25 M122.5,18 l25,-25 m0,25 l-25,-25',
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
        d: 'M52.5,35 l25,-25 m0,25 l-25,-25 M87.5,35 l25,-25 m0,25 l-25,-25 M122.5,35 l25,-25 m0,25 l-25,-25',
      },
    },
  },

  army: {
    affiliation: {
      friendly: {
        d: 'M35,40 l25,-25 m0,25 l-25,-25 M70,40 l25,-25 m0,25 l-25,-25 M105,40 l25,-25 m0,25 l-25,-25 M140,40 l25,-25 m0,25 l-25,-25',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M35,18 l25,-25 m0,25 l-25,-25 M70,18 l25,-25 m0,25 l-25,-25 M105,18 l25,-25 m0,25 l-25,-25 M140,18 l25,-25 m0,25 l-25,-25',
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
        d: 'M35,35 l25,-25 m0,25 l-25,-25 M70,35 l25,-25 m0,25 l-25,-25 M105,35 l25,-25 m0,25 l-25,-25 M140,35 l25,-25 m0,25 l-25,-25',
      },
    },
  },

  armyGroup: {
    affiliation: {
      friendly: {
        d: 'M17.5, 40 l25,-25 m0,25 l-25,-25 M52.5, 40 l25,-25 m0,25 l-25,-25 M87.5, 40 l25,-25 m0,25 l-25,-25 M122.5,40 l25,-25 m0,25 l-25,-25 M157.5,40 l25,-25 m0,25 l-25,-25',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M17.5, 18 l25,-25 m0,25 l-25,-25 M52.5, 18 l25,-25 m0,25 l-25,-25 M87.5, 18 l25,-25 m0,25 l-25,-25 M122.5,18 l25,-25 m0,25 l-25,-25 M157.5,18 l25,-25 m0,25 l-25,-25',
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
        d: 'M17.5, 35 l25,-25 m0,25 l-25,-25 M52.5, 35 l25,-25 m0,25 l-25,-25 M87.5, 35 l25,-25 m0,25 l-25,-25 M122.5,35 l25,-25 m0,25 l-25,-25 M157.5,35 l25,-25 m0,25 l-25,-25',
      },
    },
  },

  region: {
    affiliation: {
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
  },

  command: {
    affiliation: {
      friendly: {
        d: 'M70,27.5 l25,0 m-12.5,12.5 l0,-25 M105,27.5 l25,0 m-12.5,12.5 l0,-25',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M70,5.5 l25,0 m-12.5,12.5 l0,-25 M105,5.5 l25,0 m-12.5,12.5 l0,-25',
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
        d: 'M70,22.5 l25,0 m-12.5,12.5 l0,-25 M105,22.5 l25,0 m-12.5,12.5 l0,-25',
      },
    },
  },
};

export default unitSizeObject;
