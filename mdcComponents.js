import {MDCRipple} from '@material/ripple/index';

const ripple = new MDCRipple(document.querySelector('.mdc-button'));


import {MDCSelect} from '@material/select';

const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
  //alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
  //If there is an SVG in the symbol panel, remove it
  if (document.querySelector('.newSVG svg')) {
    document.querySelector('.newSVG svg').remove()
  }
  matchPaths(select.value, '.newSVG');
  document.querySelector('.mdc-select__selected-text').textContent = testObj[select.value].fullName; //Had to add this because the selected textbox was throwing some weird errors by adding an extra letter to the beginning for the CBRN Chemical Recon icon
});