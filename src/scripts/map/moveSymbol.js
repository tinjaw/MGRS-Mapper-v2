/* eslint-disable object-curly-newline */
import Moveable from 'moveable';
// This is causing a dep-cycle but if I import it from Leaflet.DumbMGRS the popups won't show
import {
  map, UTMtoMGRS, LLtoUTM, markerGroup,
} from './map';


const newSVGDiv = document.querySelector('.newSVG');
const mapArea = document.querySelector('#main-content');

function removePopups() {
  if (mapArea.querySelector('.symbol-info-div')) {
    mapArea.querySelector('.symbol-info-div').remove();
  }
  if (mapArea.querySelector('.popup-arrow')) {
    mapArea.querySelector('.popup-arrow').remove();
  }
}


// *********************************************************************************** //
// * MOVEABLE.JS                                                                     * //
// *********************************************************************************** //
const moveableOptions = {
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

const moveable = new Moveable(document.body, moveableOptions);
window.moveable = moveable;
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
    const targetStyle = target.style;
    targetStyle.transform = transform;
  });

  //* ROTATABLE *//
  moveable.on('rotateStart', () => {
    removePopups();
  })
    .on('rotate', ({ target, transform }) => {
      const targetStyle = target.style;
      targetStyle.transform = transform;
    });

  //* PINCHABLE *//
  moveable.on('pinch', ({ target, transform }) => {
    const targetStyle = target.style;
    targetStyle.transform = transform;
  });

  //* RESIZABLE *//
  // Set the absolute minimum width of your marker in pixels
  const minimumMarkerWidth = 40;
  moveable.on('resizeStart', ({ target }) => {
    removePopups();
    const targetStyle = target.style;
    // If the marker width is less than or equal to minimumMarkerWidth, add 1px to marker width so it will skip the next if statement
    if (parseInt(target.style.width, 0) <= minimumMarkerWidth) targetStyle.width = `${minimumMarkerWidth + 1}px`;
  })
    .on('resize', ({ target, width, height, delta }) => {
      // If the user resizes the marker outside of the browser or resizes too quickly, throw an error and deselect the marker
      if (delta[0] <= -60 || delta[0] >= 60) {
        console.error('You resized the marker too quickly');
        moveable.target = undefined;
        return;
      }
      // If the marker width is less than or equal to minimumMarkerWidth, stop all resizing
      if (parseInt(target.style.width, 0) <= minimumMarkerWidth) return;
      const targetStyle = target.style;
      targetStyle.width = `${width}px`;
      targetStyle.height = `${height}px`;
    });
}

// This toggles the Moveable.js control box on whatever element you click on
function toggleDraggableElement(event) {
  // If the user clicks the map and the popup is visible, remove it
  removePopups();
  mapArea.querySelectorAll('.draggable').forEach((key) => {
    // https://stackoverflow.com/questions/24183286/drag-and-drop-to-div-behind-absolutely-positioned-div
    const elements = document.elementsFromPoint(event.clientX, event.clientY);
    const chosenTarget = elements.find((key) => key.matches('.draggable'));
    // If you click a symbol it will set it as the Moveable target
    // If you click the map it will de-select the symbol so you can get that annoying control box out of view
    chosenTarget ? (moveable.target = chosenTarget) : (moveable.target = undefined);
  });
}


// *********************************************************************************** //
// * CUSTOM POPUP AND POPUP ARROW                                                    * //
// *********************************************************************************** //
// Creates the popup, delete button and popup arrow. Finds the most open space in the window and automatically positions it
const createPopupDiv = (element) => {
  const div = document.createElement('div');
  div.className = 'symbol-info-div mdc-elevation--z24';
  // "element" is the symbolData object that we created in the marker click event listener below
  element.target.parentElement.appendChild(div);
  // Translate the current marker position from Lat-Lon to MGRS
  const currentMarkerLocation = UTMtoMGRS(LLtoUTM({ lat: element.latLng.lat, lon: element.latLng.lng }), 5, true);

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
// * Passes Data into createPopupDiv()                                               * //
// *********************************************************************************** //
function symbolDataExport(chosenTarget, markerElement) {
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
    id: markerElement._leaflet_id,
    latLng: markerElement.getLatLng(),
  };
  // If the user clicks the map and the popup is visible, remove it
  removePopups();
  createPopupDiv(symbolData);
}


// *********************************************************************************** //
// * Leaflet Control - User Text Input Surface Menu                                  * //
// *********************************************************************************** //
const addTextToMapSubmitButton = document.querySelector('.mdc-button.addTextToMap--Button');
const addTextToMapUserInput = document.querySelector('.mdc-text-field.addTextToMap--TextField > input');
let count = 0;
addTextToMapSubmitButton.addEventListener('click', () => {
  if (addTextToMapUserInput.value) {
    // Create the SVG element that will contain the text the user input
    const userTextSVGSymbol = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    userTextSVGSymbol.setAttributeNS(null, 'xlink', 'http://www.w3.org/1999/xlink');
    userTextSVGSymbol.setAttributeNS(null, 'height', '60');
    userTextSVGSymbol.setAttributeNS(null, 'width', '100');
    userTextSVGSymbol.setAttributeNS(null, 'class', 'draggable');
    userTextSVGSymbol.setAttributeNS(null, 'viewBox', '0 0 1 10');
    userTextSVGSymbol.setAttributeNS(null, 'data-symbol-info', `{"Symbol": "Text", "Data": "${addTextToMapUserInput.value}"}`);
    const userInputText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    userInputText.setAttributeNS(null, 'x', '50%');
    userInputText.setAttributeNS(null, 'y', '50%');
    userInputText.setAttributeNS(null, 'dominant-baseline', 'middle');
    userInputText.setAttributeNS(null, 'text-anchor', 'middle');
    // Adust the color blue to light blue (matches the friendly outline color)
    if (addTextToMapUserInput.dataset.color === 'blue') {
      userInputText.setAttributeNS(null, 'fill', '#74DCFF');
    } else {
      userInputText.setAttributeNS(null, 'fill', addTextToMapUserInput.dataset.color);
    }
    userInputText.textContent = addTextToMapUserInput.value;
    userTextSVGSymbol.appendChild(userInputText);

    const textIcon = new L.DivIcon({
      // increment the count # on each text icon added
      className: `text-labels text-count-${count += 1}`,
      html: userTextSVGSymbol,
      iconSize: [100, 60],
      iconAnchor: [50, 30],
    });

    // Place the text icon in the center of the map
    const textMarker = new L.Marker(map.getCenter(), {
      interactive: true,
      draggable: 'true',
      icon: textIcon,
      zIndexOffset: 1000, // Make this appear above other map features
    });

    textMarker.addTo(markerGroup);

    L.DomEvent.disableClickPropagation(textMarker);
    // Select the currently added text marker
    const currentTextMarker = document.querySelector(`.text-count-${count} > .draggable`);
    const newBB = currentTextMarker.getBBox();
    // This is some dumbass math that I made up.
    // Basically this will try and adjust the width of the SVG so the moveable control box will fit around it
    if (addTextToMapUserInput.value.length > 3) {
      currentTextMarker.setAttribute('width', currentTextMarker.getBoundingClientRect().width + (newBB.width * (addTextToMapUserInput.value.length / 2)));
    }
    // Adjust the viewbox so all text markers are the same size regardless of number of characters
    currentTextMarker.setAttribute('viewBox', `0 0 ${newBB.width / 2} 10`);

    // Enable Moveable to manipulate the text marker
    manipulateSymbol(document.querySelector('.text-labels > svg '));

    textMarker.on('click', (ev) => {
      // This is all the data that we are going to pass up into the marker popup window
      const chosenTarget = ev.target.getIcon().options.html;
      symbolDataExport(chosenTarget, textMarker);
    });
  }
});


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
  event.target.offsetParent.appendChild(target);
  // Get the BBox only after the target has been appended
  const bbox = target.getBBox();
  // The bounceIn animation fucks everything up, remove it and set the BBox of the parent draggable symbol
  document.querySelectorAll('.draggable > g').forEach((key) => {
    key.classList.remove('bounceIn');
    const newBbox = key.parentElement.getBBox();
    key.parentElement.setAttribute('viewBox', `${newBbox.x}, ${newBbox.y}, ${newBbox.width}, ${newBbox.height}`);
  });
  // Now call the manipulateSymbol function to switch to Moveable.js
  manipulateSymbol(event);
  // Positions the mouse curse directly in the middle of the symbol
  target.setAttribute('style', 'position: absolute;');

  // Convert dropped symbol to a Leaflet marker
  const militarySymbolMarker = new L.DivIcon({
    html: target,
    iconSize: [bbox.width, bbox.height],
    iconAnchor: [bbox.width / 2, bbox.height / 2],
    className: 'militarySymbolMarker',
  });

  const marker = new L.Marker(map.mouseEventToLatLng(event), {
    icon: militarySymbolMarker,
    draggable: 'true',
    riseOnHover: true,
    // Adjust this number if the symbol Marker is below the 100k grid labels
    zIndexOffset: 1000,
  });
  // Disable the user from zooming in on the map when the symbol is clicked
  L.DomEvent.disableClickPropagation(marker);

  // Keep all the markers in a group, they will automatically be added to the map
  marker.addTo(markerGroup);

  // Since the default DivIcon has a white background and a black border, we need to make it invisible
  document.querySelectorAll('.leaflet-div-icon').forEach((key) => {
    const iconStyle = key.style;
    iconStyle.background = 'none';
    iconStyle.border = 'none';
  });

  marker.addEventListener('click', (ev) => {
    // This is all the data that we are going to pass up into the marker popup window
    const chosenTarget = ev.target.getIcon().options.html;
    // Passing parameters to this function will generate the symbol popup
    symbolDataExport(chosenTarget, marker);
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
  if (document.querySelector('.drag-and-drop-reminder')) {
    document.querySelector('.drag-and-drop-reminder').remove();
  }
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
  const eventDataTransfer = event.dataTransfer;
  eventDataTransfer.effectAllowed = 'copy';
  // Copy the JSON data in the symbol panel
  eventDataTransfer.setData('text/plain', event.target.firstElementChild.dataset.symbolInfo);
  // Set the drag image as the cloned symbol and center it on the cursor
  eventDataTransfer.setDragImage(dragImg, dragImg.getBoundingClientRect().width / 2, dragImg.getBoundingClientRect().height / 2);

  // Remove the cloned element
  window.setTimeout(() => {
    dragImg.parentNode.removeChild(dragImg);
  }, 100);

  // If the dragged symbol is on top of another symbol, cancel the event.
  if (document.querySelectorAll('.militarySymbolMarker')) {
    document.querySelectorAll('.militarySymbolMarker').forEach((key) => {
      key.addEventListener('dragover', (ev) => {
        // Should probably be debounced
        ev.stopImmediatePropagation();
      });
    });
  }
};


mapArea.ondrop = drop;
mapArea.ondragover = allowDrop;
mapArea.onclick = toggleDraggableElement;


export { removePopups, moveable };
