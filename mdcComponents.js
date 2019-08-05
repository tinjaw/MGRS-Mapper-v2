// import { MDCRipple } from '@material/ripple/index';
import { MDCSelect } from '@material/select';

// const ripple = new MDCRipple(document.querySelector('.mdc-button'));
const selectSymbol = new MDCSelect(document.querySelector('.symbol-select'));
export const selectAffiliation = new MDCSelect(document.querySelector('.affiliation-select'));

selectSymbol.listen('MDCSelect:change', () => {
  // alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
  // If there is an SVG in the symbol panel, remove it
  if (document.querySelector('.newSVG svg')) {
    document.querySelector('.newSVG svg').remove();
  }

  matchPaths(selectSymbol.value, '.newSVG');
  document.querySelector('.mdc-select__selected-text.mainSymbolSelectedText').textContent = militarySymbolsObject[selectSymbol.value].fullName;
  // Had to add this because the selected textbox was throwing some weird errors by adding an extra letter to the beginning for the CBRN Chemical Recon icon
});

selectAffiliation.listen('MDCSelect:change', () => {
  if (document.querySelector('.newSVG svg')) {
    document.querySelector('.newSVG svg').remove();
  }
  matchPaths(selectSymbol.value, '.newSVG');
});


// Load the default symbol into the panel when the page loads
window.onload = function () {
  selectSymbol.foundation_.setSelectedIndex(0);
};
