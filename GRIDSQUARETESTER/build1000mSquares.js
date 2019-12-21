/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import Mgrs, { Utm, LatLon, Dms } from 'https://cdn.jsdelivr.net/gh/chrisveness/geodesy@2.0.1/mgrs.js';


function getPaddingOnZoomLevel() {
  if (map.getZoom() >= 17) {
    return 3;
  }
  if (map.getZoom() < 17 && map.getZoom() >= 15) {
    return 1;
  }
  if (map.getZoom() <= 14 && map.getZoom() >= 12) {
    return 0.15;
  }
  return 0.1;
}

const mapBounds = L.latLngBounds(map.getBounds()).pad(getPaddingOnZoomLevel());


class GZD extends L.LayerGroup {
  constructor(northObj, eastObj) {
    super();
    this._northObj = northObj;
    this._eastObj = eastObj;
    return this._getInBoundsGZDs();
  }

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
          top,
          bottom,
          letterID,
          left,
          right,
          id,
        });
      }
    });
  }

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
    const gzdGroup = new L.LayerGroup([gzdPolylineBox, gzdLabels]);
    gzdGroup.addTo(map);
    //! Adding in the 1000m class here.
    //! I'm not exactly sure why, but this works... sort of. The lines display properly and don't flicker on mouse move.
    //! Bug: when scrolling down to a GZD, the number of polylines doubles. You'll notice the polyline going form half opacity to zero opacity.
    // TODO: Tie in the rest of the logic for multiple GZDs in bounds.
    const raymond3 = new Grid1000(new L.latLngBounds(map.getBounds()).pad(getPaddingOnZoomLevel()));
    raymond3.determineGrids();
    map.addEventListener('moveend', () => {
      map.removeLayer(gzdGroup);
    }, { once: true });
  }

  // these events will be added and removed from the map with the layer
  getEvents() {
    return {
      moveend: this._reset,
    };
  }

  // Reset the grid on move end
  _reset() {
    setTimeout(() => {
      console.log('Number of layers drawn on map: ', document.querySelector('.leaflet-zoom-animated > g').childElementCount);
    }, 300);
    this._getInBoundsGZDs();
    // this._zoomInterval()
  }
}

const gz = new GZD(eastingDict, northingDict);
gz.addTo(map);


function Grid1000() {
  this.constructor = function () {
    // this.bounds = bounds;
    this.north = new L.latLngBounds(map.getBounds()).pad(getPaddingOnZoomLevel()).getNorth();
    this.south = new L.latLngBounds(map.getBounds()).pad(getPaddingOnZoomLevel()).getSouth();
    this.east = new L.latLngBounds(map.getBounds()).pad(getPaddingOnZoomLevel()).getEast();
    this.west = new L.latLngBounds(map.getBounds()).pad(getPaddingOnZoomLevel()).getWest();
    this.eastingArray = [];
    this.northingArray = [];
    this.lineOptions = {
      color: 'blue',
      weight: 4,
      opacity: 0.5,
      interactive: false,
      fill: false,
      noClip: true,
      smoothFactor: 4,
      lineCap: 'butt',
      lineJoin: 'miter-clip',
      className: 'coward',
    };
    this.map = map;
    this.layerGroup1000m = new L.LayerGroup([]);
    return this;
  };

  this.determineGrids = function () {
    this.constructor();
    const NEBounds = mgrs.LLtoUTM({ lat: this.north, lon: this.east });
    const NWBounds = mgrs.LLtoUTM({ lat: this.constructor().north, lon: this.constructor().west });
    const SEBounds = mgrs.LLtoUTM({ lat: this.constructor().south, lon: this.constructor().east });
    const SWBounds = mgrs.LLtoUTM({ lat: this.constructor().south, lon: this.constructor().west });
    let noAdjacentGZD = false;
    return this.right(NEBounds, noAdjacentGZD = true);
  };

  this.right = function (NEBounds, noAdjacentGZD = false) {
    let swRight;
    if (noAdjacentGZD) {
      swRight = mgrs.LLtoUTM({ lat: this.south, lon: this.west });
    } else {
      swRight = mgrs.LLtoUTM({ lat: this.south, lon: eastingDict[NEBounds.zoneNumber].left });
    }

    const neRight = mgrs.LLtoUTM({ lat: this.north, lon: this.east });
    const seRight = mgrs.LLtoUTM({ lat: this.south, lon: this.east });
    let rightEastingIterator = swRight.easting;
    let rightNorthingIterator = swRight.northing;

    //* Right Side Easting */
    while (rightEastingIterator <= seRight.easting) {
      if (rightEastingIterator % 1000 === 0) {
        this.eastingArray.push({
          easting: rightEastingIterator,
          zoneNumber: seRight.zoneNumber,
          zoneLetter: seRight.zoneLetter,
        });
      }
      rightEastingIterator += 1;
    }
    // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    // Good info on how to remove duplicates

    //* Right Side Northing */
    while (rightNorthingIterator <= neRight.northing) {
      if (rightNorthingIterator % 1000 === 0) {
        this.northingArray.push({
          northing: rightNorthingIterator,
          zoneNumber: neRight.zoneNumber,
          zoneLetter: neRight.zoneLetter,
        });
      }
      rightNorthingIterator += 1;
    }
    return this.generateSplitGrids('right', NEBounds);
  };


  this.generateSplitGrids = function (direction, bounds) {
    this.direction = direction;
    this.bounds = bounds;
    // const layerGroup1000m = new L.LayerGroup([]);
    Object.entries(this.northingArray).forEach((e) => {
      const bottomNorthing = e[1];
      const bottomRow = this.eastingArray.map(j => [j, bottomNorthing]);
      const emptyBottomRowArr = [];

      bottomRow.forEach((k) => {
        emptyBottomRowArr.push(mgrs.UTMtoLL({
          northing: k[1].northing,
          easting: k[0].easting,
          zoneNumber: k[0].zoneNumber,
          zoneLetter: k[0].zoneLetter,
        }));
      });

      for (let index = 0; index < emptyBottomRowArr.length; index++) {
        const element = [emptyBottomRowArr[index], emptyBottomRowArr[index + 1]];
        switch (this.direction) {
          case 'left':
            // element[1] ensures that each element in the loop has 2 arrays. If there is only 1 array then it's the "odd-man-out" so we disregard it
            // element[1].lon <= eastingDict[NWBounds.zoneNumber].right - 0.000000001 ensures that the lines will not go over the GZD boundaries
            if (element[1] && element[1].lon <= eastingDict[this.bounds.zoneNumber].right - 0.000000001) {
              const northingLine = new L.Polyline([element], this.lineOptions);
              this.layerGroup1000m.addLayer(northingLine);
              // This will "connect" the 1000m grid to the GZD. This is useful because not all 1000m grids...are 1000m
              // Convert the Polyline element to a LatLng so we can use the distanceTo() method
              const finalNorthingLine = new L.latLng({ lat: element[1].lat, lng: element[1].lon });
              // If any Polylines are less than 1000 meters away from the GZD, we can then start connecting them
              if (finalNorthingLine.distanceTo({ lat: element[1].lat, lng: eastingDict[this.bounds.zoneNumber].right - 0.000000001 }) < 1000) {
                const gridLineEndpoint = mgrs.LLtoUTM({ lat: finalNorthingLine.lat, lon: eastingDict[this.bounds.zoneNumber].right - 0.000000001 });

                const extendedLine = mgrs.UTMtoLL({
                  northing: Math.round(gridLineEndpoint.northing / 1000) * 1000,
                  easting: gridLineEndpoint.easting,
                  zoneNumber: gridLineEndpoint.zoneNumber,
                  zoneLetter: gridLineEndpoint.zoneLetter,
                });

                const northingLinetoGZD = new L.Polyline([extendedLine, finalNorthingLine], this.lineOptions);
                this.layerGroup1000m.addLayer(northingLinetoGZD);
              }
            }
            break;
          case 'right':
            if (element[1] && element[0].lon >= eastingDict[this.bounds.zoneNumber].left) {
              const northingLine = new L.Polyline([element], this.lineOptions);
              this.layerGroup1000m.addLayer(northingLine);
              // Since element[0] starts on the left, we use that to test if the polyline is extending over the GZD bounds
              const finalNorthingLine = new L.latLng({ lat: element[0].lat, lng: element[0].lon });
              // This will "connect" the 1000m grid to the GZD. This is useful because not all 1000m grids...are 1000m
              // Convert the Polyline element to a LatLng so we can use the distanceTo() method
              if (finalNorthingLine.distanceTo({ lat: element[0].lat, lng: eastingDict[this.bounds.zoneNumber].left }) < 1000) {
                const gridLineEndpoint = mgrs.LLtoUTM({ lat: finalNorthingLine.lat, lon: eastingDict[this.bounds.zoneNumber].left });
                const extendedLine = mgrs.UTMtoLL({
                  northing: Math.round(gridLineEndpoint.northing / 1000) * 1000,
                  easting: gridLineEndpoint.easting,
                  zoneNumber: gridLineEndpoint.zoneNumber,
                  zoneLetter: gridLineEndpoint.zoneLetter,
                });
                const northingLinetoGZD = new L.Polyline([extendedLine, finalNorthingLine], this.lineOptions);
                this.layerGroup1000m.addLayer(northingLinetoGZD);
              }
            }
            break;
          default:
            break;
        }
      }
    });

    Object.entries(this.eastingArray).forEach((e) => {
      const bottomNorthing = e[1];
      const bottomRow = this.northingArray.map(j => [j, bottomNorthing]);
      const emptyBottomRowArr = [];

      bottomRow.forEach((k) => {
        emptyBottomRowArr.push(mgrs.UTMtoLL({
          northing: k[0].northing,
          easting: k[1].easting,
          zoneNumber: k[0].zoneNumber,
          zoneLetter: k[0].zoneLetter,
        }));
      });

      for (let index = 0; index < emptyBottomRowArr.length; index++) {
        const element = [emptyBottomRowArr[index], emptyBottomRowArr[index + 1]];

        switch (this.direction) {
          case 'left':
            if (element[1] && element[1].lon <= eastingDict[this.bounds.zoneNumber].right - 0.000000001) {
              const eastingLine = new L.Polyline([element], this.lineOptions);
              this.layerGroup1000m.addLayer(eastingLine);
            }
            break;
          case 'right':
            if (element[1] && element[1].lon >= eastingDict[this.bounds.zoneNumber].left) {
              const eastingLine = new L.Polyline([element], this.lineOptions);

              this.layerGroup1000m.addLayer(eastingLine);
            }
            break;
          default:
            break;
        }
      }
    });
    // All the Polylines are now in this group, we can add it to the map

    this.layerGroup1000m.addTo(this.map);
    //! This event listener works, however the issue I am having is getting the grids to regenerate on moveend
    //! I think the biggest issue you are having is forcing these plugins to act as classes when Leaflet does not allow it
    //! Need to do more research on how to author plugins
    this.map.addEventListener('moveend', () => {
      this.map.removeLayer(this.layerGroup1000m);
    }, { once: true });
    return this;
  };
}
