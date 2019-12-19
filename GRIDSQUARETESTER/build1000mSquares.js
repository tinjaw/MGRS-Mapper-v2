/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import Mgrs, { Utm, LatLon, Dms } from 'https://cdn.jsdelivr.net/gh/chrisveness/geodesy@2.0.1/mgrs.js';


class MyGrid extends L.LayerGroup {
  constructor(bounds) {
    super();
    this.north = bounds.getNorth();
    this.south = bounds.getSouth();
    this.east = bounds.getEast();
    this.west = bounds.getWest();
    this.eastingArray = [];
    this.northingArray = [];
    this.lineOptions = {
      color: 'blue',
      weight: 3,
      opacity: 0.9,
      interactive: false,
      fill: false,
      noClip: true,
      smoothFactor: 4,
      lineCap: 'butt',
      lineJoin: 'miter-clip',
    };
    return this.start();
  }

  start() {
    console.log('starting 1000m');
    return this.determineGrids();
  }

  determineGrids() {
    const NEBounds = mgrs.LLtoUTM({ lat: this.north, lon: this.east });
    const NWBounds = mgrs.LLtoUTM({ lat: this.north, lon: this.west });
    const SEBounds = mgrs.LLtoUTM({ lat: this.south, lon: this.east });
    const SWBounds = mgrs.LLtoUTM({ lat: this.south, lon: this.west });
    let noAdjacentGZD = false;
    if (NEBounds.zoneNumber === NWBounds.zoneNumber || SEBounds.zoneNumber === SWBounds.zoneNumber) {
      console.log('Good comparison');
      // Since there are no GZDs that are splitting the map bounds, we only need to run one "side"
      // eslint-disable-next-line no-return-assign
      return this.right(NEBounds, noAdjacentGZD = true);
    }

    const leftPromise = new Promise((resolve, reject) => {
      resolve(this.left(NWBounds));
    });
    Promise.all([leftPromise]).then(values => new Promise((resolve, reject) => {
      // Clear out the arrays so the right side can generate grids
      this.eastingArray = [];
      this.northingArray = [];
      setTimeout(() => resolve(this.right(NEBounds)), 10);
      setTimeout(() => {
        console.log('Number of layers drawn on map: ', document.querySelector('.leaflet-zoom-animated > g').childElementCount);
      }, 300);
    }));
    return this;
  }

  left(NWBounds) {
    const neLeft = mgrs.LLtoUTM({ lat: this.north, lon: eastingDict[NWBounds.zoneNumber].right - 0.000000001 });
    const seLeft = mgrs.LLtoUTM({ lat: this.south, lon: eastingDict[NWBounds.zoneNumber].right - 0.000000001 });
    const swLeft = mgrs.LLtoUTM({ lat: this.south, lon: this.west });

    let leftEastingIterator = swLeft.easting;
    let leftNorthingIterator = swLeft.northing;

    //* Left Side Easting */
    while (leftEastingIterator <= seLeft.easting) {
      if (leftEastingIterator % 1000 === 0) {
        // this.endCoordNorthing does not change on the easting
        this.eastingArray.push({
          easting: leftEastingIterator,
          zoneNumber: seLeft.zoneNumber,
          zoneLetter: seLeft.zoneLetter,
        });
      }
      leftEastingIterator += 1;
    }

    //* * Left Side Northing */
    while (leftNorthingIterator <= neLeft.northing) {
      if (leftNorthingIterator % 1000 === 0) {
        this.northingArray.push({
          northing: leftNorthingIterator,
          zoneNumber: neLeft.zoneNumber,
          zoneLetter: neLeft.zoneLetter,
        });
      }
      leftNorthingIterator += 1;
    }

    return this.generateSplitGrids('left', NWBounds);
  }


  right(NEBounds, noAdjacentGZD = false) {
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
        // this.endCoordNorthing does not change on the easting
        this.eastingArray.push({
          easting: rightEastingIterator,
          zoneNumber: seRight.zoneNumber,
          zoneLetter: seRight.zoneLetter,
        });
      }
      rightEastingIterator += 1;
    }

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
  }


  generateSplitGrids(direction, bounds) {
    this.direction = direction;
    this.bounds = bounds;
    const layerGroup1000m = new L.LayerGroup([]);
    Object.entries(this.northingArray).forEach((e) => {
      const bottomNorthing = e[1];
      const bottomRow = this.eastingArray.map(j => [j, bottomNorthing]);
      const emptyBottomRowArr = [];

      bottomRow.forEach((k) => {
        emptyBottomRowArr.push(mgrs.UTMtoLL({
          northing: k[1].northing, easting: k[0].easting, zoneNumber: k[0].zoneNumber, zoneLetter: k[0].zoneLetter,
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
              layerGroup1000m.addLayer(northingLine);
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
                layerGroup1000m.addLayer(northingLinetoGZD);
              }
            }
            break;
          case 'right':
            if (element[1] && element[1].lon >= eastingDict[this.bounds.zoneNumber].left) {
              const northingLine = new L.Polyline([element], this.lineOptions);
              layerGroup1000m.addLayer(northingLine);
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
                layerGroup1000m.addLayer(northingLinetoGZD);
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
          northing: k[0].northing, easting: k[1].easting, zoneNumber: k[0].zoneNumber, zoneLetter: k[0].zoneLetter,
        }));
      });

      for (let index = 0; index < emptyBottomRowArr.length; index++) {
        const element = [emptyBottomRowArr[index], emptyBottomRowArr[index + 1]];

        switch (this.direction) {
          case 'left':
            if (element[1] && element[1].lon <= eastingDict[this.bounds.zoneNumber].right - 0.000000001) {
              const eastingLine = new L.Polyline([element], this.lineOptions);
              layerGroup1000m.addLayer(eastingLine);
            }
            break;
          case 'right':
            if (element[1] && element[1].lon >= eastingDict[this.bounds.zoneNumber].left) {
              const eastingLine = new L.Polyline([element], this.lineOptions);
              layerGroup1000m.addLayer(eastingLine);
            }
            break;
          default:
            break;
        }
      }
    });
    // All the Polylines are now in this group, we can add it to the map
    layerGroup1000m.addTo(map);
    //! This event listener works, however the issue I am having is getting the grids to regenerate on moveend
    //! I think the biggest issue you are having is forcing these plugins to act as classes when Leaflet does not allow it
    //! Need to do more research on how to author plugins
    map.addEventListener('moveend', () => {
      map.removeLayer(layerGroup1000m);
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
      console.log('Number of layers drawn on map22: ', document.querySelector('.leaflet-zoom-animated > g').childElementCount);
    }, 300);
    return this.determineGrids();
  }
}

// If there is a high zoom level, we need to add more padding so the grids generate throughout the whole screen
function getPaddingOnZoomLevel() {
  if (map.getZoom() >= 17) {
    return 3;
  }
  if (map.getZoom() < 17 && map.getZoom() >= 15) {
    return 1;
  }
  return 0.1;
}

const mapBounds = L.latLngBounds(map.getBounds()).pad(getPaddingOnZoomLevel());

const myGrid = new MyGrid(mapBounds);
// function test1() {
//   // lat = map.getBounds().getNorth()
//   return { lat: 43.37910133500264, lng: -78.0000001 };
// }
// function test2() {
//   // lat = map.getBounds().getSouth()
//   return { lat: 43.254205153548114, lng: -78.0000001 };
// }
// const gridInts = new GenerateIntervals(mapBounds.getNorthWest(), test1(), test2());
