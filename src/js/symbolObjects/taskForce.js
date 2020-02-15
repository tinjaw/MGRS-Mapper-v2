// * Task Force Object * //
// Since the task force indicator is dependent on the unit size, we put it in its own object
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
  get team() {
    return this.none;
  },
  get squad() {
    return this.none;
  },
  get section() {
    return this.none;
  },
  get platoon() {
    return this.none;
  },
  get companyTroopBattery() {
    return this.none;
  },
  get battalionSquadron() {
    return this.none;
  },
  get regimentGroup() {
    return this.none;
  },
  get brigade() {
    return this.none;
  },
  get division() {
    return this.none;
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
  get command() {
    return this.none;
  },
};

export default taskForceObject;
