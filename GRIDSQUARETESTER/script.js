/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import Mgrs, { Utm, LatLon, Dms } from 'https://cdn.jsdelivr.net/gh/chrisveness/geodesy@2.0.1/mgrs.js';
import { northingDict, eastingDict } from './gridHelper/gzdObject.js';


const myWorker = new Worker('./web-worker.js');

const map = L.map('mapid').setView([43.7, -75.6], 7);
L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  id: 'osm_map',
}).addTo(map);


// Update the MGRS coordinates when the mouse cursor moves
map.addEventListener('mousemove', (event) => {
  const cc = document.querySelector('.cursorCoordinates');
  const latLong = new LatLon(event.latlng.lat, event.latlng.lng);
  const latLongParse = LatLon.parse(latLong);
  cc.innerHTML = `<strong>MGRS: </strong>${latLongParse.toUtm().toMgrs()}`;
  cc.innerHTML += `<br/><strong>LAT:  </strong>  ${event.latlng.lat.toFixed(4)} <strong>LNG: </strong> ${event.latlng.lng.toFixed(4)}`;
});


//! MGRS GRID TEST
// TODO: Minify the JSON file
// TODO: Clean up this class. The logic is chaotic
// TODO: Add 10k grid squares
// TODO: Toggle grid squares button
// TODO: Keep geodesy functions since we are using it in the main site
// TODO: The Polygon builder in _buildGZD and _build100K are nearly identical. Move to a function
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
    if (map.getZoom() <= 3) { return; }
    // Combined the northingDict and eastingDict into one object
    const combinedObj = { ...this._northObj, ...this._eastObj };
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
          value: inBoundsUTMNumbers.map(j => j),
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
        let { id } = element;
        // This appends the number "0" to GZDs with an ID of less than 10
        // Without it the grids won't load since the ids will be parsed as a number
        // (eg- "01W" will default to "1W" which is invalid)
        if (id < 10) {
          id = `0${id}`;
        }
        this._buildGZD({
          top, bottom, letterID, left, right, id,
        });
        // Build 1000m grids
        if (map.getZoom() >= 10) {
          this._build1000m();
        }
      }
    });
  },

  _buildGZD(params) {
    this._params = params;
    // Adjust coordinates for special GZDs around Norway and Svalbard
    const exceptionZones = `${this._params.id}${this._params.letterID}`;
    switch (exceptionZones) {
      case '31X':
        this._params.right = 9;
        break;
      case '32X':
        return;
      case '33X':
        this._params.left = 9;
        this._params.right = 21;
        break;
      case '34X':
        return;
      case '35X':
        this._params.left = 21;
        this._params.right = 33;
        break;
      case '36X':
        return;
      case '37X':
        this._params.left = 33;
        break;
      case '31V':
        this._params.right = 3;
        break;
      case '32V':
        this._params.left = 3;
        break;
      default:
        break;
    }

    const topLeft = new L.LatLng(this._params.top, this._params.left);
    const topRight = new L.LatLng(this._params.top, this._params.right);
    const bottomRight = new L.LatLng(this._params.bottom, this._params.right);
    // const bottomLeft = new L.LatLng(this._params.bottom, this._params.left);
    // We do not need bottomLeft and topLeft on the gzdBox, since they just overlap anyways
    const gzdBox = [topLeft, topRight, bottomRight];
    const gzdPolylineBox = new L.Polyline(gzdBox, {
      color: 'red',
      weight: 5,
      opacity: 0.5,
      smoothFactor: 1,
      lineCap: 'butt',
      lineJoin: 'miter-clip',
      noClip: true,
      // Keep interactive false, else the symbols cannot be dropped on polylines
      interactive: false,
      // className: `gzd_${this._params.id}${this._params.letterID}`,
    });

    const gzdPolylineBounds = gzdPolylineBox.getBounds();
    const gzdIdSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // Once the polylines are added to the map we can begin centering the Grid Zone Designator
    gzdIdSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    // Put this into an event listener where if the map zoom is <=7, adjust viewBox to '0 0 200 100' or something
    gzdIdSVG.setAttribute('viewBox', '75 50 50 50');
    gzdIdSVG.innerHTML = `
        <rect width="200" height="100" fill="salmon" stroke="black" stroke-width="1" fill-opacity="0.5"/>
        <text x="100" y="50" fill="black" font-weight="bold" font-family="Arial" font-size="80" text-anchor="middle" dominant-baseline="central">${this._params.id}${this._params.letterID}</text>`;
    // Get the difference between the north east and southwest latitudes/longitudes and divide by 2
    const halfLat = (gzdPolylineBounds._northEast.lat - gzdPolylineBounds._southWest.lat) / 2; // (eg- 40.000 - 48.000 / 2 = 4)
    const halfLng = (gzdPolylineBounds._northEast.lng - gzdPolylineBounds._southWest.lng) / 2; // (eg- -72.000 - -78.000 / 2 = 3)
    // Now add those values to the southwest latitude/longitude to get the center point of the GZD
    const centerLat = gzdPolylineBounds._southWest.lat + halfLat;
    const centerLng = gzdPolylineBounds._southWest.lng + halfLng;
    // Add or subtract a small number on the center latitudes/longitudes, this will give us a legitimate new LatLngBounds
    // Add the pad() method at the end to add padding on all sides of the new boundaries so the GZD ID label can fit
    const centerBounds = new L.LatLngBounds([centerLat + 0.01, centerLng - 0.01], [centerLat - 0.01, centerLng + 0.01]).pad(10.5);
    // Now add the GZD overlays to the center of the GZD
    const gzdLabels = new L.svgOverlay(gzdIdSVG, centerBounds);
    // combine the polylines and the grid labels into their own group
    const gzdGroup = new L.LayerGroup([gzdPolylineBox, gzdLabels]).addTo(map);

    // Build 100K grids
    if (map.getZoom() >= 8) {
      const inBoundsGZD = `${this._params.id}${this._params.letterID}`;
      this._build100k(inBoundsGZD);
    }

    // This is a cheap hack and I don't know how to remove the layer from the _reset() func
    map.addEventListener('moveend', () => {
      map.removeLayer(gzdGroup);
    }, { once: true });
  },


  _build100k(data) {
    myWorker.postMessage([data]);
    myWorker.onmessage = (event) => {
      const gridArray = [];
      gridArray.push(event.data.Grid100K);
      for (let index = 0; index < gridArray.length; index++) {
        Object.entries(gridArray[index]).forEach((e) => {
          justBuildThe100kGridsOK(JSON.parse(e[1]), e[0]);
        });
      }
    };

    function justBuildThe100kGridsOK(...params) {
      const gridId = params[1];
      const corners = params[0];
      const topLeft = corners[2];
      const topRight = corners[3];
      const bottomRight = corners[0];
      const bottomLeft = corners[1];
      const gzdBox = [topLeft, topRight, bottomRight, bottomLeft];
      const grids100K = new L.Polygon(gzdBox, {
        weight: 2,
        stroke: true,
        color: 'black',
        opacity: 0.5,
        fill: false,
        noClip: true,
        smoothFactor: 1,
        lineCap: 'butt',
        lineJoin: 'miter-clip',
        interactive: false,
      });
      const grids100kBounds = grids100K.getBounds();
      const grids100kIdSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      // Once the polylines are added to the map we can begin centering the Grid Zone Designator
      grids100kIdSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      // Put this into an event listener where if the map zoom is <=7, adjust viewBox to '0 0 200 100' or something
      grids100kIdSVG.setAttribute('viewBox', '-8 -5.8 30 25');
      grids100kIdSVG.innerHTML = `
  <rect width="15" height="12" fill="green" stroke="black" stroke-width="1" fill-opacity="0.5"/>
  <text x="7.5" y="6" fill="black" font-weight="bold" font-family="Arial" font-size="8" text-anchor="middle" dominant-baseline="central">${gridId}</text>`;
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
      const gzdGroup2 = new L.LayerGroup([grids100K, grids100kLabels]);
      gzdGroup2.addTo(map);

      map.addEventListener('moveend', () => {
        setTimeout(() => {
          map.removeLayer(gzdGroup2);
        }, 100);
      }, { once: true });
    }
  },


  _build1000m() {
    function searchMgrs(start_point_utm, dir, grid_distance) {
      // establish parameters of search:
      const new_point_utm = start_point_utm;
      let vertical = false;
      if (start_point_utm.hemisphere == 'S') { hemisphere = -1; }
      switch (dir) {
        case 'north':
          vertical = true;
          break;
        case 'south':
          vertical = true;
          grid_distance *= -1;
          break;
        case 'west':
          grid_distance *= -1;
          break;
        default:
          break;
      }

      if (vertical) {
        new_point_utm.northing += grid_distance;
        if (new_point_utm.northing < 0) {
          if (new_point_utm.hemisphere == 'N') { new_point_utm.hemisphere = 'S'; } else { new_point_utm.hemisphere = 'N'; }
          new_point_utm.northing *= -1;
        }
        return new_point_utm.toLatLon();
      }
      new_point_utm.easting += grid_distance;
      return new_point_utm.toLatLon();
    }

    const grid = {
      nw_latlon: new LatLon(1, 1),
      sw_latlon: new LatLon(1, 1),
      ne_latlon: new LatLon(1, 1),
      se_latlon: new LatLon(1, 1),
      sw_grid_latlon: new LatLon(1, 1),
      ne_grid_latlon: new LatLon(1, 1),

      westernmost_lon: 0,
      easternmost_lon: 0,
      northernmost_lat: 0,
      southernmost_lat: 0,
      grid_width: 0,
      grid_height: 0,

      sw_grid_utm: {},
      ne_grid_utm: {},

      grid_south_row: [],
      grid_north_row: [],
      grid_west_column: [],
      grid_east_column: [],
      grid1000m: null,

      grid_lines_collection: [],

      setBounds(map_bounds) {
        // Takes Leaflet Bounds object; separates into Leaflet LatLng objects.
        // Note:  properties LatLng.lat, LatLng.lng, LatLng.alt are decimal degrees, compatible with Geodesy
        this.nw_latlng = map_bounds.getNorthWest();
        this.sw_latlng = map_bounds.getSouthWest();
        this.ne_latlng = map_bounds.getNorthEast();
        this.se_latlng = map_bounds.getSouthEast();

        // update geodesy LatLon objects from Leaflet LagLng objects
        this.nw_latlon.lat = this.nw_latlng.lat;
        this.nw_latlon.lon = this.nw_latlng.lng;
        this.sw_latlon.lat = this.sw_latlng.lat;
        this.sw_latlon.lon = this.sw_latlng.lng;
        this.ne_latlon.lat = this.ne_latlng.lat;
        this.ne_latlon.lon = this.ne_latlng.lng;
        this.se_latlon.lat = this.se_latlng.lat;
        this.se_latlon.lon = this.se_latlng.lng;

        // These comparison protect against warped/rotated map regions.
        // The corners are used to identify the extreme eastings/northings.
        this.easternmost_lon = this.ne_latlon.lon;
        if (this.se_latlon.lon > this.easternmost_lon) {
          this.easternmost_lon = this.se_latlon.lon;
        }
        this.westernmost_lon = this.nw_latlon.lon;
        if (this.sw_latlon.lon < this.westernmost_lon) {
          this.westernmost_lon = this.sw_latlon.lon;
        }
        this.southernmost_lat = this.sw_latlon.lat;
        if (this.se_latlon.lat < this.southernmost_lat) {
          this.southernmost_lat = this.se_latlon.lat;
        }
        this.northernmost_lat = this.nw_latlon.lat;
        if (this.ne_latlon.lat > this.northernmost_lat) {
          this.northernmost_lat = this.ne_latlon.lat;
        }

        // Define grid width and height:
        this.grid_width = this.easternmost_lon - this.westernmost_lon;
        this.grid_height = this.northernmost_lat - this.southernmost_lat;

        // Define grid overlay extreme southwest and northeast corners as LatLon objects
        // with an extra 10% buffer beyond rendered area:
        this.sw_grid_latlon.lon = this.westernmost_lon - 0.1 * this.grid_width;
        this.sw_grid_latlon.lat = this.southernmost_lat - 0.1 * this.grid_height;
        this.ne_grid_latlon.lon = this.easternmost_lon + 0.1 * this.grid_width;
        this.ne_grid_latlon.lat = this.northernmost_lat + 0.1 * this.grid_height;

        // Save results to UTM.  Truncate to establish 1m baseline.
        this.sw_grid_utm = this.sw_grid_latlon.toUtm();
        this.sw_grid_utm.easting = Math.floor(this.sw_grid_utm.easting);
        this.sw_grid_utm.northing = Math.floor(this.sw_grid_utm.northing);
        this.sw_grid_latlon = this.sw_grid_utm.toLatLon();

        this.ne_grid_utm = this.ne_grid_latlon.toUtm();
        this.ne_grid_utm.easting = Math.floor(this.ne_grid_utm.easting);
        this.ne_grid_utm.northing = Math.floor(this.ne_grid_utm.northing);
        this.ne_grid_latlon = this.ne_grid_utm.toLatLon();
      },

      build1kmGrids() {
        // Theory:  Store all eastings and northings within search bounds.
        const temp_utm = this.sw_grid_latlon.toUtm();
        let temp = Math.floor(temp_utm.easting);
        temp_utm.easting = temp - (temp % 1000);
        temp = Math.floor(temp_utm.northing);
        temp_utm.northing = temp - (temp % 1000);

        this.grid_south_row = [];
        this.grid_south_row.push(temp_utm.toLatLon());

        let x = 0;
        while (this.grid_south_row[x].lon < this.ne_grid_latlon.lon) {
          this.grid_south_row.push(searchMgrs(this.grid_south_row[x].toUtm(), 'east', 1000));
          x++;
        }

        this.grid_west_column = [];
        this.grid_west_column.push(temp_utm.toLatLon());
        let y = 0;
        while (this.grid_west_column[y].lat < this.ne_grid_latlon.lat) {
          this.grid_west_column.push(searchMgrs(this.grid_west_column[y].toUtm(), 'north', 1000));
          y++;
        }

        this.grid_north_row = [];
        this.grid_north_row.push(this.grid_west_column[y]);
        let xx = 0;
        while (xx < x) {
          this.grid_north_row.push(searchMgrs(this.grid_north_row[xx].toUtm(), 'east', 1000));
          xx++;
        }

        this.grid_east_column = [];
        this.grid_east_column.push(this.grid_south_row[x]);
        let yy = 0;
        while (yy < y) {
          this.grid_east_column.push(searchMgrs(this.grid_east_column[yy].toUtm(), 'north', 1000));
          yy++;
        }
      },

      drawLines() {
        for (let i = 0; i < this.grid_lines_collection.length; i++) {
          this.grid_lines_collection[i].remove();
        }
        this.grid_lines_collection = [];
        this.draw1kmLines();
      },

      draw1kmLines() {
        let x;
        let y;
        const tempEasting = [];
        for (x = 0; x < this.grid_south_row.length; x++) {
          tempEasting.push(this.grid_south_row[x].toUtm().easting.toFixed(0));
          if (tempEasting[x] % 1000 === 0) {
            this.grid_lines_collection.push(new L.Polyline([this.grid_south_row[x], this.grid_north_row[x]], {
              color: 'red',
              weight: 3,
              opacity: 0.5,
            }));
          }
        }
        const tempNorthing = [];
        for (y = 0; y < this.grid_west_column.length; y++) {
          tempNorthing.push(this.grid_west_column[y].toUtm().northing.toFixed(0));
          if (tempNorthing[y] % 1000 === 0) {
            this.grid_lines_collection.push(new L.Polyline([this.grid_east_column[y], this.grid_west_column[y]], {
              color: 'green',
              weight: 3,
              opacity: 0.5,
            }));
          }
        }
        this.grid1000m = new L.LayerGroup(this.grid_lines_collection);
        this.grid1000m.addTo(map);
      },

      updateGrid(map_bounds) {
        this.setBounds(map_bounds);
        this.build1kmGrids();
        this.drawLines();
      },
      remove() {
        map.removeLayer(this.grid1000m);
      },
    };

    grid.updateGrid(map.getBounds());

    map.addEventListener('moveend', () => {
      grid.remove();
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
    setTimeout(() => {
      console.log('Number of layers drawn on map: ', document.querySelector('.leaflet-zoom-animated > g').childElementCount);
    }, 300);
    this.initialize(this._northObj, this._eastObj);
  },

});

const addGZD = new LeafletGZDLayer(northingDict, eastingDict).addTo(map);


//! REFER TO THE "leaflet-grids-master-4" folder for the ES6 interpretation of the simplegrg app
window.map = map;
