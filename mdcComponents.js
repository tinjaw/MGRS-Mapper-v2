/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import { MDCSelect } from '@material/select';
import { MDCTextField, MDCTextFieldIcon } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import Fuse from 'fuse.js';
import mod1Object from './mod1Object';
import mod2Object from './mod2Object';
// import {
//   addSymbolsToDropdownList, addMod1ToDropdownList, addMod2ToDropdownList, MilSym,
// } from './app';

import { addSymbolsAndModsToList, MilSym } from './app';

import militarySymbolsObject from './militarySymbolsObject';

const textField = new MDCTextField(document.querySelector('.searchSymbols'));
const icon = new MDCRipple(document.querySelector('.mdc-button.searchFieldDeleteIcon'));
const deleteTextFieldButton = new MDCTextFieldIcon(icon.root_);

const selectSymbol = new MDCSelect(document.querySelector('.symbol-select'));
const selectAffiliation = new MDCSelect(document.querySelector('.affiliation-select'));
const selectUnitSize = new MDCSelect(document.querySelector('.unit-size-select'));
const selectMod1 = new MDCSelect(document.querySelector('.mod1-select'));
const selectMod2 = new MDCSelect(document.querySelector('.mod2-select'));

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

// ex- "new TransformModifiersOnEquipment('.newSVG > svg')"
// This should only be called on equipment symbols. This will scale down the decorator, and move Mod1 up and Mod2 down so they all fit in the circle
class TransformModifiersOnEquipment {
  constructor(equipmentOutline) {
    this.equipmentOutline = document.querySelector(equipmentOutline); // The equipment SVG you want to readjust
    this.equipmentDecorator = this.equipmentOutline.querySelector('g.decorator');
    this.mod1 = this.equipmentOutline.querySelector('g.mod1');
    this.mod2 = this.equipmentOutline.querySelector('g.mod2');
    this.equipmentDecorator.style.transformOrigin = '100px 100px'; // transform from center of circle (cx, cy)
    this.equipmentDecorator.style.transform = 'translateY(2%) scale(0.75)';
    // mod1.style.transform = `translateY(-${equipmentOutline.viewBox.baseVal.x / equipmentOutline.viewBox.baseVal.y * 21}px)`;
    this.mod1.style.transformOrigin = '100px 100px';
    this.mod1.style.transform = 'translateY(-11%) scale(0.85)';
    this.mod2.style.transformOrigin = '100px 140px';
    this.mod2.style.transform = 'scale(0.75)';
  }
}

[selectSymbol, selectAffiliation, selectUnitSize, selectMod1, selectMod2].forEach((key) => {
  key.listen('MDCSelect:change', (event) => {
    // This replaces camel case for things like "friendlyTemplated" into "Friendly / Templated"
    if (event.target.classList.contains('unit-size-select') || event.target.classList.contains('affiliation-select')) {
      key.selectedText_.textContent = key.value.replace(/([A-Z])/g, ' / $1').replace(/^./, str => str.toUpperCase());
    } else {
      // Set all other select boxes text content otherwise it throws weird errors
      key.selectedText_.textContent = key.value;
    }

    // Find all the selected values and place the symbol in the symbol panel
    new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, `${selectMod1.value || 'None'}`, `${selectMod2.value || 'None'}`).placeSymbol();

    if (event.target.classList.contains('symbol-select')) {
      // Only animate the symbol when a new symbol is clicked. This prevents the animation occurring on every single keyup in search field
      !textField.input_.value ? document.querySelector('.newSVG > svg').setAttributeNS(null, 'class', 'animateSymbol') : null;
    }

    if (event.target.classList.contains('affiliation-select')) {
      // When an affiliation is selected, change the outlines of all symbols in the dropdown
      selectSymbol.menu_.items.map((key) => {
        new MilSym(`.symbolFigure[data-symbol-name="${key.dataset.value}"]`, `${key.dataset.value}`, `${selectAffiliation.value}`, 'none').placeSymbol();
      });
    }

    if (JSON.parse(document.querySelector('.newSVG > svg').dataset.symbolInfo).type === 'Equipment') {
      // If Mod1/2 value is anything other than none, run the Class that adjusts the equipment decorator and modifier
      selectMod1.value !== 'None' ? new TransformModifiersOnEquipment('.newSVG > svg') : null;
      selectMod2.value !== 'None' ? new TransformModifiersOnEquipment('.newSVG > svg') : null;
      selectUnitSize.disabled = true;
    } else {
      selectUnitSize.disabled = false;
    }
  });
});


const selectMenus = document.querySelectorAll('.mdc-select');
selectMenus.forEach((key) => {
  key.addEventListener('click', () => {
    // If any of these menus are open, then resize all the symbols
    selectSymbol.isMenuOpen_ ? new Resizer('.symbolFigure svg') : null;
    selectUnitSize.isMenuOpen_ ? new Resizer('.unitSizeFigure svg', 93, 33) : null;
    selectMod1.isMenuOpen_ ? new Resizer('.mod1Figure svg') : null;
    selectMod2.isMenuOpen_ ? new Resizer('.mod2Figure svg') : null;
  });
});


function clearTextField() {
  // Clear the text field
  textField.value = '';
  // Hide the trash button
  deleteTextFieldButton.root_.style.display = 'none';
  // Remove all items in the selectSymbol menu
  selectSymbol.menu_.items ? selectSymbol.menu_.items.forEach(key => key.remove()) : null;
  // Re-add them
  // addSymbolsToDropdownList();
  addSymbolsAndModsToList(militarySymbolsObject, 'symbol');
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

//! 15SEPT2019 -- Calling it here
// TODO: addMod1ToDropdownList() and addMod2ToDropdownList() are almost identical, combine them into a class or function. Furthermore you could probably also combine addSymbolsToDropdownList() in that mix as well
// TODO: get mod1Data() and get mod2Data() in  MilSym are almost identical, there should be a way to combine them
// TODO: Check all Mod1 and Mod2 symbols that they fit inside for both Land Unit and Equipment symbols in every affiliation. For instance - Mod2 Rails on hostile outlines do not work. Needs a fix
// TODO: If you change the MilSym class to accept an object, then you can instantiate it like this: "new MilSym({location: '.test', symbol: 'Infantry', affiliation: 'friendly', echelon: 'team', mod1: 'Foraging'}).placeSymbol();". The only value I can see from this is making it easier to call this class since you can indent object keys on new lines.
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
          // Add the symbol key to the data-attr so they can match up with the list item
          figureElement.setAttribute('data-symbol-name', `${element}`);
          newli.prepend(figureElement);
          new MilSym(`.symbolFigure[data-symbol-name="${element}"]`, `${element}`, `${selectAffiliation.value}`, 'none').placeSymbol();
          // Resize symbols in search results so they fit
          selectSymbol.isMenuOpen_ ? new Resizer('.symbolFigure svg') : null;
        }
        // set the first result as the symbol value on the "Select a Symbol" dropdown
        selectSymbol.foundation_.setValue(result[0].matches[0].value);
      } else {
        const newli = document.createElement('li');
        newli.setAttribute('class', 'mdc-list-item');
        newli.style.justifyContent = 'center';
        newli.textContent = 'No Results Found';
        mdcList.append(newli);
        // When "No Results Found" is clicked, clearTextField and re-add symbols
        newli.addEventListener('click', clearTextField);
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
    addSymbolsAndModsToList(militarySymbolsObject, 'symbol');
    // Set the selected item to the one in the symbol panel
    selectSymbol.value = document.querySelector('.newSVG > svg').dataset.symbolName;
    // Do not animate the symbol panel if there is no text in the textField
    if (document.querySelector('.newSVG > svg').classList.contains('animateSymbol')) {
      document.querySelector('.newSVG > svg').classList.remove('animateSymbol');
    }
    // Resize symbols in search results so they fit
    selectSymbol.isMenuOpen_ ? new Resizer('.symbolFigure svg') : null;
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
window.selectMod2 = selectMod2;
window.TransformModifiersOnEquipment = TransformModifiersOnEquipment;


// Load the Symbols and Modifiers into the dropdowns on page load
window.onload = () => {
  addSymbolsAndModsToList(militarySymbolsObject, 'symbol');
  addSymbolsAndModsToList(mod1Object, 'mod1', selectMod1);
  addSymbolsAndModsToList(mod2Object, 'mod2', selectMod2);
  deleteTextFieldButton.root_.style.display = 'none';
};

export { selectAffiliation };
