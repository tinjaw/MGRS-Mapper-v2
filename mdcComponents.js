/* eslint-disable no-underscore-dangle */
// //import { MDCRipple } from '@material/ripple/index';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import militarySymbolsObject from './militarySymbolsObject';

const textField = new MDCTextField(document.querySelector('.searchSymbols'));

// //const ripple = new MDCRipple(document.querySelector('.mdc-button'));
const selectSymbol = new MDCSelect(document.querySelector('.symbol-select'));
export const selectAffiliation = new MDCSelect(document.querySelector('.affiliation-select'));

selectSymbol.listen('MDCSelect:change', () => {
  // If there is an SVG in the symbol panel, remove it
  if (document.querySelector('.newSVG svg')) {
    document.querySelector('.newSVG svg').remove();
  }
  generateSymbol(selectSymbol.value, '.newSVG');
  // ! Had to add this because the selected textbox was throwing some weird errors by adding an extra letter to the beginning of the symbols description
  document.querySelector('.mdc-select__selected-text.mainSymbolSelectedText').textContent = militarySymbolsObject[selectSymbol.value].fullName;
  // ! This adds the animation to the symbol in the symbol panel. I had to put it here because if it were in generateSymbol() it would run every time someone changed the affiliation and it would get really annoying real quickly
  document.querySelector('.newSVG svg').setAttributeNS(null, 'class', 'animateSymbol');
});

selectAffiliation.listen('MDCSelect:change', () => {
  if (document.querySelector('.newSVG svg')) {
    document.querySelector('.newSVG svg').remove();
  }
  generateSymbol(selectSymbol.value, '.newSVG');
});


textField.input_.addEventListener('input', (event) => {
  // const gay = document.createElement('select');
  // gay.classList.add('searchAndSelect');
  // const gay2 = new MDCSelect(document.querySelector('.searchAndSelect'));
  // document.querySelector('.mdc-text-field-helper-line').innerHTML = selectSymbol.menu_.items.forEach(e => e.outerHTML);


  // if (militarySymbolsObject.hasOwnProperty(textField.value)) {
  //   // myString is a key on the Object, but not its prototype.
  //   console.log('match');
  //   generateSymbol(textField.value, '.test');
  // }
  const searchValue = textField.value;

  // const valueContainer = Object.values(militarySymbolsObject).map(e => e.fullName);
  const valueContainerObject = new Array();
  for (let index = 0; index < Object.entries(militarySymbolsObject).length; index++) {
    const symbolID = Object.entries(militarySymbolsObject)[index][0];
    const { fullName } = Object.entries(militarySymbolsObject)[index][1];
    valueContainerObject[index] = new Object([symbolID, fullName]);
  }
  // const valueContainer = valueContainerObject.map(e => e[1]);
  const valueContainer = valueContainerObject.flat();

  function findFuzzyMatches(valueContainer, searchValue) {
    return valueContainer.filter(string => isFuzzyMatch(string, searchValue));
  }

  function isFuzzyMatch(string, searchValue) {
    string = string.toLowerCase();
    searchValue = searchValue.toLowerCase();
    let i = 0;
    for (let j = 0; j < string.length; j++) {
      if (string.charAt(j) === searchValue.charAt(i)) {
        i++;
      }
      if (i === searchValue.length) {
        return true;
      }
    }
    return false;
  }

  // console.log(findFuzzyMatches(valueContainer, searchValue));

  const filteredKeywords = valueContainer.filter(word => findFuzzyMatches(valueContainer, searchValue).includes(word));
  // console.log(filteredKeywords.toString().split(',').shift());
  const matchedKeywords = filteredKeywords.toString().split(',').shift();

  if (militarySymbolsObject.hasOwnProperty(matchedKeywords)) {
    // selectSymbol.menu_.items.map((key) => {
    //   document.querySelector('.test').innerHTML = key.outerHTML;
    // });
    selectSymbol.menu_.items.filter((x) => {
      if (x.dataset.value.includes(matchedKeywords)) {
        document.querySelector('.test').innerHTML += x.outerHTML;
        // ! I'm tired... This works.. sorta. You need to remove the duplicate results and pin it to the bottom of the search field.
      }
    });
  }
  // const results = valueContainerObject.filter(x => x.includes(filteredKeywords.toString()));
  // console.log(results.toString().split(',').shift()); // ["List"]

  // for (const key in militarySymbolsObject) {
  //   if (militarySymbolsObject.hasOwnProperty(key)) {
  //     const symbolFullName = militarySymbolsObject[key];
  //     if (symbolFullName.fullName == filteredKeywords) {
  //       console.log(symbolFullName);
  //     }
  //   }
  // }
});

window.textField = textField;
window.selectSymbol = selectSymbol;


// Load the default symbol into the panel when the page loads
window.onload = () => selectSymbol.foundation_.setSelectedIndex(0);
