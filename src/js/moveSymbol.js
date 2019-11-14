import Moveable from 'moveable';

const newSVGDiv = document.querySelector('.newSVG');
const mapArea = document.querySelector('#main-content');

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
  moveable.on('drag', ({ target, left, top }) => {
    // target.style.left = `${left}px`;
    // target.style.top = `${top}px`;
    target.parentElement.childNodes.forEach((key) => {
      if (key.className === 'symbol-info-div') {
        key.remove();
      }
      if (key.className === 'popup-arrow') {
        key.remove();
      }
    });
  });

  //* SCALABLE *//
  moveable.on('scale', ({ target, transform }) => {
    target.style.transform = transform;
  });

  //* ROTATABLE *//
  moveable.on('rotate', ({ target, transform }) => {
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
  document.querySelectorAll('.draggable').forEach((key) => {
    // https://stackoverflow.com/questions/24183286/drag-and-drop-to-div-behind-absolutely-positioned-div
    const elements = document.elementsFromPoint(event.clientX, event.clientY);
    const chosenTarget = elements.find(key => key.matches('.draggable'));
    // If you click a symbol on the yellow background, it will set it as the Moveable target
    // If you click the yellow background it will de-select the symbol so you can get that annoying control box out of view
    chosenTarget ? (moveable.target = chosenTarget) : (moveable.target = undefined);
  });
}


const createPopupDivAboveSymbol = (element) => {
  const div = document.createElement('div');

  element.target.parentElement.appendChild(div);

  div.style.position = 'absolute';
  div.style.background = 'white';
  div.style.border = '2px red solid';
  div.style.textAlign = 'left';
  div.style.fontSize = '1.2rem';
  div.style.padding = '20px';
  div.style.lineHeight = '1.6rem';
  div.style.minWidth = '250px';
  div.style.width = 'max-content';
  div.style.maxWidth = '350px';

  div.innerHTML = '<strong>Location:</strong> 18T VP 12345 67890';

  Object.entries(element.data).forEach((key) => {
    const newDiv = document.createElement('div');
    div.className = 'symbol-info-div';
    div.appendChild(newDiv);
    newDiv.innerHTML += `<strong>${key[0]}:</strong> ${key[1]}`;
    return newDiv;
  });

  const symbolInfoDiv = document.querySelector('.symbol-info-div');

  const x = element.target.getBBox().x + element.target.getBBox().width / 2;
  const y = element.target.getBBox().y + element.target.getBBox().height / 2;
  const svgCenterPoint = element.target.createSVGPoint();
  svgCenterPoint.x = x;
  svgCenterPoint.y = y;


  // Distances from the center point of the SVG to the Top, right, bottom and left of the window
  const distancesFromSVGCenterPoint = {
    TOP: Math.round(svgCenterPoint.matrixTransform(element.target.getScreenCTM()).y),
    RIGHT: Math.round(window.innerWidth - svgCenterPoint.matrixTransform(element.target.getScreenCTM()).x),
    BOTTOM: Math.round(window.innerHeight - svgCenterPoint.matrixTransform(element.target.getScreenCTM()).y),
    LEFT: Math.round(svgCenterPoint.matrixTransform(element.target.getScreenCTM()).x),
  };


  function findTopValueOfPopupOnRight() {
    const thePOP = window.innerHeight - symbolInfoDiv.getBoundingClientRect().bottom - symbolInfoDiv.getBoundingClientRect().top;
    const theSVG = window.innerHeight - element.boundingClientRect.bottom - element.boundingClientRect.top;
    const theVal = (thePOP - theSVG) / 2;
    return theVal;
  }


  function findCenterPointOfPopup() {
    const ddd = (symbolInfoDiv.getBoundingClientRect().width - element.target.getBoundingClientRect().width) / -2;
    return ddd;
  }


  // prettier-ignore
  function displayPopup(direction) {
    const outerArrowDiv = document.createElement('div');
    outerArrowDiv.classList.add('popup-arrow');
    const popupLeft = symbolInfoDiv.getBoundingClientRect().left;
    const popupRight = symbolInfoDiv.getBoundingClientRect().right;
    const popupOffset = element.bbox.x / 2 + element.bbox.y;

    switch (direction) {
      case 'top':
        outerArrowDiv.style.transform = 'rotate(180deg)';
        outerArrowDiv.style.top = `${symbolInfoDiv.offsetTop + symbolInfoDiv.getBoundingClientRect().height}px`;
        outerArrowDiv.style.left = `${symbolInfoDiv.offsetLeft + (symbolInfoDiv.offsetWidth / 2) - 15}px`;
        break;
      case 'right':
        outerArrowDiv.style.transform = 'rotate(-90deg)';
        outerArrowDiv.style.top = `${(element.boundingClientRect.height / 2) - 15}px`;
        outerArrowDiv.style.left = `${element.boundingClientRect.width - 2}px`;
        break;
      case 'bottom':
        outerArrowDiv.style.transform = 'rotate(0deg)';
        outerArrowDiv.style.top = `${symbolInfoDiv.getBoundingClientRect().top - popupOffset + 2}px`;
        outerArrowDiv.style.left = `${(popupLeft + popupRight) / 2 - popupOffset}px`;
        break;
      case 'left':
        outerArrowDiv.style.transform = 'rotate(90deg)';
        outerArrowDiv.style.top = `${distancesFromSVGCenterPoint.TOP - 8}px`;
        outerArrowDiv.style.left = `${popupRight - (popupOffset / 2)}px`;
        break;
      default:
        break;
    }

    outerArrowDiv.style.width = 0;
    outerArrowDiv.style.height = 0;
    outerArrowDiv.style.position = 'absolute';
    outerArrowDiv.style.borderStyle = 'solid';
    outerArrowDiv.style.borderWidth = '0 15px 15px';
    outerArrowDiv.style.borderColor = 'transparent transparent #ff0000 transparent';
    symbolInfoDiv.insertAdjacentElement('afterend', outerArrowDiv);

    const innerArrowDiv = outerArrowDiv.cloneNode(true);
    innerArrowDiv.style.borderColor = 'transparent transparent #ffffff transparent';
    innerArrowDiv.style.transform = 'rotate(0deg)';
    innerArrowDiv.style.top = '3px';
    innerArrowDiv.style.left = '-15px';
    outerArrowDiv.insertAdjacentElement('beforeend', innerArrowDiv);
  }

  // Find the most open space
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
      displayPopup('top');
      break;
    case 'svgFromRight':
      console.log('RIGHT');
      div.style.left = `${element.boundingClientRect.width + 20}px`;
      div.style.top = `${findTopValueOfPopupOnRight()}px`;
      displayPopup('right');
      break;
    case 'svgFromBottom':
      //! I completed the logic for top and bottom (both popup box and arrow)
      console.log('BOTTOM');
      console.log(distancesFromSVGCenterPoint, symbolInfoDiv.getBoundingClientRect());
      div.style.left = `${distancesFromSVGCenterPoint.LEFT - symbolInfoDiv.getBoundingClientRect().width / 2}px`;
      div.style.top = `${element.boundingClientRect.bottom + 20}px`;
      displayPopup('bottom');
      break;
    case 'svgFromLeft':
      console.log('LEFT');
      div.style.right = `${element.distances.svgFromRight + element.boundingClientRect.width + 10}px`;
      div.style.top = `${distancesFromSVGCenterPoint.TOP - symbolInfoDiv.getBoundingClientRect().height / 2}px`;
      displayPopup('left');
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

  marker.addTo(map);

  // Since the default DivIcon has a white background and a black border, we need to make it invisible
  document.querySelectorAll('.leaflet-div-icon').forEach((key) => {
    key.style.background = 'none';
    key.style.border = 'none';
  });

  // IOT push a marker to the front when clicked we need to set the click counter to zero
  const zIndexCounter = 0;

  marker.addEventListener('click', (event) => {
    // const symbolInfo = JSON.parse(event.target.getIcon().options.html.dataset.symbolInfo);
    const chosenTarget = event.target.getIcon().options.html;
    const symbolData = {
      target: chosenTarget,
      bbox: {
        x: chosenTarget.getBBox().x,
        y: chosenTarget.getBBox().y,
        width: chosenTarget.getBBox().width,
        height: chosenTarget.getBBox().height,
      },
      boundingClientRect: chosenTarget.getBoundingClientRect(),
      data: JSON.parse(chosenTarget.dataset.symbolInfo),
      distances: {
        svgFromTop: chosenTarget.getBoundingClientRect().top,
        svgFromRight: window.innerWidth - chosenTarget.getBoundingClientRect().right,
        svgFromBottom: window.innerHeight - chosenTarget.getBoundingClientRect().bottom,
        svgFromLeft: chosenTarget.getBoundingClientRect().left,
      },
    };

    createPopupDivAboveSymbol(symbolData);
    // console.log(symbolData);
    // // Create the marker popup content
    // const content = L.DomUtil.create('div', 'content');
    // content.innerHTML = `<span class="mdc-typography--headline6">Coords:
    //                       <strong>${marker.getLatLng(marker).lat.toFixed(4)}, ${marker.getLatLng(marker).lng.toFixed(4)}</strong>
    //                       <br/>
    //                       <strong>ID: ${marker._leaflet_id}</strong>
    //                       <br/>
    //                       <strong>Symbol: ${symbolInfo.Symbol}</strong>
    //                       <br/>
    //                     </span>`;

    // marker.bindPopup(content, {
    //   // This will place the popup just above the symbol. 2.5 was arbitrarily chosen
    //   offset: new L.Point(0, parseInt(-marker._icon.clientHeight / 2.5)),
    //   // maxWidth: 'auto',
    // });

    // // Open the popup on click
    // if (!marker._popup.isOpen()) {
    //   setTimeout(() => {
    //     marker.openPopup();
    //   }, 10);
    // }

    // //! These next 3 consts are bad voodoo but worth looking at
    // // Take scrollWidth of popup : 285 / 2 = 142.5
    // // Take scrollWidth of svg: 533 / 2 = 266.5
    // // 266.5 + 142.5 = 409 minus 9 = 400px
    // // const popupContainer = marker._popup._containerWidth / 2;
    // // const markerWidth = marker._icon.scrollWidth / 2;
    // // const newWidthValue = (markerWidth + popupContainer) - 9;
    // // document.querySelector('.leaflet-popup.leaflet-zoom-animated').style.transform = `translate3d(${newWidthValue}px, 422px, 0px)`;

    // // Increment the click counter
    // zIndexCounter += 1;
    // // Reset all markers z-indexes to 100
    // map._container.querySelectorAll('.leaflet-marker-icon').forEach((element) => {
    //   const clickedSymbol = element;
    //   clickedSymbol.style.zIndex = 100;
    // });

    // const newZIndex = marker._icon.style.zIndex + zIndexCounter;
    // // Now set the new z-index of the marker with the click counter added
    // marker._icon.style.zIndex = newZIndex;
  });

  marker.addEventListener('popupopen', () => {
    console.log('popup opened');
    const btn = L.DomUtil.create('button', 'deleteMarker', marker._popup._content);
    btn.setAttribute('type', 'button');
    btn.textContent = 'Delete Marker';
    btn.onclick = () => {
      map.removeLayer(marker);
      moveable.target = undefined;
    };
    marker._popup._content.appendChild(btn);
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
