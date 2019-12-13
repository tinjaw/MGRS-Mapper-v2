/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import Mgrs, { Utm, LatLon, Dms } from 'https://cdn.jsdelivr.net/gh/chrisveness/geodesy@2.0.1/mgrs.js';
//! BUG: This will work when there are NO adjacent GZDs within the visible map boundaries. It breaks when there are 2 or more GZDs in bounds. Notes about this are in the changelog.
class GenerateIntervals {
  constructor(startCoordEasting, endCoordEasting, endCoordNorthing) {
    this.startCoordEasting = mgrs.LLtoUTM({ lat: startCoordEasting.lat, lon: startCoordEasting.lng });
    this.endCoordEasting = mgrs.LLtoUTM({ lat: endCoordEasting.lat, lon: endCoordEasting.lng });
    // this.startCoordNorthing = mgrs.LLtoUTM({ lat: startCoordNorthing.lat, lon: startCoordNorthing.lng });
    this.endCoordNorthing = mgrs.LLtoUTM({ lat: endCoordNorthing.lat, lon: endCoordNorthing.lng });
  }

  // Eastings are vertical lines
  eastingIntervals() {
    let eastingIterator = Math.round(this.startCoordEasting.easting / 1000) * 1000;
    this.eastingArray = [];

    while (eastingIterator <= this.endCoordEasting.easting) {
      if (eastingIterator % 1000 === 0) {
        // this.endCoordNorthing does not change on the easting
        this.eastingArray.push(eastingIterator);
      }
      eastingIterator += 1;
    }
    return this.eastingArray;
  }

  northingIntervals() {
    this.northingArray = [];
    let northingIterator = Math.round(this.endCoordNorthing.northing / 1000) * 1000;
    while (northingIterator <= this.startCoordEasting.northing) {
      if (northingIterator % 1000 === 0) {
        this.northingArray.push(northingIterator);
      }
      northingIterator += 1;
    }
    return this.northingArray;
  }

  combinedIntervals() {
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
        if (element[1]) {
          new L.Polyline([element], {
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
        }
      }
    });

    Object.entries(this.eastingIntervals()).forEach((e) => {
      const bottomNorthing = e[1];
      const bottomRow = this.northingIntervals().map(j => [j, bottomNorthing]);
      const emptyBottomRowArr = [];
      bottomRow.forEach((k) => {
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
    console.log('Number of layers drawn on map: ', document.querySelector('.leaflet-zoom-animated > g').childElementCount);
  }
}

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
gridInts.combinedIntervals();
