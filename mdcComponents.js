/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
// TODO: When typing slow in the symbol search field it will display "No Results Found". Find a way to only enable the search dropdown if the char length is at least 3
// TODO: Global vars need cleaning up. Use imports
// TODO: Helper info-window on the Mod1/2 dropdowns are needed. Most soldier's don't know this stuff
// TODO: Create a folder for object JS files and rename them. Things are going to get more complicated as we add in Tactical Mission Tasks, Graphic Control Measures and Task Force Amps
// TODO: Select a hostile symbol and add any unit size. Notice how the symbol gets clipped. Need to fix that css issue
// TODO: Mod1 helper text has word wrap. Fix it to 1 line
// TODO: Notice in the HTML that there are several "undefined" divs in the object. This is due to some switches not being turned on. Need a better way to append data to the symbols
// TODO: Final objects to add: Tactical Mission Tasks & Graphic Control Measures.
// TODO: taskForceObject is 7.59kb, this can be reduced due to the unit sizes from None to Division (and Command) all having the same data
// TODO: Incorporate the refactored MilSym into the codebase... I'm too burned out to do it tonight.
import { MDCSelect } from '@material/select';
import { MDCTextField, MDCTextFieldIcon } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { MDCSwitch } from '@material/switch';
import Fuse from 'fuse.js';
import mod1Object from './mod1Object';
import mod2Object from './mod2Object';
import commandPostObject from './commandPostObject';
import {
  addSymbolsAndModsToList, Resizer, TransformModifiersOnEquipment, bounceInAnimation, MilSym,
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
const reinforcedReducedValue = () => new RRSwitches().value;

const flyingSwitch = new MDCSwitch(document.querySelector('.mdc-switch.flightSwitch'));

const activitySwitch = new MDCSwitch(document.querySelector('.mdc-switch.activitySwitch'));

const installationSwitch = new MDCSwitch(document.querySelector('.mdc-switch.installationSwitch'));

const taskForceSwitch = new MDCSwitch(document.querySelector('.mdc-switch.taskForceSwitch'));

const selectCommandPost = new MDCSelect(document.querySelector('.commandpost-select'));


// *********************************************************************************** //
// * Search Field                                                                    * //
// *********************************************************************************** //
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

deleteTextFieldButton.root_.addEventListener('click', clearSearchField);
searchField.input_.addEventListener('input', searchResults);


// *********************************************************************************** //
// * Select Symbol, Select Affiliation, Select Unit Size, Select Mod 1, Select Mod 2 * //
// *********************************************************************************** //
// ex- new DisableInputs(selectUnitSize, uniqueDesignationField, higherFormationField, reinforcedSwitch, reducedSwitch, flyingSwitch, activitySwitch, installationSwitch, taskForceSwitch)
class DisableInputs {
  constructor(size, unique, higher, reinforced, reduced, flying, activity, installation, taskforce) {
    this.size = size;
    this.unique = unique;
    this.higher = higher;
    this.reinforced = reinforced;
    this.reduced = reduced;
    this.flying = flying;
    this.activity = activity;
    this.installation = installation;
    this.taskforce = taskforce;
    return this.disableInputs();
  }

  disableInputs() {
    if (this.size) {
      selectUnitSize.disabled = true;
      selectUnitSize.foundation_.adapter_.setSelectedIndex(0);
      MainMS.data.echelon = 'none';
      MainMS.echelon.d = '';
    } else {
      selectUnitSize.disabled = false;
    }

    if (this.unique) {
      MainMS.uniqueDesignation = '';
      uniqueDesignationField.disabled = true;
      uniqueDesignationField.value = '';
      deleteUniqueDesignationButton.root_.style.display = 'none';
    } else {
      uniqueDesignationField.disabled = false;
    }

    if (this.higher) {
      MainMS.higherFormation = '';
      higherFormationField.disabled = true;
      higherFormationField.value = '';
      deleteHigherFormationButton.root_.style.display = 'none';
    } else {
      higherFormationField.disabled = false;
    }

    if (this.reinforced) {
      reinforcedSwitch.disabled = true;
      reinforcedSwitch.checked = false;
      MainMS.reinforcedReduced = '';
    } else {
      reinforcedSwitch.disabled = false;
    }

    if (this.reduced) {
      reducedSwitch.disabled = true;
      reducedSwitch.checked = false;
      MainMS.reinforcedReduced = '';
    } else {
      reducedSwitch.disabled = false;
    }

    if (this.flying) {
      flyingSwitch.disabled = true;
      flyingSwitch.checked = false;
      MainMS.isFlying = false;
    } else {
      flyingSwitch.disabled = false;
    }

    if (this.activity) {
      activitySwitch.disabled = true;
      activitySwitch.checked = false;
      MainMS.isActivity = false;
    } else {
      activitySwitch.disabled = false;
    }

    if (this.installation) {
      installationSwitch.disabled = true;
      installationSwitch.checked = false;
      MainMS.isInstallation = false;
    } else {
      installationSwitch.disabled = false;
    }

    if (this.taskforce) {
      taskForceSwitch.disabled = true;
      taskForceSwitch.checked = false;
      MainMS.isTaskForce = false;
    } else {
      taskForceSwitch.disabled = false;
    }

    if (window.hasOwnProperty('MainMS')) {
      MainMS.placeSymbol();
    } else {
      setTimeout(() => {
        MainMS.placeSymbol();
      }, 100);
    }
  }
}


[selectSymbol, selectAffiliation, selectUnitSize, selectMod1, selectMod2, selectCommandPost].forEach((key) => {
  key.listen('MDCSelect:change', (event) => {
    // Set all other select boxes text content otherwise it fills them with nonsense
    key.selectedText_.textContent = key.value;
    // This replaces camel case for things like "friendlyTemplated" into "Friendly / Templated"
    selectUnitSize.selectedText_.textContent = selectUnitSize.value.replace(/([A-Z])/g, ' / $1').replace(/^./, str => str.toUpperCase());
    selectAffiliation.selectedText_.textContent = selectAffiliation.value.replace(/([A-Z])/g, ' / $1').replace(/^./, str => str.toUpperCase());

    // Find all the selected values and place the symbol in the symbol panel
    const MainMS = new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, `${selectMod1.value || 'None'}`, `${selectMod2.value || 'None'}`, uniqueDesignationField.value, higherFormationField.value, `${reinforcedReducedValue() || ''}`, flyingSwitch.checked, enableActivity(), enableInstallation(), enableTaskForce(), `${selectCommandPost.value || 'None'}`);
    window.MainMS = MainMS; //! Put this class instance in the global scope so it can be referenced and edited
    MainMS.placeSymbol();

    if (event.target.classList.contains('symbol-select')) {
      // Only animate the symbol when a new symbol is clicked. This prevents the animation occurring on every single keyup in search field
      !searchField.input_.value ? document.querySelector('.newSVG > svg').setAttributeNS(null, 'class', 'animateSymbol') : null;
    }

    if (event.target.classList.contains('affiliation-select')) {
      // When an affiliation is selected, change the outlines of all symbols in the dropdown
      selectSymbol.menu_.items.map((key) => {
        new MilSym(`.symbolFigure[data-symbol-name="${key.dataset.value}"]`, `${key.dataset.value}`, `${selectAffiliation.value}`, 'none').placeSymbol();
      });


      const myPromise = new Promise((resolve, reject) => {
        console.log('resolving the promise');
        resolve(selectCommandPost.menu_.items.forEach(e => e.remove()));
        reject(new Error('In 10% of the cases, I fail. Miserably.'));
      });

      myPromise.then((resolvedValue) => {
        console.log(resolvedValue);
        addSymbolsAndModsToList(commandPostObject, 'commandpost', selectCommandPost);
        // Remove the outline of the default/none symbol
        document.querySelectorAll('.commandpostFigure svg g.outline')[0].remove();
      }, (error) => {
        console.log(error);
      });
    }

    if (event.target.classList.contains('unit-size-select')) {
      bounceInAnimation('g.echelon');
    }

    if (event.target.classList.contains('mod1-select')) {
      bounceInAnimation('g.mod1');
    }

    if (event.target.classList.contains('mod2-select')) {
      bounceInAnimation('g.mod2');
    }

    // Since Equipment symbols are different than Land Unit symbols, we need to disable some options
    if (MainMS.type === 'Equipment') {
      // If the icon is a piece of equipment, then disable the activity switch
      if (!window.hasOwnProperty('MainMS')) {
        new DisableInputs(true, true, true, true, true, true, true, true, true);
      } else {
        setTimeout(() => {
          new DisableInputs(true, true, true, true, true, true, true, true, true);
        }, 30);
      }

      // If Mod1/2 value is anything other than none, run the Class that adjusts the equipment decorator and modifier
      selectMod1.value !== 'None' ? new TransformModifiersOnEquipment('.newSVG > svg') : null;
      selectMod2.value !== 'None' ? new TransformModifiersOnEquipment('.newSVG > svg') : null;
    }

    // If the selected symbol cannot fly, then disable the switch
    if (MainMS.flightCapable) {
      flyingSwitch.disabled = false;
    } else {
      new DisableInputs(false, false, false, false, false, true, false, false, false);
    }

    // If a user changes unit affiliation, and the flying switch is checked, run this func to immediately change the outline
    flyingSwitch.checked ? enableFlyingOutline() : null;
  });

  key.listen('click', () => {
    // If any of these menus are open, then resize all the symbols
    selectSymbol.isMenuOpen_ ? new Resizer('.symbolFigure svg') : null;
    selectUnitSize.isMenuOpen_ ? new Resizer('.unitSizeFigure svg', 93, 33) : null;
    selectMod1.isMenuOpen_ ? new Resizer('.mod1Figure svg') : null;
    selectMod2.isMenuOpen_ ? new Resizer('.mod2Figure svg') : null;
    selectCommandPost.isMenuOpen_ ? new Resizer('.commandpostFigure svg', 100, 100) : null;
  });
});


// *********************************************************************************** //
// * Unique Unit Designation Field and Higher Unit Formation Field                   * //
// *********************************************************************************** //
// This removes the unique/higher formation text from the symbol and text field
const clearDesignationFields = (event) => {
  switch (event.target.parentElement.dataset.value) {
    case 'uniqueDesignationField':
      uniqueDesignationField.value = '';
      deleteUniqueDesignationButton.root_.style.display = 'none';
      document.querySelector('g.uniqueUnitDesignation').textContent = '';
      MainMS.uniqueDesignation = '';
      break;
    case 'higherFormationField':
      higherFormationField.value = '';
      deleteHigherFormationButton.root_.style.display = 'none';
      document.querySelector('g.higherUnitFormation').textContent = '';
      MainMS.higherFormation = '';
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
    // * Directly edit the MainMS class instance instead of creating a whole new class * //
    MainMS.uniqueDesignation = uniqueDesignationField.value;
    MainMS.higherFormation = higherFormationField.value;
    MainMS.placeSymbol();
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
    MainMS.uniqueDesignation = uniqueDesignationField.value;
    MainMS.higherFormation = higherFormationField.value;
    MainMS.placeSymbol();
    new Resizer('.symbolFigure svg');
    // Prevents the equipment decorator from overlapping the Mod1/2 symbols when typing in Unit Information
    selectMod1.value !== 'None' ? new TransformModifiersOnEquipment('.newSVG > svg') : null;
    selectMod2.value !== 'None' ? new TransformModifiersOnEquipment('.newSVG > svg') : null;
  } else {
    document.querySelector('g.higherUnitFormation').textContent = '';
    deleteHigherFormationButton.root_.style.display = 'none';
  }
}, 200);


[uniqueDesignationField, higherFormationField].forEach((key) => {
  key.input_.addEventListener('input', inputDesignationFields);
});


[deleteHigherFormationButton, deleteUniqueDesignationButton].forEach((key) => {
  key.root_.addEventListener('click', clearDesignationFields);
});


// *********************************************************************************** //
// * Reinforced and Reduced Switches                                                 * //
// *********************************************************************************** //
class RRSwitches {
  constructor() {
    this.reinforced = reinforcedSwitch.checked;
    this.reduced = reducedSwitch.checked;
    this.reinforcedAndReduced = this.reinforced && this.reduced;
    this.value = '';
    return this.checkSwitches();
  }

  checkSwitches() {
    switch (true) {
      case this.reinforcedAndReduced:
        reducedSwitch.root_.dataset.value = '±';
        reinforcedSwitch.root_.dataset.value = '';
        MainMS.reinforcedReduced = '±';
        MainMS.placeSymbol();
        this.value = '±';
        bounceInAnimation('g.reinforcedReduced');
        break;
      case this.reinforced:
        reinforcedSwitch.root_.dataset.value = '+';
        reducedSwitch.root_.dataset.value = '';
        MainMS.reinforcedReduced = '+';
        MainMS.placeSymbol();
        this.value = '+';
        bounceInAnimation('g.reinforcedReduced');
        break;
      case this.reduced:
        reducedSwitch.root_.dataset.value = '–';
        reinforcedSwitch.root_.dataset.value = '';
        MainMS.reinforcedReduced = '–';
        MainMS.placeSymbol();
        this.value = '–';
        bounceInAnimation('g.reinforcedReduced');
        break;
      default:
        reducedSwitch.root_.dataset.value = '';
        reinforcedSwitch.root_.dataset.value = '';
        // Check if the MainMS variable is in the global window. If not wait 30 ms
        if (window.hasOwnProperty('MainMS')) {
          MainMS.reinforcedReduced = '';
          MainMS.placeSymbol();
        } else {
          setTimeout(() => {
            MainMS.reinforcedReduced = '';
            MainMS.placeSymbol();
          }, 30);
        }
        this.value = '';
        break;
    }
  }
}

[reducedSwitch, reinforcedSwitch].forEach((key) => {
  key.listen('change', reinforcedReducedValue);
});


// *********************************************************************************** //
// * Flying Switch                                                                   * //
// *********************************************************************************** //
function enableFlyingOutline() {
  //! Bug: bounceInAnimation() does not work when a unit is in flight
  if (flyingSwitch.checked) {
    MainMS.isFlyingData = true;
    new DisableInputs(selectUnitSize, uniqueDesignationField, higherFormationField, reinforcedSwitch, reducedSwitch, false, activitySwitch, installationSwitch, taskForceSwitch);
    MainMS.placeSymbol();
  } else if (window.hasOwnProperty('MainMS')) {
    MainMS.isFlyingData = false;
    new DisableInputs(false, false, false, false, false, false, false, false, false);
    MainMS.placeSymbol();
  } else {
    setTimeout(() => {
      MainMS.isFlyingData = false;
      new DisableInputs(false, false, false, false, false, false, false, false, false);
      MainMS.placeSymbol();
    }, 30);
  }
}

flyingSwitch.listen('change', enableFlyingOutline);

// *********************************************************************************** //
// * Activity Switch                                                                 * //
// *********************************************************************************** //
function enableActivity() {
  if (activitySwitch.checked) {
    MainMS.isActivity = true;
    MainMS.placeSymbol();
    return true;
  } if (window.hasOwnProperty('MainMS')) {
    MainMS.isActivity = false;
    MainMS.placeSymbol();
    return false;
  }
  setTimeout(() => {
    MainMS.isActivity = false;
    MainMS.placeSymbol();
    return false;
  }, 30);
}

activitySwitch.listen('change', enableActivity);


// *********************************************************************************** //
// * Installation Switch                                                             * //
// *********************************************************************************** //
function enableInstallation() {
  if (installationSwitch.checked) {
    MainMS.isInstallation = true;
    MainMS.placeSymbol();
    return true;
  } if (window.hasOwnProperty('MainMS')) {
    MainMS.isInstallation = false;
    MainMS.placeSymbol();
    return false;
  }
  setTimeout(() => {
    MainMS.isInstallation = false;
    MainMS.placeSymbol();
    return false;
  }, 30);
}

installationSwitch.listen('change', enableInstallation);

// *********************************************************************************** //
// * Task Force Switch                                                               * //
// *********************************************************************************** //
function enableTaskForce() {
  if (taskForceSwitch.checked) {
    MainMS.isTaskForce = true;
    MainMS.placeSymbol();
    return true;
  } if (window.hasOwnProperty('MainMS')) {
    MainMS.isTaskForce = false;
    MainMS.placeSymbol();
    return false;
  }
  setTimeout(() => {
    MainMS.isTaskForce = false;
    MainMS.placeSymbol();
    return false;
  }, 30);
}

taskForceSwitch.listen('change', enableTaskForce);

// ! GLOBAL VARS - remove on production
window.searchField = searchField;
window.selectSymbol = selectSymbol;
window.selectUnitSize = selectUnitSize;
window.Resizer = Resizer;
window.deleteTextFieldButton = deleteTextFieldButton;
window.selectMod1 = selectMod1;
window.selectMod2 = selectMod2;
// window.TransformModifiersOnEquipment = TransformModifiersOnEquipment;
window.uniqueDesignationField = uniqueDesignationField;
window.higherFormationField = higherFormationField;
window.reinforcedSwitch = reinforcedSwitch;
window.reducedSwitch = reducedSwitch;
window.flyingSwitch = flyingSwitch;
window.activitySwitch = activitySwitch;
window.installationSwitch = installationSwitch;
window.taskForceSwitch = taskForceSwitch;
window.deleteUniqueDesignationButton = deleteUniqueDesignationButton;
window.deleteHigherFormationButton = deleteHigherFormationButton;

// Load the Symbols and Modifiers into the dropdowns on page load
window.onload = () => {
  addSymbolsAndModsToList(militarySymbolsObject, 'symbol');
  addSymbolsAndModsToList(mod1Object, 'mod1', selectMod1);
  addSymbolsAndModsToList(mod2Object, 'mod2', selectMod2);
  addSymbolsAndModsToList(commandPostObject, 'commandpost', selectCommandPost);
  deleteTextFieldButton.root_.style.display = 'none';
  deleteUniqueDesignationButton.root_.style.display = 'none';
  deleteHigherFormationButton.root_.style.display = 'none';
  flyingSwitch.disabled = true;
  console.log('%c MGRS-Mapper by CPT James Pistell... Scouts Out! ', 'background: #222; color: #bada55; font-size: 22px;');
  // const MainMS = new MilSym('.newSVG', selectSymbol.value);
  // window.MainMS = MainMS; //! Put this class instance in the global scope so it can be referenced and edited
  // MainMS.placeSymbol();

  // selectSymbol.listen('MDCSelect:change', () => {
  //   MainMS.symbol = militarySymbolsObject[selectSymbol.value].affiliation[selectAffiliation.value];
  //   MainMS.placeSymbol();
  // });
};

export { selectAffiliation };
