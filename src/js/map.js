import L from 'leaflet';
import geodesy, { LatLon } from 'geodesy/mgrs';
import * as LeafletTextPath from 'leaflet-textpath';
import { removePopups, MGRSString } from './moveSymbol';


/* This code is needed to properly load the images in the Leaflet CSS */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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
  document.querySelector('.cursorCoordinates').innerHTML = `${MGRSString(event.latlng.lat, event.latlng.lng)}`;
});

// Put all markers in their own group
const markerGroup = L.layerGroup().addTo(map);


//! MGRS GRID TEST
// https://github.com/eacaps/leaflet-mgrs-layer/tree/gh-pages
// export default class LeafletMgrsLayer extends L.LayerGroup {
//   constructor(options) {
//     super([], options);
//     this.nw_latlon = new LatLon(1, 1);
//     this.sw_latlon = new LatLon(1, 1);
//     this.ne_latlon = new LatLon(1, 1);
//     this.se_latlon = new LatLon(1, 1);
//     this.sw_grid_latlon = new LatLon(1, 1);
//     this.ne_grid_latlon = new LatLon(1, 1);

//     this.westernmost_lon = 0;
//     this.easternmost_lon = 0;
//     this.northernmost_lat = 0;
//     this.southernmost_lat = 0;
//     this.grid_width = 0;
//     this.grid_height = 0;

//     this.sw_grid_utm = {};
//     this.ne_grid_utm = {};

//     this.grid_south_row = [];
//     this.grid_north_row = [];
//     this.grid_west_column = [];
//     this.grid_east_column = [];

//     this.line_style_map = {
//       // 100m grid
//       default: {
//         color: '#F00',
//         weight: 1,
//         opacity: 0.5,
//       },
//       // 1k grid
//       1000: {
//         color: 'green',
//         weight: 2,
//         opacity: 0.5,
//       },
//       // 10k grid
//       10000: {
//         color: 'blue',
//         weight: 3,
//         opacity: 0.5,
//       },
//       // 100k grid
//       100000: {
//         color: 'deeppink',
//         weight: 4,
//         opacity: 0.5,
//       },
//     };
//     this.font_style_map = {
//       default: {
//         fill: '#F00',
//         stroke: 'black',
//         'stroke-width': '1',
//         'font-size': '18',
//       },
//       100000: {
//         fill: 'midnightblue',
//         'font-size': '14',
//       },
//     };
//   }

//   getEvents() {
//     return {
//       moveend: this._moveEndHandler,
//     };
//   }

//   _moveEndHandler() {
//     this.clearLayers(true);
//     this._update();
//   }

//   setBounds(map_bounds) {
//     this.nw_latlng = map_bounds.getNorthWest();
//     this.sw_latlng = map_bounds.getSouthWest();
//     this.ne_latlng = map_bounds.getNorthEast();
//     this.se_latlng = map_bounds.getSouthEast();

//     // update geodesy LatLon objects from Leaflet LagLng objects
//     this.nw_latlon.lat = this.nw_latlng.lat;
//     this.nw_latlon.lon = this.nw_latlng.lng;
//     this.sw_latlon.lat = this.sw_latlng.lat;
//     this.sw_latlon.lon = this.sw_latlng.lng;
//     this.ne_latlon.lat = this.ne_latlng.lat;
//     this.ne_latlon.lon = this.ne_latlng.lng;
//     this.se_latlon.lat = this.se_latlng.lat;
//     this.se_latlon.lon = this.se_latlng.lng;

//     // These comparison protect against warped/rotated map regions.
//     // The corners are used to identify the extreme eastings/northings.
//     this.easternmost_lon = this.ne_latlon.lon;
//     if (this.se_latlon.lon > this.easternmost_lon) {
//       this.easternmost_lon = this.se_latlon.lon;
//     }
//     this.westernmost_lon = this.nw_latlon.lon;
//     if (this.sw_latlon.lon < this.westernmost_lon) {
//       this.westernmost_lon = this.sw_latlon.lon;
//     }
//     this.southernmost_lat = this.sw_latlon.lat;
//     if (this.se_latlon.lat < this.southernmost_lat) {
//       this.southernmost_lat = this.se_latlon.lat;
//     }
//     this.northernmost_lat = this.nw_latlon.lat;
//     if (this.ne_latlon.lat > this.northernmost_lat) {
//       this.northernmost_lat = this.ne_latlon.lat;
//     }

//     // Define grid width and height:
//     this.grid_width = this.easternmost_lon - this.westernmost_lon;
//     this.grid_height = this.northernmost_lat - this.southernmost_lat;

//     // Define grid overlay extreme southwest and northeast corners as LatLon objects
//     // with an extra 10% buffer beyond rendered area:
//     this.sw_grid_latlon.lon = this.westernmost_lon - 0.1 * this.grid_width;
//     this.sw_grid_latlon.lat = this.southernmost_lat - 0.1 * this.grid_height;
//     this.ne_grid_latlon.lon = this.easternmost_lon + 0.1 * this.grid_width;
//     this.ne_grid_latlon.lat = this.northernmost_lat + 0.1 * this.grid_height;

//     // Save results to UTM.  Truncate to establish 1m baseline.
//     this.sw_grid_utm = this.sw_grid_latlon.toUtm();
//     this.sw_grid_utm.easting = Math.floor(this.sw_grid_utm.easting);
//     this.sw_grid_utm.northing = Math.floor(this.sw_grid_utm.northing);
//     this.sw_grid_latlon = this.sw_grid_utm.toLatLon();

//     this.ne_grid_utm = this.ne_grid_latlon.toUtm();
//     this.ne_grid_utm.easting = Math.floor(this.ne_grid_utm.easting);
//     this.ne_grid_utm.northing = Math.floor(this.ne_grid_utm.northing);
//     this.ne_grid_latlon = this.ne_grid_utm.toLatLon();
//   }

//   _determineScale(zoom) {
//     if (this.options.determineScale) {
//       return this.options.determineScale(zoom);
//     }
//     let size = 1000;
//     if (zoom > 21.5) {
//       size = 1;
//     } else if (zoom > 18) {
//       size = 10;
//     } else if (zoom > 14.5) {
//       size = 100;
//     } else if (zoom > 11) {
//       size = 1000;
//     } else if (zoom > 9.5) {
//       size = 10000;
//     } else if (zoom > 8.5) {
//       size = 100000;
//     } else {
//       // Setting size to -1 disables the grid lines since this fails at over 100k
//       size = -1;
//     }
//     return size;
//   }

//   _buildGrids() {
//     const zoom = this._map.getZoom();

//     const size = this._determineScale(zoom);
//     if (size < 0) { return; }

//     const temp_utm = this.sw_grid_latlon.toUtm();
//     let temp = Math.floor(temp_utm.easting);
//     temp_utm.easting = temp - (temp % size);
//     temp = Math.floor(temp_utm.northing);
//     temp_utm.northing = temp - (temp % size);

//     this.grid_south_row = [];
//     this.grid_south_row.push(temp_utm.toLatLon());

//     let x = 0;
//     while (this.grid_south_row[x].lon < this.ne_grid_latlon.lon) {
//       const line = this._nextGridLine(this.grid_south_row[x].toUtm(), 'east', size);
//       this.grid_south_row.push(line);
//       x++;
//     }

//     this.grid_west_column = [];
//     this.grid_west_column.push(temp_utm.toLatLon());
//     let y = 0;
//     while (this.grid_west_column[y].lat < this.ne_grid_latlon.lat) {
//       const line = this._nextGridLine(this.grid_west_column[y].toUtm(), 'north', size);
//       this.grid_west_column.push(line);
//       y++;
//     }

//     this.grid_north_row = [];
//     this.grid_north_row.push(this.grid_west_column[y]);
//     let xx = 0;
//     while (xx < x) {
//       const line = this._nextGridLine(this.grid_north_row[xx].toUtm(), 'east', size);
//       this.grid_north_row.push(line);
//       xx++;
//     }

//     this.grid_east_column = [];
//     this.grid_east_column.push(this.grid_south_row[x]);
//     let yy = 0;
//     while (yy < y) {
//       const line = this._nextGridLine(this.grid_east_column[yy].toUtm(), 'north', size);
//       this.grid_east_column.push(line);
//       yy++;
//     }

//     this._drawLines(size);
//   }

//   _nextGridLine(start_point_utm, dir, grid_distance) {
//     const new_point_utm = start_point_utm;
//     let vertical = false;
//     // if (start_point_utm.hemisphere == 'S') { hemisphere = -1; }
//     switch (dir) {
//       case 'north':
//         vertical = true;
//         break;
//       case 'south':
//         vertical = true;
//         grid_distance *= -1;
//         break;
//       case 'west':
//         grid_distance *= -1;
//     }

//     if (vertical) {
//       new_point_utm.northing += grid_distance;
//       if (new_point_utm.northing < 0) {
//         if (new_point_utm.hemisphere == 'N') { new_point_utm.hemisphere = 'S'; } else { new_point_utm.hemisphere = 'N'; }
//         new_point_utm.northing *= -1;
//       }
//       return new_point_utm.toLatLon();
//     }
//     new_point_utm.easting += grid_distance;
//     return new_point_utm.toLatLon();
//   }

//   _getStyleForScale(size, style_map) {
//     const default_style = style_map.default;
//     const size_style = style_map[size];
//     return size_style || default_style;
//   }

//   _drawLines(size) {
//     let x;
//     let y;
//     // we've got some crazy math to determine the text padding using log10!
//     const text_padding = Math.max(1, Math.ceil(5 - Math.log10(size)));
//     const line_style = this._getStyleForScale(size, this.line_style_map);
//     const font_style = this._getStyleForScale(size, this.font_style_map);

//     for (x = 0; x < this.grid_south_row.length; x++) {
//       const south_point = this.grid_south_row[x];
//       const north_point = this.grid_north_row[x];
//       let cur_easting = south_point.toUtm().easting.toFixed(0);
//       if (size >= 10000) {
//         cur_easting = parseInt(cur_easting) + 999;
//         cur_easting -= (cur_easting % size);
//       }
//       if (cur_easting % size == 0) {
//         const grid_line = L.polyline([
//           south_point, north_point,
//         ], line_style);
//         this.addLayer(grid_line);
//         if (size > 10000) {
//         } else {
//           const label = (cur_easting / size) % (100000 / size);
//           grid_line.setText(
//           	label.toString().padStart(text_padding, '0'), {
//           		repeat: false,
//           		attributes: Object.assign({ dx: (this._map.getSize().y * 0.12) }, font_style),
//           	},
//           );
//         }
//       }
//     }

//     for (y = 0; y < this.grid_west_column.length; y++) {
//       const west_point = this.grid_west_column[y];
//       const east_point = this.grid_east_column[y];
//       let cur_northing = west_point.toUtm().northing.toFixed(0);
//       if (size >= 10000) {
//         cur_northing = parseInt(cur_northing) + 999;
//         cur_northing -= (cur_northing % size);
//       }
//       if (cur_northing % size == 0) {
//         // label = (cur_northing / size) % (100000 / size);
//         const grid_line = L.polyline([west_point, east_point], line_style);
//         this.addLayer(grid_line);
//         if (size > 10000) {
//         } else {
//           const label = (cur_northing / size) % (100000 / size);
//           grid_line.setText(
//           	label.toString().padStart(text_padding, '0'), {
//           		repeat: false,
//           		attributes: Object.assign({ dx: (this._map.getSize().x * 0.12) }, font_style),
//           	},
//           );
//         }
//       }
//     }
//   }

//   _update() {
//     try {
//       const map_bounds = this._map.getBounds();
//       this.setBounds(map_bounds);
//       this._buildGrids();
//     } catch (e) {
//       // ignore out of zone grids
//       console.log(e);
//     }
//   }

//   onAdd(map) {
//     this._update();
//   }
// }


// const MGRSLayer = new LeafletMgrsLayer();
// MGRSLayer.addTo(map);
const gzd = {
  '18T': {
    id: '18T',
    top: {
      left: {
        northing: 48.00000,
        easting: -78.00000,
      },
      right: {
        northing: 48.00000,
        easting: -72.00000,
      },
    },
    bottom: {
      left: {
        northing: 40.00000,
        easting: -78.00000,
      },
      right: {
        northing: 40.00000,
        easting: -72.00000,
      },
    },
  },
};


const createGZDBox = element => Object.values(element).map((key) => {
  const topLeft = new L.LatLng(key.top.left.northing, key.top.left.easting);
  const topRight = new L.LatLng(key.top.right.northing, key.top.right.easting);
  const bottomRight = new L.LatLng(key.bottom.right.northing, key.bottom.right.easting);
  const bottomLeft = new L.LatLng(key.bottom.left.northing, key.bottom.left.easting);
  const gzdBox = [topLeft, topRight, bottomRight, bottomLeft, topLeft];
  const { id } = key;
  return {
    gzdBox,
    id,
  };
});

// Since we are returning multiple values, we will destructure it
const { gzdBox, id } = createGZDBox(gzd)[0];

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

// Once the polylines are added to the map we can begin centering the Grid Zone Designator
const gzdIdOverlay = (element) => {
  const gzdIdSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  gzdIdSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  // Put this into an event listener where if the map zoom is <=7, adjust viewbox to '0 0 200 100' or something
  gzdIdSVG.setAttribute('viewBox', '75 50 50 50');
  gzdIdSVG.innerHTML = `
    <rect width="200" height="100" fill="salmon" stroke="black" stroke-width="1" fill-opacity="0.5"/>
    <text x="100" y="50" fill="black" font-weight="bold" font-family="Arial" font-size="80" text-anchor="middle" dominant-baseline="central">${id}</text>
    `;
  // Get the difference between the north east and southwest latitudes/longitudes and divide by 2
  const halfLat = (element.getBounds()._northEast.lat - element.getBounds()._southWest.lat) / 2; // (eg- 40.000 - 48.000 / 2 = 4)
  const halfLng = (element.getBounds()._northEast.lng - element.getBounds()._southWest.lng) / 2; // (eg- -72.000 - -78.000 / 2 = 3)
  // Now add those values to the southwest latitude/longitude to get the center point of the GZD
  const centerLat = element.getBounds()._southWest.lat + halfLat;
  const centerLng = element.getBounds()._southWest.lng + halfLng;
  // Add or subtract a small number on the center latitudes/longitudes, this will give us a legitmate new latLngBounds
  // Add the pad() method at the end to add padding on all sides of the new boundaries so the GZD ID label can fit
  const centerBounds = new L.latLngBounds([centerLat + 0.01, centerLng - 0.01], [centerLat - 0.01, centerLng + 0.01]).pad(10.5);
  return {
    gzdIdSVG,
    centerBounds,
  };
};

const { gzdIdSVG, centerBounds } = gzdIdOverlay(gzdPolylineBox);


L.svgOverlay(gzdIdSVG, centerBounds).addTo(map);


window.gzdPolylineBox = gzdPolylineBox;
window.markerGroup = markerGroup;
window.map = map;
window.L = L;
