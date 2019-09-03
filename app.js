/* eslint-disable no-unused-expressions */
// * IMPORTS * //
import { selectAffiliation } from './mdcComponents';
import affiliationOutlineObject from './affiliationOutlineObject';
import militarySymbolsObject from './militarySymbolsObject';
import unitSizeObject from './unitSizeObject';

// * The star of the show * //
// ex- new MilSym('.test', 'Infantry', 'friendly', 'team').placeSymbol();
class MilSym {
  constructor(location, symbol, affiliation, echelon) {
    this.location = document.querySelector(location);
    this.symbol = militarySymbolsObject[symbol].affiliation[affiliation];
    this.affiliation = affiliationOutlineObject[affiliation];
    this.echelon = unitSizeObject[echelon].affiliation[affiliation];
    this.type = militarySymbolsObject[symbol].type;
    this.data = {
      location,
      symbol,
      affiliation,
      echelon,
      type: this.type,
    };
  }

  placeSymbol() {
    this.location.querySelector('svg') ? this.location.querySelector('svg').remove() : null;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // This will find any symbols that have nothing in the echelon path data. You can use this later to exclude them from being inserted into the DOM
    // if (this.echelon.d === '') {
    //   svg.append(this.affiliationOutlineData, this.decoratorData);
    // } else {
    //   svg.append(this.affiliationOutlineData, this.decoratorData, this.echelonData);
    // }
    svg.append(this.affiliationOutlineData, this.decoratorData, this.echelonData);
    this.location.append(svg);
    svg.setAttributeNS(null, 'data-symbol-name', this.data.symbol);
    svg.setAttributeNS(null, 'data-symbol-info', JSON.stringify(this.data)); // this should probably be split into separate data-attrs
    svg.setAttributeNS(null, 'height', `${svg.getBBox().height}`);
    svg.setAttributeNS(null, 'width', `${svg.getBBox().width}`);
    svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
    // svg.setAttributeNS(null, 'viewBox', `${svg.getBBox().x - 4} ${svg.getBBox().y - 4} ${svg.getBBox().width + 8} ${svg.getBBox().height + 8}`);
    // Manually setting the viewBox prevents the symbol from resizing when adding elements like echelon. This might not be the best way to do things.
    svg.setAttributeNS(null, 'viewBox', '21 46 158 108');
  }

  get affiliationOutlineData() {
    const outlineGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    outlineGroup.setAttributeNS(null, 'class', 'outline');
    const outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    outline.setAttributeNS(null, 'stroke', 'black');
    outline.setAttributeNS(null, 'stroke-width', '4');
    const outlineTemplated = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    const generateOutline = () => Object.keys(this.affiliation).forEach((key) => {
      const value = this.affiliation[key];
      // console.log(key, value);
      if (key.indexOf('templated') === 0 && value === true) {
        outline.setAttributeNS(null, 'd', `${this.affiliation.d}`);
        outline.setAttributeNS(null, 'fill', `${this.affiliation.fill}`);
        outlineTemplated.setAttributeNS(null, 'd', `${this.affiliation.d}`);
        outlineTemplated.setAttributeNS(null, 'fill', `${this.affiliation.fill_2}`);
        outlineTemplated.setAttributeNS(null, 'stroke', `${this.affiliation.stroke_2}`);
        outlineTemplated.setAttributeNS(null, 'stroke-width', `${this.affiliation.strokeWidth_2}`);
        outlineTemplated.setAttributeNS(null, 'stroke-dasharray', `${this.affiliation.strokeDashArray_2}`);
        // Had to put this in an async function because the templated outline was popping up ahead of the regular outline
        (async () => {
          await outlineGroup.append(outlineTemplated);
          outlineGroup.prepend(outline);
        })().catch((err) => {
          console.error(err);
        });
      } else {
        outline.setAttributeNS(null, 'd', `${this.affiliation.d}`);
        outline.setAttributeNS(null, 'fill', `${this.affiliation.fill}`);
        outlineGroup.append(outline);
      }
    });

    // Check if the symbol is a piece of equipment
    switch (this.type) {
      case 'Equipment':
        // This will remove the echelon data above the Equipment symbol.
        this.echelon = unitSizeObject.none.affiliation[this.data.affiliation];
        // If the symbol is a friendly piece of equipment, then we need to adjust the outline
        switch (selectAffiliation.value) {
          case 'friendly':
            const outline0 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            outline0.setAttributeNS(null, 'cx', '100');
            outline0.setAttributeNS(null, 'cy', '100');
            outline0.setAttributeNS(null, 'r', '60');
            outline0.setAttributeNS(null, 'fill', 'rgb(128,224,255)');
            outline0.setAttributeNS(null, 'stroke', 'black');
            outline0.setAttributeNS(null, 'stroke-width', '4');
            outlineGroup.append(outline0);
            break;
          case 'friendlyTemplated':
            const outline1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            outline1.setAttributeNS(null, 'cx', '100');
            outline1.setAttributeNS(null, 'cy', '100');
            outline1.setAttributeNS(null, 'r', '60');
            outline1.setAttributeNS(null, 'fill', 'rgb(128,224,255)');
            outline1.setAttributeNS(null, 'stroke', 'black');
            outline1.setAttributeNS(null, 'stroke-width', '4');
            const outline2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            outline2.setAttributeNS(null, 'cx', '100');
            outline2.setAttributeNS(null, 'cy', '100');
            outline2.setAttributeNS(null, 'r', '60');
            outline2.setAttributeNS(null, 'fill', 'none');
            outline2.setAttributeNS(null, 'stroke', 'rgb(239, 239, 239)');
            outline2.setAttributeNS(null, 'stroke-width', '5');
            outline2.setAttributeNS(null, 'stroke-dasharray', '4,4');
            outlineGroup.append(outline1, outline2);
            break;
          default:
            // If the equipment is anything BUT friendly, we can use the normal outlines for Land Units.
            generateOutline();
            break;
        }
        break;
      default:
        generateOutline();
        break;
    }
    return outlineGroup;
  }

  get decoratorData() {
    const decoratorGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    decoratorGroup.classList.add('decorator');
    Object.keys(this.symbol).forEach((key) => {
      if (key.indexOf('path') === 0) {
        const element = this.symbol[key];
        const decorator = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        decorator.setAttributeNS(null, 'd', `${element.d}`);
        // If the default decorator fill is missing, default to black
        !element.fill ? decorator.setAttributeNS(null, 'fill', 'black') : decorator.setAttributeNS(null, 'fill', `${element.fill}`);
        // If the default decorator stroke is missing, default to black
        !element.stroke ? decorator.setAttributeNS(null, 'stroke', 'black') : decorator.setAttributeNS(null, 'stroke', `${element.stroke}`);
        // If the default decorator stroke-width is missing, default to 4
        !element.strokeWidth ? decorator.setAttributeNS(null, 'stroke-width', '4') : decorator.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
        decoratorGroup.append(decorator);
      }
      if (key.indexOf('circle') === 0) {
        const element = this.symbol[key];
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttributeNS(null, 'cx', `${element.cx}`);
        circle.setAttributeNS(null, 'cy', `${element.cy}`);
        circle.setAttributeNS(null, 'r', `${element.r}`);
        // Default circle decorator stroke to black
        !element.stroke ? circle.setAttributeNS(null, 'stroke', 'black') : circle.setAttributeNS(null, 'stroke', `${element.stroke}`);
        // Default circle decorator stroke width to 4
        !element.strokeWidth ? circle.setAttributeNS(null, 'stroke-width', '4') : circle.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
        // Default circle decorator fill to black
        !element.fill ? circle.setAttributeNS(null, 'fill', 'black') : circle.setAttributeNS(null, 'fill', `${element.fill}`);
        decoratorGroup.append(circle);
      }
      if (key.indexOf('text') === 0) {
        const element = this.symbol[key];
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.textContent = element.symbolText;
        text.setAttributeNS(null, 'x', `${element.x}`);
        text.setAttributeNS(null, 'y', `${element.y}`);
        text.setAttributeNS(null, 'text-anchor', `${element.textAnchor}`);
        text.setAttributeNS(null, 'font-size', `${element.fontSize}`);
        // Default decorator font family to Arial
        !element.fontFamily ? text.setAttributeNS(null, 'font-family', 'Arial') : text.setAttributeNS(null, 'font-family', `${element.fontFamily}`);
        // Default decorator font weight to 30
        !element.fontWeight ? text.setAttributeNS(null, 'font-weight', '30') : text.setAttributeNS(null, 'font-weight', `${element.fontWeight}`);
        // Default decorator font stroke to none
        !element.stroke ? text.setAttributeNS(null, 'stroke', 'none') : text.setAttributeNS(null, 'stroke', `${element.stroke}`);
        // Default decorator font stroke width to 4
        !element.strokeWidth ? text.setAttributeNS(null, 'stroke-width', '4') : text.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
        // Default decorator font fill to black
        !element.fill ? text.setAttributeNS(null, 'fill', 'black') : text.setAttributeNS(null, 'fill', `${element.fill}`);
        decoratorGroup.append(text);
      }
    });
    return decoratorGroup;
  }

  get echelonData() {
    const echelonGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    echelonGroup.setAttributeNS(null, 'class', 'echelon');
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    element.setAttributeNS(null, 'd', `${this.echelon.d}`);
    element.setAttributeNS(null, 'fill', 'black');
    element.setAttributeNS(null, 'stroke', 'black');
    element.setAttributeNS(null, 'stroke-width', '4');
    Object.keys(this.echelon).forEach((key) => {
      element.setAttributeNS(null, 'fill', `${this.echelon.fill}`);
    });
    echelonGroup.append(element);
    return echelonGroup;
  }
}

// * ADD SYMBOL THUMBNAILS TO THE DROPDOWN LIST * //
const addSymbolsToDropdownList = () => {
  Object.keys(militarySymbolsObject).forEach((key) => {
    const mdcList = document.querySelector('.mdc-list.symbol-list');
    // Prepend the symbol TYPE information to the list (eg- "Land Unit...")
    const symbolTypeInfo = document.createElement('em');
    symbolTypeInfo.setAttributeNS(null, 'class', 'symbol-type-info');
    symbolTypeInfo.textContent = militarySymbolsObject[key].type.padEnd(15, '.');
    // Append the symbol DESCRIPTION to the list (eg- "Infantry")
    const newli = document.createElement('li');
    newli.setAttributeNS(null, 'class', 'mdc-list-item');
    newli.setAttributeNS(null, 'data-value', key);
    newli.textContent = key.toString();
    newli.prepend(symbolTypeInfo);
    mdcList.append(newli);
    const figureElement = document.createElement('figure');
    figureElement.setAttributeNS(null, 'class', 'symbolFigure');
    figureElement.setAttributeNS(null, 'data-symbol-name', `${key}`); // add the symbol key to the data-attr so they can match up with the list item
    newli.prepend(figureElement);
    // This will add the icons to the dropdown list
    new MilSym(`.symbolFigure[data-symbol-name="${key}"]`, `${key}`, `${selectAffiliation.value}`, 'none').placeSymbol();
  });
};

window.MilSym = MilSym;
window.unitSizeObject = unitSizeObject;
window.affiliationOutlineObject = affiliationOutlineObject;
window.selectAffiliation = selectAffiliation;

export { addSymbolsToDropdownList, MilSym };
