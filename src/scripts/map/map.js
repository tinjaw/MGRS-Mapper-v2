import { removePopups, moveable } from './moveSymbol';
import {
  L, map, generateGZDGrids, generate100kGrids, generate1000meterGrids, LLtoUTM, UTMtoMGRS,
} from './Leaflet.DumbMGRS';


// *********************************************************************************** //
// * Add cursor coordinates to the bottom app bar                                    * //
// *********************************************************************************** //
const cursorCoordinates = document.querySelector('.cursorCoordinates');
// Set the user coordinates on page load
setTimeout(() => {
  const utmCoordsOnLoad = LLtoUTM({ lat: map.getCenter().lat, lon: map.getCenter().lng });
  cursorCoordinates.innerHTML = `<strong>MGRS: </strong>${UTMtoMGRS(LLtoUTM({ lat: map.getCenter().lat, lon: map.getCenter().lng }), 5, true)}`;
  cursorCoordinates.innerHTML += `<br/><strong>LAT: </strong>${map.getCenter().lat.toFixed(5)} <strong>LNG: </strong>${map.getCenter().lng.toFixed(5)}`;
  cursorCoordinates.innerHTML += `<br/><strong>Easting: </strong>${utmCoordsOnLoad.easting} <strong>Northing: </strong>${utmCoordsOnLoad.northing}`;
}, 100);

// Update the MGRS coordinates when the mouse cursor moves
map.addEventListener('mousemove', (event) => {
  // const cursorCoordinates = document.querySelector('.cursorCoordinates');
  const utmCoords = LLtoUTM({ lat: event.latlng.lat, lon: event.latlng.lng });
  // Display cursor coordinates in MGRS
  cursorCoordinates.innerHTML = `<strong>MGRS: </strong>${UTMtoMGRS(LLtoUTM({ lat: event.latlng.lat, lon: event.latlng.lng }), 5, true)}`;
  // Display cursor coordinates in Latitude/Longitude
  cursorCoordinates.innerHTML += `<br/><strong>LAT: </strong>${event.latlng.lat.toFixed(5)} <strong>LNG: </strong>${event.latlng.lng.toFixed(5)}`;
  // Display cursor coordinates in Easting/Northing
  cursorCoordinates.innerHTML += `<br/><strong>Easting: </strong>${utmCoords.easting} <strong>Northing: </strong>${utmCoords.northing}`;
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

//! Putting leaflet in the global scope
window.L = L;

export {
  map, LLtoUTM, UTMtoMGRS, generateGZDGrids, generate100kGrids, generate1000meterGrids, markerGroup,
};
