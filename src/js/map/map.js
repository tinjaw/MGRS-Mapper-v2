// import L from 'leaflet';
//! Currently not using Geodesy, LatLon or LeafletTextPath
import Mgrs, { Utm, LatLon } from 'geodesy/mgrs';
import { removePopups } from './moveSymbol';
import {
  L, map, generateGZDGrids, generate100kGrids, generate1000meterGrids, LLtoUTM, UTMtoMGRS,
} from './Leaflet.DumbMGRS';

window.Mgrs = Mgrs;
window.LatLon = LatLon;

// Automatically adjust the map to the users coordinates
map.locate({
  setView: true,
  maxZoom: 6,
  enableHighAccuracy: true,
});


// Update the MGRS coordinates when the mouse cursor moves
map.addEventListener('mousemove', (event) => {
  const cc = document.querySelector('.cursorCoordinates');
  const latLong = new LatLon(event.latlng.lat, event.latlng.lng);
  const latLongParse = LatLon.parse(latLong);
  cc.innerHTML = `<strong>MGRS: </strong>${latLongParse.toUtm().toMgrs()}`;
  cc.innerHTML += `<br/><strong>LAT:  </strong>  ${event.latlng.lat.toFixed(4)} <strong>LNG: </strong> ${event.latlng.lng.toFixed(4)}`;
});


// When the map is panned, remove the control box on the symbol
map.addEventListener('movestart', () => {
  if (moveable.target) {
    moveable.target = undefined;
    removePopups();
  }
});

// Put all markers in their own group
const markerGroup = new L.LayerGroup();
markerGroup.addTo(map);


// *********************************************************************************** //
// * Leaflet.DumbMGRS - Add plugins to the map                                       * //
// *********************************************************************************** //
generateGZDGrids.addTo(map);
generate100kGrids.addTo(map);
generate1000meterGrids.addTo(map);

window.markerGroup = markerGroup;
window.map = map;
window.L = L;

export { map };
