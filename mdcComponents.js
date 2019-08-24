/* eslint-disable no-underscore-dangle */
// //import { MDCRipple } from '@material/ripple/index';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import Fuse from 'fuse.js';
import militarySymbolsObject from './militarySymbolsObject';
import { addSymbolsToDropdownList, addUnitSizesToDropdownList } from './app';
import affiliationOutlineObject from './affiliationOutlineObject';
import unitSizeObject from './unitSizeObject';


const textField = new MDCTextField(document.querySelector('.searchSymbols'));

// //const ripple = new MDCRipple(document.querySelector('.mdc-button'));
const selectSymbol = new MDCSelect(document.querySelector('.symbol-select'));
export const selectAffiliation = new MDCSelect(document.querySelector('.affiliation-select'));
const selectUnitSize = new MDCSelect(document.querySelector('.unit-size-select'));

selectSymbol.listen('MDCSelect:change', () => {
  // If there is an SVG in the symbol panel, remove it
  if (document.querySelector('.newSVG svg')) {
    document.querySelector('.newSVG svg').remove();
  }

  // generateSymbol(selectSymbol.foundation_.adapter_.getValue(), 'newSVG');
  generateSymbol(selectSymbol.value, 'newSVG');
  // ! Had to add this because the selected textbox was throwing some weird errors by adding an extra letter to the beginning of the symbols description
  document.querySelector('.mdc-select__selected-text.mainSymbolSelectedText').textContent = selectSymbol.value;
  // ! This adds the animation to the symbol in the symbol panel. I had to put it here because if it were in generateSymbol() it would run every time someone changed the affiliation and it would get really annoying real quickly
  document.querySelector('.newSVG svg').setAttributeNS(null, 'class', 'animateSymbol');
});

selectAffiliation.listen('MDCSelect:change', () => {
  if (document.querySelector('.newSVG svg')) {
    document.querySelector('.newSVG svg').remove();
  }
  searchResults(); // This will change the unit affiliation on the "Select a Symbol" dropdown
  generateSymbol(selectSymbol.value, 'newSVG');
  selectSymbol.foundation_.adapter_.closeMenu();

  // Get the index of the last selected unit size symbol
  const lastUnitSizeSelected = selectUnitSize.selectedIndex;
  // Remove all unit size symbols if a new affiliation is chosen
  selectUnitSize.menu_.items ? selectUnitSize.menu_.items.forEach(e => e.remove()) : null;
  // Re-add the symbols with the updated properties
  addUnitSizesToDropdownList();
  // Keep the last selected index for the Unit Size on the select menu
  selectUnitSize.foundation_.setSelectedIndex(lastUnitSizeSelected);
});

//! TODO: now that the unit size dropdown is working, its time to link up the logic so it updates the symbol panel
//! Add elevation animation to symbols when you hover over them
//! Mutation Observer is the only thing that sets viewbox I think.. Look into that
selectUnitSize.listen('MDCSelect:change', () => {
  // if (document.querySelector('.newSVG svg')) {
  //   document.querySelector('.newSVG svg').remove();
  // }
  // searchResults(); // This will change the unit affiliation on the "Select a Symbol" dropdown
  // generateSymbol(selectSymbol.value, 'newSVG');
  // selectSymbol.foundation_.adapter_.closeMenu();
  //! this shit below is garbage. but it shows the most basic functionality. I think your main problem lies within the generateSymbol() function. We should be looking into using classes to make object templates or something like that. As of right now this is completely unsustainable and it will only get worse as I start adding in more functionality like Mod1,2 etc etc....
  const svg = document.querySelector('.newSVG svg');
  const unitSizeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  unitSizeGroup.classList.add('unit-size-group');
  const unitSizePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  unitSizePath.classList.add('unit-size-path');
  unitSizePath.setAttributeNS(null, 'd', unitSizeObject[selectUnitSize.value][selectAffiliation.value].d);
  // unitSizePath.setAttributeNS(null, 'd', 'M0,40l25,-25m0,25l-25,-25M35,40l25,-25m0,25l-25,-25M70,40l25,-25m0,25l-25,-25M105,40l25,-25m0,25l-25,-25M140,40l25,-25m0,25l-25,-25M175,40l25,-25m0,25l-25,-25');
  unitSizePath.setAttributeNS(null, 'stroke-width', '4');
  unitSizePath.setAttributeNS(null, 'stroke', 'black');
  unitSizeGroup.append(unitSizePath);

  svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
  svg.setAttributeNS(null, 'viewBox', `${svg.getBBox().x - 4} ${svg.getBBox().y - 4} ${svg.getBBox().width + 8} ${svg.getBBox().height + 8}`);
  svg.append(unitSizeGroup);
});


const options = {
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

const searchResults = debounce(() => {
  if (textField.input_.value !== '') {
    const fuse = new Fuse(options.keys, options); // "list" is the item array
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

        if (figureElement.dataset.symbolName === `${element}`) {
          generateSymbol(element, `${element}`);
          // Now set the viewBox and dimensions for the thumbnails
          newli.querySelectorAll('.symbolFigure svg').forEach((e2) => {
            // This just removes the animation on the symbol on the dropdown list
            // e2.classList.contains('animateSymbol') ? e2.classList.remove('animateSymbol') : null;
            // e2.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
            // e2.setAttributeNS(null, 'viewBox', `${e2.getBBox().x} ${e2.getBBox().y} ${e2.getBBox().width} ${e2.getBBox().height}`);
            //! viewBox is set in the mutation observer
            // e2.setAttributeNS(null, 'width', '63');
            // e2.setAttributeNS(null, 'height', '43');
          });
        }
      }
    });
    if (textField.value.length >= 3) {
      // set the first result as the symbol value on the "Select a Symbol" dropdown
      result[0].matches[0].value ? selectSymbol.foundation_.setValue(result[0].matches[0].value) : null;
    }
  } else {
    // If there is no text in the search field:
    // Remove all search results
    selectSymbol.menu_.items ? selectSymbol.menu_.items.forEach(e => e.remove()) : null;
    // Close the select menu
    // selectSymbol.foundation_.adapter_.closeMenu();
    // Rerun the function to add the symbols to the list
    addSymbolsToDropdownList();
    // Set the selected item to the one in the symbol panel
    selectSymbol.value = document.querySelector('.newSVG > svg').dataset.symbolDesc;
    document.querySelector('.newSVG svg').classList.remove('animateSymbol');
    // selectSymbol.foundation_.adapter_.setValue(selectSymbol.value);
    // selectSymbol.value = selectSymbol.foundation_.adapter_.getValue();
  }
}, 250);

textField.input_.addEventListener('input', searchResults);

// ! GLOBAL VARS - remove on production
window.textField = textField;
window.selectSymbol = selectSymbol;

// Load the default symbol into the panel when the page loads
window.onload = () => {
  addSymbolsToDropdownList();
  addUnitSizesToDropdownList();
  selectSymbol.foundation_.setSelectedIndex(0);
  selectUnitSize.foundation_.setSelectedIndex(0);
};

// ! Mutatation Observer will disable all dropdowns except "Select a Symbol" when the menu is open
const mutationTarget = document.querySelector('.symbol-select');
const mutationTarget2 = document.querySelector('.unit-size-select');

// OLD MUTATION OBSERVER
// const observer = new MutationObserver(() => {
//   if (selectSymbol.foundation_.adapter_.isMenuOpen()) {
//     selectAffiliation.disabled = true;
//     // When the symbol select menu is open, set the viewbox for all elements in dropdown
//     document.querySelectorAll('.symbolFigure svg .outline').forEach((svg) => {
//       const svgbox = `${svg.getBBox().x - 4} ${svg.getBBox().y - 4} ${svg.getBBox().width + 8} ${svg.getBBox().height + 8}`;
//       svg.parentNode.setAttributeNS(null, 'viewBox', svgbox);
//     });
//   } else {
//     selectAffiliation.disabled = false;
//     textField.foundation_.setValue(''); // delete search field text when the search menu is closed.
//     searchResults(); // reset the dropdown symbols
//   }
//   if (selectUnitSize.foundation_.adapter_.isMenuOpen()) {
//     console.log('Im opened');
//   }
// });

// observer.observe(mutationTarget, {
//   attributes: true,
//   childList: true,
//   characterData: true,
// });


const observer = new MutationObserver(((mutations) => {
  mutations.forEach((e) => {
    if (selectSymbol.foundation_.adapter_.isMenuOpen()) {
      selectAffiliation.disabled = true;
      // When the symbol select menu is open, set the viewbox for all elements in dropdown
      document.querySelectorAll('.symbolFigure svg .outline').forEach((svg) => {
        const svgbox = `${svg.getBBox().x - 4} ${svg.getBBox().y - 4} ${svg.getBBox().width + 8} ${svg.getBBox().height + 8}`;
        svg.parentNode.setAttributeNS(null, 'viewBox', svgbox);
      });
    } else {
      selectAffiliation.disabled = false;
      textField.foundation_.setValue(''); // delete search field text when the search menu is closed.
      searchResults(); // reset the dropdown symbols
    }
    // This will set the viewBox on all the symbols in the Unit Size dropdown. This is important because whenever someone changes the affiliation it will fuck up the viewBox and hide the unit size amplifiers
    // if (selectUnitSize.foundation_.adapter_.isMenuOpen()) {
    //   document.querySelectorAll('.selectUnitSizeIcon').forEach((svg) => {
    //     svg.setAttributeNS(null, 'viewBox', `${svg.getBBox().x - 4} ${svg.getBBox().y - 4} ${svg.getBBox().width + 8} ${svg.getBBox().height + 8}`);
    //   });
    // }
  });
}));

const config = { attributes: true, childList: true, characterData: true };

observer.observe(mutationTarget, config);

// observer.observe(mutationTarget2, config);
