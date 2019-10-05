/* eslint-disable no-new */
import { selectAffiliation } from './mdcComponents';

// * Make Mod1 & Mod2 fit inside an equipment symbol * //
// ex- TransformModifiersOnEquipment('.newSVG svg');
// This should only be called on equipment symbols. This will scale down the decorator, and move Mod1 up and Mod2 down so they all fit in the circle
async function TransformModifiersOnEquipment(location) {
  // Wait for the MainMS global var to appear
  if (await window.hasOwnProperty('MainMS')) {
  // Modify only on equipment symbols
    if (MainMS.type === 'Equipment') {
      const equipmentOutline = document.querySelector(location);
      const equipmentDecorator = equipmentOutline.querySelector('g.decorator');
      const mod1 = equipmentOutline.querySelector('g.mod1');
      const mod2 = equipmentOutline.querySelector('g.mod2');
      // Since the MainMS object starts out with no Mod1/2 amplifiers, we will check if they exist. If not then there is no need to adjust the symbol decorator
      if (mod1) {
        equipmentDecorator.style.transformOrigin = '100px 100px'; // transform from center of circle (cx, cy)
        equipmentDecorator.style.transform = 'translateY(2%) scale(0.75)';
        // mod1.style.transform = `translateY(-${equipmentOutline.viewBox.baseVal.x / equipmentOutline.viewBox.baseVal.y * 21}px)`;
        mod1.style.transformOrigin = '100px 100px';
        mod1.style.transform = 'translateY(-11%) scale(0.85)';
      }

      if (mod2) {
        mod2.style.transformOrigin = '100px 140px';
        mod2.style.transform = 'scale(0.85)';
      }
    }
  }
}

// * Add Symbols and Modifiers to the Dropdown lists * //
// ex- addSymbolsAndModsToList(mod1Object, 'mod1', selectMod1);
// obj = the object to iterate over (ex- mod1Object)
// abv = the abbreviation of the object to match the HTML select lists
// menu = the MDCSelect menu const in mdcComponents.js
const addSymbolsAndModsToList = (obj, abv, menu = null) => {
  Object.keys(obj).forEach((key) => {
    const mdcList = document.querySelector(`.mdc-list.${abv}-list`);
    const newli = document.createElement('li');
    const modTypeInfo = document.createElement('em');
    modTypeInfo.setAttributeNS(null, 'class', `${abv}-type-info`);
    // Add the type of the Modifier in the drop down box
    modTypeInfo.textContent = obj[key].type.padEnd(15, '.');
    newli.setAttributeNS(null, 'class', 'mdc-list-item');
    newli.setAttributeNS(null, 'data-value', key);
    newli.textContent = key.toString();
    newli.prepend(modTypeInfo);
    mdcList.append(newli);
    const figureElement = document.createElement('figure');
    figureElement.setAttributeNS(null, 'class', `${abv}Figure`);
    // add the symbol key to the data-attr so they can match up with the list item
    figureElement.setAttributeNS(null, `data-${abv}-name`, `${key}`);
    newli.prepend(figureElement);
    // This will add the Symbols and Modifiers to the dropdown list
    switch (abv) {
      case 'mod1':
        // All this does is remove the ESLint error for “Do not use 'new' for side effects”
        (() => new MilSym(`.mod1Figure[data-mod1-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, `${key}`))();
        break;
      case 'mod2':
        new MilSym(`.mod2Figure[data-mod2-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, undefined, `${key}`);
        break;
      case 'commandpost':
        // Set the default command post value to "None" on page load
        selectCommandPost.value = 'None';
        // Since we do not want to strip the outline of the command post, return this value
        return new MilSym(`.commandpostFigure[data-commandpost-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${key}`);
      case 'tacticalmissiontask':
        setTimeout(() => {
          //! This is a bit of a hack. I also don't like this because it is using the global vars and I don't feel like importing more shit
          selectTacticalMissionTasks.value = 'None';
        }, 30);
        new MilSym(`.tacticalmissiontaskFigure[data-tacticalmissiontask-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${key}`);
        break;
      case 'graphiccontrolmeasures':
        setTimeout(() => {
          //! This is a bit of a hack. I also don't like this because it is using the global vars and I don't feel like importing more shit
          selectGraphicControlMeasures.value = 'None';
        }, 30);
        new MilSym(`.graphiccontrolmeasuresFigure[data-graphiccontrolmeasures-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${key}`);
        break;
      case 'symbol':
        // Set the selected symbol to "Default Land Unit" on page load
        selectSymbol.foundation_.setSelectedIndex(0);
        // Returning 'symbol' since we need to keep the symbol affiliation outlines
        return new MilSym(`.symbolFigure[data-symbol-name="${key}"]`, `${key}`, `${selectAffiliation.value}`, undefined);
      default:
        break;
    }
    // This will remove the affiliation containers on the Modifier elements in the dropdown
    // ! Remember selectMod1 is a global var from mdcComponents.js -- Import it on production
    menu.menu_.items.map((key2) => {
      // This targets the Modifier element (eg- the moon symbol for "foraging")
      const modElement = key2.querySelectorAll('li figure svg g.outline path')[0];
      // This targets the SVG container for each Modifier element
      const modSVGContainer = modElement.parentElement.parentElement;
      // Set the affiliation outline background color to transparent, otherwise this will show a default land unit
      modElement.setAttributeNS(null, 'fill', 'transparent');
      // Set the affiliation outline stroke to 0
      modElement.setAttributeNS(null, 'stroke-width', '0');
      // Set the affiliation outline path to nothing
      modElement.setAttributeNS(null, 'd', '');
      // Set the SVG container viewBox to this value. (Note: Probably not needed)
      // modSVGContainer.setAttributeNS(null, 'viewBox', '80 55 40 20');
      // Scale the Modifier element down in the select box so they don't clip
      modSVGContainer.style.transform = 'scale(0.75)';
      // Set the selected index to the first item (usually this is "Default/None")
      menu.foundation_.setSelectedIndex(0);
    });
  });
};

// * Resize symbols (usually called when a select menu is opened) * //
// ex- new Resizer('.symbolFigure svg');  (default parameters set for thumbnails)
class Resizer {
  constructor(symbolElement, width = 93, height = 64) {
    this.symbolElement = document.querySelectorAll(symbolElement);
    this.width = width;
    this.height = height;
    this.symbolElement.forEach((key) => {
      key.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid'); // this is a default value I believe
      key.setAttributeNS(null, 'viewBox', `${key.getBBox().x - 4} ${key.getBBox().y - 4} ${key.getBBox().width + 8} ${key.getBBox().height + 8}`);
      key.setAttributeNS(null, 'width', `${this.width}`);
      key.setAttributeNS(null, 'height', `${this.height}`);
    });
  }
}

// * Bounce In Animation * //
// Toggle the bounceIn animation on the Unit Size, Mod 1 and Mod 2.
function bounceInAnimation(location) {
  const bounceIn = document.querySelector(location);
  if (MainMS.type !== 'Equipment') {
    // transformBox is crucial. Without this Mod1 will not scale from the center
    bounceIn.style.transformBox = 'fill-box';
    bounceIn.style.transformOrigin = 'center center';
    bounceIn.classList.toggle('bounceIn');
  }
}

//* Disabled selected inputs * //
function DisableInputs(size = false, unique = false, higher = false, reinforced = false, reduced = false, flying = false, activity = false, installation = false, taskforce = false, commandPost = false) {
  if (size) {
    selectUnitSize.disabled = true;
    selectUnitSize.foundation_.adapter_.setSelectedIndex(0);
    MainMS.data.echelon = 'none';
    MainMS.echelon = undefined;
  } else {
    selectUnitSize.disabled = false;
  }

  if (unique) {
    MainMS.uniqueDesignation = '';
    uniqueDesignationField.disabled = true;
    uniqueDesignationField.value = '';
    deleteUniqueDesignationButton.root_.style.display = 'none';
  } else {
    uniqueDesignationField.disabled = false;
  }

  if (higher) {
    MainMS.higherFormation = '';
    higherFormationField.disabled = true;
    higherFormationField.value = '';
    deleteHigherFormationButton.root_.style.display = 'none';
  } else {
    higherFormationField.disabled = false;
  }

  if (reinforced) {
    reinforcedSwitch.disabled = true;
    reinforcedSwitch.checked = false;
    MainMS.reinforcedReduced = '';
  } else {
    reinforcedSwitch.disabled = false;
  }

  if (reduced) {
    reducedSwitch.disabled = true;
    reducedSwitch.checked = false;
    MainMS.reinforcedReduced = '';
  } else {
    reducedSwitch.disabled = false;
  }

  if (flying) {
    flyingSwitch.disabled = true;
    flyingSwitch.checked = false;
    MainMS.flying = false;
  } else {
    flyingSwitch.disabled = false;
  }

  if (activity) {
    activitySwitch.disabled = true;
    activitySwitch.checked = false;
    MainMS.activity = false;
  } else {
    activitySwitch.disabled = false;
  }

  if (installation) {
    installationSwitch.disabled = true;
    installationSwitch.checked = false;
    MainMS.installation = false;
  } else {
    installationSwitch.disabled = false;
  }

  if (taskforce) {
    taskForceSwitch.disabled = true;
    taskForceSwitch.checked = false;
    MainMS.taskForce = false;
  } else {
    taskForceSwitch.disabled = false;
  }

  if (commandPost) {
    selectCommandPost.disabled = true;
    selectCommandPost.foundation_.adapter_.setSelectedIndex(0);
    MainMS.data.commandPost = 'None';
    MainMS.commandPost = undefined;
    selectCommandPost.value = selectCommandPost.value;
  } else {
    selectCommandPost.disabled = false;
  }

  if (window.hasOwnProperty('MainMS')) {
    MainMS.placeSymbol();
  } else {
    setTimeout(() => {
      MainMS.placeSymbol();
    }, 100);
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
function setSelectMenuTextContent(...params) {
  params.forEach((key) => {
    key.selectedText_.textContent = key.value;
  });
}

export {
  addSymbolsAndModsToList, Resizer, TransformModifiersOnEquipment, bounceInAnimation, DisableInputs, debounce, setSelectMenuTextContent,
};
