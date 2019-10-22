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
  moveable.on('drag', ({ target, left, top }) => {
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
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
  moveable.on('resize', ({target, width, height, delta }) => {
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
  const x1 = event.clientX - 76; // this.getBoundingClientRect().width / 2
  const y1 = event.clientY - 51; // this.getBoundingClientRect().height / 2
  const target = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  target.classList.add('draggable');
  target.innerHTML = document.querySelector('.newSVG >  svg').innerHTML;
  event.target.appendChild(target);
  // Get the BBox only after the target has been appended
  const bbox = target.getBBox();
  // target.setAttribute('viewBox', `${bbox.x}, ${bbox.y}, ${bbox.width}, ${bbox.height}`);
  // The bounceIn animation fucks everything up, remove it and set the BBox of the parent draggable symbol
  document.querySelectorAll('.draggable > g').forEach((key) => {
    key.classList.remove('bounceIn');
    const bbox = key.parentElement.getBBox();
    key.parentElement.setAttribute('viewBox', `${bbox.x}, ${bbox.y}, ${bbox.width}, ${bbox.height}`);
  });
  // Now call the manipulateSymbol func to switch to Moveable.js
  manipulateSymbol(event);
  target.setAttribute('height', `${bbox.height}`);
  target.setAttribute('width', `${bbox.width}`);
  target.setAttribute('style', `position: absolute; top: ${y1}px; left:${x1}px; right: -${x1}px`);
};

// This will only enable the draggable attribute if the cursor is hovering over the symbol in the symbol panel. Otherwise the whole .newSVG panel gets dragged
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
};


mapArea.ondrop = drop;
mapArea.ondragover = allowDrop;
mapArea.onclick = toggleDraggableElement;
