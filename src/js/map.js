import L from 'leaflet';
import { removePopups, MGRSString } from './moveSymbol';

/* This code is needed to properly load the images in the Leaflet CSS */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const map = L.map('main-content', {
  center: [38.889269, -77.050176],
  zoom: 15,
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
  document.querySelector('.cursorCoordinates').innerHTML = `${MGRSString(event.latlng.lat, event.latlng.lng)}`;
});


// L.GridLayer.DebugCoords = L.GridLayer.extend({
//   createTile(coords, done) {
//     const tile = document.createElement('div');
//     console.log(MGRSString(map.layerPointToLatLng(coords).lat, map.layerPointToLatLng(coords).lng));
//     const mLat = map.layerPointToLatLng(coords).lat;
//     const mLng = map.layerPointToLatLng(coords).lng;
//     // console.log(map.unproject([coords.x, coords.y]));
//     // console.log(MGRSString(mLat, mLng));
//     // console.log(MGRSString(map.unproject(coords.x), map.unproject(coords.y)));
//     tile.innerHTML = [MGRSString(mLat, mLng), coords.z].join(', ');
//     tile.style.outline = '1px solid red';

//     setTimeout(() => {
//       done(null, tile);	// Syntax is 'done(error, tile)'
//     }, 500 + Math.random() * 1500);

//     return tile;
//   },
// });

// L.gridLayer.debugCoords = function (opts) {
//   return new L.GridLayer.DebugCoords(opts);
// };

// map.addLayer(L.gridLayer.debugCoords());

// const zone = ['30UVU', '30UWU', '30UXU', '30TVU', '30TWU', '30TXU', '30TVT', '30TWT', '30TXT'];
// for (const z of zone) {
//   for (let u = 0; u < 10; u++) {
//     for (let v = 0; v < 10; v++) {
//       const bbox = mgrs.inverse(z + u + v);
//       const latlngs = [[bbox[1], bbox[0]], [bbox[3], bbox[0]], [bbox[3], bbox[2]], [bbox[1], bbox[2]], [bbox[1], bbox[0]]];
//       const polyline = L.polyline(latlngs, { color: 'red', weight: 2 }).addTo(map);
//     }
//   }
// }


window.map = map;
window.L = L;
