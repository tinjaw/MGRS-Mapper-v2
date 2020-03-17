import '../styles/index.scss';
import { MDCSelect } from '@material/select';
import { MDCTextField, MDCTextFieldIcon } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { MDCSwitch } from '@material/switch';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCMenuSurface } from '@material/menu-surface';
import { MDCList } from '@material/list';
import { MDCIconButtonToggle } from '@material/icon-button';
import Fuse from 'fuse.js';
import militarySymbolsObject from './symbolObjects/militarySymbols';
import mod1Object from './symbolObjects/mod1';
import mod2Object from './symbolObjects/mod2';
import commandPostObject from './symbolObjects/commandPost';
import MilSym from './app';
import pushbar from './ui/pushbar';
import {
  Resizer, bounceInAnimation, debounce, setSelectMenuTextContent,
} from './ui/helperFunctions';
import {
  map, generateGZDGrids, generate100kGrids, generate1000meterGrids,
} from './map/map';
import {
  latLngFromMGRS, natGeoMap, OSMMap, tonerLiteMap, worldSatelliteMap, worldTopoMap,
} from './map/Leaflet.DumbMGRS';
// This will make all the images in your folder available to webpack
require.context('../img', true, /^\.\//);


// *********************************************************************************** //
// * Initialize Various Material Design Components                                   * //
// *********************************************************************************** //
// MDC - Top App Bar component
// eslint-disable-next-line no-unused-vars
const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
// MDC - Menu Surface component - The "Open Menu" button on the Top App Bar
const menuSurface = new MDCMenuSurface(document.querySelector('.mdc-menu-surface.ms2'));
const menuSurfaceButton = new MDCRipple(document.querySelector('.mdc-button.menu-surface-button'));
// MDC - Button component - Toggles the Pushbar opened or closed
const toggleSidebarButton = new MDCRipple(document.querySelector('.mdc-top-app-bar__navigation-icon'));
// MDC - Text Field component - Zoom to MGRS Coordinates
const searchMGRS = new MDCTextField(document.querySelector('.mdc-text-field.searchMGRS'));
const searchMGRSIcon = new MDCRipple(document.querySelector('.mdc-button.searchMGRSDeleteIcon'));
const deleteSearchMGRSButton = new MDCTextFieldIcon(searchMGRSIcon.root_);
// MDC - Text Field component - Zoom to Address
const searchAddress = new MDCTextField(document.querySelector('.mdc-text-field.searchAddress'));
const searchAddressIcon = new MDCRipple(document.querySelector('.mdc-button.searchAddressDeleteIcon'));
const deleteSearchAddressButton = new MDCTextFieldIcon(searchAddressIcon.root_);
// MDC - Select Menu component - Contains base maps
const baseMapList = new MDCList(document.getElementById('map-list'));
// MDC - Button Component - Download Symbol Buttons
const dlSymbolAsSVG = new MDCRipple(document.querySelector('.mdc-button.dlSymbolAsSVG'));
const dlSymbolAsPNG = new MDCRipple(document.querySelector('.mdc-button.dlSymbolAsPNG'));
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
// MDC - Menu Surface component - The "Toggle Grid Overlays" button in the bottom app bar
const menuSurfaceToggleGrids = new MDCMenuSurface(document.querySelector('.mdc-menu-surface.ms1'));
const menuSurfaceToggleGridsButton = new MDCRipple(document.querySelector('.mdc-button.ms1'));
// MDC - Switch component - Toggle switches for the MGRS grid overlay
const gzdGridsSwitch = new MDCSwitch(document.querySelector('.mdc-switch.gzdGridsSwitch'));
const gzdLabelsSwitch = new MDCSwitch(document.querySelector('.mdc-switch.gzdLabelsSwitch'));
const labels100KSwitch = new MDCSwitch(document.querySelector('.mdc-switch.labels100KSwitch'));
const grids100KSwitch = new MDCSwitch(document.querySelector('.mdc-switch.grids100KSwitch'));
const labels1000MSwitch = new MDCSwitch(document.querySelector('.mdc-switch.labels1000MSwitch'));
const grids1000MSwitch = new MDCSwitch(document.querySelector('.mdc-switch.grids1000MSwitch'));
// MDC - Icon Button - Colored Icon buttons for the User Text Leaflet Control
const colorSelectionBlack = new MDCIconButtonToggle(document.querySelector('.mdc-icon-button.userTextColorSelection.black'));
const colorSelectionRed = new MDCIconButtonToggle(document.querySelector('.mdc-icon-button.userTextColorSelection.red'));
const colorSelectionPurple = new MDCIconButtonToggle(document.querySelector('.mdc-icon-button.userTextColorSelection.purple'));
const colorSelectionGreen = new MDCIconButtonToggle(document.querySelector('.mdc-icon-button.userTextColorSelection.green'));
const colorSelectionBlue = new MDCIconButtonToggle(document.querySelector('.mdc-icon-button.userTextColorSelection.blue'));
const colorSelectionYellow = new MDCIconButtonToggle(document.querySelector('.mdc-icon-button.userTextColorSelection.yellow'));
// MDC - Surface Menu/Button/TextField - Components for the User Text Leaflet Control Surface Menu
const addTextToMapControl = new MDCRipple(document.querySelector('.mdc-icon.addTextToMap'));
const addTextToMapMenu = new MDCMenuSurface(document.querySelector('.mdc-menu-surface.addTextToMap--Menu'));
const addTextToMapSubmit = new MDCRipple(document.querySelector('.mdc-button.addTextToMap--Button'));
const addTextToMapInput = new MDCTextField(document.querySelector('.mdc-text-field.addTextToMap--TextField'));

// Initial military symbol on page load
// eslint-disable-next-line import/no-mutable-exports
const MainMS = new MilSym('.newSVG', 'Default Land Unit', 'friendly', 'none', 'None', 'None', undefined, undefined);


// *********************************************************************************** //
// * Leaflet Control - User Text Input Surface Menu                                  * //
// *********************************************************************************** //
// Set the User Text Input menu position when the Leaflet Control is clicked
addTextToMapControl.listen('click', (event) => {
  event.target.classList.add('mdc-menu-surface--anchor');
  addTextToMapMenu.setAbsolutePosition(10, 163);
  addTextToMapMenu.open();
});

const colorSelection = [colorSelectionBlack, colorSelectionRed, colorSelectionPurple, colorSelectionGreen, colorSelectionBlue, colorSelectionYellow];

colorSelection.forEach((color) => {
  color.listen('MDCIconButtonToggle:change', (event) => {
    const chosenColor = event.target.dataset.color;
    // on change, turn off all colors, remove elevation and background colors
    colorSelection.forEach((c) => {
      const colorRemove = c;
      colorRemove.on = false;
      colorRemove.root_.classList.remove('mdc-elevation--z8');
      colorRemove.root_.style.backgroundColor = '';
    });

    switch (chosenColor) {
      case 'black':
        addTextToMapInput.root_.control.dataset.color = 'black';
        colorSelectionBlack.on = true;
        break;
      case 'red':
        addTextToMapInput.root_.control.dataset.color = 'red';
        colorSelectionRed.on = true;
        break;
      case 'purple':
        addTextToMapInput.root_.control.dataset.color = 'purple';
        colorSelectionPurple.on = true;
        break;
      case 'green':
        addTextToMapInput.root_.control.dataset.color = 'green';
        colorSelectionGreen.on = true;
        break;
      case 'blue':
        addTextToMapInput.root_.control.dataset.color = 'blue';
        colorSelectionBlue.on = true;
        break;
      case 'yellow':
        addTextToMapInput.root_.control.dataset.color = 'yellow';
        colorSelectionYellow.on = true;
        break;
      default:
        break;
    }

    color.root_.classList.add('mdc-elevation--z8');
    // Adjust result for blue, since I am using a light blue
    const bgColorStyle = color.root_.style;
    chosenColor === 'blue' ? bgColorStyle.backgroundColor = '#74DCFF' : bgColorStyle.backgroundColor = chosenColor;
  });
});

// When a user adds text to a map, close the user text menu
addTextToMapSubmit.listen('click', () => {
  addTextToMapMenu.close();
});

// Disable the user text input button if there is no text in the text box, enable it if there is
addTextToMapInput.listen('keyup', () => {
  if (addTextToMapInput.value.length >= 1) {
    addTextToMapSubmit.root_.disabled = false;
  } else {
    addTextToMapSubmit.root_.disabled = true;
  }
});


// *********************************************************************************** //
// * Top App Bar                                                                     * //
// *********************************************************************************** //
menuSurfaceButton.listen('click', () => {
  menuSurface.isOpen() ? menuSurface.close() : menuSurface.open();
  menuSurface.setAbsolutePosition(10, 10);
});

toggleSidebarButton.unbounded = true;
toggleSidebarButton.listen('click', () => {
  if (pushbar.opened) {
    // If the pushbar is opened, close it and replace the menu_open icon with the regular menu icon
    toggleSidebarButton.root_.innerText = 'menu';
    pushbar.close();
  } else {
    toggleSidebarButton.root_.innerText = 'menu_open';
    pushbar.open('rightPushbar');
  }
});


// *********************************************************************************** //
// * Top App Bar - Menu Surface - Base Map Selection List                            * //
// *********************************************************************************** //
baseMapList.listElements.map((listItemEl) => new MDCRipple(listItemEl));
baseMapList.singleSelection = true;
const natGeo = document.querySelector('.mapIcon-natGeo');
const osm = document.querySelector('.mapIcon-OSM');
const tonerLite = document.querySelector('.mapIcon-tonerLite');
const topo = document.querySelector('.mapIcon-worldTopo');
const satellite = document.querySelector('.mapIcon-satellite');

natGeo.innerHTML = '<img src="../img/map_natGeo_2.jpg" alt="National Geographic Map Layer" width="100px" loading="lazy" />';
osm.innerHTML = '<img src="../img/map_OSM_2.jpg" alt="Open Street Maps Layer" width="100px" loading="lazy" />';
tonerLite.innerHTML = '<img src="../img/map_tonerLite_2.jpg" alt="Toner Lite Map Layer" width="100px" loading="lazy" />';
topo.innerHTML = '<img src="../img/map_worldTopo_2.jpg" alt="Toner Lite Map Layer" width="100px" loading="lazy" />';
satellite.innerHTML = '<img src="../img/map_worldSatellite_2.jpg" alt="Toner Lite Map Layer" width="100px" loading="lazy" />';

baseMapList.listen('MDCList:action', (event) => {
  const mapLayers = [natGeoMap, OSMMap, tonerLiteMap, worldTopoMap, worldSatelliteMap];
  const selectedMap = event.target.children[event.detail.index];
  const notSelectedMaps = event.target.querySelectorAll('ul > li:not(.mdc-list-item--selected)');
  const greenCheckmark = `<svg class="mdc-list-item__meta" style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="green" d="M12 2C7 2 2 7 2 12s5 10 10 10 10-4 10-10S18 2 12 2m-2 15l-5-5 1-1 4 3 8-7 1 1-9 9z"/>
  </svg>`;
  // Enable the green checkmark on the selected map
  selectedMap.querySelector('.mdc-list-item__meta').innerHTML = greenCheckmark;
  // Remove the green check mark from all other maps
  notSelectedMaps.forEach((nsm) => {
    const checkboxIndicator = nsm.lastElementChild;
    checkboxIndicator.innerHTML = '';
  });
  // Remove the currently enabled map
  mapLayers.forEach((m) => {
    if (map.hasLayer(m)) {
      map.removeLayer(m);
    }
  });
  // Add the newly selected map
  map.addLayer(mapLayers[event.detail.index]);
});


// *********************************************************************************** //
// * Top App Bar - Menu Surface - Download Symbol Buttons                            * //
// *********************************************************************************** //
// Download the symbol as SVG
dlSymbolAsSVG.listen('click', () => {
  const symbol = document.querySelector('.newSVG > svg');
  // Remove spaces in symbol name
  const symbolName = JSON.parse(symbol.dataset.symbolInfo).Symbol.replace(/\s/g, '-');
  symbol.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  const svgData = symbol.outerHTML;
  const preface = '<?xml version="1.0" standalone="no"?>\r\n';
  const svgBlob = new Blob([preface, svgData], { type: 'image/svg+xml;charset=utf-8' });
  const svgUrl = URL.createObjectURL(svgBlob);
  const downloadLink = document.createElement('a');
  downloadLink.href = svgUrl;
  downloadLink.download = `${symbolName}_MGRS-Mapper.svg`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

// Download the symbol as PNG
dlSymbolAsPNG.listen('click', () => {
  const symbol = document.querySelector('.newSVG > svg');
  const symbolName = JSON.parse(symbol.dataset.symbolInfo).Symbol.replace(/\s/g, '-');
  const svgData = new XMLSerializer().serializeToString(symbol);
  const canvas = document.createElement('canvas');
  const svgSize = symbol.getBoundingClientRect();
  canvas.width = svgSize.width * 3;
  canvas.height = svgSize.height * 3;
  canvas.style.width = svgSize.width;
  canvas.style.height = svgSize.height;
  const ctx = canvas.getContext('2d');
  ctx.scale(3, 3);
  const img = document.createElement('img');
  img.setAttribute('src', `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgData)))}`);
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    const canvasData = canvas.toDataURL('image/png', 1);
    const downloadLink = document.createElement('a');
    downloadLink.href = canvasData;
    downloadLink.download = `${symbolName}_MGRS-Mapper.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
});


// *********************************************************************************** //
// * Helper Functions                                                                * //
// *********************************************************************************** //
// * Add Symbols and Modifiers to the Dropdown lists * //
// ex- addSymbolsAndModsToList(mod1Object, 'mod1', selectMod1);
// obj = the object to iterate over (ex- mod1Object)
// abv = the abbreviation of the object to match the HTML select lists
// menu = the MDCSelect menu const in mdcComponents.js
// https://stackoverflow.com/questions/40185880/making-a-promise-work-inside-a-javascript-switch-case
async function addSymbolsAndModsToList(obj, abv, menu = null) {
  try {
    const promises = await Object.keys(obj).forEach(async (key) => {
      const mdcList = document.querySelector(`.mdc-list.${abv}-list`);
      const newli = document.createElement('li');
      const modTypeInfo = document.createElement('em');
      modTypeInfo.setAttributeNS(null, 'class', `${abv}-type-info symbolTypeGrid mdc-typography--overline`);
      // Add the type of the Modifier in the drop down box
      modTypeInfo.textContent = obj[key].type;
      newli.setAttributeNS(null, 'class', 'mdc-list-item listGridParent');
      newli.setAttributeNS(null, 'data-value', key);
      // newli.innerHTML = `<span class="mdc-typography--headline6 symbolDescriptionGrid">${key}</span>`;
      await newli.insertAdjacentHTML('beforeend', `<span class="mdc-typography--headline6 symbolDescriptionGrid">${key}</span>`);
      newli.prepend(modTypeInfo);
      mdcList.append(newli);
      const figureElement = document.createElement('figure');
      figureElement.setAttributeNS(null, 'class', `${abv}Figure symbolFigureGrid`);
      // add the symbol key to the data-attr so they can match up with the list item
      figureElement.setAttributeNS(null, `data-${abv}-name`, `${key}`);
      newli.prepend(figureElement);
      // This will add the Symbols and Modifiers to the dropdown list
      switch (abv) {
        case 'mod1': {
        // All this does is remove the ESLint error for “Do not use 'new' for side effects”
          const mod1Promise = await new MilSym(`.mod1Figure[data-mod1-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, `${key}`);
          return mod1Promise;
        }
        case 'mod2': {
          const mod2Promise = await new MilSym(`.mod2Figure[data-mod2-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, undefined, `${key}`);
          return mod2Promise;
        }
        case 'commandpost': {
        // Set the default command post value to "None" on page load
          selectCommandPost.value = 'None';
          // Since we do not want to strip the outline of the command post, return this value
          const cpPromise = await new MilSym(`.commandpostFigure[data-commandpost-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${key}`, undefined);
          return cpPromise;
        }
        case 'symbol': {
        // Set the selected symbol to "Default Land Unit" on page load
        // Setting floatLabel(true) and setEnhancedSelectedIndex_(0) will avoid the symbol animations from running again.
        // For instance if you had 'selectSymbol.foundation_.setSelectedIndex(0);' the function to remove the animateSymbol class would run x times
        // x = the number of elements in the symbolSelect dropdown.
        //! This actually might be a better way of doing things that just using "selectSymbol.foundation_.setSelectedIndex(0);"
          selectSymbol.foundation_.adapter_.floatLabel(true);
          selectSymbol.setEnhancedSelectedIndex_(0);
          // Returning 'symbol' since we need to keep the symbol affiliation outlines
          const symbolPromise = await new MilSym(`.symbolFigure[data-symbol-name="${key}"]`, `${key}`, `${selectAffiliation.value}`, undefined);
          return symbolPromise;
        }
        default:
          break;
      }
    });

    // Exclude the command post from being parsed
    if (menu !== null && abv !== 'commandpost') {
    // This will remove the affiliation containers on the Modifier elements in the dropdown
      const removeOutlineFromModifiers = await menu.menu_.items.map(async (element) => {
        // This targets the Modifier element (eg- the moon symbol for "foraging")
        const modElement = element.querySelectorAll('li figure svg g.outline path')[0];
        // This targets the SVG container for each Modifier element
        const modSVGContainer = modElement.parentElement.parentElement;
        // Set the affiliation outline background color to transparent, otherwise this will show a default land unit
        modElement.setAttributeNS(null, 'fill', 'transparent');
        // Set the affiliation outline stroke to 0
        modElement.setAttributeNS(null, 'stroke-width', '0');
        // Set the affiliation outline path to nothing
        modElement.setAttributeNS(null, 'd', '');
        // Scale the Modifier element down in the select box so they don't clip
        modSVGContainer.style.transform = 'scale(0.75)';
        // Set the selected index to the first item (usually this is "Default/None")
        menu.foundation_.setSelectedIndex(0);
      });

      // const mods = await Promise.resolve(removeOutlineFromModifiers);
      // return mods;
      const data = await Promise.all([promises, removeOutlineFromModifiers]);
      return data;
    }
  } catch (error) {
    console.log('fuck you');
  }


  // const data = await Promise.all(promises);
  // return data;
}

// const addSymbolsAndModsToList = (obj, abv, menu = null) => {
//   Object.keys(obj).forEach((key) => {
//     const mdcList = document.querySelector(`.mdc-list.${abv}-list`);
//     const newli = document.createElement('li');
//     const modTypeInfo = document.createElement('em');
//     modTypeInfo.setAttributeNS(null, 'class', `${abv}-type-info symbolTypeGrid mdc-typography--overline`);
//     // Add the type of the Modifier in the drop down box
//     modTypeInfo.textContent = obj[key].type;
//     newli.setAttributeNS(null, 'class', 'mdc-list-item listGridParent');
//     newli.setAttributeNS(null, 'data-value', key);
//     newli.innerHTML = `<span class="mdc-typography--headline6 symbolDescriptionGrid">${key}</span>`;
//     newli.prepend(modTypeInfo);
//     mdcList.append(newli);
//     const figureElement = document.createElement('figure');
//     figureElement.setAttributeNS(null, 'class', `${abv}Figure symbolFigureGrid`);
//     // add the symbol key to the data-attr so they can match up with the list item
//     figureElement.setAttributeNS(null, `data-${abv}-name`, `${key}`);
//     newli.prepend(figureElement);
//     // This will add the Symbols and Modifiers to the dropdown list
//     switch (abv) {
//       case 'mod1':
//         // All this does is remove the ESLint error for “Do not use 'new' for side effects”
//         (() => new MilSym(`.mod1Figure[data-mod1-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, `${key}`))();
//         break;
//       case 'mod2':
//         (() => new MilSym(`.mod2Figure[data-mod2-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, undefined, `${key}`))();
//         break;
//       case 'commandpost':
//         // Set the default command post value to "None" on page load
//         selectCommandPost.value = 'None';
//         // Since we do not want to strip the outline of the command post, return this value
//         return new MilSym(`.commandpostFigure[data-commandpost-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${key}`, undefined);
//       case 'symbol':
//         // Set the selected symbol to "Default Land Unit" on page load
//         // Setting floatLabel(true) and setEnhancedSelectedIndex_(0) will avoid the symbol animations from running again.
//         // For instance if you had 'selectSymbol.foundation_.setSelectedIndex(0);' the function to remove the animateSymbol class would run x times
//         // x = the number of elements in the symbolSelect dropdown.
//         //! This actually might be a better way of doing things that just using "selectSymbol.foundation_.setSelectedIndex(0);"
//         selectSymbol.foundation_.adapter_.floatLabel(true);
//         selectSymbol.setEnhancedSelectedIndex_(0);
//         // Returning 'symbol' since we need to keep the symbol affiliation outlines
//         return new MilSym(`.symbolFigure[data-symbol-name="${key}"]`, `${key}`, `${selectAffiliation.value}`, undefined);
//       default:
//         break;
//     }
//     // This will remove the affiliation containers on the Modifier elements in the dropdown
//     menu.menu_.items.map((element) => {
//       // This targets the Modifier element (eg- the moon symbol for "foraging")
//       const modElement = element.querySelectorAll('li figure svg g.outline path')[0];
//       // This targets the SVG container for each Modifier element
//       const modSVGContainer = modElement.parentElement.parentElement;
//       // Set the affiliation outline background color to transparent, otherwise this will show a default land unit
//       modElement.setAttributeNS(null, 'fill', 'transparent');
//       // Set the affiliation outline stroke to 0
//       modElement.setAttributeNS(null, 'stroke-width', '0');
//       // Set the affiliation outline path to nothing
//       modElement.setAttributeNS(null, 'd', '');
//       // Scale the Modifier element down in the select box so they don't clip
//       modSVGContainer.style.transform = 'scale(0.75)';
//       // Set the selected index to the first item (usually this is "Default/None")
//       menu.foundation_.setSelectedIndex(0);
//     });
//   });
// };

//* Disabled selected inputs * //
function DisableInputs({
  affiliation = false,
  size = false,
  mod1 = false,
  mod2 = false,
  unique = false,
  higher = false,
  reinforced = false,
  reduced = false,
  activity = false,
  installation = false,
  taskForce = false,
  commandPost = false,
}) {
  if (affiliation) {
    selectAffiliation.disabled = true;
  } else {
    selectAffiliation.disabled = false;
  }

  if (size) {
    selectUnitSize.disabled = true;
    selectUnitSize.setSelectedIndex = 0;
  } else {
    selectUnitSize.disabled = false;
  }

  if (mod1) {
    selectMod1.disabled = true;
    //! using "selectMod1.selectedIndex = 0;" causes a change event which triggers placeSymbol()
    //! setEnhancedSelectedIndex_(0) will "silently" change the select box index
    selectMod1.setEnhancedSelectedIndex_(0);
    //! Since the index was "silently" changed, we need to reset the text
    selectMod1.root_.childNodes[5].innerText = 'None';
  } else {
    selectMod1.disabled = false;
  }

  if (mod2) {
    selectMod2.disabled = true;
    selectMod2.setEnhancedSelectedIndex_(0);
    selectMod2.root_.childNodes[5].innerText = 'None';
  } else {
    selectMod2.disabled = false;
  }

  if (unique) {
    uniqueDesignationField.disabled = true;
    uniqueDesignationField.value = '';
    deleteUniqueDesignationButton.root_.style.display = 'none';
  } else {
    uniqueDesignationField.disabled = false;
  }

  if (higher) {
    higherFormationField.disabled = true;
    higherFormationField.value = '';
    deleteHigherFormationButton.root_.style.display = 'none';
  } else {
    higherFormationField.disabled = false;
  }

  if (reinforced) {
    reinforcedSwitch.disabled = true;
    reinforcedSwitch.checked = false;
  } else {
    reinforcedSwitch.disabled = false;
  }

  if (reduced) {
    reducedSwitch.disabled = true;
    reducedSwitch.checked = false;
  } else {
    reducedSwitch.disabled = false;
  }

  if (activity) {
    activitySwitch.disabled = true;
    activitySwitch.checked = false;
  } else {
    activitySwitch.disabled = false;
  }

  if (installation) {
    installationSwitch.disabled = true;
    installationSwitch.checked = false;
  } else {
    installationSwitch.disabled = false;
  }

  if (taskForce) {
    taskForceSwitch.disabled = true;
    taskForceSwitch.checked = false;
  } else {
    taskForceSwitch.disabled = false;
  }

  if (commandPost) {
    selectCommandPost.disabled = true;
    selectCommandPost.setEnhancedSelectedIndex_(0);
    selectCommandPost.root_.childNodes[5].innerText = 'None';
  } else {
    selectCommandPost.disabled = false;
  }
}


// *********************************************************************************** //
// * Symbol Search Text Field                                                        * //
// *********************************************************************************** //
const searchOptions = {
  shouldSort: true,
  tokenize: true,
  matchAllTokens: true,
  includeScore: true,
  findAllMatches: true,
  includeMatches: true,
  threshold: 0.2,
  location: 0,
  distance: 10,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [Object.keys(militarySymbolsObject)],
};

async function clearSearchField() {
  // Clear the text field
  searchField.value = '';
  // Hide the trash button
  deleteTextFieldButton.root_.style.display = 'none';
  // Remove all items in the selectSymbol menu
  if (selectSymbol.menu_.items) {
    selectSymbol.menu_.items.forEach((key) => key.remove());
  }
  // Re-add them
  await addSymbolsAndModsToList(militarySymbolsObject, 'symbol');
  // Set the selectSymbol value to the last matched item
  const symbolInfoName = JSON.parse(document.querySelector('.newSVG > svg').dataset.symbolInfo);
  selectSymbol.value = symbolInfoName.Symbol;
  // selectSymbol.value = document.querySelector('.newSVG > svg').dataset.symbolName;
  // Do not animate the symbol panel
  if (document.querySelector('.newSVG > svg').classList.contains('animateSymbol')) {
    document.querySelector('.newSVG > svg').classList.remove('animateSymbol');
  }
}

const searchResults = debounce(async () => {
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
      if (selectSymbol.menu_.items) {
        selectSymbol.menu_.items.forEach((key) => key.remove());
      }
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
          new MilSym(`.symbolFigure[data-symbol-name="${element}"]`, `${element}`, `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
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
    selectSymbol.menu_.items ? selectSymbol.menu_.items.forEach((key) => key.remove()) : null;
    // Hide the trashcan icon
    deleteTextFieldButton.root_.style.display = 'none';
    // Rerun the function to add the symbols to the list
    await addSymbolsAndModsToList(militarySymbolsObject, 'symbol');
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
// * Unique Unit Designation Field, Higher Unit Formation Field, MGRS Coords Field   * //
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
    case 'searchMGRSField':
      searchMGRS.value = '';
      deleteSearchMGRSButton.root_.style.display = 'none';
      document.querySelector('#text-field-outlined-searchMGRS-helper-text').removeAttribute('error');
      document.querySelector('#text-field-outlined-searchMGRS-helper-text').textContent = 'Must be 10 digits! (Example: 18T UN 37780 47969)';
      break;
    case 'searchAddressField':
      searchAddress.value = '';
      deleteSearchAddressButton.root_.style.display = 'none';
      document.querySelector('.addressResults').style.display = 'none';
      break;
    default:
      break;
  }
};

// This adds the unique/higher formation text on the symbol
const inputDesignationFields = debounce(async () => {
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


[deleteHigherFormationButton, deleteUniqueDesignationButton, deleteSearchMGRSButton, deleteSearchAddressButton].forEach((key) => {
  key.root_.addEventListener('click', clearDesignationFields);
});


// *********************************************************************************** //
// * MGRS Coordinates Search Field and Address Search Field                          * //
// *********************************************************************************** //
// Pan and zoom the map into a valid MGRS coordinate
searchMGRS.listen('input', () => {
  // Get the length of the string inside the input box
  const mgrsCoords = searchMGRS.value.toString().split(' ').join('');
  const helpInfo = document.querySelector('#text-field-outlined-searchMGRS-helper-text');
  if (mgrsCoords.length >= 15) {
    const llCoords = latLngFromMGRS(searchMGRS.value);
    // if latLngFromMGRS is false or invalid it will output false as first item in array
    if (llCoords[0] === false) {
      // If there is no error message, then toggle it
      if (!helpInfo.hasAttribute('error')) {
        helpInfo.toggleAttribute('error');
      }
      helpInfo.textContent = 'Error: Please input valid MGRS coordinates';
    } else {
      // Turn off the error message
      if (helpInfo.hasAttribute('error')) {
        helpInfo.toggleAttribute('error');
        helpInfo.textContent = 'Must be 10 digits! (Example: 18T UN 37780 47969)';
      }
      map.setView(llCoords, 14);
    }
  }
  // When the field is blank, remove error message and reset text content
  if (mgrsCoords.length === 0) {
    helpInfo.removeAttribute('error');
    helpInfo.textContent = 'Must be 10 digits! (Example: 18T UN 37780 47969)';
    deleteSearchMGRSButton.root_.style.display = 'none';
  } else {
    // Show the trash icon when there is any text in the search field
    deleteSearchMGRSButton.root_.style.display = 'initial';
    deleteSearchMGRSButton.root_.style.right = '0';
    deleteSearchMGRSButton.root_.style.position = 'fixed';
    deleteSearchMGRSButton.root_.style.top = '10px';
    // Setting z-index on trash icon makes it clickable
    deleteSearchMGRSButton.root_.style.zIndex = '10';
  }
});

// Pan and zoom the map into a valid address
const searchAddressResult = document.querySelector('.addressResults');
searchAddress.listen('input', () => {
  if (searchAddress.value.length >= 2) {
    //! THIS API KEY IS PUBLICLY AVAILABLE
    const apiKey = '&key=AIzaSyBApNoKPUg8e15B_ML72tOjn3HiKg-j6NU';
    const searchQuery = searchAddress.value.toString().split(' ').join('+');
    // These bounds are for Viewport Biasing. This will help retrieve more accurate results
    const swLat = map.getBounds().getSouthWest().lat;
    const swLng = map.getBounds().getSouthWest().lng;
    const neLat = map.getBounds().getNorthEast().lat;
    const neLng = map.getBounds().getNorthEast().lng;

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}${apiKey}&bounds=${swLat},${swLng}|${neLat},${neLng}`)
      .then((response) => response.json())
      .then((data) => {
        const formattedAddress = data.results[0].formatted_address;
        const searchResultLatLng = data.results[0].geometry.location;
        searchAddressResult.style.display = 'block';
        document.querySelector('.addressResults > span').textContent = formattedAddress;
        searchAddressResult.setAttribute('latlng', JSON.stringify(searchResultLatLng));
      });
  }

  if (searchAddress.value.length === 0) {
    deleteSearchAddressButton.root_.style.display = 'none';
    searchAddressResult.style.display = 'none';
  } else {
    // Show the trash icon when there is any text in the search field
    deleteSearchAddressButton.root_.style.display = 'initial';
    deleteSearchAddressButton.root_.style.right = '0';
    deleteSearchAddressButton.root_.style.position = 'fixed';
    deleteSearchAddressButton.root_.style.top = '10px';
    // Setting z-index on trash icon makes it clickable
    deleteSearchAddressButton.root_.style.zIndex = '10';
  }
});

searchAddressResult.addEventListener('click', () => {
  map.flyTo(JSON.parse(searchAddressResult.getAttribute('latlng')), 14, {
    duration: 0.3,
    easeLinearity: 1,
    animate: true,
  });
  setTimeout(() => {
    menuSurface.close();
  }, 300);
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

const reinforcedReducedValue = () => new RRSwitches().value;

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
async function enableTaskForce() {
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
// * Bottom App Bar - Toggle Grid Overlays                                           * //
// *********************************************************************************** //
menuSurfaceToggleGridsButton.listen('click', () => {
  menuSurfaceToggleGrids.isOpen() ? menuSurfaceToggleGrids.close() : menuSurfaceToggleGrids.open();
  menuSurfaceToggleGrids.setAbsolutePosition(0, 50);
  // This will butt the menu surface up to the left of the button
  setTimeout(() => {
    menuSurfaceToggleGrids.root_.style.left = '0px';
  }, 30);
});

// Toggle GZD labels
gzdLabelsSwitch.listen('change', (event) => {
  const checkbox = event.target;
  if (checkbox.checked) {
    generateGZDGrids.showLabels();
  } else {
    generateGZDGrids.hideLabels();
  }
});

// Toggle GZD grids
gzdGridsSwitch.listen('change', (event) => {
  const checkbox = event.target;
  if (checkbox.checked) {
    generateGZDGrids.hideGrids();
  } else {
    generateGZDGrids.showGrids();
  }
});

// Toggle 100k labels
labels100KSwitch.listen('change', (event) => {
  const checkbox = event.target;
  if (checkbox.checked) {
    generate100kGrids.showLabels();
  } else {
    generate100kGrids.hideLabels();
  }
});

// Toggle 100k grids
grids100KSwitch.listen('change', (event) => {
  const checkbox = event.target;
  if (checkbox.checked) {
    generate100kGrids.showGrids();
  } else {
    generate100kGrids.hideGrids();
  }
});

// Toggle 1000m labels
labels1000MSwitch.listen('change', (event) => {
  const checkbox = event.target;
  if (checkbox.checked) {
    generate1000meterGrids.showLabels();
  } else {
    generate1000meterGrids.hideLabels();
  }
});

// Toggle 1000m grids
grids1000MSwitch.listen('change', (event) => {
  const checkbox = event.target;
  if (checkbox.checked) {
    generate1000meterGrids.showGrids();
  } else {
    generate1000meterGrids.hideGrids();
  }
});


// Automatically disabled switches that cannot be used at certain zoom levels
map.whenReady(() => {
  const switchValidator = () => {
    // 1000 meter grids - zoom level 12
    if (map.getZoom() < generate1000meterGrids.options.minZoom) {
      labels1000MSwitch.disabled = true;
      grids1000MSwitch.disabled = true;
    } else {
      generate1000meterGrids.options.showGrids ? grids1000MSwitch.checked = true : grids1000MSwitch.checked = false;
      generate1000meterGrids.options.showLabels ? labels1000MSwitch.checked = true : labels1000MSwitch.checked = false;
      labels1000MSwitch.disabled = false;
      grids1000MSwitch.disabled = false;
    }
    // 100k grids - zoom level 6
    if (map.getZoom() < generate100kGrids.options.minZoom) {
      labels100KSwitch.disabled = true;
      grids100KSwitch.disabled = true;
    } else {
      generate100kGrids.options.showGrids ? grids100KSwitch.checked = true : grids100KSwitch.checked = false;
      generate100kGrids.options.showLabels ? labels100KSwitch.checked = true : labels100KSwitch.checked = false;
      labels100KSwitch.disabled = false;
      grids100KSwitch.disabled = false;
    }
    // Special case - the 100K labels do not appear on my layer plugin at zoom level 6. This is to improve performance
    if (map.getZoom() === 6) {
      labels100KSwitch.checked = false;
      labels100KSwitch.disabled = true;
    }
    // GZD - zoom level 3
    if (map.getZoom() < generateGZDGrids.options.minZoom) {
      gzdLabelsSwitch.disabled = true;
      gzdGridsSwitch.disabled = true;
    } else {
      generateGZDGrids.options.showGrids ? gzdGridsSwitch.checked = true : gzdGridsSwitch.checked = false;
      generateGZDGrids.options.showLabels ? gzdLabelsSwitch.checked = true : gzdLabelsSwitch.checked = false;
      gzdLabelsSwitch.disabled = false;
      gzdGridsSwitch.disabled = false;
    }
  };
  map.on('zoomend', switchValidator);
  switchValidator();
});


// *********************************************************************************** //
// * Load the Symbols and Modifiers into the dropdowns on page load                  * //
// *********************************************************************************** //
addSymbolsAndModsToList(militarySymbolsObject, 'symbol');
addSymbolsAndModsToList(mod1Object, 'mod1', selectMod1);
addSymbolsAndModsToList(mod2Object, 'mod2', selectMod2);
addSymbolsAndModsToList(commandPostObject, 'commandpost', selectCommandPost);
setSelectMenuTextContent(selectSymbol, selectMod1, selectMod2, selectCommandPost);

window.MainMS = MainMS; //! MainMS is in the global scope so it can be reference and edited

// Hide the text field trash can buttons on page load
deleteTextFieldButton.root_.style.display = 'none';
deleteUniqueDesignationButton.root_.style.display = 'none';
deleteHigherFormationButton.root_.style.display = 'none';
deleteSearchMGRSButton.root_.style.display = 'none';
deleteSearchAddressButton.root_.style.display = 'none';

console.log('%c MGRS-Mapper.com by CPT James Pistell... Scouts Out! ', 'background: #222; color: #bada55; font-size: 22px;');


// *********************************************************************************** //
// * Most Popular, Symbols, Affiliation, Unit Size, Mod 1, Mod 2, Command Post       * //
// *********************************************************************************** //
// This will automatically center the tooltip on the Most Popular Symbols section
document.querySelectorAll('.tooltip').forEach((key) => {
  key.addEventListener('mouseover', () => {
    const container = key.offsetWidth;
    const tooltip = key.lastElementChild.offsetWidth;
    // Add 5 pixels to adjust for padding
    key.lastElementChild.style.left = `${(container / 2) - (tooltip / 2) + 5}px`;
    key.lastElementChild.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2), 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 0px 30px rgba(0, 0, 0, 0.3)';
  });
  key.addEventListener('click', async (event) => {
    // When a user clicks on a popular symbol, clear the search field to prevent errors
    if (searchField.value !== '') {
      await clearSearchField();
    }
    const elements = document.elementsFromPoint(event.clientX, event.clientY);
    const chosenTarget = elements.find((key2) => key2.matches('svg'));
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
        // Disable all except, symbol, affiliation, mod1, mod2, and flying
        // (note: flying is automatically disabled unless the symbol has a 'flightCapable: true' property)
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
    if (!searchField.input_.value) {
      addAndRemoveSymbolPanelAnimation();
    }
  }, (error) => {
    console.log(error);
  });
});


selectAffiliation.listen('MDCSelect:change', () => {
  // This replaces camel case for things like "friendlyTemplated" into "Friendly / Templated"
  selectAffiliation.selectedText_.textContent = selectAffiliation.value.replace(/([A-Z])/g, ' / $1').replace(/^./, (str) => str.toUpperCase());
  MainMS.affiliation = selectAffiliation.value;
  MainMS.placeSymbol();
  // If a user changes unit affiliation, and the flying switch is checked, run this func to immediately change the outline
  if (flyingSwitch.checked) {
    enableFlyingOutline();
  }
});

selectUnitSize.listen('MDCSelect:change', () => {
  selectUnitSize.selectedText_.textContent = selectUnitSize.value.replace(/([A-Z])/g, ' / $1').replace(/^./, (str) => str.toUpperCase());
  MainMS.echelon = selectUnitSize.value;
  MainMS.placeSymbol();
  bounceInAnimation('g.echelon');
});

selectMod1.listen('MDCSelect:change', () => {
  bounceInAnimation('g.mod1');
  setSelectMenuTextContent(selectMod1);
  MainMS.mod1 = selectMod1.value;
  MainMS.placeSymbol();
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
    if (selectUnitSize.isMenuOpen_) {
      Resizer('.unitSizeFigure svg', 93, 33);
    }
    if (selectMod1.isMenuOpen_) {
      Resizer('.mod1Figure svg');
    }
    if (selectMod2.isMenuOpen_) {
      Resizer('.mod2Figure svg');
    }
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
        (() => new MilSym(`.symbolFigure[data-symbol-name="${key.dataset.value}"]`, `${key.dataset.value}`, `${selectAffiliation.value}`))();
      });
    }
  }

  if (selectSymbol.isMenuOpen_) {
    // If the previous affiliation and the current affiliation are equal, then do not change the symbol outlines, just resize them only if the menu is open
    setTimeout(() => {
      Resizer('.symbolFigure svg');
    }, 50);
  }
  if (flyingSwitch.checked) {
    flyingSwitch.disabled = false;
  }
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
        (() => new MilSym(`.commandpostFigure[data-commandpost-name="${key.dataset.value}"]`, 'Default Land Unit', `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${key.dataset.value}`))();
      });
    }
  }
  // If the previous affiliation and the current affiliation are equal, then do not change the symbol outlines, just resize them only if the menu is open
  if (selectCommandPost.isMenuOpen_) {
    Resizer('.commandpostFigure svg', 100, 100);
  }
});

// Add the pulsating prompt above the symbol in the symbol panel
document.querySelector('.newSVG').insertAdjacentHTML('beforebegin',
  `<span class="mdc-select-helper-text mdc-select-helper-text--persistent drag-and-drop-reminder">
      <i class="material-icons">format_shapes</i>
      Click and Drag the Symbol Onto the Map
    </span>`);

// Open the pushbar on page load
pushbar.open('rightPushbar');

window.enableFlyingOutline = enableFlyingOutline;
export {
  flyingSwitch, MainMS,
};
