// import Moveable from 'moveable';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl-dev';
// import * as MapboxDraw from '@mapbox/mapbox-gl-draw';


window.mapboxgl = mapboxgl;


mapboxgl.accessToken = 'pk.eyJ1IjoicGlzdGVsbCIsImEiOiJjazI2ejh2MjAwM2V0M2NtczE4NXNkaXJhIn0.UrwpAGyifLtNGL47RUTJGA';
const map = new mapboxgl.Map({
  container: 'main-content',
  style: 'mapbox://styles/mapbox/streets-v9',
  zoom: 15,
  center: [-75.706, 44.137],
  logoPosition: 'bottom-right',
});
window.map = map;

map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
setTimeout(() => {

  // const mapArea = document.querySelector('#main-content');
  // const coords = document.createElement('div');
  // coords.classList.add('coords');
  // coords.innerHTML = '<p>HEY</p>';


  // const moveable = new Moveable(document.body, {
  //   target: null,
  //   scalable: true,
  //   throttleScale: 0,
  //   keepRatio: true,
  // });

  // const marker = new mapboxgl.Marker({
  //   draggable: true,
  //   element: document.querySelector('.newSVG svg').cloneNode(true),
  // })
  //   .setLngLat([-75.706, 44.137])
  //   .setPopup(new mapboxgl.Popup({ offset: 50 }) // add popups
  //     .setHTML(coords.innerHTML))
  //   .addTo(map);


  // function onDragEnd() {
  //   const lngLat = marker.getLngLat();
  //   coords.style.display = 'block';
  //   coords.innerHTML = `<h6>Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}</h6>`;
  //   marker.setPopup(new mapboxgl.Popup({ offset: 50 }) // add popups
  //     .setHTML(coords.innerHTML));
  // }

  // marker.on('dragend', onDragEnd);

  // marker.on('dragstart', (event) => {
  //   moveable.target = noContext;
  // });


  // const noContext = document.querySelector('.mapboxgl-marker.mapboxgl-marker-anchor-center');

  // noContext.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  //   moveable.target = noContext;

  //   moveable.on('scale', ({ target, transform }) => {
  //     target.style.transform = transform;
  //   });
  // });


  // moveable.on('scale', ({ target, transform }) => {
  //   moveable.target = noContext;
  //   target.style.transform = transform;
  // });


  // function toggleDraggableElement(event) {
  //   document.querySelectorAll('.mapboxgl-marker.mapboxgl-marker-anchor-center').forEach((key) => {
  //     // https://stackoverflow.com/questions/24183286/drag-and-drop-to-div-behind-absolutely-positioned-div
  //     const elements = document.elementsFromPoint(event.clientX, event.clientY);
  //     const chosenTarget = elements.find(key => key.matches('.mapboxgl-marker.mapboxgl-marker-anchor-center'));
  //     // If you click a symbol on the yellow background, it will set it as the Moveable target
  //     // If you click the yellow background it will de-select the symbol so you can get that annoying control box out of view
  //     chosenTarget ? (moveable.target = chosenTarget) : (moveable.target = undefined);
  //   });
  // }
  // mapArea.onclick = toggleDraggableElement;
}, 1000);
