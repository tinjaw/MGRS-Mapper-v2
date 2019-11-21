import L from 'leaflet';
//! Currently not using Geodesy, LatLon or LeafletTextPath
import geodesy, { LatLon } from 'geodesy/mgrs';
import * as LeafletTextPath from 'leaflet-textpath';
import { removePopups, MGRSString } from './moveSymbol';
import { northingDict, eastingDict } from './gzdObject';


/* This code is needed to properly load the images in the Leaflet CSS */
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

const map = L.map('main-content', {
  center: [45.12689618126071, -70.62732696533205],
  zoom: 5,
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
  const cc = document.querySelector('.cursorCoordinates');
  cc.innerHTML = `<strong>MGRS: </strong>${MGRSString(event.latlng.lat, event.latlng.lng)}`;
  cc.innerHTML += `<br/><strong>LAT: </strong> ${event.latlng.lat.toFixed(4)} <strong>LNG: </strong> ${event.latlng.lng.toFixed(4)}`;
});

// Put all markers in their own group
const markerGroup = L.layerGroup().addTo(map);


//! MGRS GRID TEST
//! furthermore the labels need to be toggled on and off or removed on certain zoom values
//! Adjust for special cases. GZD 31X, 33X, 35X, 37X and 32V have special boundaries
const LeafletGZDLayer = L.LayerGroup.extend({
  initialize(northObj, eastObj) {
    // save position of the layer or any options from the constructor
    this._northObj = northObj;
    this._eastObj = eastObj;
    return this._getInBoundsGZDs();
  },

  // Find all the Grid Zone Designators that are in your view
  _getInBoundsGZDs() {
    // Do not create GZDs if the map is zoomed out at 4 or below
    if (map.getZoom() <= 4) { return; }
    // Combined the northingDict and eastingDict into one object
    const combinedObj = Object.assign({}, this._northObj, this._eastObj);
    // Create an array to store the inBounds values for letter,top, and bottom
    const inBoundsLatitudeLetters = [];
    // Create an array to store the inBounds values for top, right, and id
    const inBoundsUTMNumbers = [];
    const currentVisibleBounds = map.getBounds();

    Object.values(combinedObj).forEach((key) => {
      const { top } = key;
      const { bottom } = key;
      const { left } = key;
      const { right } = key;
      const { id } = key;

      // Since we don't want to create grids for what we can't see this returns all the valid inBounds properties in the northingDict
      if (currentVisibleBounds._northEast.lat >= bottom && currentVisibleBounds._southWest.lat <= top) {
        inBoundsLatitudeLetters.push(key);
      }
      // Same thing here but it returns the valid inBounds properties for the eastingDict
      if (currentVisibleBounds._northEast.lng >= left && currentVisibleBounds._southWest.lng <= right) {
        inBoundsUTMNumbers.push({ left, right, id });
      }
    });

    // Define the "id" property in this object so we can store all the values returned from inBoundsUTMNumbers
    inBoundsLatitudeLetters.forEach((e) => {
      const letterKey = e;
      Object.defineProperties(letterKey, {
        id: {
          value: inBoundsUTMNumbers.map(e => e),
          writable: true,
        },
      });
    });

    // Iterate over all the returned values and instantiate the class to create the grids
    Object.values(inBoundsLatitudeLetters).forEach((key) => {
      const letterID = key.letter;
      const { top } = key;
      const { bottom } = key;

      for (let index = 0; index < key.id.length; index += 1) {
        const element = key.id[index];
        const { left } = element;
        const { right } = element;
        const { id } = element;
        this._buildGZD({
          top, bottom, letterID, left, right, id,
        });
      }
    });
  },

  _buildGZD(params) {
    this._params = params;
    const topLeft = new L.LatLng(this._params.top, this._params.left);
    const topRight = new L.LatLng(this._params.top, this._params.right);
    const bottomRight = new L.LatLng(this._params.bottom, this._params.right);
    const bottomLeft = new L.LatLng(this._params.bottom, this._params.left);
    const gzdBox = [topLeft, topRight, bottomRight, bottomLeft, topLeft];
    const gzdPolylineBox = new L.Polyline(gzdBox, {
      color: 'red',
      weight: 5,
      opacity: 0.75,
      smoothFactor: 1,
      lineCap: 'square',
      lineJoin: 'miter',
    });

    const gzdIdSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // Once the polylines are added to the map we can begin centering the Grid Zone Designator
    gzdIdSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    // Put this into an event listener where if the map zoom is <=7, adjust viewBox to '0 0 200 100' or something
    gzdIdSVG.setAttribute('viewBox', '75 50 50 50');
    gzdIdSVG.innerHTML = `
        <rect width="200" height="100" fill="salmon" stroke="black" stroke-width="1" fill-opacity="0.5"/>
        <text x="100" y="50" fill="black" font-weight="bold" font-family="Arial" font-size="80" text-anchor="middle" dominant-baseline="central">${this._params.id}${this._params.letterID}</text>`;
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
    const gzdLabels = new L.svgOverlay(gzdIdSVG, centerBounds);
    // combine the polylines and the grid labels into their own group
    const gzdGroup = new L.LayerGroup([gzdPolylineBox, gzdLabels]).addTo(map);
    // This is a cheap hack and I don't know how to remove the layer from the _reset() func
    map.addEventListener('moveend', () => {
      map.removeLayer(gzdGroup);
    }, { once: true });
  },

  // these events will be added and removed from the map with the layer
  getEvents() {
    return {
      moveend: this._reset,
    };
  },

  // Reset the grid on move end
  _reset() {
    this.initialize(this._northObj, this._eastObj);
  },

});

const addGZD = new LeafletGZDLayer(northingDict, eastingDict).addTo(map);


window.markerGroup = markerGroup;
window.map = map;
window.L = L;
