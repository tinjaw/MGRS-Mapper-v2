// * Resize symbols (usually called when a select menu is opened) * //
// Cache: Our client bounding boxes are kept here, we can use this to clear them later.
let elementsWithBoundingBoxes = [];
// Stores the bottom rect value for the visible symbols. Used in conjunction with scrollTop to decide whether to resize a symbol if it is in view or not
const rectBottom = [];
// ex- Resizer('.symbolFigure svg');  (default parameters set for thumbnails)
function Resizer(symbolElement, width = 93, height = 64) {
  const se = document.querySelectorAll(symbolElement);
  const w = width;
  const h = height;

  se.forEach((elem) => {
    // https://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen
    const rect = elem.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const isTheElementVisible = !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    if (isTheElementVisible) {
      // rect.bottom is the scrollTop value we need to store so we know where the user is scrolled at in the menu
      rectBottom.push(rect.bottom);
      // Check if we already got the client bounding box before. No need to resize the element again
      if (!elem._boundingBox) {
        // console.log(JSON.parse(elem.dataset.symbolInfo).Symbol);
        // If not, get it then store it for future use.
        elem._boundingBox = elem.getBBox();
        elementsWithBoundingBoxes.push(elem);
        elem.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
        elem.setAttributeNS(null, 'viewBox', `${elem.getBBox().x - 4} ${elem.getBBox().y - 4} ${elem.getBBox().width + 8} ${elem.getBBox().height + 8}`);
        elem.setAttributeNS(null, 'width', `${w}`);
        elem.setAttributeNS(null, 'height', `${h}`);
      }
      // Since we have cached the Bounding Box values, there is no need to compute them again 👍
      return elem._boundingBox;
    }
  });
}

const selectBoxesToResize = ['.symbol-list', '.mod1-list', '.mod2-list'];
// Listen to the user scrolling in the symbols menu list, then resize the symbols that are just out of view
selectBoxesToResize.forEach((selectBox) => {
  document.querySelectorAll(selectBox).forEach((element) => {
    element.parentElement.addEventListener('mousewheel', () => {
      const { scrollTop } = element.parentElement;
      const { clientHeight } = element.parentElement;
      const bottomScrollPosition = scrollTop + clientHeight;
      // If the user is about to scroll near the bottom of the LAST resized symbol, then run the resizer again
      // This will typically only resize 1 symbol that is about 11 symbols down the list (out of view)
      if (bottomScrollPosition >= rectBottom.slice(-1)[0]) {
        if (element.classList.contains('symbol-list')) {
          Resizer('.symbolFigure svg');
        }
        if (element.classList.contains('mod1-list')) {
          Resizer('.mod1Figure svg');
        }
        if (element.classList.contains('mod2-list')) {
          Resizer('.mod2Figure svg');
        }
      }
    });
  });
});


// Listen to the user scrolling in the symbols menu list, then resize the symbols that are just out of view
// document.querySelector('.searchResults').addEventListener('mousewheel', () => {
//   // scrollTop + clientHeight will get the bottom position of the menu list
//   const { scrollTop } = document.querySelector('.searchResults');
//   const { clientHeight } = document.querySelector('.searchResults');
//   const bottomScrollPosition = scrollTop + clientHeight;
//  // If the user is about to scroll near the bottom of the LAST resized symbol, then run the resizer again
//  // This will typically only resize 1 symbol that is about 11 symbols down the list (out of view)
//   if (bottomScrollPosition >= rectBottom.slice(-1)[0]) {
//     Resizer('.symbolFigure svg');
//   }
// });

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
async function bounceInAnimation(location) {
  const bounceIn = document.querySelector(await location);
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
async function setSelectMenuTextContent(...params) {
  params.forEach(async (key) => {
    const { value } = await key;
    key.selectedText_.textContent = value;
  });
}

export {
  Resizer, bounceInAnimation, debounce, setSelectMenuTextContent,
};
