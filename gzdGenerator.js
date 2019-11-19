const gridZoneId = [];
const dict = {};
const eastingArr = [];
const northingArr = [];

const topNorthing = 48.00000;
const bottomNorthing = 40.00000;

// Generate Eastings from -180 to 180 divisible by 6
for (var i = -180; i <= 180; i++) {
  if (i % 6 === 0) {
    eastingArr.push(i);
  }
}

// Generate GZDs 1 through 60
for (var i = 1; i <= 60; i++) {
  gridZoneId.push(`${i}T`);
  dict[i] = {
    id: `${i}T`,
    left: '',
    right: '',
  };
}

// Add the easternmost and westernmost easting
for (var i = 1; i <= 60; i++) {
  dict[i].left = eastingArr[i - 1];
  dict[i].right = eastingArr[i];
}

console.log(JSON.stringify(dict));

// generate a list of northernmost and southernmost northings
for (var i = -80; i <= 84; i++) {
  if (i % 4 === 0) {
    northingArr.push(i);
  }
}
// Since there greatest common factor between -80 and 84 is 4, there will be a lot of invalid numbers that we need to filter from the list
const invalidNorthings = [80, 76, 68, 60, 52, 44, 36, 28, 20, 12, 4, -4, -12, -20, -28, -36, -44, -52, -60, -68, -76];
const filteredNorthings = northingArr.filter(val => !invalidNorthings.includes(val));
console.log(filteredNorthings);


// Filtered Northings: [-80,-72,-64,-56,-48,-40,-32,-24,-16,-8,0,8,16,24,32,40,48,56,64,72,84]
// Now generate the grids with generateGridZoneDesignators(gzd.T, topNorthing, bottomNorthing);
// example output
const gzd = {
  T: {
    1: {
      id: '1T',
      left: -180,
      right: -174,
    },
    2: {
      id: '2T',
      left: -174,
      right: -168,
    },
    3: {
      id: '3T',
      left: -168,
      right: -162,
    },
    4: {
      id: '4T',
      left: -162,
      right: -156,
    },
    5: {
      id: '5T',
      left: -156,
      right: -150,
    },
    6: {
      id: '6T',
      left: -150,
      right: -144,
    },
    7: {
      id: '7T',
      left: -144,
      right: -138,
    },
    8: {
      id: '8T',
      left: -138,
      right: -132,
    },
    9: {
      id: '9T',
      left: -132,
      right: -126,
    },
    10: {
      id: '10T',
      left: -126,
      right: -120,
    },
    11: {
      id: '11T',
      left: -120,
      right: -114,
    },
    12: {
      id: '12T',
      left: -114,
      right: -108,
    },
    13: {
      id: '13T',
      left: -108,
      right: -102,
    },
    14: {
      id: '14T',
      left: -102,
      right: -96,
    },
    15: {
      id: '15T',
      left: -96,
      right: -90,
    },
    16: {
      id: '16T',
      left: -90,
      right: -84,
    },
    17: {
      id: '17T',
      left: -84,
      right: -78,
    },
    18: {
      id: '18T',
      left: -78,
      right: -72,
    },
    19: {
      id: '19T',
      left: -72,
      right: -66,
    },
    20: {
      id: '20T',
      left: -66,
      right: -60,
    },
    21: {
      id: '21T',
      left: -60,
      right: -54,
    },
    22: {
      id: '22T',
      left: -54,
      right: -48,
    },
    23: {
      id: '23T',
      left: -48,
      right: -42,
    },
    24: {
      id: '24T',
      left: -42,
      right: -36,
    },
    25: {
      id: '25T',
      left: -36,
      right: -30,
    },
    26: {
      id: '26T',
      left: -30,
      right: -24,
    },
    27: {
      id: '27T',
      left: -24,
      right: -18,
    },
    28: {
      id: '28T',
      left: -18,
      right: -12,
    },
    29: {
      id: '29T',
      left: -12,
      right: -6,
    },
    30: {
      id: '30T',
      left: -6,
      right: 0,
    },
    31: {
      id: '31T',
      left: 0,
      right: 6,
    },
    32: {
      id: '32T',
      left: 6,
      right: 12,
    },
    33: {
      id: '33T',
      left: 12,
      right: 18,
    },
    34: {
      id: '34T',
      left: 18,
      right: 24,
    },
    35: {
      id: '35T',
      left: 24,
      right: 30,
    },
    36: {
      id: '36T',
      left: 30,
      right: 36,
    },
    37: {
      id: '37T',
      left: 36,
      right: 42,
    },
    38: {
      id: '38T',
      left: 42,
      right: 48,
    },
    39: {
      id: '39T',
      left: 48,
      right: 54,
    },
    40: {
      id: '40T',
      left: 54,
      right: 60,
    },
    41: {
      id: '41T',
      left: 60,
      right: 66,
    },
    42: {
      id: '42T',
      left: 66,
      right: 72,
    },
    43: {
      id: '43T',
      left: 72,
      right: 78,
    },
    44: {
      id: '44T',
      left: 78,
      right: 84,
    },
    45: {
      id: '45T',
      left: 84,
      right: 90,
    },
    46: {
      id: '46T',
      left: 90,
      right: 96,
    },
    47: {
      id: '47T',
      left: 96,
      right: 102,
    },
    48: {
      id: '48T',
      left: 102,
      right: 108,
    },
    49: {
      id: '49T',
      left: 108,
      right: 114,
    },
    50: {
      id: '50T',
      left: 114,
      right: 120,
    },
    51: {
      id: '51T',
      left: 120,
      right: 126,
    },
    52: {
      id: '52T',
      left: 126,
      right: 132,
    },
    53: {
      id: '53T',
      left: 132,
      right: 138,
    },
    54: {
      id: '54T',
      left: 138,
      right: 144,
    },
    55: {
      id: '55T',
      left: 144,
      right: 150,
    },
    56: {
      id: '56T',
      left: 150,
      right: 156,
    },
    57: {
      id: '57T',
      left: 156,
      right: 162,
    },
    58: {
      id: '58T',
      left: 162,
      right: 168,
    },
    59: {
      id: '59T',
      left: 168,
      right: 174,
    },
    60: {
      id: '60T',
      left: 174,
      right: 180,
    },
  },
};
