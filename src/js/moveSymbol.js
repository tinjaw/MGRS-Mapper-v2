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
  // moveable.on('drag', ({ target, left, top }) => {
  // target.style.left = `${left}px`;
  // target.style.top = `${top}px`;
  // });

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

// *********************************************************************************** //
// * HTML5 DRAG AND DROP API                                                         * //
// *********************************************************************************** //
const allowDrop = (event) => {
  event.preventDefault();
};


const drop = (event) => {
  event.preventDefault();
  const target = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  target.classList.add('draggable');
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

  marker.addTo(map);

  // Since the default DivIcon has a white background and a black border, we need to make it invisible
  document.querySelectorAll('.leaflet-div-icon').forEach((key) => {
    key.style.background = 'none';
    key.style.border = 'none';
  });

  // IOT push a marker to the front when clicked we need to set the click counter to zero
  let zIndexCounter = 0;
  marker.addEventListener('click', () => {
    // Create the marker popup content
    const content = L.DomUtil.create('div', 'content');
    content.innerHTML = `<span class="mdc-typography--headline6">Coords:
                          <strong>${marker.getLatLng(marker).lat.toFixed(4)}, ${marker.getLatLng(marker).lng.toFixed(4)}</strong>
                        </span>`;
    marker.bindPopup(content, {
      // This will place the popup just above the symbol. 2.5 was arbitrarily chosen
      offset: new L.Point(0, -`${(marker._icon.clientHeight / 2.5)}`),
    });
    // Increment the click counter
    zIndexCounter += 1;
    // Reset all markers z-indexes to 100
    map._container.querySelectorAll('.leaflet-marker-icon').forEach((element) => {
      const clickedSymbol = element;
      clickedSymbol.style.zIndex = 100;
    });

    const newZIndex = marker._icon.style.zIndex + zIndexCounter;
    // Now set the new z-index of the marker with the click counter added
    marker._icon.style.zIndex = newZIndex;
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
  event.dataTransfer.setData('text/plain', event.target.id);
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
