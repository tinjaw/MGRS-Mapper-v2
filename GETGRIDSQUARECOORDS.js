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
  const temp = {};
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
// Absolutely idiotic naming convention but I needed this to wrap the final object in its Grid zone designator ID
let finalObject2 = {};
const arr9 = [];
// https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
fetch('./kml/MGRS_100kmSQ_ID_17T.kml')
  .then(data => data.text())
  .then(data => (new window.DOMParser()).parseFromString(data, 'text/xml'))
  .then(data => toGeoJSON.kml(data))
  .then((data) => {
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
  })
  .then(() => {
    // Split in group of 5 items (4 arrays of the coordinates of each grid square corner and 1 object containing it's properties)
    const result = chunkArray(arr9, 5);
    // Now let's build the grid
    result.forEach((key) => {
      // Loop over the first 4 items in the array to create the grid, skip the 5th since it's just property values
      const grids100K = new L.Polygon([key[0], key[1], key[2], key[3]], {
        fillColor: '#ff7800',
        weight: 2,
        stroke: true,
        color: 'black',
        fillOpacity: 0.2,
        noClip: true,
        smoothFactor: 1,
        lineCap: 'square',
        lineJoin: 'miter',
        interactive: false,
      });

      // Create a new object of the output so I can copy it's values for later use
      const completedObj = {
        [key[4]['100kmSQ_ID']]: {
          topLeft: key[0],
          topRight: key[3],
          bottomRight: key[2],
          bottomLeft: key[1],
        },
      };

      // Add the completed object to the final object
      finalObject = addToObject(finalObject, Object.keys(completedObj), Object.values(completedObj));
      const grids100kBounds = grids100K.getBounds();
      const grids100kIdSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      // Once the polylines are added to the map we can begin centering the Grid Zone Designator
      grids100kIdSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      // Put this into an event listener where if the map zoom is <=7, adjust viewBox to '0 0 200 100' or something
      grids100kIdSVG.setAttribute('viewBox', '-8 -5.8 30 25');
      grids100kIdSVG.innerHTML = `
    <rect width="15" height="12" fill="green" stroke="black" stroke-width="1" fill-opacity="0.5"/>
    <text x="7.5" y="6" fill="black" font-weight="bold" font-family="Arial" font-size="10" text-anchor="middle" dominant-baseline="central">${key[4]['100kmSQ_ID']}</text>`;
      // Get the difference between the north east and southwest latitudes/longitudes and divide by 2
      const grids100kHalfLat = (grids100kBounds.getNorthEast().lat - grids100kBounds.getSouthWest().lat) / 2; // (eg- 40.000 - 48.000 / 2 = 4)
      const grids100kHalfLng = (grids100kBounds.getNorthEast().lng - grids100kBounds.getSouthWest().lng) / 2; // (eg- -72.000 - -78.000 / 2 = 3)
      // Now add those values to the southwest latitude/longitude to get the center point of the GZD
      const grids100kCenterLat = grids100kBounds.getSouthWest().lat + grids100kHalfLat;
      const grids100kCenterLng = grids100kBounds.getSouthWest().lng + grids100kHalfLng;
      // Add or subtract a small number on the center latitudes/longitudes, this will give us a legitimate new LatLngBounds
      // Add the pad() method at the end to add padding on all sides of the new boundaries so the GZD ID label can fit
      const grids100kCenterBounds = new L.LatLngBounds([grids100kCenterLat + 0.01, grids100kCenterLng - 0.01], [grids100kCenterLat - 0.01, grids100kCenterLng + 0.01]).pad(10);
      // Now add the GZD overlays to the center of the GZD
      const grids100kLabels = new L.svgOverlay(grids100kIdSVG, grids100kCenterBounds);
      // combine the polylines and the grid labels into their own group
      // eslint-disable-next-line no-unused-vars
      const gzdGroup = new L.LayerGroup([grids100K, grids100kLabels]).addTo(map);
      // Wrap the final object with the grid zone designator ID
      finalObject2 = {
        [key[4].GZD]: finalObject,
      };
    });
    return finalObject2;
  })
  .then((finalObject2) => {
    // Copy the completed object values :)
    console.log(JSON.stringify(finalObject2));
    // console.log(finalObject2);
  })
  .catch(err => console.error(err));
