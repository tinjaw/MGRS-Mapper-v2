// * Resize symbols (usually called when a select menu is opened) * //
// Cache: Our client bounding boxes are kept here, we can use this to clear them later.
let elementsWithBoundingBoxes = [];
// ex- Resizer('.symbolFigure svg');  (default parameters set for thumbnails)
function Resizer(symbolElement, width = 93, height = 64) {
  const se = document.querySelectorAll(symbolElement);
  const w = width;
  const h = height;

  se.forEach((key) => {
    // Check if we already got the client bounding box before.
    if (!key._boundingBox) {
      // If not, get it then store it for future use.
      key._boundingBox = key.getBBox();
      elementsWithBoundingBoxes.push(key);
      key.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
      key.setAttributeNS(null, 'viewBox', `${key.getBBox().x - 4} ${key.getBBox().y - 4} ${key.getBBox().width + 8} ${key.getBBox().height + 8}`);
      key.setAttributeNS(null, 'width', `${w}`);
      key.setAttributeNS(null, 'height', `${h}`);
    }
    // Since we have cached the Bounding Box values, there is no need to compute them again 👍
    // No idea what this was supposed to accomplish but it was throwing errors when enabled
    // document.querySelectorAll('.symbolFigure svg')[2].focus();
    return key._boundingBox;
  });
}

// This will clear the elementsWithBoundingBoxes array. Not sure if I need this or not
const clearClientBoundingBoxes = () => {
  for (let index = 0; index < elementsWithBoundingBoxes.length; index += 1) {
    const element = elementsWithBoundingBoxes[index];
    if (element) {
      element._boundingBox = null;
    }
    elementsWithBoundingBoxes = [];
  }
};

// * Bounce In Animation * //
// Toggle the bounceIn animation on the Unit Size, Mod 1 and Mod 2.
function bounceInAnimation(location) {
  const bounceIn = document.querySelector(location);
  if (JSON.parse(document.querySelector('.newSVG svg').dataset.symbolInfo).Type !== 'Equipment') {
    // transformBox is crucial. Without this Mod1 will not scale from the center
    bounceIn.style.transformBox = 'fill-box';
    bounceIn.style.transformOrigin = 'center center';
    bounceIn.classList.toggle('bounceIn');
  } else {
    bounceIn.classList.toggle('zoomIn');
  }
}

//* Debounce function (used in search field) * //
// Used to debounce the search field
function debounce(func, interval) {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, interval || 200);
  };
}

//* Set the textContent of the specified drop down * //
// Sets the textContent of the select boxes to the currently selected item.
// Example: setSelectMenuTextContent(selectSymbol, selectMod1, selectMod2, selectCommandPost);
function setSelectMenuTextContent(...params) {
  params.forEach((key) => {
    key.selectedText_.textContent = key.value;
  });
}

export {
  Resizer, bounceInAnimation, debounce, setSelectMenuTextContent,
};
