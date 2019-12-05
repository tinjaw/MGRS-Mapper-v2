/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-loop-func */
// import LeafletMgrsLayer from './leaflet-mgrs-layer.js';
importScripts('https://npmcdn.com/@turf/turf/turf.min.js');

//* ********************************************************************//
//*      GET CORNER POINTS                                              //
//* ********************************************************************//

// https://gis.stackexchange.com/questions/287051/how-to-check-if-geojson-feature-is-in-rectangular-shape-and-find-corner-points
const getCornerPts = (turfInputPolygon, threshold = 1) => {
  let rightAngles = 0;
  let sumAngles = 0;
  const cornerPts = [];
  let turfPolygon = turfInputPolygon;

  if (turf.booleanClockwise(turf.polygonToLine(turfPolygon).features[0])) {
    turfPolygon = turf.rewind(turfPolygon);
  }

  const turfPolygonPts = turf.explode(turfPolygon);
  turfPolygonPts.features.push(turfPolygonPts.features[1]);

  for (let i = 1, len = turfPolygonPts.features.length; i < len - 1; i++) {
    const b1 = turf.bearing(turfPolygonPts.features[i - 1], turfPolygonPts.features[i]);
    const b2 = turf.bearing(turfPolygonPts.features[i], turfPolygonPts.features[i + 1]);
    const angle = Math.min((b1 - b2 + 360) % 360, (b2 - b1 + 360) % 360);
    sumAngles += angle;
    if (90 - threshold <= angle && angle <= 90 + threshold) {
      rightAngles++;
      cornerPts.push(turfPolygonPts.features[i]);
    }
  }
  return rightAngles === 4 && 360 - threshold <= sumAngles && sumAngles <= 360 + threshold ? cornerPts : false;
};
window.getCornerPts = getCornerPts;

// https://ourcodeworld.com/articles/read/278/how-to-split-an-array-into-chunks-of-the-same-size-easily-in-javascript
const chunkArray = (myArray, chunkSize) => {
  let index = 0;
  const arrayLength = myArray.length;
  const tempArray = [];
  for (index = 0; index < arrayLength; index += chunkSize) {
    const myChunk = myArray.slice(index, index + chunkSize);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }
  return tempArray;
};

// https://gomakethings.com/how-to-add-a-new-item-to-an-object-at-a-specific-position-with-vanilla-js/
const addToObject = (obj, key, value, index) => {
  // Create a temp object and index variable
  const temp = new Object();
  let i = 0;
  // Loop through the original object
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      // If the indexes match, add the new item
      if (i === index && key && value) {
        temp[key] = value;
      }
      // Add the current item in the loop to the temp obj
      temp[prop] = obj[prop];
      // Increase the count
      i++;
    }
  }
  // If no index, add to the end
  if (!index && key && value) {
    temp[key] = value;
  }
  return temp;
};

// Create an empty object to hold our valid JSON once completed
let finalObject = {};
window.finalObject = finalObject;
// Absolutely idiotic naming convention but I needed this to wrap the final object in its Grid zone designator ID
let finalObject2 = {};
window.finalObject2 = finalObject2;
const arr9 = [];
window.arr9 = arr9;
// https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
const legitimateKMLFiles = ['01W.kml', '01U.kml', '02W.kml', '02V.kml', '02U.kml', '03W.kml', '03V.kml', '03U.kml', '03Q.kml', '03N.kml', '04W.kml', '04V.kml', '04U.kml', '04Q.kml', '04N.kml', '05W.kml', '05V.kml', '05U.kml', '05Q.kml', '06W.kml', '06V.kml', '07W.kml', '07V.kml', '08W.kml', '08V.kml', '08U.kml', '09W.kml', '09V.kml', '09U.kml', '10X.kml', '10W.kml', '10V.kml', '10U.kml', '10T.kml', '10S.kml', '11X.kml', '11W.kml', '11V.kml', '11U.kml', '11T.kml', '11S.kml', '11R.kml', '12X.kml', '12W.kml', '12V.kml', '12U.kml', '12T.kml', '12S.kml', '12R.kml', '12Q.kml', '13X.kml', '13W.kml', '13V.kml', '13U.kml', '13T.kml', '13S.kml', '13R.kml', '13Q.kml', '14X.kml', '14W.kml', '14V.kml', '14U.kml', '14T.kml', '14S.kml', '14R.kml', '14Q.kml', '14P.kml', '15X.kml', '15W.kml', '15V.kml', '15U.kml', '15T.kml', '15S.kml', '15R.kml', '15Q.kml', '15P.kml', '15N.kml', '15M.kml', '16X.kml', '16W.kml', '16V.kml', '16U.kml', '16T.kml', '16S.kml', '16R.kml', '16Q.kml', '16P.kml', '16N.kml', '16M.kml', '17X.kml', '17W.kml', '17V.kml', '17U.kml', '17T.kml', '17S.kml', '17R.kml', '17Q.kml', '17P.kml', '17N.kml', '17M.kml', '17L.kml', '18X.kml', '18W.kml', '18V.kml', '18U.kml', '18T.kml', '18S.kml', '18R.kml', '18Q.kml', '18P.kml', '18N.kml', '18M.kml', '18L.kml', '18K.kml', '18H.kml', '18G.kml', '18F.kml', '19X.kml', '19W.kml', '19V.kml', '19U.kml', '19T.kml', '19S.kml', '19Q.kml', '19P.kml', '19N.kml', '19M.kml', '19L.kml', '19K.kml', '19J.kml', '19H.kml', '19G.kml', '19F.kml', '20X.kml', '20W.kml', '20V.kml', '20U.kml', '20T.kml', '20Q.kml', '20P.kml', '20N.kml', '20M.kml', '20L.kml', '20K.kml', '20J.kml', '20H.kml', '20G.kml', '20F.kml', '21X.kml', '21W.kml', '21U.kml', '21T.kml', '21P.kml', '21N.kml', '21M.kml', '21L.kml', '21K.kml', '21J.kml', '21H.kml', '21F.kml', '22X.kml', '22W.kml', '22V.kml', '22U.kml', '22T.kml', '22N.kml', '22M.kml', '22L.kml', '22K.kml', '22J.kml', '22H.kml', '23X.kml', '23W.kml', '23V.kml', '23M.kml', '23L.kml', '23K.kml', '23J.kml', '24X.kml', '24W.kml', '24V.kml', '24M.kml', '24L.kml', '24K.kml', '24F.kml', '25X.kml', '25W.kml', '25M.kml', '25L.kml', '25F.kml', '26X.kml', '26W.kml', '26S.kml', '27X.kml', '27W.kml', '27V.kml', '28X.kml', '28W.kml', '28V.kml', '28S.kml', '28R.kml', '28Q.kml', '28P.kml', '28N.kml', '29W.kml', '29V.kml', '29U.kml', '29T.kml', '29S.kml', '29R.kml', '29Q.kml', '29P.kml', '29N.kml', '30V.kml', '30U.kml', '30T.kml', '30S.kml', '30R.kml', '30Q.kml', '30P.kml', '30N.kml', '31U.kml', '31T.kml', '31S.kml', '31R.kml', '31Q.kml', '31P.kml', '31N.kml', '31V.kml', '32W.kml', '32V.kml', '32U.kml', '32T.kml', '32S.kml', '32R.kml', '32Q.kml', '32P.kml', '32N.kml', '32M.kml', '33X.kml', '33W.kml', '33V.kml', '33U.kml', '33T.kml', '33S.kml', '33R.kml', '33Q.kml', '33P.kml', '33N.kml', '33M.kml', '33L.kml', '33K.kml', '33J.kml', '34W.kml', '34V.kml', '34U.kml', '34T.kml', '34S.kml', '34R.kml', '34Q.kml', '34P.kml', '34N.kml', '34M.kml', '34L.kml', '34K.kml', '34J.kml', '34H.kml', '35X.kml', '35W.kml', '35V.kml', '35U.kml', '35T.kml', '35S.kml', '35R.kml', '35Q.kml', '35P.kml', '35N.kml', '35M.kml', '35L.kml', '35K.kml', '35J.kml', '35H.kml', '36W.kml', '36V.kml', '36U.kml', '36T.kml', '36S.kml', '36R.kml', '36Q.kml', '36P.kml', '36N.kml', '36M.kml', '36L.kml', '36K.kml', '36J.kml', '37X.kml', '37W.kml', '37V.kml', '37U.kml', '37T.kml', '37S.kml', '37R.kml', '37Q.kml', '37P.kml', '37N.kml', '37M.kml', '37L.kml', '37K.kml', '38X.kml', '38W.kml', '38V.kml', '38U.kml', '38T.kml', '38S.kml', '38R.kml', '38Q.kml', '38P.kml', '38N.kml', '38L.kml', '38K.kml', '38J.kml', '39X.kml', '39W.kml', '39V.kml', '39U.kml', '39T.kml', '39S.kml', '39R.kml', '39Q.kml', '39P.kml', '39N.kml', '39L.kml', '39K.kml', '40X.kml', '40W.kml', '40V.kml', '40U.kml', '40T.kml', '40S.kml', '40R.kml', '40Q.kml', '40P.kml', '40M.kml', '40K.kml', '41X.kml', '41W.kml', '41V.kml', '41U.kml', '41T.kml', '41S.kml', '41R.kml', '42X.kml', '42W.kml', '42V.kml', '42U.kml', '42T.kml', '42S.kml', '42R.kml', '42Q.kml', '42F.kml', '43X.kml', '43W.kml', '43V.kml', '43U.kml', '43T.kml', '43S.kml', '43R.kml', '43Q.kml', '43P.kml', '43N.kml', '43F.kml', '44X.kml', '44W.kml', '44V.kml', '44U.kml', '44T.kml', '44S.kml', '44R.kml', '44Q.kml', '44P.kml', '44N.kml', '45X.kml', '45W.kml', '45V.kml', '45U.kml', '45T.kml', '45S.kml', '45R.kml', '45Q.kml', '46X.kml', '46W.kml', '46V.kml', '46U.kml', '46T.kml', '46S.kml', '46R.kml', '46Q.kml', '46P.kml', '46N.kml', '47X.kml', '47W.kml', '47V.kml', '47U.kml', '47T.kml', '47S.kml', '47R.kml', '47Q.kml', '47P.kml', '47N.kml', '47M.kml', '48X.kml', '48W.kml', '48V.kml', '48U.kml', '48T.kml', '48S.kml', '48R.kml', '48Q.kml', '48P.kml', '48N.kml', '48M.kml', '49X.kml', '49W.kml', '49V.kml', '49U.kml', '49T.kml', '49S.kml', '49R.kml', '49Q.kml', '49P.kml', '49N.kml', '49M.kml', '49L.kml', '49K.kml', '49J.kml', '50X.kml', '50W.kml', '50V.kml', '50U.kml', '50T.kml', '50S.kml', '50R.kml', '50Q.kml', '50P.kml', '50N.kml', '50M.kml', '50L.kml', '50K.kml', '50J.kml', '50H.kml', '51X.kml', '51W.kml', '51V.kml', '51U.kml', '51T.kml', '51S.kml', '51R.kml', '51Q.kml', '51P.kml', '51N.kml', '51M.kml', '51L.kml', '51K.kml', '51J.kml', '51H.kml', '52X.kml', '52W.kml', '52V.kml', '52U.kml', '52T.kml', '52S.kml', '52R.kml', '52P.kml', '52N.kml', '52M.kml', '52L.kml', '52K.kml', '52J.kml', '52H.kml', '53X.kml', '53W.kml', '53V.kml', '53U.kml', '53T.kml', '53S.kml', '53M.kml', '53L.kml', '53K.kml', '53J.kml', '53H.kml', '54X.kml', '54W.kml', '54V.kml', '54U.kml', '54T.kml', '54S.kml', '54M.kml', '54L.kml', '54K.kml', '54J.kml', '54H.kml', '55X.kml', '55W.kml', '55V.kml', '55U.kml', '55T.kml', '55M.kml', '55L.kml', '55K.kml', '55J.kml', '55H.kml', '55G.kml', '56W.kml', '56V.kml', '56U.kml', '56T.kml', '56M.kml', '56L.kml', '56K.kml', '56J.kml', '56H.kml', '57W.kml', '57V.kml', '57U.kml', '57M.kml', '57L.kml', '58W.kml', '58V.kml', '58U.kml', '58L.kml', '58K.kml', '58G.kml', '59W.kml', '59V.kml', '59K.kml', '59H.kml', '59G.kml', '60W.kml', '60V.kml', '60K.kml', '60H.kml', '60G.kml'];

// const legitimateKMLFiles = ['31V.kml', '32V.kml'];

const emptyObj = {};
window.emptyObj = emptyObj;

function* genFunc() {
  yield* legitimateKMLFiles;
}

const generator = genFunc();
const missingGrids = [];

for (let index = 0; index < legitimateKMLFiles.length; index++) {
  fetch(`./kml/kml/${generator.next().value}`)
    .then(data => data.text())
    .then(data => (new window.DOMParser()).parseFromString(data, 'text/xml'))
    .then(data => toGeoJSON.kml(data))
    .then((data) => {
      // console.time('compile time');
      for (let i = 0; i < data.features.length; i++) {
      // Clean up the GeoJSON files, replace "Polygon" with "MultiPolygon" and encapsulate the coordinates in another array
        Object.assign(data.features[i].geometry, {
          type: 'MultiPolygon',
          coordinates: [data.features[i].geometry.coordinates],
        });
        // Grab the properties key so we can append it to our empty array
        const { properties } = data.features[i];
        // Turf.js formatting
        const arrMultiPolygon = data.features[i].geometry.coordinates;
        const multiPolygon = turf.multiPolygon(arrMultiPolygon);
        // Get the latlng coordinates for the corners of each 100K grid square of the GZD
        if (!getCornerPts(multiPolygon, 3)) {
          // Since some of these grid squares aren't rectangles, we need to find out the right threshold value
          for (let index = 0; index < 180; index++) {
            if (getCornerPts(multiPolygon, index)) {
              getCornerPts(multiPolygon, index).forEach((e) => {
                // GeoJSON formats latitude-longitude backwards
                const gg = new L.LatLng(e.geometry.coordinates[1].toFixed(4), e.geometry.coordinates[0].toFixed(4));
                // Push these new coordinates to the empty array
                arr9.push(gg);
              });
              // Pushes the properties value to each matching coordinates boundaries array
              if (i % 1 === 0) {
                arr9.push(properties);
              }
            } else {
              missingGrids.push(properties.GRID1MIL);
            }
          }
        } else {
          getCornerPts(multiPolygon, 3).forEach((e) => {
          // GeoJSON formats latitude-longitude backwards
            const gg = new L.LatLng(e.geometry.coordinates[1].toFixed(4), e.geometry.coordinates[0].toFixed(4));
            // Push these new coordinates to the empty array
            arr9.push(gg);
          });
          // Pushes the properties value to each matching coordinates boundaries array
          if (i % 1 === 0) {
            arr9.push(properties);
          }
        }
      }
    })
    .then(() => {
      // Split in group of 5 items (4 arrays of the coordinates of each grid square corner and 1 object containing it's properties)
      const result = chunkArray(arr9, 5);
      // Now let's build the grid
      result.forEach((key) => {
        // Loop over the first 4 items in the array to create the grid, skip the 5th since it's just property values
        const completedObj = {
          [key[4].GRID100K]: [[key[0].lat, key[0].lng], [key[3].lat, key[3].lng], [key[2].lat, key[2].lng], [key[1].lat, key[1].lng]],
        };

        // Add the completed object to the final object
        finalObject = addToObject(finalObject, Object.keys(completedObj), Object.values(completedObj));
        finalObject2 = {
          // THIS IS CALLED A COMPUTED PROPERTY NAME
          [key[4].GRID1MIL]: finalObject,
        };
      });
    })
    .then(() => {
      // Copy the completed object values :)
      Object.assign(emptyObj, finalObject2);
      // console.log('**************************************');
      // console.log(Object.getOwnPropertyNames(finalObject2));
      // console.log(`${(index / (legitimateKMLFiles.length - 1) * 100).toFixed(2)}% complete`);
      // console.timeEnd('compile time');

      const st = JSON.stringify(emptyObj, (k, v) => {
        if (v instanceof Array) { return JSON.stringify(v); }
        return v;
      }, 4)
        .replace(/"\[/g, '"')
        .replace(/\]"/g, '"')
        .replace(/\\"/g, '"')
        .replace(/""/g, '"')
        .replace(/$/g, ',');
      console.log(st);
    })
    .then(() => {
      for (const prop of Object.getOwnPropertyNames(emptyObj)) {
        delete emptyObj[prop];
      }
      for (const prop of Object.getOwnPropertyNames(finalObject)) {
        delete finalObject[prop];
      }
      for (const prop of Object.getOwnPropertyNames(finalObject2)) {
        delete finalObject2[prop];
      }
      while (arr9.length) {
        arr9.pop();
      }
    })
    .catch(err => console.error(err));
}


// Find the GZDs with missing data
setTimeout(() => {
  console.log([...new Set(missingGrids)]);
}, 30000);
