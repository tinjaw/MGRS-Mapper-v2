// * IMPORTS * //
import { selectAffiliation } from './mdcComponents';
import affiliationOutlineObject from './affiliationOutlineObject';
import militarySymbolsObject from './militarySymbolsObject';

// * SYMBOL GENERATOR FUNCTION * //
// TODO: Why on God's earth is this function 143 lines long? There has GOT to be a better way
// example - generateSymbol('chemicalRecon', '.newSVG');
function generateSymbol(symbolToGenerate, whereToPlaceSymbol) {
  const symbol = militarySymbolsObject[symbolToGenerate].affiliation[selectAffiliation.value];
  const symbolLocation = document.querySelector(whereToPlaceSymbol);

  // Create the SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  // Create the group that will contain the Symbol affiliation outline
  const outlineGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  outlineGroup.classList.add('outline');

  // If the symbol affiliation is templated, then add the second path overlay. Otherwise only add 1
  switch (affiliationOutlineObject[selectAffiliation.value].templated) {
    case true:
      const outline1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      outline1.setAttributeNS(null, 'd', `${affiliationOutlineObject[selectAffiliation.value].d}`);
      outline1.setAttributeNS(null, 'fill', `${affiliationOutlineObject[selectAffiliation.value].fill}`);
      outline1.setAttributeNS(null, 'stroke', 'black');
      outline1.setAttributeNS(null, 'stroke-width', '4');
      const outline2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      outline2.setAttributeNS(null, 'd', `${affiliationOutlineObject[selectAffiliation.value].d}`);
      outline2.setAttributeNS(null, 'fill', `${affiliationOutlineObject[selectAffiliation.value].fill_2}`);
      outline2.setAttributeNS(null, 'stroke', `${affiliationOutlineObject[selectAffiliation.value].stroke_2}`);
      outline2.setAttributeNS(null, 'stroke-width', `${affiliationOutlineObject[selectAffiliation.value].strokeWidth_2}`);
      outline2.setAttributeNS(null, 'stroke-dasharray', `${affiliationOutlineObject[selectAffiliation.value].strokeDashArray_2}`);
      outlineGroup.append(outline1, outline2);
      break;
    default: {
      const outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      outline.setAttributeNS(null, 'd', `${affiliationOutlineObject[selectAffiliation.value].d}`);
      outline.setAttributeNS(null, 'fill', `${affiliationOutlineObject[selectAffiliation.value].fill}`);
      outline.setAttributeNS(null, 'stroke', 'black');
      outline.setAttributeNS(null, 'stroke-width', '4');
      outlineGroup.append(outline);
      break;
    }
  }

  // Create the group that will contain all the symbol decorator elements
  const decoratorGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  decoratorGroup.classList.add('decorator');
  // this.symbol = militarySymbolsObject[symbol].affiliation[affiliationValue];
  Object.keys(symbol).forEach((key) => {
    if (key.indexOf('path') === 0) {
      const element = symbol[key];
      const decorator = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      decorator.setAttributeNS(null, 'd', `${element.d}`);
      // If the default decorator fill is missing, default to black
      if (!element.fill) {
        decorator.setAttributeNS(null, 'fill', 'black');
      } else {
        decorator.setAttributeNS(null, 'fill', `${element.fill}`);
      }
      // If the default decorator stroke is missing, default to black
      if (!element.stroke) {
        decorator.setAttributeNS(null, 'stroke', 'black');
      } else {
        decorator.setAttributeNS(null, 'stroke', `${element.stroke}`);
      }
      // If the default decorator stroke-width is missing, default to 4
      if (!element.strokeWidth) {
        decorator.setAttributeNS(null, 'stroke-width', '4');
      } else {
        decorator.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
      }
      decoratorGroup.append(decorator);
    }
    if (key.indexOf('circle') == 0) {
      const element = symbol[key];
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttributeNS(null, 'cx', `${element.cx}`);
      circle.setAttributeNS(null, 'cy', `${element.cy}`);
      circle.setAttributeNS(null, 'r', `${element.r}`);
      // Default circle decorator stroke to black
      if (!element.stroke) {
        circle.setAttributeNS(null, 'stroke', 'black');
      } else {
        circle.setAttributeNS(null, 'stroke', `${element.stroke}`);
      }
      // Default circle decorator stroke width to 4
      if (!element.strokeWidth) {
        circle.setAttributeNS(null, 'stroke-width', '4');
      } else {
        circle.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
      }
      // Default circle decorator fill to black
      if (!element.fill) {
        circle.setAttributeNS(null, 'fill', 'black');
      } else {
        circle.setAttributeNS(null, 'fill', `${element.fill}`);
      }
      decoratorGroup.append(circle);
    }
    if (key.indexOf('text') == 0) {
      const element = symbol[key];
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.textContent = element.symbolText;
      text.setAttributeNS(null, 'x', `${element.x}`);
      text.setAttributeNS(null, 'y', `${element.y}`);
      text.setAttributeNS(null, 'text-anchor', `${element.textAnchor}`);
      text.setAttributeNS(null, 'font-size', `${element.fontSize}`);
      // Default decorator font family to Arial
      if (!element.fontFamily) {
        text.setAttributeNS(null, 'font-family', 'Arial');
      } else {
        text.setAttributeNS(null, 'font-family', `${element.fontFamily}`);
      }
      // Default decorator font weight to 30
      if (!element.fontWeight) {
        text.setAttributeNS(null, 'font-weight', '30');
      } else {
        text.setAttributeNS(null, 'font-weight', `${element.fontWeight}`);
      }
      // Default decorator font stroke to none
      if (!element.stroke) {
        text.setAttributeNS(null, 'stroke', 'none');
      } else {
        text.setAttributeNS(null, 'stroke', `${element.stroke}`);
      }
      // Default decorator font stroke width to 4
      if (!element.strokeWidth) {
        text.setAttributeNS(null, 'stroke-width', '4');
      } else {
        text.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
      }
      // Default decorator font fill to black
      if (!element.fill) {
        text.setAttributeNS(null, 'fill', 'black');
      } else {
        text.setAttributeNS(null, 'fill', `${element.fill}`);
      }
      decoratorGroup.append(text);
    }
  });

  svg.append(outlineGroup, decoratorGroup);
  // document.querySelector('.newSVG').append(svg);
  symbolLocation.append(svg);
  svg.setAttributeNS(null, 'preserveAspectRatio', 'none');
  svg.setAttributeNS(null, 'viewBox', `${svg.getBBox().x} ${svg.getBBox().y} ${svg.getBBox().width} ${svg.getBBox().height}`);
  svg.setAttributeNS(null, 'width', `${svg.getBBox().width}`);
  svg.setAttributeNS(null, 'height', `${svg.getBBox().height}`);
}


// * ADD SYMBOL THUMBNAILS TO THE DROPDOWN LIST * //
const addSymbolsToDropdownList = Object.keys(militarySymbolsObject).forEach((e) => {
  const mdcList = document.querySelector('.mdc-list.symbol-list');
  // Prepend the symbol TYPE information to the list (eg- "Land Unit...")
  const symbolTypeInfo = document.createElement('em');
  symbolTypeInfo.setAttribute('class', 'symbol-type-info');
  symbolTypeInfo.textContent = militarySymbolsObject[e].type.padEnd(15, '.');
  // Append the symbol DESCRIPTION to the list (eg- "Infantry")
  const newli = document.createElement('li');
  newli.setAttribute('class', 'mdc-list-item');
  newli.setAttribute('data-value', e);
  newli.textContent = militarySymbolsObject[e].fullName;
  newli.prepend(symbolTypeInfo);
  mdcList.append(newli);
  const figureElement = document.createElement('figure');
  figureElement.setAttribute('class', `symbolFigure ${e}`); // add the symbol key to the classlist so they can match up with the list item
  newli.prepend(figureElement);
  // This will add the icons to the dropdown list
  const str = e.toString();
  if (figureElement.classList.contains(str)) {
    generateSymbol(e, `.symbolFigure.${str}`);
    // Now set the viewBox and dimensions for the thumbnails
    document.querySelectorAll('.symbolFigure svg').forEach((e) => {
      // This just removes the animation on the symbol on the dropdown list
      e.classList.contains('animateSymbol') ? e.classList.remove('animateSymbol') : null;
      e.setAttributeNS(null, 'preserveAspectRatio', 'none');
      e.setAttributeNS(null, 'viewBox', '21 46 158 108');
      e.setAttributeNS(null, 'width', '63');
      e.setAttributeNS(null, 'height', '43');
    });
  } else {
    console.error('There is no match between the li class and symbol class...Restarting');
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      addSymbolsToDropdownList;
    }, 300);
  }
});

// ! This exposes the militarySymbolsObject and generateSymbol function to the window so you can access them via console. Remove on production
window.militarySymbolsObject = militarySymbolsObject;
window.generateSymbol = generateSymbol;
