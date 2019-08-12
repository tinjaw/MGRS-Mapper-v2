/* eslint-disable no-underscore-dangle */
// //import { MDCRipple } from '@material/ripple/index';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import Fuse from 'fuse.js';
import militarySymbolsObject from './militarySymbolsObject';

const textField = new MDCTextField(document.querySelector('.searchSymbols'));

// //const ripple = new MDCRipple(document.querySelector('.mdc-button'));
const selectSymbol = new MDCSelect(document.querySelector('.symbol-select'));
export const selectAffiliation = new MDCSelect(document.querySelector('.affiliation-select'));

const symbolSearcher = new MDCSelect(document.querySelector('.symbol-searcher'));


selectSymbol.listen('MDCSelect:change', () => {
  // If there is an SVG in the symbol panel, remove it
  if (document.querySelector('.newSVG svg')) {
    document.querySelector('.newSVG svg').remove();
  }
  generateSymbol(selectSymbol.foundation_.adapter_.getValue(), 'newSVG');
  // ! Had to add this because the selected textbox was throwing some weird errors by adding an extra letter to the beginning of the symbols description
  document.querySelector('.mdc-select__selected-text.mainSymbolSelectedText').textContent = selectSymbol.value;
  // ! This adds the animation to the symbol in the symbol panel. I had to put it here because if it were in generateSymbol() it would run every time someone changed the affiliation and it would get really annoying real quickly
  document.querySelector('.newSVG svg').setAttributeNS(null, 'class', 'animateSymbol');
});

selectAffiliation.listen('MDCSelect:change', () => {
  if (document.querySelector('.newSVG svg')) {
    document.querySelector('.newSVG svg').remove();
  }
  generateSymbol(selectSymbol.value, 'newSVG');
});

symbolSearcher.listen('MDCSelect:change', () => {
  document.querySelector('.newSVG svg') ? document.querySelector('.newSVG svg').remove() : null;
  generateSymbol(symbolSearcher.foundation_.adapter_.getValue(), 'newSVG');
  document.querySelector('.newSVG svg').setAttributeNS(null, 'class', 'animateSymbol');
});

const options = {
  shouldSort: true,
  // tokenize: true,
  // matchAllTokens: true,
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

    symbolSearcher.menu_.items.length === 0 ? symbolSearcher.foundation_.adapter_.closeMenu() : null;
    symbolSearcher.menu_.items ? symbolSearcher.menu_.items.forEach(e => e.remove()) : null;

    result.forEach((e) => {
      const elem = [...new Set(e.matches)];
      for (let index = 0; index < elem.length; index++) {
        const element = elem[index].value;

        symbolSearcher.foundation_.adapter_.openMenu();
        const mdcList = document.querySelector('.mdc-list.symbol-search-results');
        const newli = document.createElement('li');
        newli.setAttribute('class', 'mdc-list-item');
        newli.setAttribute('data-value', element);
        newli.textContent = element;
        mdcList.append(newli);
        const figureElement = document.createElement('figure');
        figureElement.setAttribute('class', 'symbolFigure');
        figureElement.setAttribute('data-symbol-name', `${element}-two`); // add the symbol key to the data-attr so they can match up with the list item
        newli.prepend(figureElement);

        if (figureElement.dataset.symbolName === `${element}-two`) {
          generateSymbol(element, `${element}-two`);
          // Now set the viewBox and dimensions for the thumbnails
          newli.querySelectorAll('.symbolFigure svg').forEach((e2) => {
            // This just removes the animation on the symbol on the dropdown list
            e2.classList.contains('animateSymbol') ? e.classList.remove('animateSymbol') : null;
            e2.setAttributeNS(null, 'preserveAspectRatio', 'none');
            e2.setAttributeNS(null, 'viewBox', '21 46 158 108');
            e2.setAttributeNS(null, 'width', '63');
            e2.setAttributeNS(null, 'height', '43');
          });
        }
      }
    });
  } else {
    symbolSearcher.menu_.items ? symbolSearcher.menu_.items.forEach(e => e.remove()) : null;
    symbolSearcher.foundation_.adapter_.closeMenu();
  }
}, 250);

textField.input_.addEventListener('input', searchResults);

// ! the sr2 func takes in a diff func... This is supposed to remove the elements in the "select a symbol" dropdown and replace them with matching elements but it doens't work. The searchResults() func works better
// textField.input_.addEventListener('input', sr2);

Array.prototype.diff = function (arr2) {
  const ret = [];
  for (const i in this) {
    if (arr2.indexOf(this[i]) > -1) {
      ret.push(this[i]);
    }
  }
  return ret;
};


function sr2() {
  if (textField.input_.value !== '') {
    const fuse = new Fuse(options.keys, options); // "list" is the item array
    const result = fuse.search(textField.value);
    const arr1 = selectSymbol.menu_.items.map(e => e.dataset.value);
    const me = [...new Array(result)].map((x, i) => x[i].matches)[0].map(x => x.value);
    // console.dir(arr1.diff(me));
    // const arr2 = [...new Array(arr1.diff(me))];
    // console.log(arr2[0].map(e => e));
    selectSymbol.menu_.items.length === 0 ? selectSymbol.foundation_.adapter_.closeMenu() : null;
    // const array3 = arr2.filter(item => !arr1.includes(item));
    // console.log(array3);

    arr1.diff(me).forEach((e) => {
      selectSymbol.menu_.items ? selectSymbol.menu_.items.forEach(e => e.remove()) : null;
      selectSymbol.foundation_.adapter_.openMenu();
      const mdcList = document.querySelector('.mdc-list.symbol-list');
      const newli = document.createElement('li');
      newli.setAttribute('class', 'mdc-list-item');
      newli.setAttribute('data-value', e);
      newli.textContent = e;
      mdcList.append(newli);
      const figureElement = document.createElement('figure');
      figureElement.setAttribute('class', 'symbolFigure');
      figureElement.setAttribute('data-symbol-name', `${e}`);
      newli.prepend(figureElement);
      if (figureElement.dataset.symbolName === `${e}`) {
        generateSymbol(e, `${e}`);
        newli.querySelectorAll('.symbolFigure svg').forEach((e2) => {
          e2.classList.contains('animateSymbol') ? e.classList.remove('animateSymbol') : null;
          e2.setAttributeNS(null, 'preserveAspectRatio', 'none');
          e2.setAttributeNS(null, 'viewBox', '21 46 158 108');
          e2.setAttributeNS(null, 'width', '63');
          e2.setAttributeNS(null, 'height', '43');
        });
      }
    });
  }
}


window.textField = textField;
window.selectSymbol = selectSymbol;
window.symbolSearcher = symbolSearcher;

// Load the default symbol into the panel when the page loads
window.onload = () => selectSymbol.foundation_.setSelectedIndex(0);
