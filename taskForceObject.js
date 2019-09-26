const taskForceObject = {
  none: {
    affiliation: {
      friendly: {
        d: 'M55,50 L55,10 145,10 145,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M55,28 L55,-12 145,-12 145,28',
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
        d: 'M55,45 L55,5 145,5 145,45',
      },
    },
  },
  team: {
    affiliation: {
      friendly: {
        d: 'M55,50 L55,10 145,10 145,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M55,28 L55,-12 145,-12 145,28',
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
        d: 'M55,45 L55,5 145,5 145,45',
      },
    },
  },
  squad: {
    affiliation: {
      friendly: {
        d: 'M55,50 L55,10 145,10 145,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M55,28 L55,-12 145,-12 145,28',
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
        d: 'M55,45 L55,5 145,5 145,45',
      },
    },
  },
  section: {
    affiliation: {
      friendly: {
        d: 'M55,50 L55,10 145,10 145,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M55,28 L55,-12 145,-12 145,28',
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
        d: 'M55,45 L55,5 145,5 145,45',
      },
    },
  },
  platoon: {
    affiliation: {
      friendly: {
        d: 'M55,50 L55,10 145,10 145,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M55,28 L55,-12 145,-12 145,28',
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
        d: 'M55,45 L55,5 145,5 145,45',
      },
    },
  },
  companyTroopBattery: {
    affiliation: {
      friendly: {
        d: 'M55,50 L55,10 145,10 145,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M55,28 L55,-12 145,-12 145,28',
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
        d: 'M55,45 L55,5 145,5 145,45',
      },
    },
  },
  battalionSquadron: {
    affiliation: {
      friendly: {
        d: 'M55,50 L55,10 145,10 145,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M55,28 L55,-12 145,-12 145,28',
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
        d: 'M55,45 L55,5 145,5 145,45',
      },
    },
  },
  regimentGroup: {
    affiliation: {
      friendly: {
        d: 'M55,50 L55,10 145,10 145,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M55,28 L55,-12 145,-12 145,28',
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
        d: 'M55,45 L55,5 145,5 145,45',
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
        d: 'M55,50 L55,10 145,10 145,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M55,28 L55,-12 145,-12 145,28',
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
        d: 'M55,45 L55,5 145,5 145,45',
      },
    },
  },
  corps: {
    affiliation: {
      friendly: {
        d: 'M45,50 L45,10 155,10 155,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M45,28 L45,-12 155,-12 155,28',
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
        d: 'M45,45 L45,5 155,5 155,45',
      },
    },
  },
  army: {
    affiliation: {
      friendly: {
        d: 'M27.5,50 L27.5,10 172.5,10 172.5,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M27.5,28 L27.5,-12 172.5,-12 172.5,28',
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
        d: 'M27.5,45 L27.5,5 172.5,5 172.5,45',
      },
    },
  },
  armyGroup: {
    affiliation: {
      friendly: {
        d: 'M10,50 L10,10 190,10 190,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M10,28 L10,-12 190,-12 190,28',
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
        d: 'M10,45 L10,5 190,5 190,45',
      },
    },
  },
  regionTheatre: {
    affiliation: {
      friendly: {
        d: 'M-7.5,50 L-7.5,10 207.5,10 207.5,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M-7.5,28 L-7.5,-12 207.5,-12 207.5,28',
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
        d: 'M-7.5,45 L-7.5,5 207.5,5 207.5,45',
      },
    },
  },
  command: {
    affiliation: {
      friendly: {
        d: 'M55,50 L55,10 145,10 145,50',
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        d: 'M55,28 L55,-12 145,-12 145,28',
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
        d: 'M55,45 L55,5 145,5 145,45',
      },
    },
  },
};

export default taskForceObject;
