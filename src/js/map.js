import L from 'leaflet';
// TODO: Implement marker drag-n-drop
/* This code is needed to properly load the images in the Leaflet CSS */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const map = L.map('main-content');

const defaultCenter = [38.889269, -77.050176];
const defaultZoom = 15;
const basemap = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}');

// const marker = L.marker(defaultCenter);

map.setView(defaultCenter, defaultZoom);
basemap.addTo(map);
// marker.addTo(map);

setTimeout(() => {
  const svg = document.querySelector('.newSVG svg').cloneNode(true);

  const ico = L.divIcon({
    html: svg,
    iconSize: [100, 100],
    iconAnchor: [100, 100],
  });


  function onMapClick(e) {
    const marker = new L.Marker(e.latlng, {
      icon: ico,
      draggable: 'true',
    });

    // marker.on('dragend', (event) => {
    //   const marker = event.target;
    //   const position = marker.getLatLng();
    //   marker.setLatLng(new L.LatLng(position.lat, position.lng), { draggable: 'true' });
    //   map.panTo(new L.LatLng(position.lat, position.lng));
    // });
    // map.addLayer(marker);
    marker.addTo(map);
    document.querySelectorAll('.leaflet-div-icon').forEach((key) => {
      key.style.background = 'none';
      key.style.border = 'none';
    });
  }

  map.on('click', onMapClick);
}, 150);
window.map = map;
window.L = L;
