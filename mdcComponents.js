/* eslint-disable no-underscore-dangle */
// //import { MDCRipple } from '@material/ripple/index';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import Fuse from 'fuse.js';
import militarySymbolsObject from './militarySymbolsObject';
import addSymbolsToDropdownList from './app';
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

  // document.querySelectorAll('.unit-size-outline').forEach((e) => {
  //   // console.log(affiliationOutlineObject[selectAffiliation.value]);
  // e.setAttributeNS(null, 'd', affiliationOutlineObject[selectAffiliation.value].d);
  // e.setAttributeNS(null, 'fill', affiliationOutlineObject[selectAffiliation.value].fill);
  // e.setAttributeNS(null, 'stroke-width', '5');
  // e.parentElement.setAttributeNS(null, 'viewBox', `${e.parentElement.getBBox().x - 4} ${e.parentElement.getBBox().y - 4} ${e.parentElement.getBBox().width + 8} ${e.parentElement.getBBox().height + 8}`);
  //   setTimeout(() => {
  //     console.log(affiliationOutlineObject[selectAffiliation.value].d);
  //   }, 300);
  // });

  //! Calling it here... I am trying to get the Unit Size dropdown symbols to dynamically change depending on the selected unit affiliation. Everything works fine but the viewBox cannot be set for some reason.
  document.querySelectorAll('.unit-size-list .mdc-list-item figure svg path').forEach((e) => {
    // const usp = e.className.baseVal = 'unit-size-path';
    // const uso = e.classList.contains('unit-size-outline');


    e.parentElement.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
    if (e.classList.contains('unit-size-outline')) {
      e.setAttributeNS(null, 'd', affiliationOutlineObject[selectAffiliation.value].d);
      e.setAttributeNS(null, 'fill', affiliationOutlineObject[selectAffiliation.value].fill);
      e.setAttributeNS(null, 'stroke-width', '5');
      console.log(e.getBBox());
    } else {
      e.setAttributeNS(null, 'd', unitSizeObject.squad[selectAffiliation.value].d);
      e.setAttributeNS(null, 'stroke-width', '5');
    }
    // uso.setAttributeNS(null, 'd', affiliationOutlineObject[selectAffiliation.value].d);
    // uso.setAttributeNS(null, 'fill', affiliationOutlineObject[selectAffiliation.value].fill);
    // uso.setAttributeNS(null, 'stroke-width', '5');
  });
});


// selectUnitSize.listen('MDCSelect:change', () => {
//   if (document.querySelector('.newSVG svg')) {
//     document.querySelector('.newSVG svg').remove();
//   }
//   searchResults(); // This will change the unit affiliation on the "Select a Symbol" dropdown
//   generateSymbol(selectSymbol.value, 'newSVG');
//   selectSymbol.foundation_.adapter_.closeMenu();
// });


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
            e2.classList.contains('animateSymbol') ? e2.classList.remove('animateSymbol') : null;
            e2.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
            // e2.setAttributeNS(null, 'viewBox', `${e2.getBBox().x} ${e2.getBBox().y} ${e2.getBBox().width} ${e2.getBBox().height}`);
            //! viewBox is set in the mutation observer
            e2.setAttributeNS(null, 'width', '63');
            e2.setAttributeNS(null, 'height', '43');
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
  selectSymbol.foundation_.setSelectedIndex(0);
};

// ! Mutatation Observer will disable all dropdowns except "Select a Symbol" when the menu is open
const mutationTarget = document.querySelector('.symbol-select');

const observer = new MutationObserver(() => {
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
});

observer.observe(mutationTarget, {
  attributes: true,
  childList: true,
  characterData: true,
});
