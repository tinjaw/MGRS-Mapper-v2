// * IMPORTS * //
import { selectAffiliation } from './mdcComponents';
import affiliationOutlineObject from './affiliationOutlineObject';
import militarySymbolsObject from './militarySymbolsObject';
import unitSizeObject from './unitSizeObject';

// * SYMBOL GENERATOR FUNCTION * //
// TODO: Why on God's earth is this function 182 lines long? There has GOT to be a better way
// example - generateSymbol('chemicalRecon', 'newSVG');
function generateSymbol(symbolToGenerate, whereToPlaceSymbol) {
  const symbol = militarySymbolsObject[symbolToGenerate].affiliation[selectAffiliation.value];
  const symbolLocation = document.querySelector(`[data-symbol-name="${whereToPlaceSymbol}"]`);
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

  // This will look to see if the symbol is a piece of equipment. If it is a piece of equipment AND the affiliation is either Friendly or Friendly-Templated it will remove the old outline and add a new one.
  if (militarySymbolsObject[symbolToGenerate].type === 'Equipment') {
    switch (selectAffiliation.value) {
      case 'friendly':
        symbolLocation.querySelectorAll('.outline > path').forEach((e) => {
          e.remove();
        });
        const outline = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        outline.setAttributeNS(null, 'cx', '100');
        outline.setAttributeNS(null, 'cy', '100');
        outline.setAttributeNS(null, 'r', '60');
        outline.setAttributeNS(null, 'fill', 'rgb(128,224,255)');
        outline.setAttributeNS(null, 'stroke', 'black');
        outline.setAttributeNS(null, 'stroke-width', '4');
        outlineGroup.append(outline);
        break;
      case 'friendlyTemplated':
        symbolLocation.querySelectorAll('.outline > path').forEach((e) => {
          e.remove();
        });
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
        break;
    }
  }
  svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
  svg.setAttributeNS(null, 'viewBox', `${svg.getBBox().x} ${svg.getBBox().y} ${svg.getBBox().width} ${svg.getBBox().height}`);
  svg.setAttributeNS(null, 'width', `${svg.getBBox().width}`);
  svg.setAttributeNS(null, 'height', `${svg.getBBox().height}`);
  svg.setAttributeNS(null, 'data-symbol-desc', `${symbolToGenerate}`);
}

// * ADD UNIT SIZE TO THE DROPDOWN LIST * //
const addUnitSizesToDropdownList = () => Object.keys(unitSizeObject).forEach((elem) => {
  const mdcList = document.querySelector('.mdc-list.unit-size-list');
  // Create a new list element
  const newli = document.createElement('li');
  newli.setAttribute('class', 'mdc-list-item');
  newli.setAttributeNS(null, 'data-value', elem);
  newli.textContent = elem.charAt(0).toUpperCase() + elem.slice(1);
  mdcList.append(newli);
  // Create a new figure element
  const figureElement = document.createElement('figure');
  figureElement.setAttribute('class', 'symbolFigure');
  figureElement.setAttribute('data-symbol-name', `${elem}`);
  newli.prepend(figureElement);
  // Now match the figure element to the right symbol
  if (figureElement.dataset.symbolName === elem.toString()) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('data-unit-size', `${elem}`);

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const linearGradientOutline = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    const stopOutline1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    const stopOutline2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    const stopOutline3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    linearGradientOutline.setAttributeNS(null, 'id', `transparentOutline_${elem}`);
    linearGradientOutline.setAttributeNS(null, 'gradientUnits', 'objectBoundingBox');
    linearGradientOutline.setAttributeNS(null, 'x1', '0');
    linearGradientOutline.setAttributeNS(null, 'y1', '0');
    linearGradientOutline.setAttributeNS(null, 'x2', '0');
    linearGradientOutline.setAttributeNS(null, 'y2', '1');
    stopOutline1.setAttributeNS(null, 'stop-color', affiliationOutlineObject[selectAffiliation.value].fill);
    stopOutline1.setAttributeNS(null, 'stop-opacity', '1');
    stopOutline1.setAttributeNS(null, 'offset', '0');
    stopOutline2.setAttributeNS(null, 'stop-color', affiliationOutlineObject[selectAffiliation.value].fill);
    stopOutline2.setAttributeNS(null, 'stop-opacity', '0');
    stopOutline2.setAttributeNS(null, 'offset', '0.45');
    stopOutline3.setAttributeNS(null, 'stop-color', 'transparent');
    stopOutline3.setAttributeNS(null, 'stop-opacity', '0');
    stopOutline3.setAttributeNS(null, 'offset', '1');
    linearGradientOutline.append(stopOutline1, stopOutline2, stopOutline3);

    const linearGradientStroke = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    const stopStroke1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    const stopStroke2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    const stopStroke3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    linearGradientStroke.setAttributeNS(null, 'id', `transparentStroke_${elem}`);
    linearGradientStroke.setAttributeNS(null, 'gradientUnits', 'objectBoundingBox');
    linearGradientStroke.setAttributeNS(null, 'x1', '0');
    linearGradientStroke.setAttributeNS(null, 'y1', '0');
    linearGradientStroke.setAttributeNS(null, 'x2', '0');
    linearGradientStroke.setAttributeNS(null, 'y2', '1');
    stopStroke1.setAttributeNS(null, 'stop-color', 'black');
    stopStroke1.setAttributeNS(null, 'stop-opacity', '1');
    stopStroke1.setAttributeNS(null, 'offset', '0');
    stopStroke2.setAttributeNS(null, 'stop-color', 'black');
    stopStroke2.setAttributeNS(null, 'stop-opacity', '0');
    stopStroke2.setAttributeNS(null, 'offset', '0.45');
    stopStroke3.setAttributeNS(null, 'stop-color', 'transparent');
    stopStroke3.setAttributeNS(null, 'stop-opacity', '0');
    stopStroke3.setAttributeNS(null, 'offset', '1');
    linearGradientStroke.append(stopStroke1, stopStroke2, stopStroke3);
    defs.append(linearGradientOutline, linearGradientStroke);

    const outlinePathGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    outlinePathGroup.classList.add('outline-group');
    const unitSizePathGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    unitSizePathGroup.classList.add('unit-size-group');
    const unitSizePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    unitSizePath.classList.add('unit-size-path');

    // Add the stroke-dasharray to the unit size symbol if its templated
    switch (affiliationOutlineObject[selectAffiliation.value].templated) {
      case true:
        const outline1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        outline1.classList.add('unit-size-outline');
        outline1.setAttributeNS(null, 'd', `${affiliationOutlineObject[selectAffiliation.value].d}`);
        outline1.setAttributeNS(null, 'fill', `url(#transparentOutline_${elem})`);
        outline1.setAttributeNS(null, 'stroke', `url(#transparentStroke_${elem})`);
        outline1.setAttributeNS(null, 'stroke-width', '5');
        const outline2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        outline2.setAttributeNS(null, 'd', `${affiliationOutlineObject[selectAffiliation.value].d}`);
        outline2.setAttributeNS(null, 'fill', `${affiliationOutlineObject[selectAffiliation.value].fill_2}`);
        outline2.setAttributeNS(null, 'stroke', `${affiliationOutlineObject[selectAffiliation.value].stroke_2}`);
        outline2.setAttributeNS(null, 'stroke-width', `${affiliationOutlineObject[selectAffiliation.value].strokeWidth_2}`);
        outline2.setAttributeNS(null, 'stroke-dasharray', `${affiliationOutlineObject[selectAffiliation.value].strokeDashArray_2}`);
        outlinePathGroup.append(outline1, outline2);
        break;
      default: {
        const outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        outline.classList.add('unit-size-outline');
        outline.setAttributeNS(null, 'd', `${affiliationOutlineObject[selectAffiliation.value].d}`);
        outline.setAttributeNS(null, 'fill', `url(#transparentOutline_${elem})`);
        outline.setAttributeNS(null, 'stroke', `url(#transparentStroke_${elem})`);
        outline.setAttributeNS(null, 'stroke-width', '5');
        outlinePathGroup.append(outline);
        break;
      }
    }

    unitSizePath.setAttributeNS(null, 'd', unitSizeObject[elem][selectAffiliation.value].d);
    unitSizePath.setAttributeNS(null, 'stroke-width', '8');
    unitSizePath.setAttributeNS(null, 'stroke', 'black');
    unitSizePathGroup.append(unitSizePath);

    svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
    svg.setAttributeNS(null, 'viewBox', '90 -30 20 110');
    svg.setAttributeNS(null, 'width', '93');
    svg.setAttributeNS(null, 'height', '64');

    svg.append(defs, outlinePathGroup, unitSizePathGroup);

    figureElement.append(svg);
  }
});


// * ADD SYMBOL THUMBNAILS TO THE DROPDOWN LIST * //
const addSymbolsToDropdownList = () => Object.keys(militarySymbolsObject).forEach((e) => {
  const mdcList = document.querySelector('.mdc-list.symbol-list');
  // Prepend the symbol TYPE information to the list (eg- "Land Unit...")
  const symbolTypeInfo = document.createElement('em');
  symbolTypeInfo.setAttribute('class', 'symbol-type-info');
  symbolTypeInfo.textContent = militarySymbolsObject[e].type.padEnd(15, '.');
  // Append the symbol DESCRIPTION to the list (eg- "Infantry")
  const newli = document.createElement('li');
  newli.setAttribute('class', 'mdc-list-item');
  newli.setAttributeNS(null, 'data-value', e);
  newli.textContent = e.toString();

  newli.prepend(symbolTypeInfo);
  mdcList.append(newli);
  const figureElement = document.createElement('figure');
  figureElement.setAttribute('class', 'symbolFigure');
  figureElement.setAttribute('data-symbol-name', `${e}`); // add the symbol key to the data-attr so they can match up with the list item
  newli.prepend(figureElement);
  // This will add the icons to the dropdown list
  if (figureElement.dataset.symbolName === e.toString()) {
    generateSymbol(e, e.toString());
    // Now set the viewBox and dimensions for the thumbnails
    newli.querySelectorAll('.symbolFigure svg').forEach((e2) => {
      // This just removes the animation on the symbol on the dropdown list
      e2.classList.contains('animateSymbol') ? e2.classList.remove('animateSymbol') : null;
      e2.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
      e2.setAttributeNS(null, 'viewBox', `${e2.getBBox().x - 4} ${e2.getBBox().y - 4} ${e2.getBBox().width + 8} ${e2.getBBox().height + 8}`);
      e2.setAttributeNS(null, 'width', '63');
      e2.setAttributeNS(null, 'height', '43');
    });
  } else {
    console.error('There is no match between the li class and symbol class...Restarting');
    setTimeout(() => {
      addSymbolsToDropdownList();
    }, 300);
  }
});

// ! This exposes the militarySymbolsObject and generateSymbol function to the window so you can access them via console. Remove on production
window.militarySymbolsObject = militarySymbolsObject;
window.generateSymbol = generateSymbol;
window.unitSizeObject = unitSizeObject;
window.affiliationOutlineObject = affiliationOutlineObject;
window.selectAffiliation = selectAffiliation;

export { addSymbolsToDropdownList, addUnitSizesToDropdownList };
