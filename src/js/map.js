import L from 'leaflet';
//! Currently not using Geodesy, LatLon or LeafletTextPath
import geodesy, { LatLon } from 'geodesy/mgrs';
import * as LeafletTextPath from 'leaflet-textpath';
import { removePopups, MGRSString } from './moveSymbol';


/* This code is needed to properly load the images in the Leaflet CSS */
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

const map = L.map('main-content', {
  center: [45.12689618126071, -70.62732696533205],
  zoom: 6,
  cursor: true,
  layers: [
    L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'),
  ],
});


// const defaultCenter = [38.889269, -77.050176];
// const defaultZoom = 15;
// const basemap = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}');

// map.setView(defaultCenter, defaultZoom);
// basemap.addTo(map);

// When the map is panned, remove the control box on the symbol
map.addEventListener('movestart', () => {
  if (moveable.target) {
    moveable.target = undefined;
    removePopups();
  }
});

// Update the MGRS coordinates when the mouse cursor moves
map.addEventListener('mousemove', (event) => {
  // document.querySelector('.cursorCoordinates').innerHTML = `${MGRSString(event.latlng.lat, event.latlng.lng)}`;
  document.querySelector('.cursorCoordinates').innerHTML = `LAT: ${event.latlng.lat.toFixed(4)} LNG: ${event.latlng.lng.toFixed(4)}`;
});

// Put all markers in their own group
const markerGroup = L.layerGroup().addTo(map);


//! MGRS GRID TEST
//! This works but it's highly inefficient. Utilize a method that only generates these grids that are within map.getBounds()
//! furthermore the labels need to be toggled on and off or removed on certain zoom values
//! Adjust for special cases. GZD 31X, 33X, 35X, 37X and 32V have special boundaries
// letter = a band of latitude
const northingDict = {
  X: {
    letter: 'X',
    top: 84,
    bottom: 72,
  },
  W: {
    letter: 'W',
    top: 72,
    bottom: 64,
  },
  V: {
    letter: 'V',
    top: 64,
    bottom: 56,
  },
  U: {
    letter: 'U',
    top: 56,
    bottom: 48,
  },
  T: {
    letter: 'T',
    top: 48,
    bottom: 40,
  },
  S: {
    letter: 'S',
    top: 40,
    bottom: 32,
  },
  R: {
    letter: 'R',
    top: 32,
    bottom: 24,
  },
  Q: {
    letter: 'Q',
    top: 24,
    bottom: 16,
  },
  P: {
    letter: 'P',
    top: 16,
    bottom: 8,
  },
  N: {
    letter: 'N',
    top: 8,
    bottom: 0,
  },
  M: {
    letter: 'M',
    top: 0,
    bottom: -8,
  },
  L: {
    letter: 'L',
    top: -8,
    bottom: -16,
  },
  K: {
    letter: 'K',
    top: -16,
    bottom: -24,
  },
  J: {
    letter: 'J',
    top: -24,
    bottom: -32,
  },
  H: {
    letter: 'H',
    top: -32,
    bottom: -40,
  },
  G: {
    letter: 'G',
    top: -40,
    bottom: -48,
  },
  F: {
    letter: 'F',
    top: -48,
    bottom: -56,
  },
  E: {
    letter: 'E',
    top: -56,
    bottom: -64,
  },
  D: {
    letter: 'D',
    top: -64,
    bottom: -72,
  },
  C: {
    letter: 'C',
    top: -72,
    bottom: -80,
  },
};

// id = UTM zone
const eastingDict = {
  1: {
    id: '1',
    left: -180,
    right: -174,
  },
  2: {
    id: '2',
    left: -174,
    right: -168,
  },
  3: {
    id: '3',
    left: -168,
    right: -162,
  },
  4: {
    id: '4',
    left: -162,
    right: -156,
  },
  5: {
    id: '5',
    left: -156,
    right: -150,
  },
  6: {
    id: '6',
    left: -150,
    right: -144,
  },
  7: {
    id: '7',
    left: -144,
    right: -138,
  },
  8: {
    id: '8',
    left: -138,
    right: -132,
  },
  9: {
    id: '9',
    left: -132,
    right: -126,
  },
  10: {
    id: '10',
    left: -126,
    right: -120,
  },
  11: {
    id: '11',
    left: -120,
    right: -114,
  },
  12: {
    id: '12',
    left: -114,
    right: -108,
  },
  13: {
    id: '13',
    left: -108,
    right: -102,
  },
  14: {
    id: '14',
    left: -102,
    right: -96,
  },
  15: {
    id: '15',
    left: -96,
    right: -90,
  },
  16: {
    id: '16',
    left: -90,
    right: -84,
  },
  17: {
    id: '17',
    left: -84,
    right: -78,
  },
  18: {
    id: '18',
    left: -78,
    right: -72,
  },
  19: {
    id: '19',
    left: -72,
    right: -66,
  },
  20: {
    id: '20',
    left: -66,
    right: -60,
  },
  21: {
    id: '21',
    left: -60,
    right: -54,
  },
  22: {
    id: '22',
    left: -54,
    right: -48,
  },
  23: {
    id: '23',
    left: -48,
    right: -42,
  },
  24: {
    id: '24',
    left: -42,
    right: -36,
  },
  25: {
    id: '25',
    left: -36,
    right: -30,
  },
  26: {
    id: '26',
    left: -30,
    right: -24,
  },
  27: {
    id: '27',
    left: -24,
    right: -18,
  },
  28: {
    id: '28',
    left: -18,
    right: -12,
  },
  29: {
    id: '29',
    left: -12,
    right: -6,
  },
  30: {
    id: '30',
    left: -6,
    right: 0,
  },
  31: {
    id: '31',
    left: 0,
    right: 6,
  },
  32: {
    id: '32',
    left: 6,
    right: 12,
  },
  33: {
    id: '33',
    left: 12,
    right: 18,
  },
  34: {
    id: '34',
    left: 18,
    right: 24,
  },
  35: {
    id: '35',
    left: 24,
    right: 30,
  },
  36: {
    id: '36',
    left: 30,
    right: 36,
  },
  37: {
    id: '37',
    left: 36,
    right: 42,
  },
  38: {
    id: '38',
    left: 42,
    right: 48,
  },
  39: {
    id: '39',
    left: 48,
    right: 54,
  },
  40: {
    id: '40',
    left: 54,
    right: 60,
  },
  41: {
    id: '41',
    left: 60,
    right: 66,
  },
  42: {
    id: '42',
    left: 66,
    right: 72,
  },
  43: {
    id: '43',
    left: 72,
    right: 78,
  },
  44: {
    id: '44',
    left: 78,
    right: 84,
  },
  45: {
    id: '45',
    left: 84,
    right: 90,
  },
  46: {
    id: '46',
    left: 90,
    right: 96,
  },
  47: {
    id: '47',
    left: 96,
    right: 102,
  },
  48: {
    id: '48',
    left: 102,
    right: 108,
  },
  49: {
    id: '49',
    left: 108,
    right: 114,
  },
  50: {
    id: '50',
    left: 114,
    right: 120,
  },
  51: {
    id: '51',
    left: 120,
    right: 126,
  },
  52: {
    id: '52',
    left: 126,
    right: 132,
  },
  53: {
    id: '53',
    left: 132,
    right: 138,
  },
  54: {
    id: '54',
    left: 138,
    right: 144,
  },
  55: {
    id: '55',
    left: 144,
    right: 150,
  },
  56: {
    id: '56',
    left: 150,
    right: 156,
  },
  57: {
    id: '57',
    left: 156,
    right: 162,
  },
  58: {
    id: '58',
    left: 162,
    right: 168,
  },
  59: {
    id: '59',
    left: 168,
    right: 174,
  },
  60: {
    id: '60',
    left: 174,
    right: 180,
  },
};

// top = the northern most latitude for the GZD, bottom = southern most latitude for the GZD
function generateGridZoneDesignators(obj, top, bottom, letter) {
  Object.values(obj).forEach((key) => {
    const topLeft = new L.LatLng(top, key.left);
    const topRight = new L.LatLng(top, key.right);
    const bottomRight = new L.LatLng(bottom, key.right);
    const bottomLeft = new L.LatLng(bottom, key.left);
    const gzdBox = [topLeft, topRight, bottomRight, bottomLeft, topLeft];
    const { id } = key;
    const letterID = [...letter];

    // Now create the polyline box from the returned array value 'gzdBox'
    const gzdPolylineBox = new L.Polyline(gzdBox, {
      color: 'red',
      weight: 5,
      opacity: 0.75,
      smoothFactor: 1,
      lineCap: 'square',
      lineJoin: 'miter',
    });

    gzdPolylineBox.addTo(map);

    const gzdIdSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // If the Grid Zone ID is divisible by 60, then we start a new line with the Letter ID
    if (id % 60 !== 0) {
      // Once the polylines are added to the map we can begin centering the Grid Zone Designator
      gzdIdSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      // Put this into an event listener where if the map zoom is <=7, adjust viewBox to '0 0 200 100' or something
      gzdIdSVG.setAttribute('viewBox', '75 50 50 50');
      gzdIdSVG.innerHTML = `
        <rect width="200" height="100" fill="salmon" stroke="black" stroke-width="1" fill-opacity="0.5"/>
        <text x="100" y="50" fill="black" font-weight="bold" font-family="Arial" font-size="80" text-anchor="middle" dominant-baseline="central">${id}${letterID[0]}</text>`;
    }

    // Get the difference between the north east and southwest latitudes/longitudes and divide by 2
    const halfLat = (gzdPolylineBox.getBounds()._northEast.lat - gzdPolylineBox.getBounds()._southWest.lat) / 2; // (eg- 40.000 - 48.000 / 2 = 4)
    const halfLng = (gzdPolylineBox.getBounds()._northEast.lng - gzdPolylineBox.getBounds()._southWest.lng) / 2; // (eg- -72.000 - -78.000 / 2 = 3)
    // Now add those values to the southwest latitude/longitude to get the center point of the GZD
    const centerLat = gzdPolylineBox.getBounds()._southWest.lat + halfLat;
    const centerLng = gzdPolylineBox.getBounds()._southWest.lng + halfLng;
    // Add or subtract a small number on the center latitudes/longitudes, this will give us a legitimate new LatLngBounds
    // Add the pad() method at the end to add padding on all sides of the new boundaries so the GZD ID label can fit
    const centerBounds = new L.LatLngBounds([centerLat + 0.01, centerLng - 0.01], [centerLat - 0.01, centerLng + 0.01]).pad(10.5);
    // Now add the GZD overlays to the center of the GZD
    L.svgOverlay(gzdIdSVG, centerBounds).addTo(map);
  });
}

// Now generate the entire grid zone designators for the world!
// Object.values(northingDict).forEach((key) => {
//   generateGridZoneDesignators(eastingDict, key.top, key.bottom, key.letter);
// });


class Coordz {
  constructor(top, bottom, letter, left, right, id) {
    this._top = top;
    this._bottom = bottom;
    this._letter = letter;
    this._left = left;
    this._right = right;
    this._id = id;
    return this.genGrids();
  }

  get top() {
    return this._top;
  }

  set top(newTop) {
    this._top = newTop;
  }

  get bottom() {
    return this._bottom;
  }

  set bottom(newBottom) {
    this._bottom = newBottom;
  }

  get letter() {
    return this._letter;
  }

  set letter(newLetter) {
    this._letter = newLetter;
  }

  get left() {
    return this._left;
  }

  set left(newLeft) {
    this._left = newLeft;
  }

  get right() {
    return this._right;
  }

  set right(newRight) {
    this._right = newRight;
  }

  get id() {
    return this._id;
  }

  set id(newId) {
    this._id = newId;
  }

  genGrids() {
    const topLeft2 = new L.LatLng(this._top, this._left);
    const topRight2 = new L.LatLng(this._top, this._right);
    const bottomRight2 = new L.LatLng(this._bottom, this._right);
    const bottomLeft2 = new L.LatLng(this._bottom, this._left);
    const gzdBox2 = [topLeft2, topRight2, bottomRight2, bottomLeft2, topLeft2];
    const gzdPolylineBox2 = new L.Polyline(gzdBox2, {
      color: 'red',
      weight: 5,
      opacity: 0.75,
      smoothFactor: 1,
      lineCap: 'square',
      lineJoin: 'miter',
    });

    gzdPolylineBox2.addTo(map);
    const gzdIdSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // If the Grid Zone ID is divisible by 60, then we start a new line with the Letter ID
    if (this._id % 60 !== 0) {
      // Once the polylines are added to the map we can begin centering the Grid Zone Designator
      gzdIdSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      // Put this into an event listener where if the map zoom is <=7, adjust viewBox to '0 0 200 100' or something
      gzdIdSVG.setAttribute('viewBox', '75 50 50 50');
      gzdIdSVG.innerHTML = `
        <rect width="200" height="100" fill="salmon" stroke="black" stroke-width="1" fill-opacity="0.5"/>
        <text x="100" y="50" fill="black" font-weight="bold" font-family="Arial" font-size="80" text-anchor="middle" dominant-baseline="central">${this._id}${this._letter}</text>`;
    }
    // Get the difference between the north east and southwest latitudes/longitudes and divide by 2
    const halfLat = (gzdPolylineBox2.getBounds()._northEast.lat - gzdPolylineBox2.getBounds()._southWest.lat) / 2; // (eg- 40.000 - 48.000 / 2 = 4)
    const halfLng = (gzdPolylineBox2.getBounds()._northEast.lng - gzdPolylineBox2.getBounds()._southWest.lng) / 2; // (eg- -72.000 - -78.000 / 2 = 3)
    // Now add those values to the southwest latitude/longitude to get the center point of the GZD
    const centerLat = gzdPolylineBox2.getBounds()._southWest.lat + halfLat;
    const centerLng = gzdPolylineBox2.getBounds()._southWest.lng + halfLng;
    // Add or subtract a small number on the center latitudes/longitudes, this will give us a legitimate new LatLngBounds
    // Add the pad() method at the end to add padding on all sides of the new boundaries so the GZD ID label can fit
    const centerBounds = new L.LatLngBounds([centerLat + 0.01, centerLng - 0.01], [centerLat - 0.01, centerLng + 0.01]).pad(10.5);
    // Now add the GZD overlays to the center of the GZD
    L.svgOverlay(gzdIdSVG, centerBounds).addTo(map);
  }
}


const returnInBoundsGridZoneDesignators = (northObj, eastObj) => {
  const combinedObj = Object.assign({}, northObj, eastObj);
  const letters = [];
  const ids = [];
  const testBounds = map.getBounds();

  Object.values(combinedObj).forEach((key) => {
    const { top } = key;
    const { bottom } = key;
    const { left } = key;
    const { right } = key;
    const { id } = key;

    if (testBounds._northEast.lat >= bottom && testBounds._southWest.lat <= top) {
      letters.push(key);
    }

    if (testBounds._northEast.lng >= left && testBounds._southWest.lng <= right) {
      ids.push({ left, right, id });
    }
  });

  letters.forEach((e) => {
    // Object.assign(e, ids);
    const letterKey = e;
    Object.defineProperties(letterKey, {
      id: {
        value: ids.map(e => e),
        writable: true,
      },
    });
  });

  Object.values(letters).forEach((key) => {
    const letterID2 = key.letter;
    const top2 = key.top;
    const bottom2 = key.bottom;

    for (let index = 0; index < key.id.length; index += 1) {
      const element = key.id[index];
      const ggg = new Coordz(top2, bottom2, letterID2, element.left, element.right, element.id);
    }
  });

  // return [letters, ids];
};


returnInBoundsGridZoneDesignators(northingDict, eastingDict);
window.returnInBoundsGridZoneDesignators = returnInBoundsGridZoneDesignators;
window.northingDict = northingDict;
window.eastingDict = eastingDict;
window.markerGroup = markerGroup;
window.map = map;
window.L = L;
