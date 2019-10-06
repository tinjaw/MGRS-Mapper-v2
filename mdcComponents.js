/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
// TODO: When typing slow in the symbol search field it will display "No Results Found". Find a way to only enable the search dropdown if the char length is at least 3
// TODO: Global vars need cleaning up. Use imports
// TODO: Helper info-window on the Mod1/2 dropdowns are needed. Most soldier's don't know this stuff
// TODO: Create a folder for object JS files and rename them. Things are going to get more complicated as we add in Tactical Mission Tasks, Graphic Control Measures and Task Force Amps
// TODO: Select a hostile symbol and add any unit size. Notice how the symbol gets clipped. Need to fix that css issue
// TODO: Mod1 helper text has word wrap. Fix it to 1 line
// TODO: Once the skeleton is complete, try adding top-app-bar and mdc-drawer and see if it works out
import { MDCSelect } from '@material/select';
import { MDCTextField, MDCTextFieldIcon } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { MDCSwitch } from '@material/switch';
import Fuse from 'fuse.js';
import mod1Object from './mod1Object';
import mod2Object from './mod2Object';
import commandPostObject from './commandPostObject';
import {
  addSymbolsAndModsToList, Resizer, TransformModifiersOnEquipment, bounceInAnimation, DisableInputs, debounce, setSelectMenuTextContent,
} from './helperFunctions';
import { MilSym } from './app';
import militarySymbolsObject from './militarySymbolsObject';
import tacticalMissionTasksObject from './tacticalMissionTasksObject';
import graphicControlMeasuresObject from './graphicControlMeasuresObject';

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

const selectTacticalMissionTasks = new MDCSelect(document.querySelector('.tacticalmissiontask-select'));

const selectGraphicControlMeasures = new MDCSelect(document.querySelector('.graphiccontrolmeasures-select'));


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
          new MilSym(`.symbolFigure[data-symbol-name="${element}"]`, `${element}`, `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
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
    new Resizer('.symbolFigure svg');
  } else {
    MainMS.uniqueDesignation = undefined;
    deleteUniqueDesignationButton.root_.style.display = 'none';
  }
  if (higherFormationField.input_.value !== '') {
    console.log('Running Higher ');
    // Show the trash icon when there is any text in the search field
    deleteHigherFormationButton.root_.style.display = 'initial';
    deleteHigherFormationButton.root_.style.right = '0';
    deleteHigherFormationButton.root_.style.position = 'fixed';
    deleteHigherFormationButton.root_.style.top = '10px';
    // Setting z-index on trash icon makes it clickable
    deleteHigherFormationButton.root_.style.zIndex = '10';
    MainMS.uniqueDesignation = uniqueDesignationField.value;
    MainMS.higherFormation = higherFormationField.value;
    new Resizer('.symbolFigure svg');
  } else {
    MainMS.higherFormation = undefined;
    deleteHigherFormationButton.root_.style.display = 'none';
  }
  // Once all the values are set, run the placeSymbol function
  MainMS.placeSymbol();
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
//! DISABLEINPUTS NEEDS TO BE UPDATED FOR THESE
function enableFlyingOutline() {
  if (flyingSwitch.checked) {
    MainMS.flying = true;
    MainMS.placeSymbol();
    DisableInputs(false, true, false, false, true, true, true, true, false, true, true, true, true, true, true);
  } else if (window.hasOwnProperty('MainMS')) {
    MainMS.flying = false;
    DisableInputs();
    MainMS.placeSymbol();
  } else {
    setTimeout(() => {
      MainMS.flying = false;
      DisableInputs();
      MainMS.placeSymbol();
    }, 30);
  }
}
window.enableFlyingOutline = enableFlyingOutline;
flyingSwitch.listen('change', enableFlyingOutline);


// *********************************************************************************** //
// * Activity Switch                                                                 * //
// *********************************************************************************** //
function enableActivity() {
  if (activitySwitch.checked) {
    MainMS.activity = true;
    MainMS.placeSymbol();
    return true;
  }
  MainMS.activity = false;
  MainMS.placeSymbol();
  return false;
}

activitySwitch.listen('change', enableActivity);


// *********************************************************************************** //
// * Installation Switch                                                             * //
// *********************************************************************************** //
function enableInstallation() {
  if (installationSwitch.checked) {
    MainMS.installation = true;
    MainMS.placeSymbol();
    return true;
  }
  MainMS.installation = false;
  MainMS.placeSymbol();
  return false;
}

installationSwitch.listen('change', enableInstallation);


// *********************************************************************************** //
// * Task Force Switch                                                               * //
// *********************************************************************************** //
function enableTaskForce() {
  if (taskForceSwitch.checked) {
    MainMS.taskForce = true;
    MainMS.placeSymbol();
    return true;
  }
  MainMS.taskForce = false;
  MainMS.placeSymbol();
  return false;
}

taskForceSwitch.listen('change', enableTaskForce);


// ! GLOBAL VARS - remove on production
window.searchField = searchField;
window.selectSymbol = selectSymbol;
window.selectAffiliation = selectAffiliation;
window.selectUnitSize = selectUnitSize;
window.Resizer = Resizer;
window.deleteTextFieldButton = deleteTextFieldButton;
window.selectMod1 = selectMod1;
window.selectMod2 = selectMod2;
window.TransformModifiersOnEquipment = TransformModifiersOnEquipment;
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
window.DisableInputs = DisableInputs;
window.selectCommandPost = selectCommandPost;
window.tacticalMissionTasksObject = tacticalMissionTasksObject;
window.selectTacticalMissionTasks = selectTacticalMissionTasks;
window.selectGraphicControlMeasures = selectGraphicControlMeasures;

// Load the Symbols and Modifiers into the dropdowns on page load


window.onload = () => {
  addSymbolsAndModsToList(militarySymbolsObject, 'symbol');
  addSymbolsAndModsToList(mod1Object, 'mod1', selectMod1);
  addSymbolsAndModsToList(mod2Object, 'mod2', selectMod2);
  addSymbolsAndModsToList(commandPostObject, 'commandpost', selectCommandPost);
  addSymbolsAndModsToList(tacticalMissionTasksObject, 'tacticalmissiontask', selectTacticalMissionTasks);
  addSymbolsAndModsToList(graphicControlMeasuresObject, 'graphiccontrolmeasures', selectGraphicControlMeasures);

  // Hide the text field trash can buttons on page load
  deleteTextFieldButton.root_.style.display = 'none';
  deleteUniqueDesignationButton.root_.style.display = 'none';
  deleteHigherFormationButton.root_.style.display = 'none';
  console.log('%c MGRS-Mapper.com by CPT James Pistell... Scouts Out! ', 'background: #222; color: #bada55; font-size: 22px;');

  const MainMS = new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, selectMod1.value, selectMod2.value, uniqueDesignationField.value, higherFormationField.value, reinforcedReducedValue(), flyingSwitch.checked, activitySwitch.checked, installationSwitch.checked, taskForceSwitch.checked, selectCommandPost.value, selectTacticalMissionTasks.value);
  window.MainMS = MainMS; //! MainMS is in the global scope so it can be reference and edited

  setSelectMenuTextContent(selectSymbol, selectMod1, selectMod2, selectCommandPost);

  // **************************************************************************************************************** //
  // * Symbol, Affiliation, Unit Size, Mod 1, Mod 2, Command Post, Tactical Mission Tasks, Graphic Control Measures * //
  // **************************************************************************************************************** //
  selectSymbol.listen('MDCSelect:change', () => {
    const changeSymbols = new Promise((resolve, reject) => {
      setSelectMenuTextContent(selectSymbol);
      MainMS.symbol = selectSymbol.value;
      MainMS.placeSymbol();
      resolve(MainMS);
      reject(new Error('changeSymbols Promise Rejected'));
    });

    changeSymbols.then(() => {
      // Remove the outline of the default/none symbol
      if (MainMS.type === 'Equipment') {
        // Disable all except, symbol, affiliation, mod1, mod2, and flying (note: flying is automatically disabled unless the symbol has a 'flightCapable: true' property)
        DisableInputs(false, true, false, false, true, true, true, true, false, true, true, true, true, true, true);
      } else {
        selectGraphicControlMeasures.selectedText_.textContent = 'None';
        DisableInputs();
      }
      // Only animate the symbol when a new symbol is clicked. This prevents the animation occurring on every single keyup in search field
      !searchField.input_.value ? document.querySelector('.newSVG > svg').setAttributeNS(null, 'class', 'animateSymbol') : null;
    }, (error) => {
      console.log(error);
    });
  });

  selectAffiliation.listen('MDCSelect:change', () => {
    // This replaces camel case for things like "friendlyTemplated" into "Friendly / Templated"
    selectAffiliation.selectedText_.textContent = selectAffiliation.value.replace(/([A-Z])/g, ' / $1').replace(/^./, str => str.toUpperCase());
    MainMS.affiliation = selectAffiliation.value;
    MainMS.placeSymbol();
    // If a user changes unit affiliation, and the flying switch is checked, run this func to immediately change the outline
    flyingSwitch.checked ? enableFlyingOutline() : null;
  });

  selectUnitSize.listen('MDCSelect:change', () => {
    selectUnitSize.selectedText_.textContent = selectUnitSize.value.replace(/([A-Z])/g, ' / $1').replace(/^./, str => str.toUpperCase());
    MainMS.echelon = selectUnitSize.value;
    MainMS.placeSymbol();
    bounceInAnimation('g.echelon');
  });

  selectMod1.listen('MDCSelect:change', () => {
    setSelectMenuTextContent(selectMod1);
    MainMS.mod1 = selectMod1.value;
    MainMS.placeSymbol();
    bounceInAnimation('g.mod1');
  });

  selectMod2.listen('MDCSelect:change', () => {
    setSelectMenuTextContent(selectMod2);
    MainMS.mod2 = selectMod2.value;
    MainMS.placeSymbol();
    bounceInAnimation('g.mod2');
  });

  selectCommandPost.listen('MDCSelect:change', () => {
    setSelectMenuTextContent(selectCommandPost);
    MainMS.commandPost = selectCommandPost.value;
    MainMS.placeSymbol();
  });

  selectTacticalMissionTasks.listen('MDCSelect:change', () => {
    setSelectMenuTextContent(selectTacticalMissionTasks);
    MainMS.tacticalMissionTasks = selectTacticalMissionTasks.value;
    MainMS.placeSymbol();
  });

  selectGraphicControlMeasures.listen('MDCSelect:change', () => {
    setSelectMenuTextContent(selectGraphicControlMeasures);
    // Instantiate the GCM class
    const GCM = () => new AddGraphicControlMeasure('.newSVG', 'Default Land Unit', 'friendly', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, selectGraphicControlMeasures.value);

    const changeGCM = new Promise((resolve, reject) => {
      resolve(GCM);
      reject(new Error('changeGCM Promise Rejected'));
    });

    changeGCM.then(() => {
      // Check if the GCM class has this prop
      if (GCM()._graphicControlMeasures !== 'None') {
        selectSymbol.selectedText_.textContent = 'None';
        // Disable everything except the symbol select and GCM select
        DisableInputs(true, true, true, true, true, true, true, true, true, true, true, true, true, true, false);
        // Place the GCM symbol in the symbol panel
        GCM().placeSymbol();
        // Animate the GCM
        document.querySelector('.newSVG > svg').setAttributeNS(null, 'class', 'animateSymbol');
      } else {
        // If the user selects 'none' on GCM, this will just place the default land unit back
        MainMS.placeSymbol();
        // This re-enables all buttons except the flying switch
        DisableInputs();
      }
    }, (error) => {
      console.log(error);
    });
  });


  [selectUnitSize, selectMod1, selectMod2, selectTacticalMissionTasks, selectGraphicControlMeasures].forEach((key) => {
    key.listen('click', () => {
      // If any of these menus are open, then resize all the symbols
      selectUnitSize.isMenuOpen_ ? new Resizer('.unitSizeFigure svg', 93, 33) : null;
      selectMod1.isMenuOpen_ ? new Resizer('.mod1Figure svg') : null;
      selectMod2.isMenuOpen_ ? new Resizer('.mod2Figure svg') : null;
      selectTacticalMissionTasks.isMenuOpen_ ? new Resizer('.tacticalmissiontaskFigure svg') : null;
      selectGraphicControlMeasures.isMenuOpen_ ? new Resizer('.graphiccontrolmeasuresFigure svg') : null;
    });
  });

  const oldAffiliationValue = [selectAffiliation.value];
  selectSymbol.listen('click', () => {
    if (oldAffiliationValue[0] !== selectAffiliation.value) {
      // If the previous affiliation and the current affiliation are NOT equal, then pop the last value, push the new value
      oldAffiliationValue.pop();
      oldAffiliationValue.push(selectAffiliation.value);
      // When an affiliation is selected, change the outlines of all symbols in the dropdown only if the selectSymbol menu is open though
      if (selectSymbol.isMenuOpen_) {
        selectSymbol.menu_.items.map((key) => {
          new MilSym(`.symbolFigure[data-symbol-name="${key.dataset.value}"]`, `${key.dataset.value}`, `${selectAffiliation.value}`);
        });
      }
    }
    // If the previous affiliation and the current affiliation are equal, then do not change the symbol outlines, just resize them only if the menu is open
    selectSymbol.isMenuOpen_ ? new Resizer('.symbolFigure svg') : null;
    // Bug fix: if the flyingSwitch is checked and the symbol dropdown menu is opened, it will prevent the switch from being disabled.
    flyingSwitch.checked ? flyingSwitch.disabled = false : null;
  });

  const oldAffiliationValueCP = [selectAffiliation.value];
  selectCommandPost.listen('click', () => {
    if (oldAffiliationValueCP[0] !== selectAffiliation.value) {
      // If the previous affiliation and the current affiliation are NOT equal, then pop the last value, push the new value
      oldAffiliationValueCP.pop();
      oldAffiliationValueCP.push(selectAffiliation.value);
      // Now create the new symbol outlines only if the selectCommandPost menu is open though
      if (selectCommandPost.isMenuOpen_) {
        selectCommandPost.menu_.items.map((key) => {
          new MilSym(`.commandpostFigure[data-commandpost-name="${key.dataset.value}"]`, 'Default Land Unit', `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${key.dataset.value}`);
        });
      }
    }
    // If the previous affiliation and the current affiliation are equal, then do not change the symbol outlines, just resize them only if the menu is open
    selectCommandPost.isMenuOpen_ ? new Resizer('.commandpostFigure svg', 100, 100) : null;
  });
};

export { selectAffiliation };
