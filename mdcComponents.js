/* eslint-disable no-underscore-dangle */
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import Fuse from 'fuse.js';
import militarySymbolsObject from './militarySymbolsObject';
import affiliationOutlineObject from './affiliationOutlineObject';
import unitSizeObject from './unitSizeObject';
import { addSymbolsToDropdownList, MilSym } from './app';

const textField = new MDCTextField(document.querySelector('.searchSymbols'));
const selectSymbol = new MDCSelect(document.querySelector('.symbol-select'));
export const selectAffiliation = new MDCSelect(document.querySelector('.affiliation-select'));
const selectUnitSize = new MDCSelect(document.querySelector('.unit-size-select'));

selectSymbol.listen('MDCSelect:change', () => {
  selectSymbol.selectedText_.textContent = selectSymbol.value;
  new MilSym('.newSVG', `${selectSymbol.value}`, `${selectAffiliation.value}`, `${selectUnitSize.value}`).placeSymbol();
  document.querySelector('.newSVG svg').setAttributeNS(null, 'class', 'animateSymbol');
  // This will disable the selectUnitSize dropdown if the chosen symbol is a piece of equipment
  if (JSON.parse(document.querySelector('.newSVG svg').dataset.symbolInfo).type === 'Equipment') {
    selectUnitSize.disabled = true;
  } else {
    selectUnitSize.disabled = false;
  }
});

selectAffiliation.listen('MDCSelect:change', () => {
  new MilSym('.newSVG', `${selectSymbol.value}`, `${selectAffiliation.value}`, `${selectUnitSize.value}`).placeSymbol();
  // If the affiliation is changed, then change all the symbols outlines in the dropdown to match it
  Object.keys(militarySymbolsObject).forEach((key) => {
    new MilSym(`.symbolFigure[data-symbol-name="${key}"]`, `${key}`, `${selectAffiliation.value}`, 'none').placeSymbol();
  });
});

selectUnitSize.listen('MDCSelect:change', () => {
  new MilSym('.newSVG', `${selectSymbol.value}`, `${selectAffiliation.value}`, `${selectUnitSize.value}`).placeSymbol();
});

const selectMenus = document.querySelectorAll('.mdc-select');
selectMenus.forEach((key) => {
  key.addEventListener('click', () => {
    // If the selectSymbol menu is open, then resize all the symbols
    selectSymbol.isMenuOpen_ ? new Resizer('.symbolFigure svg') : null;
    selectUnitSize.isMenuOpen_ ? new Resizer('.unitSizeFigure svg', 93, 33) : null;
  });
});

// ex- new Resizer('.symbolFigure svg');  (default parameters set for thumbnails)
class Resizer {
  constructor(symbolElement, width = 93, height = 64) {
    this.symbolElement = document.querySelectorAll(symbolElement);
    this.width = width;
    this.height = height;
    this.symbolElement.forEach((key) => {
      // This just removes the animation on the symbol on the dropdown list
      key.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid'); // this is a default value I believe
      key.setAttributeNS(null, 'viewBox', `${key.getBBox().x - 4} ${key.getBBox().y - 4} ${key.getBBox().width + 8} ${key.getBBox().height + 8}`);
      key.setAttributeNS(null, 'width', `${this.width}`);
      key.setAttributeNS(null, 'height', `${this.height}`);
    });
  }
}

const searchOptions = {
  shouldSort: true,
  // tokenize: true,
  // matchAllTokens: true,
  includeScore: true,
  findAllMatches: true,
  includeMatches: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [Object.keys(militarySymbolsObject)],
};

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

//! 29AUG19 -- Calling it here. There has to be a more elegant way to do this.
// TODO: Clean up searchResults function. It looks like shit
// TODO: Add in the rest of the unit sizes.
// TODO: The Symbol Panel has a sudden resize when you add shit like echelon size. This is most likely a CSS issue
// TODO: Mod1, Mod2, etc...
// TODO: ternary operators on get decoratorData()? Might clean up some of the garbage.
const searchResults = debounce(() => {
  if (textField.input_.value !== '') {
    const fuse = new Fuse(searchOptions.keys, searchOptions); // "list" is the item array
    const result = fuse.search(textField.value);
    selectSymbol.menu_.items.length === 0 ? selectSymbol.foundation_.adapter_.closeMenu() : null;
    selectSymbol.menu_.items ? selectSymbol.menu_.items.forEach(e => e.remove()) : null;

    result.forEach((e) => {
      const elem = [...new Set(e.matches)];
      for (let index = 0; index < elem.length; index++) {
        const element = elem[index].value;
        selectSymbol.foundation_.adapter_.setValue();
        selectSymbol.foundation_.adapter_.openMenu();
        const mdcList = document.querySelector('.mdc-list.symbol-list');
        const newli = document.createElement('li');
        newli.setAttribute('class', 'mdc-list-item');
        newli.setAttribute('data-value', element);
        newli.textContent = element;
        mdcList.append(newli);
        const figureElement = document.createElement('figure');
        figureElement.setAttribute('class', 'symbolFigure');
        figureElement.setAttribute('data-symbol-name', `${element}`); // add the symbol key to the data-attr so they can match up with the list item
        newli.prepend(figureElement);
        new MilSym(`.symbolFigure[data-symbol-name="${element}"]`, `${element}`, `${selectAffiliation.value}`, 'none').placeSymbol();
      }
    });
    if (textField.value.length >= 3) {
      // set the first result as the symbol value on the "Select a Symbol" dropdown
      result[0].matches[0].value ? selectSymbol.foundation_.setValue(result[0].matches[0].value) : null;
    }
  } else {
    // selectSymbol.foundation_.adapter_.closeMenu();
    // If there is no text in the search field remove all search results
    selectSymbol.menu_.items ? selectSymbol.menu_.items.forEach(e => e.remove()) : null;
    // Rerun the function to add the symbols to the list
    addSymbolsToDropdownList();
    // Set the selected item to the one in the symbol panel
    selectSymbol.value = document.querySelector('.newSVG > svg').dataset.symbolName;
  }
}, 250);

textField.input_.addEventListener('input', searchResults);

// ! GLOBAL VARS - remove on production
window.textField = textField;
window.selectSymbol = selectSymbol;
window.selectUnitSize = selectUnitSize;
window.Resizer = Resizer;

// Load the default symbol into the panel when the page loads
window.onload = () => {
  addSymbolsToDropdownList();
  selectSymbol.foundation_.setSelectedIndex(0);
};

//! I deleted the mutation observer shit but you can check the repo if you still think it's worth something
