/* eslint-disable no-underscore-dangle */
// import { MDCRipple } from '@material/ripple/index';
import { MDCSelect } from '@material/select';

// const ripple = new MDCRipple(document.querySelector('.mdc-button'));
const selectSymbol = new MDCSelect(document.querySelector('.symbol-select'));
export const selectAffiliation = new MDCSelect(document.querySelector('.affiliation-select'));

selectSymbol.listen('MDCSelect:change', () => {
  // If there is an SVG in the symbol panel, remove it
  if (document.querySelector('.newSVG svg')) {
    document.querySelector('.newSVG svg').remove();
  }
  matchPaths(selectSymbol.value, '.newSVG');
  // Had to add this because the selected textbox was throwing some weird errors by adding an extra letter to the beginning of the symbols description
  document.querySelector('.mdc-select__selected-text.mainSymbolSelectedText').textContent = militarySymbolsObject[selectSymbol.value].fullName;
  // This adds the animation to the symbol in the symbol panel. I had to put it here because if it were in matchPaths() it would run every time someone changed the affiliation and it would get really annoying real quickly
  document.querySelector('.newSVG svg').setAttributeNS(null, 'class', 'animateSymbol');
});

selectAffiliation.listen('MDCSelect:change', () => {
  if (document.querySelector('.newSVG svg')) {
    document.querySelector('.newSVG svg').remove();
  }
  matchPaths(selectSymbol.value, '.newSVG');
});

// Load the default symbol into the panel when the page loads
window.onload = () => selectSymbol.foundation_.setSelectedIndex(0);
