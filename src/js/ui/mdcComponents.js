import { MDCSelect } from '@material/select';
import { MDCTextField, MDCTextFieldIcon } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { MDCSwitch } from '@material/switch';
import Fuse from 'fuse.js';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCMenuSurface } from '@material/menu-surface';
import mod1Object from '../symbolObjects/mod1';
import mod2Object from '../symbolObjects/mod2';
import commandPostObject from '../symbolObjects/commandPost';
import {
  addSymbolsAndModsToList, Resizer, TransformModifiersOnEquipment, bounceInAnimation, DisableInputs, debounce, setSelectMenuTextContent,
} from './helperFunctions';
import MilSym from '../app';
// import MainMS from '../app';
import militarySymbolsObject from '../symbolObjects/militarySymbols';


// *********************************************************************************** //
// * Initialize Various Material Design Components                                   * //
// *********************************************************************************** //
// MDC - Top App Bar component
const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
// MDC - Menu Surface component - The "Open Menu" button on the Top App Bar
const menuSurface = new MDCMenuSurface(document.querySelector('.mdc-menu-surface.ms2'));
const menuSurfaceButton = new MDCRipple(document.querySelector('.menu-surface-button'));
// MDC - Button component - Toggles the Pushbar opened or closed
export const toggleSidebarButton = new MDCRipple(document.querySelector('.mdc-top-app-bar__navigation-icon'));
// MDC - Text Field component - Search for various symbols by name
const searchField = new MDCTextField(document.querySelector('.searchSymbols'));
const searchFieldIcon = new MDCRipple(document.querySelector('.mdc-button.searchFieldDeleteIcon'));
const deleteTextFieldButton = new MDCTextFieldIcon(searchFieldIcon.root_);
// MDC - Select Menu component - Contains symbols, affiliation, unit sizes and modifiers
const selectSymbol = new MDCSelect(document.querySelector('.symbol-select'));
const selectAffiliation = new MDCSelect(document.querySelector('.affiliation-select'));
const selectUnitSize = new MDCSelect(document.querySelector('.unit-size-select'));
const selectMod1 = new MDCSelect(document.querySelector('.mod1-select'));
const selectMod2 = new MDCSelect(document.querySelector('.mod2-select'));
// MDC - Text Field component - User input for symbols
const uniqueDesignationField = new MDCTextField(document.querySelector('.uniqueDesignation'));
const uniqueDesignationIcon = new MDCRipple(document.querySelector('.mdc-button.uniqueDesignationDeleteIcon'));
const deleteUniqueDesignationButton = new MDCTextFieldIcon(uniqueDesignationIcon.root_);
// MDC - Text Field component - User input for symbols
const higherFormationField = new MDCTextField(document.querySelector('.higherFormation'));
const higherFormationIcon = new MDCRipple(document.querySelector('.mdc-button.higherFormationDeleteIcon'));
const deleteHigherFormationButton = new MDCTextFieldIcon(higherFormationIcon.root_);
// MDC - Switch component - Toggles 4 states, none, reinforced, reduced or reinforced and reduced
const reinforcedSwitch = new MDCSwitch(document.querySelector('.mdc-switch.reinforcedSwitch'));
const reducedSwitch = new MDCSwitch(document.querySelector('.mdc-switch.reducedSwitch'));
const reinforcedReducedValue = () => new RRSwitches().value;
// MDC - Switch component - Toggles flying outline on specific symbols
const flyingSwitch = new MDCSwitch(document.querySelector('.mdc-switch.flightSwitch'));
// MDC - Switch component - Toggles activity indicator on symbols
const activitySwitch = new MDCSwitch(document.querySelector('.mdc-switch.activitySwitch'));
// MDC - Switch component - Toggles installation indicator on symbols
const installationSwitch = new MDCSwitch(document.querySelector('.mdc-switch.installationSwitch'));
// MDC - Switch component - Toggles Task Force Amplifier on symbols
const taskForceSwitch = new MDCSwitch(document.querySelector('.mdc-switch.taskForceSwitch'));
// MDC - Select Menu component - Contains various Command Post symbols
const selectCommandPost = new MDCSelect(document.querySelector('.commandpost-select'));


// *********************************************************************************** //
// * Top App Bar                                                                     * //
// *********************************************************************************** //
menuSurfaceButton.listen('click', () => {
  menuSurface.isOpen() ? menuSurface.close() : menuSurface.open();
  menuSurface.setAbsolutePosition(10, 10);
});


// *********************************************************************************** //
// * Symbol Search Text Field                                                        * //
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
  const symbolInfoName = JSON.parse(document.querySelector('.newSVG > svg').dataset.symbolInfo);
  selectSymbol.value = symbolInfoName.Symbol;
  // selectSymbol.value = document.querySelector('.newSVG > svg').dataset.symbolName;
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
        for (let index = 0; index < matchSet.length; index += 1) {
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
          //! replacer
          // new MilSym(`.symbolFigure[data-symbol-name="${element}"]`, `${element}`, `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
          MainMS.location = `.symbolFigure[data-symbol-name="${element}"]`;
          MainMS.symbol = element;
          MainMS.affiliation = selectAffiliation.value;
          MainMS.placeSymbol();
          // selectSymbol.isMenuOpen_ ? Resizer('.symbolFigure svg') : null;
        }
        // Resize symbols in search results so they fit
        selectSymbol.isMenuOpen_ ? Resizer('.symbolFigure svg') : null;
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
    const symbolInfoName = JSON.parse(document.querySelector('.newSVG > svg').dataset.symbolInfo);
    selectSymbol.value = symbolInfoName.Symbol;
    // Do not animate the symbol panel if there is no text in the textField
    if (document.querySelector('.newSVG > svg').classList.contains('animateSymbol')) {
      document.querySelector('.newSVG > svg').classList.remove('animateSymbol');
    }
    // Resize symbols in search results so they fit
    selectSymbol.isMenuOpen_ ? Resizer('.symbolFigure svg') : null;
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
    Resizer('.symbolFigure svg');
  } else {
    MainMS.uniqueDesignation = undefined;
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
    Resizer('.symbolFigure svg');
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
function enableFlyingOutline() {
  if (flyingSwitch.checked) {
    MainMS.flying = true;
    DisableInputs({
      affiliation: false,
      size: true,
      mod1: false,
      mod2: false,
      unique: true,
      higher: true,
      reinforced: true,
      reduced: true,
      activity: true,
      installation: true,
      taskForce: true,
      commandPost: true,
    });
    MainMS.placeSymbol();
  } else if (window.hasOwnProperty('MainMS')) {
    MainMS.flying = false;
    DisableInputs({});
    MainMS.placeSymbol();
  } else {
    setTimeout(() => {
      MainMS.flying = false;
      DisableInputs({});
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
    bounceInAnimation('g.activity'); // This looks kinda funky
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
    bounceInAnimation('g.installation');
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
    bounceInAnimation('g.taskforce');
    return true;
  }
  MainMS.taskForce = false;
  MainMS.placeSymbol();
  return false;
}

taskForceSwitch.listen('change', enableTaskForce);


// *********************************************************************************** //
// * Global Vars --- USE IMPORTS AND REMOVE ON PRODUCTON!!!!!!!                      * //
// *********************************************************************************** //
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
window.menuSurface = menuSurface;
window.bounceInAnimation = bounceInAnimation;

// *********************************************************************************** //
// * Load the Symbols and Modifiers into the dropdowns on page load                  * //
// *********************************************************************************** //
window.onload = () => {
  addSymbolsAndModsToList(militarySymbolsObject, 'symbol');
  addSymbolsAndModsToList(mod1Object, 'mod1', selectMod1);
  addSymbolsAndModsToList(mod2Object, 'mod2', selectMod2);
  addSymbolsAndModsToList(commandPostObject, 'commandpost', selectCommandPost);
  // Hide the text field trash can buttons on page load
  deleteTextFieldButton.root_.style.display = 'none';
  deleteUniqueDesignationButton.root_.style.display = 'none';
  deleteHigherFormationButton.root_.style.display = 'none';
  console.log('%c MGRS-Mapper.com by CPT James Pistell... Scouts Out! ', 'background: #222; color: #bada55; font-size: 22px;');

  const MainMS = new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, selectMod1.value, selectMod2.value, uniqueDesignationField.value, higherFormationField.value, reinforcedReducedValue(), flyingSwitch.checked, activitySwitch.checked, installationSwitch.checked, taskForceSwitch.checked, selectCommandPost.value);
  window.MainMS = MainMS; //! MainMS is in the global scope so it can be reference and edited
  // MainMS.location = '.newSVG';
  // MainMS.symbol = selectSymbol.value;
  // MainMS.affiliation = selectAffiliation.value;
  // MainMS.echelon = selectUnitSize.value;
  // MainMS.mod1 = selectMod1.value;
  // MainMS.mod2 = selectMod2.value;
  // MainMS.uniqueDesignation = uniqueDesignationField.value;
  // MainMS.higherFormation = higherFormationField.value;
  // MainMS.reinforcedReduced = reinforcedReducedValue();
  // MainMS.flying = flyingSwitch.checked;
  // MainMS.activity = activitySwitch.checked;
  // MainMS.installation = installationSwitch.checked;
  // MainMS.taskForce = taskForceSwitch.checked;
  // MainMS.commandPost = selectCommandPost.value;
  // MainMS.placeSymbol();


  setSelectMenuTextContent(selectSymbol, selectMod1, selectMod2, selectCommandPost);

  // **************************************************************************************************************** //
  // * Symbol, Affiliation, Unit Size, Mod 1, Mod 2, Command Post                                                   * //
  // **************************************************************************************************************** //
  // This will automatically center the tooltip on the Most Popular Symbols section
  document.querySelectorAll('.tooltip').forEach((key) => {
    key.addEventListener('mouseover', () => {
      const container = key.offsetWidth;
      const tooltip = key.lastElementChild.offsetWidth;
      // Add 5 pixels to adjust for padding
      key.lastElementChild.style.left = `${(container / 2) - (tooltip / 2) + 5}px`;
      key.lastElementChild.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2), 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 0px 30px rgba(0, 0, 0, 0.3)';
    });
    key.addEventListener('click', (event) => {
      const elements = document.elementsFromPoint(event.clientX, event.clientY);
      const chosenTarget = elements.find(key => key.matches('svg'));
      selectSymbol.value = chosenTarget.dataset.symbol;
    });
  });

  selectSymbol.listen('MDCSelect:change', () => {
    const changeSymbols = new Promise((resolve, reject) => {
      setSelectMenuTextContent(selectSymbol);
      MainMS.symbol = selectSymbol.value;
      MainMS.placeSymbol();
      resolve(MainMS);
      reject(new Error('changeSymbols Promise Rejected'));
    });

    changeSymbols.then(() => {
      // Disable switches and inputs for Equipment and Graphic Control Measures
      switch (MainMS.type) {
        case 'Equipment':
          // Disable all except, symbol, affiliation, mod1, mod2, and flying (note: flying is automatically disabled unless the symbol has a 'flightCapable: true' property)
          DisableInputs({
            affiliation: false,
            size: true,
            mod1: false,
            mod2: false,
            unique: true,
            higher: true,
            reinforced: true,
            reduced: true,
            activity: true,
            installation: true,
            taskForce: true,
            commandPost: true,
          });
          break;
        case 'Graphic Control Measure':
          flyingSwitch.disabled = true;
          flyingSwitch.checked = false;
          DisableInputs({
            affiliation: true,
            size: true,
            mod1: true,
            mod2: true,
            unique: true,
            higher: true,
            reinforced: true,
            reduced: true,
            activity: true,
            installation: true,
            taskForce: true,
            commandPost: true,
          });
          break;
        case 'Tactical Mission Task':
          flyingSwitch.disabled = true;
          flyingSwitch.checked = false;
          DisableInputs({
            affiliation: true,
            size: true,
            mod1: true,
            mod2: true,
            unique: true,
            higher: true,
            reinforced: true,
            reduced: true,
            activity: true,
            installation: true,
            taskForce: true,
            commandPost: true,
          });
          break;
        default:
          // Enable all inputs
          DisableInputs({});
          break;
      }

      const addAndRemoveSymbolPanelAnimation = () => {
        // Add the animateSymbol class the the symbol in the panel
        document.querySelector('.newSVG > svg').classList.add('animateSymbol');
        // When the animation ends, remove it from the symbol, otherwise it will keep animating when you mouse over
        window.addEventListener('animationend', () => {
          document.querySelector('.newSVG > svg').classList.remove('animateSymbol');
          // Set to once to automatically remove the event listener
        }, { once: true });
      };

      // Only animate the symbol when a new symbol is clicked. This prevents the animation occurring on every single keyup in search field
      !searchField.input_.value ? addAndRemoveSymbolPanelAnimation() : null;
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
    bounceInAnimation('g.commandpost');
  });


  [selectUnitSize, selectMod1, selectMod2].forEach((key) => {
    key.listen('click', () => {
      // If any of these menus are open, then resize all the symbols
      selectUnitSize.isMenuOpen_ ? Resizer('.unitSizeFigure svg', 93, 33) : null;
      selectMod1.isMenuOpen_ ? Resizer('.mod1Figure svg') : null;
      selectMod2.isMenuOpen_ ? Resizer('.mod2Figure svg') : null;
    });
  });

  // This will prevent the symbols from being regenerated if the affiliation hasn't changed. Otherwise every time you open the symbolSelect it would run placeSymbol()
  const oldAffiliationValue = [selectAffiliation.value];
  selectSymbol.listen('click', () => {
    if (oldAffiliationValue[0] !== selectAffiliation.value) {
      // If the previous affiliation and the current affiliation are NOT equal, then pop the last value, push the new value
      oldAffiliationValue.pop();
      oldAffiliationValue.push(selectAffiliation.value);
      // When an affiliation is selected, change the outlines of all symbols in the dropdown only if the selectSymbol menu is open though
      if (selectSymbol.isMenuOpen_) {
        selectSymbol.menu_.items.map((key) => {
          //! replacer
          // new MilSym(`.symbolFigure[data-symbol-name="${key.dataset.value}"]`, `${key.dataset.value}`, `${selectAffiliation.value}`);
          MainMS.location = `.symbolFigure[data-symbol-name="${key.dataset.value}"]`;
          MainMS.symbol = key.dataset.value;
          MainMS.affiliation = selectAffiliation.value;
          MainMS.placeSymbol();
        });
      }
    }

    if (selectSymbol.isMenuOpen_) {
      // If the previous affiliation and the current affiliation are equal, then do not change the symbol outlines, just resize them only if the menu is open
      setTimeout(() => {
        Resizer('.symbolFigure svg');
        // Total hack that prevents the selectSymbol dropdown from getting compressed when after a user does a search query.
        // selectSymbol.menu_.root_.attributes.style.value = `transform-origin: center top; top: ${selectSymbol.root_.getBoundingClientRect().bottom}px; max-height: 714.375px; right: 33.3438px;`;
      }, 50);
    }
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
          //! replacer
          // new MilSym(`.commandpostFigure[data-commandpost-name="${key.dataset.value}"]`, 'Default Land Unit', `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${key.dataset.value}`);
          MainMS.location = `.commandpostFigure[data-commandpost-name="${key.dataset.value}"]`;
          MainMS.symbol = 'Default Land Unit';
          MainMS.commandPost = key.dataset.value;
          MainMS.placeSymbol();
        });
      }
    }
    // If the previous affiliation and the current affiliation are equal, then do not change the symbol outlines, just resize them only if the menu is open
    selectCommandPost.isMenuOpen_ ? Resizer('.commandpostFigure svg', 100, 100) : null;
  });

  // Add the pulsating prompt above the symbol in the symbol panel
  document.querySelector('.newSVG').insertAdjacentHTML('beforebegin',
    `<span class="mdc-select-helper-text mdc-select-helper-text--persistent drag-and-drop-reminder">
      <i class="material-icons">format_shapes</i>
      Click and Drag the Symbol Onto the Map
    </span>`);
};

export { selectAffiliation, flyingSwitch };