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

window.map = map;
window.L = L;
