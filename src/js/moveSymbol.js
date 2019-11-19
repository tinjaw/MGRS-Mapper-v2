import Moveable from 'moveable';
import { EventEmitter } from 'events';

const newSVGDiv = document.querySelector('.newSVG');
const mapArea = document.querySelector('#main-content');

// https://stackoverflow.com/questions/46728319/how-to-convert-between-lat-long-and-mgrs-using-javascript-without-dependence-on
const MGRSString = (Lat, Long) => {
  if (Lat < -80) return 'Too far South';
  if (Lat > 84) return 'Too far North';
  const c = 1 + Math.floor((Long + 180) / 6);
  const e = c * 6 - 183;
  const k = Lat * Math.PI / 180;
  const l = Long * Math.PI / 180;
  const m = e * Math.PI / 180;
  const n = Math.cos(k);
  const o = 0.006739496819936062 * (n ** 2);
  const p = 40680631590769 / (6356752.314 * Math.sqrt(1 + o));
  const q = Math.tan(k);
  const r = q * q;
  const s = (r * r * r) - q ** 6;
  const t = l - m;
  const u = 1.0 - r + o;
  const v = 5.0 - r + 9 * o + 4.0 * (o * o);
  const w = 5.0 - 18.0 * r + (r * r) + 14.0 * o - 58.0 * r * o;
  const x = 61.0 - 58.0 * r + (r * r) + 270.0 * o - 330.0 * r * o;
  const y = 61.0 - 479.0 * r + 179.0 * (r * r) - (r * r * r);
  const z = 1385.0 - 3111.0 * r + 543.0 * (r * r) - (r * r * r);
  let aa = p * n * t + (p / 6.0 * (n ** 3) * u * (t ** 3)) + (p / 120.0 * (n ** 5) * w * (t ** 5)) + (p / 5040.0 * (n ** 7) * y * (t ** 7));
  let ab = 6367449.14570093 * (k - (0.00251882794504 * Math.sin(2 * k)) + (0.00000264354112 * Math.sin(4 * k)) - (0.00000000345262 * Math.sin(6 * k)) + (0.000000000004892 * Math.sin(8 * k))) + (q / 2.0 * p * (n ** 2) * (t ** 2)) + (q / 24.0 * p * (n ** 4) * v * (t ** 4)) + (q / 720.0 * p * (n ** 6) * x * (t ** 6)) + (q / 40320.0 * p * (n ** 8) * z * (t ** 8));
  aa = aa * 0.9996 + 500000.0;
  ab *= 0.9996;
  if (ab < 0.0) ab += 10000000.0;
  const ad = 'CDEFGHJKLMNPQRSTUVWXX'.charAt(Math.floor(Lat / 8 + 10));
  const ae = Math.floor(aa / 100000);
  const af = ['ABCDEFGH', 'JKLMNPQR', 'STUVWXYZ'][(c - 1) % 3].charAt(ae - 1);
  const ag = Math.floor(ab / 100000) % 20;
  const ah = ['ABCDEFGHJKLMNPQRSTUV', 'FGHJKLMNPQRSTUVABCDE'][(c - 1) % 2].charAt(ag);

  function pad(val) {
    if (val < 10) {
      val = `0000${val}`;
    } else if (val < 100) {
      val = `000${val}`;
    } else if (val < 1000) {
      val = `00${val}`;
    } else if (val < 10000) {
      val = `0${val}`;
    }
    return val;
  }
  aa = Math.floor(aa % 100000);
  aa = pad(aa);
  ab = Math.floor(ab % 100000);
  ab = pad(ab);
  return `${c + ad} ${af}${ah} ${aa} ${ab}`;
};


function removePopups() {
  mapArea.querySelector('.symbol-info-div') ? mapArea.querySelector('.symbol-info-div').remove() : null;
  mapArea.querySelector('.popup-arrow') ? mapArea.querySelector('.popup-arrow').remove() : null;
}


// *********************************************************************************** //
// * MOVEABLE.JS                                                                     * //
// *********************************************************************************** //
const moveableoptions = {
  // Set the target as null until someone moves and clones it onto the yellow background
  target: null,
  // If the container is null, the position is fixed. (default: parentElement(document.body))
  container: document.body,
  draggable: true,
  resizable: true,
  scalable: true,
  rotatable: true,
  warpable: false,
  pinchable: true,
  origin: false,
  keepRatio: true,
  edge: true,
  throttleDrag: 0,
  throttleScale: 0,
  throttleRotate: 0,
  throttleResize: 0,
};

const moveable = new Moveable(document.body, moveableoptions);


function manipulateSymbol() {
  // All "targets" will be symbols with the draggable class
  const draggableElements = document.querySelectorAll('.draggable');
  // Create the array for the targets
  const arr = Array.from(draggableElements);
  // Now push the targets on the yellow board to an arry
  draggableElements.forEach((e) => {
    arr.push(e);
  });
  // Get the last target in the array and set it
  moveable.target = arr.slice(-1)[0];


  //* DRAGGABLE *//
  // Since the map marker already has a draggable feature, we don't need it in moveable.js
  moveable.on('drag', () => {
    // If the user drags the symbol and the popup is visible, remove it
    removePopups();
  });

  //* SCALABLE *//
  moveable.on('scale', ({ target, transform }) => {
    target.style.transform = transform;
  });

  //* ROTATABLE *//
  moveable.on('rotateStart', () => {
    removePopups();
  })
    .on('rotate', ({ target, transform }) => {
      target.style.transform = transform;
    });

  //* PINCHABLE *//
  moveable.on('pinch', ({ target, transform }) => {
    target.style.transform = transform;
  });

  //* RESIZABLE *//
  /* eslint-disable */
  // Disabling es-lint on this method because that fucking piece of shit does a line break when there are >=4 params and I can't figure out how to disable it. FUCK YOU
  // Set the absolute minimum width of your marker in pixels
  const minimumMarkerWidth = 40;
  moveable.on('resizeStart', ({target}) => {
    removePopups();
    // If the marker width is less than or equal to minimumMarkerWidth, add 1px to marker width so it will skip the next if statement
    if (parseInt(target.style.width) <= minimumMarkerWidth) target.style.width = `${minimumMarkerWidth + 1}px`;
  })
  .on('resize', ({target, width, height, delta }) => {
    // If the user resizes the marker outside of the browser or resizes too quickly, throw an error and deselect the marker
    if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)){
       console.error("You moved your mouse outside of the browser when resizing the marker");
       moveable.target = undefined;
       return;
    }
    if (delta[0] <= -60) {
      console.error("You resized the marker too quickly")
      moveable.target = undefined;
      return;
    }
    // If the marker width is less than or equal to minimumMarkerWidth, stop all resizing
    if (parseInt(target.style.width) <= minimumMarkerWidth) return;
    delta[0] && (target.style.width = `${width}px`);
    delta[1] && (target.style.height = `${height}px`);
  });
  /* eslint-enable */
}

// This toggles the Moveable.js control box on whatever element you click on
function toggleDraggableElement(event) {
  // If the user clicks the map and the popup is visible, remove it
  removePopups();
  mapArea.querySelectorAll('.draggable').forEach((key) => {
    // https://stackoverflow.com/questions/24183286/drag-and-drop-to-div-behind-absolutely-positioned-div
    const elements = document.elementsFromPoint(event.clientX, event.clientY);
    const chosenTarget = elements.find(key => key.matches('.draggable'));
    // If you click a symbol on the yellow background, it will set it as the Moveable target
    // If you click the yellow background it will de-select the symbol so you can get that annoying control box out of view
    chosenTarget ? (moveable.target = chosenTarget) : (moveable.target = undefined);
  });
}

// Creates the popup and popup arrow. Finds the most open space in the window and automatically positions it
// *********************************************************************************** //
// * CUSTOM POPUP AND POPUP ARROW                                                    * //
// *********************************************************************************** //
const createPopupDiv = (element) => {
  const div = document.createElement('div');
  div.className = 'symbol-info-div mdc-elevation--z24';
  // "element" is the symbolData object that we created in the marker click event listener below
  element.target.parentElement.appendChild(div);

  // Translate the current marker postion from Lat-Lon to MGRS
  const currentMarkerLocation = MGRSString(marker.getLatLng().lat, marker.getLatLng().lng);

  // Add the marker location as the first value in the popup
  div.innerHTML = `<div class="popup-symbol-data">
        <strong class="mdc-typography--headline5">Location:</strong>
        <span class="mdc-typography--headline6">${currentMarkerLocation}</span>
      </div>`;

  // Populate popup with data (element.data gets data from "symbolData")
  Object.entries(element.data).forEach((key) => {
    const newDiv = document.createElement('div');
    newDiv.className = 'popup-symbol-data';
    div.appendChild(newDiv);
    newDiv.innerHTML += `<strong class="mdc-typography--headline5">${key[0]}:</strong> <span class="mdc-typography--headline6">${key[1]}</span>`;
    return newDiv;
  });

  const symbolInfoDiv = document.querySelector('.symbol-info-div');

  // Add a button for users to close out of the popup
  const deletePopupButton = L.DomUtil.create('button', 'deletePopup ');
  deletePopupButton.setAttribute('type', 'button');
  deletePopupButton.textContent = 'X';
  deletePopupButton.onclick = () => {
    div.remove();
    moveable.target = undefined;
  };
  symbolInfoDiv.appendChild(deletePopupButton);

  //! BUG: This is no longer working. When there are multiple markers on the page the delete button will not work. Try pushing the markers to an array
  // Add a button in the popup window that allows users to delete the selected marker
  const deleteMarkerButton = L.DomUtil.create('button', 'deleteMarker mdc-button mdc-button--raised');
  deleteMarkerButton.setAttribute('type', 'button');
  deleteMarkerButton.insertAdjacentHTML('afterbegin',
    `<div class="mdc-button__ripple"></div>
        <i class="material-icons mdc-button__icon" aria-hidden="true">delete</i>
      <span class="mdc-button__label">Delete Symbol</span>`);
  deleteMarkerButton.onclick = () => {
    // Delete the marker by its ID
    // https://gis.stackexchange.com/questions/201958/remove-leaflet-markers-leaflet-id/201975
    markerGroup.removeLayer(element.id);
    moveable.target = undefined;
  };
  symbolInfoDiv.appendChild(deleteMarkerButton);

  // Aids in positioning the symbol popup
  function findTopValueOfPopup() {
    const thePOP = window.innerHeight - symbolInfoDiv.getBoundingClientRect().bottom - symbolInfoDiv.getBoundingClientRect().top;
    const theSVG = window.innerHeight - element.boundingClientRect.bottom - element.boundingClientRect.top;
    const theVal = (thePOP - theSVG) / 2;
    return theVal;
  }

  // Aids in positioning the symbol popup
  function findCenterPointOfPopup() {
    const ddd = (symbolInfoDiv.getBoundingClientRect().width - element.target.getBoundingClientRect().width) / -2;
    return ddd;
  }

  // Sets the position of the arrow div in the popup
  function displayPopupArrow(direction) {
    const outerArrowDiv = document.createElement('div');
    outerArrowDiv.classList.add('popup-arrow');

    switch (direction) {
      case 'top':
        outerArrowDiv.style.transform = 'rotate(180deg)';
        outerArrowDiv.style.top = '100%';
        outerArrowDiv.style.left = 'calc(50% - 15px)';
        break;
      case 'right':
        outerArrowDiv.style.transform = 'rotate(-90deg)';
        outerArrowDiv.style.top = 'calc(50% - 7.5px)';
        outerArrowDiv.style.left = 'calc(0% - 24px)';
        break;
      case 'bottom':
        outerArrowDiv.style.transform = 'rotate(0deg)';
        outerArrowDiv.style.top = 'calc(0% - 15px)';
        outerArrowDiv.style.left = 'calc(50% - 15px)';
        break;
      case 'left':
        outerArrowDiv.style.transform = 'rotate(90deg)';
        outerArrowDiv.style.top = 'calc(50% - 7.5px)';
        outerArrowDiv.style.left = 'calc(100% - 7.5px)';
        break;
      default:
        break;
    }

    const innerArrowDiv = outerArrowDiv.cloneNode(true);
    innerArrowDiv.classList.add('popup-arrow-inner');
    innerArrowDiv.style.transform = 'rotate(0deg)';
    innerArrowDiv.style.top = '3px';
    innerArrowDiv.style.left = '-15px';

    outerArrowDiv.appendChild(innerArrowDiv);
    symbolInfoDiv.appendChild(outerArrowDiv);
  }

  // Find the direction with the most open space on the window
  // https://stackoverflow.com/questions/11142884/fast-way-to-get-the-min-max-values-among-properties-of-object
  const maxMinVal = (obj) => {
    const sortedEntriesByVal = Object.entries(obj).sort(([, v1], [, v2]) => v1 - v2);
    return {
      min: sortedEntriesByVal[0],
      max: sortedEntriesByVal[sortedEntriesByVal.length - 1],
      sortedObjByVal: sortedEntriesByVal.reduce((r, [k, v]) => ({ r, [k]: v }), {}),
    };
  };

  // THIS IS FOR THE POPUP, NOT THE ARROW
  switch (maxMinVal(element.distances).max[0]) {
    case 'svgFromTop':
      div.style.left = `${findCenterPointOfPopup()}px`;
      div.style.top = `${(symbolInfoDiv.getBoundingClientRect().top - symbolInfoDiv.getBoundingClientRect().bottom) - 60}px`;
      displayPopupArrow('top');
      break;
    case 'svgFromRight':
      div.style.left = `${element.boundingClientRect.width + 20}px`;
      div.style.top = `${findTopValueOfPopup()}px`;
      displayPopupArrow('right');
      break;
    case 'svgFromBottom':
      div.style.left = `${findCenterPointOfPopup()}px`;
      div.style.top = `${element.boundingClientRect.height + 20}px`;
      displayPopupArrow('bottom');
      break;
    case 'svgFromLeft':
      div.style.top = `${findTopValueOfPopup()}px`;
      div.style.left = `-${symbolInfoDiv.getBoundingClientRect().width + 20}px`;
      displayPopupArrow('left');
      break;
    default:
      break;
  }
};

// *********************************************************************************** //
// * HTML5 DRAG AND DROP API                                                         * //
// *********************************************************************************** //
const allowDrop = (event) => {
  event.preventDefault();
};


const drop = (event) => {
  event.preventDefault();
  // Get the JSON data that was transferred over from the drag event
  const data = event.dataTransfer.getData('text');
  const target = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  target.classList.add('draggable');
  target.dataset.symbolInfo = data;
  target.innerHTML = document.querySelector('.newSVG > svg').innerHTML;
  //! BUG: Cannot drop symbols on top of grid lines. Try a try-catch block and adjust the symbols coordinates
  event.target.offsetParent.appendChild(target);

  // Get the BBox only after the target has been appended
  const bbox = target.getBBox();
  // The bounceIn animation fucks everything up, remove it and set the BBox of the parent draggable symbol
  document.querySelectorAll('.draggable > g').forEach((key) => {
    key.classList.remove('bounceIn');
    const bbox = key.parentElement.getBBox();
    key.parentElement.setAttribute('viewBox', `${bbox.x}, ${bbox.y}, ${bbox.width}, ${bbox.height}`);
  });
  // Now call the manipulateSymbol function to switch to Moveable.js
  manipulateSymbol(event);
  // Positions the mouse curse directly in the middle of the symbol
  target.setAttribute('style', 'position: absolute;');

  // Convert dropped symbol to a Leaflet marker
  const militarySymbolMarker = L.divIcon({
    html: target,
    iconSize: [bbox.width, bbox.height],
    className: 'militarySymbolMarker',
  });

  const marker = new L.Marker(map.mouseEventToLatLng(event), {
    icon: militarySymbolMarker,
    draggable: 'true',
    riseOnHover: true,
  });
  window.marker = marker;
  // Keep all the markers in a group
  marker.addTo(markerGroup);

  // Since the default DivIcon has a white background and a black border, we need to make it invisible
  document.querySelectorAll('.leaflet-div-icon').forEach((key) => {
    key.style.background = 'none';
    key.style.border = 'none';
  });

  marker.addEventListener('click', (event) => {
    // This is all the data that we are going to pass up into the marker popup window
    const chosenTarget = event.target.getIcon().options.html;
    const symbolData = {
      target: chosenTarget,
      boundingClientRect: chosenTarget.getBoundingClientRect(),
      data: JSON.parse(chosenTarget.dataset.symbolInfo),
      // calculate the distances of the chosen symbol to the top, bottom, left and right of the window
      // This will be used to find the most open space for the popup
      distances: {
        svgFromTop: chosenTarget.getBoundingClientRect().top,
        svgFromRight: window.innerWidth - chosenTarget.getBoundingClientRect().right,
        svgFromBottom: window.innerHeight - chosenTarget.getBoundingClientRect().bottom,
        svgFromLeft: chosenTarget.getBoundingClientRect().left,
      },
      // IOT delete the markers, we need to pass the unique ID data
      id: marker._leaflet_id,
    };

    // If the user clicks the map and the popup is visible, remove it
    removePopups();
    createPopupDiv(symbolData);
  });
};


// Enables draggable attribute if the cursor is hovering over the symbol in the sidebar.
// Otherwise the whole .newSVG panel gets dragged
newSVGDiv.addEventListener('mouseover', () => {
  const symbolPanel = document.querySelector('.newSVG svg');
  if (symbolPanel.parentNode.querySelector(':hover') === symbolPanel) {
    // Mouse is inside symbolPanel, enable HTML5 draggable feature
    newSVGDiv.setAttributeNS(null, 'draggable', true);
  } else {
    // Mouse is outside symbolPanel, disable HTML5 draggable feature
    newSVGDiv.setAttributeNS(null, 'draggable', false);
  }
});


newSVGDiv.ondragstart = (event) => {
  // Remove the pulsating prompt above the symbol when the user begins to drag
  document.querySelector('.drag-and-drop-reminder') ? document.querySelector('.drag-and-drop-reminder').remove() : null;
  // For some reason I had to run this again to get the symbol amplifiers to show up. This seems to be an issue with the bounceInAnimation
  MainMS.placeSymbol();
  // Deep clone the symbol panel
  const dragImg = document.querySelector('.newSVG > svg').cloneNode(true);
  dragImg.classList.remove('newSVG');
  // Hide the clone behind the original draggable using z-index
  dragImg.classList.add('hideDataImage');
  document.body.appendChild(dragImg);
  // Once the clone is attached to the body, then we can set height/width/viewBox
  dragImg.setAttributeNS(null, 'height', `${dragImg.getBBox().height}`);
  dragImg.setAttributeNS(null, 'width', `${dragImg.getBBox().width}`);
  dragImg.setAttributeNS(null, 'viewBox', `${dragImg.getBBox().x - 4} ${dragImg.getBBox().y - 4} ${dragImg.getBBox().width + 8} ${dragImg.getBBox().height + 8}`);
  // HTML5 drag-n-drop API
  event.dataTransfer.effectAllowed = 'copy';
  // Copy the JSON data in the symbol panel
  event.dataTransfer.setData('text/plain', event.target.firstElementChild.dataset.symbolInfo);
  // Set the drag image as the cloned symbol and center it on the cursor
  event.dataTransfer.setDragImage(dragImg, dragImg.getBoundingClientRect().width / 2, dragImg.getBoundingClientRect().height / 2);

  // Remove the cloned element
  window.setTimeout(() => {
    dragImg.parentNode.removeChild(dragImg);
  }, 100);

  // If the dragged symbol is on top of another symbol, cancel the event.
  if (document.querySelectorAll('.militarySymbolMarker')) {
    document.querySelectorAll('.militarySymbolMarker').forEach((key) => {
      key.addEventListener('dragover', (event) => {
        // Should probably be debounced
        event.stopImmediatePropagation();
      });
    });
  }
};


mapArea.ondrop = drop;
mapArea.ondragover = allowDrop;
mapArea.onclick = toggleDraggableElement;


window.moveable = moveable;

export { removePopups, MGRSString };
