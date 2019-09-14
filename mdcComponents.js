/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import { MDCSelect } from '@material/select';
import { MDCTextField, MDCTextFieldIcon } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import Fuse from 'fuse.js';
import { addSymbolsToDropdownList, addMod1ToDropdownList, MilSym } from './app';
import militarySymbolsObject from './militarySymbolsObject';
import affiliationOutlineObject from './affiliationOutlineObject';
import unitSizeObject from './unitSizeObject';

const textField = new MDCTextField(document.querySelector('.searchSymbols'));
const selectSymbol = new MDCSelect(document.querySelector('.symbol-select'));
const selectAffiliation = new MDCSelect(document.querySelector('.affiliation-select'));
const selectUnitSize = new MDCSelect(document.querySelector('.unit-size-select'));
const selectMod1 = new MDCSelect(document.querySelector('.mod1-select'));

const icon = new MDCRipple(document.querySelector('.mdc-button.searchFieldDeleteIcon'));
const deleteTextFieldButton = new MDCTextFieldIcon(icon.root_);

selectSymbol.listen('MDCSelect:change', () => {
  // For some reason I had to add "|| 'None" to the selectMod1 argument. It will throw errors otherwise
  // new MilSym('.newSVG', `${selectSymbol.value}`, `${selectAffiliation.value}`, `${selectUnitSize.value}`, `${selectMod1.value || 'None'}`).placeSymbol();
  new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, `${selectMod1.value || 'None'}`).placeSymbol();
  document.querySelector('.newSVG > svg').setAttributeNS(null, 'class', 'animateSymbol');
  // Forces select box to set its text content to the selected symbol value
  selectSymbol.selectedText_.textContent = selectSymbol.value;
  // This will disable the selectUnitSize dropdown if the chosen symbol is a piece of equipment
  if (JSON.parse(document.querySelector('.newSVG > svg').dataset.symbolInfo).type === 'Equipment') {
    selectUnitSize.disabled = true;
  } else {
    selectUnitSize.disabled = false;
  }
});

selectAffiliation.listen('MDCSelect:change', () => {
  new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, selectMod1.value).placeSymbol();
  // If the affiliation is changed, then change all the symbols outlines in the dropdown to match it
  // Note: I am not using Object.keys() because I am only iterating on symbols that are in the dropdown list. (eg- what if the dropdown list only contains search results?)
  selectSymbol.menu_.items.map((key) => {
    new MilSym(`.symbolFigure[data-symbol-name="${key.dataset.value}"]`, `${key.dataset.value}`, `${selectAffiliation.value}`, 'none').placeSymbol();
  });
});

selectUnitSize.listen('MDCSelect:change', () => {
  new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, selectMod1.value).placeSymbol();
});

selectMod1.listen('MDCSelect:change', () => {
  new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, selectMod1.value).placeSymbol();
  // Forces select box to set its text content to the selected Mod1 value
  selectMod1.selectedText_.textContent = selectMod1.value;
});

const selectMenus = document.querySelectorAll('.mdc-select');
selectMenus.forEach((key) => {
  key.addEventListener('click', () => {
    // If the selectSymbol menu is open, then resize all the symbols
    selectSymbol.isMenuOpen_ ? new Resizer('.symbolFigure svg') : null;
    selectUnitSize.isMenuOpen_ ? new Resizer('.unitSizeFigure svg', 93, 33) : null;
    selectMod1.isMenuOpen_ ? new Resizer('.mod1Figure svg') : null;
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

function clearTextField() {
  // Clear the text field
  textField.value = '';
  // Hide the trash button
  deleteTextFieldButton.root_.style.display = 'none';
  // Remove all items in the selectSymbol menu
  selectSymbol.menu_.items ? selectSymbol.menu_.items.forEach(key => key.remove()) : null;
  // Re-add them
  addSymbolsToDropdownList();
  // Set the selectSymbol value to the last matched item
  selectSymbol.value = document.querySelector('.newSVG > svg').dataset.symbolName;
  // Do not animate the symbol panel
  if (document.querySelector('.newSVG > svg').classList.contains('animateSymbol')) {
    document.querySelector('.newSVG > svg').classList.remove('animateSymbol');
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

//! 3SEPT2019 -- Calling it here
// TODO: Add a few more examples to Mod1. Preferably one with text and another with 2 path elements
// TODO: Mod1 disabled for equipment
// TODO: All the dropdown lists might benefit from mutation observers. If I had a M.O. on each of the drop downs I could easily call the Resizer class
// TODO: addMod1ToDropdownList and addSymbolsToDropdownList are very similar and could be combined into 1 function (I think)
// TODO: If you change the MilSym class to accept an object, then you can instantiate it like this: "new MilSym({location: '.test', symbol: 'Infantry', affiliation: 'friendly', echelon: 'team', mod1: 'Foraging'}).placeSymbol();". The only value I can see from this is making it easier to call this class since you can indent object keys on new lines.
// TODO: Hovering over list items should increase the z-elevation of the item.
// TODO: Mod1 dropdown should probably lose the outlines and focus on the modifier symbol itself. (Also the outlines aren't updating on affiliation change)
const searchResults = debounce(() => {
  if (textField.input_.value !== '') {
    const fuse = new Fuse(searchOptions.keys, searchOptions);
    const result = fuse.search(textField.value);
    deleteTextFieldButton.root_.style.display = 'initial'; // Show the trash icon when there is any text in the search field
    deleteTextFieldButton.root_.style.right = '0';
    deleteTextFieldButton.root_.style.position = 'fixed';
    deleteTextFieldButton.root_.style.top = '10px';
    deleteTextFieldButton.root_.style.zIndex = '10'; // setting z-index on trash icon makes it clickable
    result.forEach((e) => {
      const matchSet = [...new Set(e.matches)];
      const mdcList = document.querySelector('.mdc-list.symbol-list');
      selectSymbol.menu_.items ? selectSymbol.menu_.items.forEach(key => key.remove()) : null;
      if (matchSet.length >= 1) {
        for (let index = 0; index < matchSet.length; index++) {
          const element = matchSet[index].value;
          selectSymbol.foundation_.adapter_.openMenu();
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
          selectSymbol.isMenuOpen_ ? new Resizer('.symbolFigure svg') : null; // Resize symbols in search results so they fit
        }
        // set the first result as the symbol value on the "Select a Symbol" dropdown
        selectSymbol.foundation_.setValue(result[0].matches[0].value);
      } else {
        const newli = document.createElement('li');
        newli.setAttribute('class', 'mdc-list-item');
        newli.textContent = 'No Results Found';
        mdcList.append(newli);
        newli.addEventListener('click', clearTextField); // When "No Results Found" is clicked, clearTextField and re-add symbols
        selectSymbol.foundation_.adapter_.openMenu();
        // If there is no result, then clear the selected symbol in the dropdown
        document.querySelector('.mainSymbolSelectedText').textContent = '';
      }
    });
  } else {
    // If there is no text in the search field remove all search results
    selectSymbol.menu_.items ? selectSymbol.menu_.items.forEach(key => key.remove()) : null;
    // Hide the trashcan icon
    deleteTextFieldButton.root_.style.display = 'none';
    // Rerun the function to add the symbols to the list
    addSymbolsToDropdownList();
    // Set the selected item to the one in the symbol panel
    selectSymbol.value = document.querySelector('.newSVG > svg').dataset.symbolName;
    // Do not animate the symbol panel if there is no text in the textField
    if (document.querySelector('.newSVG > svg').classList.contains('animateSymbol')) {
      document.querySelector('.newSVG > svg').classList.remove('animateSymbol');
    }
    //! All these Resizer classes can probably be put into a mutation observer.
    selectSymbol.isMenuOpen_ ? new Resizer('.symbolFigure svg') : null; // Resize symbols in search results so they fit
  }
}, 100);

deleteTextFieldButton.root_.addEventListener('click', clearTextField);
textField.input_.addEventListener('input', searchResults);

// ! GLOBAL VARS - remove on production
window.textField = textField;
window.selectSymbol = selectSymbol;
window.selectUnitSize = selectUnitSize;
window.Resizer = Resizer;
window.deleteTextFieldButton = deleteTextFieldButton;
window.selectMod1 = selectMod1;


// Load the default symbol into the panel when the page loads
window.onload = () => {
  addSymbolsToDropdownList();
  selectSymbol.foundation_.setSelectedIndex(0);
  addMod1ToDropdownList();
  selectMod1.foundation_.setSelectedIndex(0);
  deleteTextFieldButton.root_.style.display = 'none';
};

export { selectAffiliation };
