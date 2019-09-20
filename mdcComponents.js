/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import { MDCSelect } from '@material/select';
import { MDCTextField, MDCTextFieldIcon } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { MDCSwitch } from '@material/switch';
import Fuse from 'fuse.js';
import mod1Object from './mod1Object';
import mod2Object from './mod2Object';
import {
  addSymbolsAndModsToList, Resizer, TransformModifiersOnEquipment, MilSym,
} from './app';
import militarySymbolsObject from './militarySymbolsObject';

const searchField = new MDCTextField(document.querySelector('.searchSymbols'));
const searchFieldIcon = new MDCRipple(document.querySelector('.mdc-button.searchFieldDeleteIcon'));
const deleteTextFieldButton = new MDCTextFieldIcon(searchFieldIcon.root_);

const selectSymbol = new MDCSelect(document.querySelector('.symbol-select'));
const selectAffiliation = new MDCSelect(document.querySelector('.affiliation-select'));
const selectUnitSize = new MDCSelect(document.querySelector('.unit-size-select'));
const selectMod1 = new MDCSelect(document.querySelector('.mod1-select'));
const selectMod2 = new MDCSelect(document.querySelector('.mod2-select'));

const uniqueDesignationField = new MDCTextField(document.querySelector('.uniqueDesignation'));
const uniqueDesignationIcon = new MDCRipple(document.querySelector('.mdc-button.uniqueDesignationDeleteIcon'));
const deleteUniqueDesignationButton = new MDCTextFieldIcon(uniqueDesignationIcon.root_);

const higherFormationField = new MDCTextField(document.querySelector('.higherFormation'));
const higherFormationIcon = new MDCRipple(document.querySelector('.mdc-button.higherFormationDeleteIcon'));
const deleteHigherFormationButton = new MDCTextFieldIcon(higherFormationIcon.root_);

const reinforcedSwitch = new MDCSwitch(document.querySelector('.mdc-switch.reinforcedSwitch'));
const reducedSwitch = new MDCSwitch(document.querySelector('.mdc-switch.reducedSwitch'));

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
    const MainMS = new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, `${selectMod1.value || 'None'}`, `${selectMod2.value || 'None'}`, uniqueDesignationField.value, higherFormationField.value);
    MainMS.placeSymbol();
    window.MainMS = MainMS; //! Remove on production

    if (event.target.classList.contains('symbol-select')) {
      // Only animate the symbol when a new symbol is clicked. This prevents the animation occurring on every single keyup in search field
      !searchField.input_.value ? document.querySelector('.newSVG > svg').setAttributeNS(null, 'class', 'animateSymbol') : null;
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

  key.listen('click', () => {
    // If any of these menus are open, then resize all the symbols
    selectSymbol.isMenuOpen_ ? new Resizer('.symbolFigure svg') : null;
    selectUnitSize.isMenuOpen_ ? new Resizer('.unitSizeFigure svg', 93, 33) : null;
    selectMod1.isMenuOpen_ ? new Resizer('.mod1Figure svg') : null;
    selectMod2.isMenuOpen_ ? new Resizer('.mod2Figure svg') : null;
  });
});

//! This is really gross. There has to be a better way to write this.
function reducedReinforced() {
  const c1 = reinforcedSwitch.checked;
  const c2 = reducedSwitch.checked;
  const c3 = c1 && c2;

  if (c1 === true && c2 === false && c3 === false) {
    stupid(reinforcedSwitch.root_.dataset.value = '+');
  }

  if (c1 === false && c2 === true && c3 === false) {
    stupid(reducedSwitch.root_.dataset.value = '–');
  }

  if (c1 === true && c2 === true && c3 === true) {
    stupid(reducedSwitch.root_.dataset.value = '±');
  }

  if (c1 === false && c2 === false && c3 === false) {
    stupid(reducedSwitch.root_.dataset.value = '');
    stupid(reinforcedSwitch.root_.dataset.value = '');
  }

  function stupid(val) {
    new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, selectMod1.value, selectMod2.value, uniqueDesignationField.value, higherFormationField.value, val).placeSymbol();
  }
}

[reducedSwitch, reinforcedSwitch].forEach((key) => {
  key.listen('change', reducedReinforced);
});


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

function clearSearchField() {
  // Clear the text field
  searchField.value = '';
  // Hide the trash button
  deleteTextFieldButton.root_.style.display = 'none';
  // Remove all items in the selectSymbol menu
  selectSymbol.menu_.items ? selectSymbol.menu_.items.forEach(key => key.remove()) : null;
  // Re-add them
  addSymbolsAndModsToList(militarySymbolsObject, 'symbol');
  // Set the selectSymbol value to the last matched item
  selectSymbol.value = document.querySelector('.newSVG > svg').dataset.symbolName;
  // Do not animate the symbol panel
  if (document.querySelector('.newSVG > svg').classList.contains('animateSymbol')) {
    document.querySelector('.newSVG > svg').classList.remove('animateSymbol');
  }
}

//! 20SEPT2019 -- Calling it here
// TODO: FIX THE REINFORCED/REDUCED logic so its not so stupid!!!!!!
// TODO: When typing slow in the symbol search field it will display "No Results Found". Find a way to only enable the search dropdown if the char length is at least 3
// TODO: Reduced/Reinforced switches panel should be 6 columns wide and the "Convert to Activity" and "Convert to Installation" should take up the remaining 6 cols
// TODO: Global vars need cleaning up. Use imports
// TODO: Helper text on the Mod1/2 dropdowns are needed. Most soldier's don't know this stuff
// TODO: Create a folder for object JS files and rename them. Things are going to get more complicated as we add in Tactical Mission Tasks, Graphic Control Measures and Task Force Amps
const searchResults = debounce(() => {
  if (searchField.input_.value !== '') {
    const fuse = new Fuse(searchOptions.keys, searchOptions);
    const result = fuse.search(searchField.value);
    // Show the trash icon when there is any text in the search field
    deleteTextFieldButton.root_.style.display = 'initial';
    deleteTextFieldButton.root_.style.right = '0';
    deleteTextFieldButton.root_.style.position = 'fixed';
    deleteTextFieldButton.root_.style.top = '10px';
    // Setting z-index on trash icon makes it clickable
    deleteTextFieldButton.root_.style.zIndex = '10';
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
        // When "No Results Found" is clicked, clearSearchField and re-add symbols
        newli.addEventListener('click', clearSearchField);
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
}, 200);

// This removes the unique/higher formation text from the symbol and text field
const clearDesignationFields = (event) => {
  switch (event.target.parentElement.dataset.value) {
    case 'uniqueDesignationField':
      uniqueDesignationField.value = '';
      deleteUniqueDesignationButton.root_.style.display = 'none';
      document.querySelector('g.uniqueUnitDesignation').textContent = '';
      break;
    case 'higherFormationField':
      higherFormationField.value = '';
      deleteHigherFormationButton.root_.style.display = 'none';
      document.querySelector('g.higherUnitFormation').textContent = '';
      break;
    default:
      break;
  }
};

// This adds the unique/higher formation text on the symbol
const inputDesignationFields = debounce(() => {
  if (uniqueDesignationField.input_.value !== '') {
    // Show the trash icon when there is any text in the search field
    deleteUniqueDesignationButton.root_.style.display = 'initial';
    deleteUniqueDesignationButton.root_.style.right = '0';
    deleteUniqueDesignationButton.root_.style.position = 'fixed';
    deleteUniqueDesignationButton.root_.style.top = '10px';
    // Setting z-index on trash icon makes it clickable
    deleteUniqueDesignationButton.root_.style.zIndex = '10';
    new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, selectMod1.value, selectMod2.value, uniqueDesignationField.value, higherFormationField.value).placeSymbol();
    new Resizer('.symbolFigure svg');
    // Prevents the equipment decorator from overlapping the Mod1/2 symbols when typing in Unit Information
    selectMod1.value !== 'None' ? new TransformModifiersOnEquipment('.newSVG > svg') : null;
    selectMod2.value !== 'None' ? new TransformModifiersOnEquipment('.newSVG > svg') : null;
  } else {
    document.querySelector('g.uniqueUnitDesignation').textContent = '';
    deleteUniqueDesignationButton.root_.style.display = 'none';
  }
  if (higherFormationField.input_.value !== '') {
    // Show the trash icon when there is any text in the search field
    deleteHigherFormationButton.root_.style.display = 'initial';
    deleteHigherFormationButton.root_.style.right = '0';
    deleteHigherFormationButton.root_.style.position = 'fixed';
    deleteHigherFormationButton.root_.style.top = '10px';
    // Setting z-index on trash icon makes it clickable
    deleteHigherFormationButton.root_.style.zIndex = '10';
    new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, selectMod1.value, selectMod2.value, uniqueDesignationField.value, higherFormationField.value).placeSymbol();
    new Resizer('.symbolFigure svg');
    // Prevents the equipment decorator from overlapping the Mod1/2 symbols when typing in Unit Information
    selectMod1.value !== 'None' ? new TransformModifiersOnEquipment('.newSVG > svg') : null;
    selectMod2.value !== 'None' ? new TransformModifiersOnEquipment('.newSVG > svg') : null;
  } else {
    document.querySelector('g.higherUnitFormation').textContent = '';
    deleteHigherFormationButton.root_.style.display = 'none';
  }
}, 200);

deleteTextFieldButton.root_.addEventListener('click', clearSearchField);
searchField.input_.addEventListener('input', searchResults);

[uniqueDesignationField, higherFormationField].forEach((key) => {
  key.input_.addEventListener('input', inputDesignationFields);
});


[deleteHigherFormationButton, deleteUniqueDesignationButton].forEach((key) => {
  key.root_.addEventListener('click', clearDesignationFields);
});


// ! GLOBAL VARS - remove on production
window.searchField = searchField;
window.selectSymbol = selectSymbol;
window.selectUnitSize = selectUnitSize;
// window.Resizer = Resizer;
window.deleteTextFieldButton = deleteTextFieldButton;
window.selectMod1 = selectMod1;
window.selectMod2 = selectMod2;
// window.TransformModifiersOnEquipment = TransformModifiersOnEquipment;
window.uniqueDesignationField = uniqueDesignationField;
window.reinforcedSwitch = reinforcedSwitch;

// Load the Symbols and Modifiers into the dropdowns on page load
window.onload = () => {
  addSymbolsAndModsToList(militarySymbolsObject, 'symbol');
  addSymbolsAndModsToList(mod1Object, 'mod1', selectMod1);
  addSymbolsAndModsToList(mod2Object, 'mod2', selectMod2);
  deleteTextFieldButton.root_.style.display = 'none';
  deleteUniqueDesignationButton.root_.style.display = 'none';
  deleteHigherFormationButton.root_.style.display = 'none';
  console.log('%c MGRS-Mapper by CPT James Pistell... Scouts Out! ', 'background: #222; color: #bada55; font-size: 22px;');
};

export { selectAffiliation };
