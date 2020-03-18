// * Resize symbols (usually called when a select menu is opened) * //
// ex- Resizer('.symbolFigure svg');  (default parameters set for thumbnails)
function Resizer(symbolElement, width = 93, height = 64) {
  const se = document.querySelectorAll(symbolElement);
  const w = width;
  const h = height;

  // All this does is fix the Bbox on the 2nd element in Mod1/Command Post. The BBox does not get set due to some async bullshit
  // If this isn't done then the 2nd symbol in the list does not show up. I have no idea why but this works
  document.querySelectorAll('.mod1-list > li > figure > svg > g.mod1')[0].classList.remove('bounceIn');
  document.querySelectorAll('.mod2-list > li > figure > svg > g.mod2')[0].classList.remove('bounceIn');
  document.querySelectorAll('.commandpost-list > li > figure > svg > g.commandpost')[0].classList.remove('bounceIn');

  se.forEach((elem) => {
    const rect = elem.getBoundingClientRect();
    // When the menu is open, find the bottom value of all the symbols and from there we can figure out which symbols are in view
    // Choosing a value of 2k because of other issues I was having with fucking Firefox
    if (rect.bottom >= 0 && rect.bottom <= 2000) {
      // Check if we already got the client bounding box before. No need to resize the element again
      if (!elem._boundingBox) {
        elem._boundingBox = elem.getBBox();
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
    // element.style.scrollBehavior = 'smooth';
    element.parentElement.addEventListener('scroll', () => {
      // If the user is about to scroll near the bottom of the LAST resized symbol, then run the resizer again
      // This will typically only resize 1 symbol that is about 11 symbols down the list (out of view)
      if (element.classList.contains('symbol-list')) {
        Resizer('.symbolFigure svg');
      }
      if (element.classList.contains('mod1-list')) {
        Resizer('.mod1Figure svg');
      }
      if (element.classList.contains('mod2-list')) {
        Resizer('.mod2Figure svg');
      }
    });
  });
});


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
