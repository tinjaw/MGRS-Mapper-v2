/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import Mgrs, { Utm, LatLon, Dms } from 'https://cdn.jsdelivr.net/gh/chrisveness/geodesy@2.0.1/mgrs.js';

class GenerateIntervals {
  constructor(startCoordEasting, endCoordEasting, endCoordNorthing) {
    this.bounds = new L.LatLngBounds(startCoordEasting, endCoordNorthing);
    this.startCoordEasting = mgrs.LLtoUTM({ lat: startCoordEasting.lat, lon: startCoordEasting.lng });
    this.endCoordEasting = this.getEndCoordEasting(endCoordEasting);
    this.endCoordNorthing = this.getEndCoordNorthing(endCoordNorthing);
    // Had to make a new bounds because it wasn't loading in the finalNorthingLine.distanceTo() method
    this.newBounds = this.getNewBounds();
    return this.combinedIntervals();
  }

  getEndCoordEasting() {
    const NWBounds = mgrs.LLtoUTM({ lat: this.bounds.getNorthWest().lat, lon: this.bounds.getNorthWest().lng });
    // cannot set lat to this.bounds.getNorth() for some dumbass reason
    return mgrs.LLtoUTM({ lat: map.getBounds().getNorth(), lon: eastingDict[NWBounds.zoneNumber].right - 0.000000001 });
  }

  getEndCoordNorthing() {
    const NWBounds = mgrs.LLtoUTM({ lat: this.bounds.getNorthWest().lat, lon: this.bounds.getNorthWest().lng });
    return mgrs.LLtoUTM({ lat: this.bounds.getSouth(), lon: eastingDict[NWBounds.zoneNumber].right - 0.000000001 });
  }

  getNewBounds() {
    return new L.LatLngBounds(mgrs.UTMtoLL({
      northing: this.startCoordEasting.northing,
      easting: this.startCoordEasting.easting,
      zoneNumber: this.startCoordEasting.zoneNumber,
      zoneLetter: this.startCoordEasting.zoneLetter,
    }), mgrs.UTMtoLL({
      northing: this.endCoordNorthing.northing,
      easting: this.endCoordNorthing.easting,
      zoneNumber: this.endCoordNorthing.zoneNumber,
      zoneLetter: this.endCoordNorthing.zoneLetter,
    }));
  }

  //! Potentially Useless
  handleBounds() {
    const NEBounds = mgrs.LLtoUTM({ lat: this.bounds.getNorthEast().lat, lon: this.bounds.getNorthEast().lng });
    const NWBounds = mgrs.LLtoUTM({ lat: this.bounds.getNorthWest().lat, lon: this.bounds.getNorthWest().lng });
    const SEBounds = mgrs.LLtoUTM({ lat: this.bounds.getSouthEast().lat, lon: this.bounds.getSouthEast().lng });
    const SWBounds = mgrs.LLtoUTM({ lat: this.bounds.getSouthWest().lat, lon: this.bounds.getSouthWest().lng });

    if (NEBounds.zoneNumber === NWBounds.zoneNumber || SEBounds.zoneNumber === SWBounds.zoneNumber) {
      console.log('Good comparison');
      return this.combinedIntervals();
    }

    const neLeft = mgrs.LLtoUTM({ lat: this.bounds.getNorthEast().lat, lon: eastingDict[NWBounds.zoneNumber].right - 0.000000001 });
    const nwLeft = mgrs.LLtoUTM({ lat: this.bounds.getNorthWest().lat, lon: this.bounds.getNorthWest().lng });
    const seLeft = mgrs.LLtoUTM({ lat: this.bounds.getSouthEast().lat, lon: eastingDict[NWBounds.zoneNumber].right - 0.000000001 });
    const swLeft = mgrs.LLtoUTM({ lat: this.bounds.getSouthWest().lat, lon: this.bounds.getSouthWest().lng });

    const neRight = mgrs.LLtoUTM({ lat: this.bounds.getNorthEast().lat, lon: this.bounds.getNorthEast().lng });
    const nwRight = mgrs.LLtoUTM({ lat: this.bounds.getNorthWest().lat, lon: eastingDict[NEBounds.zoneNumber].left });
    const seRight = mgrs.LLtoUTM({ lat: this.bounds.getSouthEast().lat, lon: this.bounds.getSouthEast().lng });
    const swRight = mgrs.LLtoUTM({ lat: this.bounds.getSouthWest().lat, lon: eastingDict[NEBounds.zoneNumber].left });

    return this.combineShardsEasting({
      neLeft, nwLeft, seLeft, swLeft, neRight, nwRight, seRight, swRight,
    });
  }

  //! Potentially Useless
  combineShardsEasting(data) {
    console.table(data);
    let leftEastingIterator = data.nwLeft.easting;
    let rightEastingIterator = data.nwRight.easting;
    let leftNorthingIterator = data.seLeft.northing;
    let rightNorthingIterator = data.seRight.northing;
    this.eastingArray = [];
    this.northingArray = [];

    //* *Left Side Easting */
    while (leftEastingIterator <= data.neLeft.easting) {
      if (leftEastingIterator % 1000 === 0) {
        // this.endCoordNorthing does not change on the easting
        this.eastingArray.push({
          easting: leftEastingIterator,
          zoneNumber: data.neLeft.zoneNumber,
          zoneLetter: data.neLeft.zoneLetter,
        });
        // console.log(this.eastingArray);
      }
      leftEastingIterator += 1;
    }
    //* * Right Side Easting */
    while (rightEastingIterator <= data.neRight.easting) {
      if (rightEastingIterator % 1000 === 0) {
        // this.endCoordNorthing does not change on the easting
        this.eastingArray.push({
          easting: rightEastingIterator,
          zoneNumber: data.neRight.zoneNumber,
          zoneLetter: data.neRight.zoneLetter,
        });
        // console.log(this.eastingArray);
      }
      rightEastingIterator += 1;
    }

    //* * Left Side Northing */
    while (leftNorthingIterator <= data.neLeft.northing) {
      if (leftNorthingIterator % 1000 === 0) {
        this.northingArray.push({
          northing: leftNorthingIterator,
          easting: leftEastingIterator,
          zoneNumber: data.neLeft.zoneNumber,
          zoneLetter: data.neLeft.zoneLetter,
        });
        // console.log(this.northingArray);
      }
      leftNorthingIterator += 1;
    }

    //* * Right Side Northing */
    while (rightNorthingIterator <= data.neRight.northing) {
      if (rightNorthingIterator % 1000 === 0) {
        this.northingArray.push({
          northing: rightNorthingIterator,
          easting: rightEastingIterator,
          zoneNumber: data.neRight.zoneNumber,
          zoneLetter: data.neRight.zoneLetter,
        });
        // console.log(this.northingArray);
      }
      rightNorthingIterator += 1;
    }

    // for (let index = 0; index < this.northingArray.length; index++) {
    //   const element = [this.northingArray[index], this.northingArray[index + 1]];
    //   if (element[1]) {
    //     const ob = [{
    //       first: mgrs.UTMtoLL({
    //         northing: this.northingArray[index].northing,
    //         easting: this.northingArray[index].easting,
    //         zoneNumber: this.northingArray[index].zoneNumber,
    //         zoneLetter: this.northingArray[index].zoneLetter,
    //       }),
    //       second: mgrs.UTMtoLL({
    //         northing: this.northingArray[index + 1].northing,
    //         easting: this.northingArray[index + 1].easting,
    //         zoneNumber: this.northingArray[index + 1].zoneNumber,
    //         zoneLetter: this.northingArray[index + 1].zoneLetter,
    //       }),
    //     }];
    //     console.log(element);
    //     new L.Polyline([ob[0].first, ob[0].second], {
    //       color: 'blue',
    //       weight: 3,
    //       opacity: 0.9,
    //       interactive: false,
    //       fill: false,
    //       noClip: true,
    //       smoothFactor: 4,
    //       lineCap: 'butt',
    //       lineJoin: 'miter-clip',
    //     }).addTo(map);
    //   }
    // }
    return this.combineShardsGrid(this.eastingArray, this.northingArray);
  }

  //! Potentially Useless
  // eslint-disable-next-line class-methods-use-this
  combineShardsGrid(...data) {
    const ea = [...data[0]];
    const na = [...data[1]];
    // console.table(na);
    Object.entries(na).forEach((n) => {
      const emptyBottomRowArr = [];
      emptyBottomRowArr.push(mgrs.UTMtoLL({
        northing: n[1].northing,
        easting: n[1].easting,
        zoneNumber: n[1].zoneNumber,
        zoneLetter: n[1].zoneLetter,
      }));

      new L.Polyline(mgrs.UTMtoLL({
        northing: n[1].northing,
        easting: n[1].easting,
        zoneNumber: n[1].zoneNumber,
        zoneLetter: n[1].zoneLetter,
      }), {
        color: 'blue',
        weight: 3,
        opacity: 0.9,
        interactive: false,
        fill: false,
        noClip: true,
        smoothFactor: 4,
        lineCap: 'butt',
        lineJoin: 'miter-clip',
      }).addTo(map);
    });
  }

  // Eastings are vertical lines
  eastingIntervals() {
    // let eastingIterator = Math.round(this.startCoordEasting.easting / 1000) * 1000;
    let eastingIterator = this.startCoordEasting.easting;
    this.eastingArray = [];

    while (eastingIterator <= this.endCoordEasting.easting) {
      if (eastingIterator % 1000 === 0) {
        // this.endCoordNorthing does not change on the easting
        this.eastingArray.push(eastingIterator);
        // console.log(this.eastingArray);
      }
      eastingIterator += 1;
    }
    return this.eastingArray;
  }

  northingIntervals() {
    this.northingArray = [];
    // let northingIterator = Math.round(this.endCoordNorthing.northing / 1000) * 1000;
    let northingIterator = this.endCoordNorthing.northing;
    while (northingIterator <= this.startCoordEasting.northing) {
      if (northingIterator % 1000 === 0) {
        this.northingArray.push(northingIterator);
        // console.log(this.northingArray);
      }
      northingIterator += 1;
    }
    return this.northingArray;
  }

  combinedIntervals() {
    //! Not sure how useful this Promise is. My idea for it is I need a way to alert myself to when the left grid is finished building
    //! In theory once I have that completed I can then restart this class and build the right side grid
    const promise1 = new Promise((resolve, reject) => {
      Object.entries(this.northingIntervals()).forEach((e, i) => {
        const bottomNorthing = e[1];
        const bottomRow = this.eastingIntervals().map(j => [j, bottomNorthing]);
        const emptyBottomRowArr = [];
        bottomRow.forEach((k) => {
          // console.log({
          //   northing: k[1], easting: k[0], zoneNumber: this.startCoordEasting.zoneNumber, zoneLetter: this.startCoordEasting.zoneLetter,
          // });
          emptyBottomRowArr.push(mgrs.UTMtoLL({
            northing: k[1], easting: k[0], zoneNumber: this.startCoordEasting.zoneNumber, zoneLetter: this.startCoordEasting.zoneLetter,
          }));
        });

        for (let index = 0; index < emptyBottomRowArr.length; index++) {
          const element = [emptyBottomRowArr[index], emptyBottomRowArr[index + 1]];
          // Calling element[1] because each element has 2 arrays, Sometimes there is an "odd man out" element that only has 1 array.
          // This is usually the last element in the loop
          if (element[1]) {
            const northingLine = new L.Polyline([element], {
              color: 'blue',
              weight: 3,
              opacity: 0.9,
              interactive: false,
              fill: false,
              noClip: true,
              smoothFactor: 4,
              lineCap: 'butt',
              lineJoin: 'miter-clip',
            });

            // This will "connect" the 1000m grid to the GZD. This is useful because not all 1000m grids...are 1000m
            // Convert the Polyline element to a LatLng so we can use the distanceTo() method
            const finalNorthingLine = new L.latLng({ lat: element[1].lat, lng: element[1].lon });
            // If any Polylines are less than 1000 meters away from the GZD, we can then start connecting them
            if (finalNorthingLine.distanceTo({ lat: element[1].lat, lng: this.newBounds.getNorthEast().lng }) < 1000) {
              const gridLineEndpoint = mgrs.LLtoUTM({ lat: finalNorthingLine.lat, lon: this.newBounds.getNorthEast().lng });

              const extendedLine = mgrs.UTMtoLL({
                northing: Math.round(gridLineEndpoint.northing / 1000) * 1000,
                easting: gridLineEndpoint.easting,
                zoneNumber: gridLineEndpoint.zoneNumber,
                zoneLetter: gridLineEndpoint.zoneLetter,
              });

              const northingLinetoGZD = new L.Polyline([extendedLine, finalNorthingLine], {
                color: 'green',
                weight: 3,
                opacity: 0.9,
                interactive: false,
                fill: false,
                noClip: true,
                smoothFactor: 4,
                lineCap: 'butt',
                lineJoin: 'miter-clip',
                className: 'extendos',
              });
              northingLinetoGZD.addTo(map);
            }
            northingLine.addTo(map);
          }
        }
      });

      Object.entries(this.eastingIntervals()).forEach((e) => {
        const bottomNorthing = e[1];
        const bottomRow = this.northingIntervals().map(j => [j, bottomNorthing]);
        const emptyBottomRowArr = [];
        bottomRow.forEach((k) => {
          // console.log({
          //   northing: k[0], easting: k[1], zoneNumber: this.startCoordEasting.zoneNumber, zoneLetter: this.startCoordEasting.zoneLetter,
          // });
          emptyBottomRowArr.push(mgrs.UTMtoLL({
            northing: k[0], easting: k[1], zoneNumber: this.endCoordNorthing.zoneNumber, zoneLetter: this.endCoordNorthing.zoneLetter,
          }));
        });

        for (let index = 0; index < emptyBottomRowArr.length; index++) {
          const element = [emptyBottomRowArr[index], emptyBottomRowArr[index + 1]];
          if (element[1]) {
            new L.Polyline([element], {
              color: 'red',
              weight: 3,
              opacity: 0.9,
              interactive: false,
              fill: false,
              noClip: true,
              smoothFactor: 4,
              lineCap: 'butt',
              lineJoin: 'miter-clip',
            }).addTo(map);
          }
        }
      });

      setTimeout(resolve, 100, document.querySelector('.leaflet-zoom-animated > g').childElementCount);
      // console.log('Number of layers drawn on map: ', document.querySelector('.leaflet-zoom-animated > g').childElementCount);
    });
    Promise.all([promise1]).then((values) => {
      console.log('Number of layers drawn on map: ', values[0]);
    });
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
const gridInts = new GenerateIntervals(mapBounds.getNorthWest(), mapBounds.getNorthEast(), mapBounds.getSouthEast());
// gridInts.combinedIntervals();

// function test1() {
//   // lat = map.getBounds().getNorth()
//   return { lat: 43.37910133500264, lng: -78.0000001 };
// }
// function test2() {
//   // lat = map.getBounds().getSouth()
//   return { lat: 43.254205153548114, lng: -78.0000001 };
// }
// const gridInts = new GenerateIntervals(mapBounds.getNorthWest(), test1(), test2());
