/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import Mgrs, { Utm, LatLon, Dms } from 'https://cdn.jsdelivr.net/gh/chrisveness/geodesy@2.0.1/mgrs.js';

class MyGrid {
  constructor(north, south, east, west) {
    this.north = north;
    this.south = south;
    this.east = east;
    this.west = west;
    this.eastingArray = [];
    this.northingArray = [];
    this.lineOptions = {
      color: 'red',
      weight: 3,
      opacity: 0.9,
      interactive: false,
      fill: false,
      noClip: true,
      smoothFactor: 4,
      lineCap: 'butt',
      lineJoin: 'miter-clip',
    };
    return this.determineGrids();
  }

  determineGrids() {
    const NEBounds = mgrs.LLtoUTM({ lat: this.north, lon: this.east });
    const NWBounds = mgrs.LLtoUTM({ lat: this.north, lon: this.west });
    const SEBounds = mgrs.LLtoUTM({ lat: this.south, lon: this.east });
    const SWBounds = mgrs.LLtoUTM({ lat: this.south, lon: this.west });

    if (NEBounds.zoneNumber === NWBounds.zoneNumber || SEBounds.zoneNumber === SWBounds.zoneNumber) {
      console.log('Good comparison');
      // return this.combinedIntervals();
    }

    const leftPromise = new Promise((resolve, reject) => {
      resolve(this.left(NWBounds));
    });
    Promise.all([leftPromise]).then(values => new Promise((resolve, reject) => {
      this.eastingArray = [];
      this.northingArray = [];
      setTimeout(() => resolve(this.right(NEBounds)), 10);
    }));
  }

  right(NEBounds) {
    const neRight = mgrs.LLtoUTM({ lat: this.north, lon: this.east });
    const nwRight = mgrs.LLtoUTM({ lat: this.north, lon: eastingDict[NEBounds.zoneNumber].left });
    const seRight = mgrs.LLtoUTM({ lat: this.south, lon: this.east });
    const swRight = mgrs.LLtoUTM({ lat: this.south, lon: eastingDict[NEBounds.zoneNumber].left });

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
        // console.log(this.eastingArray);
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
        // console.log(this.northingArray);
      }
      rightNorthingIterator += 1;
    }
    return this.generateSplitGrids('right', NEBounds);
  }

  left(NWBounds) {
    const neLeft = mgrs.LLtoUTM({ lat: this.north, lon: eastingDict[NWBounds.zoneNumber].right - 0.000000001 });
    const nwLeft = mgrs.LLtoUTM({ lat: this.north, lon: this.west });
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
        // console.log(this.eastingArray);
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
        // console.log(this.northingArray);
      }
      leftNorthingIterator += 1;
    }

    return this.generateSplitGrids('left', NWBounds);
  }

  generateSplitGrids(direction, bounds) {
    this.direction = direction;
    this.bounds = bounds;

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
              northingLine.addTo(map);
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
                northingLinetoGZD.addTo(map);
              }
            }
            break;
          case 'right':
            if (element[1] && element[1].lon >= eastingDict[this.bounds.zoneNumber].left) {
              const northingLine = new L.Polyline([element], this.lineOptions);
              northingLine.addTo(map);
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
                northingLinetoGZD.addTo(map);
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
              eastingLine.addTo(map);
            }
            break;
          case 'right':
            if (element[1] && element[1].lon >= eastingDict[this.bounds.zoneNumber].left) {
              const eastingLine = new L.Polyline([element], this.lineOptions);
              eastingLine.addTo(map);
            }
            break;
          default:
            break;
        }
      }
    });
  }
}

const mapBounds = L.latLngBounds(map.getBounds()).pad(getPaddingOnZoomLevel());
const myGrid = new MyGrid(mapBounds.getNorth(), mapBounds.getSouth(), mapBounds.getEast(), mapBounds.getWest());
// function test1() {
//   // lat = map.getBounds().getNorth()
//   return { lat: 43.37910133500264, lng: -78.0000001 };
// }
// function test2() {
//   // lat = map.getBounds().getSouth()
//   return { lat: 43.254205153548114, lng: -78.0000001 };
// }
// const gridInts = new GenerateIntervals(mapBounds.getNorthWest(), test1(), test2());
