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
        mod1.style.transformOrigin = '100px 100px';
        mod1.style.transform = 'translateY(-9%) scale(0.85)';
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
    modTypeInfo.setAttributeNS(null, 'class', `${abv}-type-info symbolTypeGrid mdc-typography--overline`);
    // Add the type of the Modifier in the drop down box
    modTypeInfo.textContent = obj[key].type;
    newli.setAttributeNS(null, 'class', 'mdc-list-item listGridParent');
    newli.setAttributeNS(null, 'data-value', key);
    newli.innerHTML = `<span class="mdc-typography--headline6 symbolDescriptionGrid">${key}</span>`;
    newli.prepend(modTypeInfo);
    mdcList.append(newli);
    const figureElement = document.createElement('figure');
    figureElement.setAttributeNS(null, 'class', `${abv}Figure symbolFigureGrid`);
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
        return new MilSym(`.commandpostFigure[data-commandpost-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${key}`, undefined);
      case 'symbol':
        // Set the selected symbol to "Default Land Unit" on page load
        // Setting floatLabel(true) and setEnhancedSelectedIndex_(0) will avoid the symbol animations from running again.
        // For instance if you had 'selectSymbol.foundation_.setSelectedIndex(0);' the function to remove the animateSymbol class would run x times
        // x = the number of elements in the symbolSelect dropdown.
        //! This actually might be a better way of doing things that just using "selectSymbol.foundation_.setSelectedIndex(0);"
        selectSymbol.foundation_.adapter_.floatLabel(true);
        selectSymbol.setEnhancedSelectedIndex_(0);
        // Returning 'symbol' since we need to keep the symbol affiliation outlines
        return new MilSym(`.symbolFigure[data-symbol-name="${key}"]`, `${key}`, `${selectAffiliation.value}`, undefined);
      default:
        break;
    }
    // This will remove the affiliation containers on the Modifier elements in the dropdown
    menu.menu_.items.map((element) => {
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
  });
};

// * Resize symbols (usually called when a select menu is opened) * //
// Cache: Our client bounding boxes are kept here, we can use this to clear them later.
let elementsWithBoundingBoxes = [];
window.elementsWithBoundingBoxes = elementsWithBoundingBoxes; //! Global var - remove on production
// ex- Resizer('.symbolFigure svg');  (default parameters set for thumbnails)
function Resizer(symbolElement, width = 93, height = 64) {
  const se = document.querySelectorAll(symbolElement);
  const w = width;
  const h = height;

  se.forEach((key) => {
    // Check if we already got the client bounding box before.
    if (!key._boundingBox) {
      // If not, get it then store it for future use.
      key._boundingBox = key.getBBox();
      elementsWithBoundingBoxes.push(key);
      key.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
      key.setAttributeNS(null, 'viewBox', `${key.getBBox().x - 4} ${key.getBBox().y - 4} ${key.getBBox().width + 8} ${key.getBBox().height + 8}`);
      key.setAttributeNS(null, 'width', `${w}`);
      key.setAttributeNS(null, 'height', `${h}`);
    }
    // Since we have cached the Bounding Box values, there is no need to compute them again 👍
    document.querySelectorAll('.symbolFigure svg')[2].focus();
    return key._boundingBox;
  });
}

// This will clear the elementsWithBoundingBoxes array. Not sure if I need this or not
const clearClientBoundingBoxes = () => {
  for (let index = 0; index < elementsWithBoundingBoxes.length; index++) {
    const element = elementsWithBoundingBoxes[index];
    if (element) {
      element._boundingBox = null;
    }
    elementsWithBoundingBoxes = [];
  }
};


// * Bounce In Animation * //
// Toggle the bounceIn animation on the Unit Size, Mod 1 and Mod 2.
function bounceInAnimation(location) {
  const bounceIn = document.querySelector(location);
  if (MainMS.type !== 'Equipment') {
    // transformBox is crucial. Without this Mod1 will not scale from the center
    bounceIn.style.transformBox = 'fill-box';
    bounceIn.style.transformOrigin = 'center center';
    bounceIn.classList.toggle('bounceIn');
  } else {
    bounceIn.classList.toggle('zoomIn');
  }
}


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
function setSelectMenuTextContent(...params) {
  params.forEach((key) => {
    key.selectedText_.textContent = key.value;
  });
}

export {
  addSymbolsAndModsToList, Resizer, TransformModifiersOnEquipment, bounceInAnimation, DisableInputs, debounce, setSelectMenuTextContent,
};
