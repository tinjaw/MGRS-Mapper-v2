// * IMPORTS * //
import { selectAffiliation } from './mdcComponents';

// * UNIT AFFILIATION OBJECT * //
const affiliationOutline = {
  friendly: {
    templated: false,
    d: 'M25,50 l150,0 0,100 -150,0 z',
    fill: 'rgb(128,224,255)',
  },
  friendlyTemplated: {
    templated: true,
    d: 'M25,50 l150,0 0,100 -150,0 z',
    fill: 'rgb(128,224,255)',
    fill_2: 'none',
    stroke_2: 'rgb(239, 239, 239)',
    strokeWidth_2: '5',
    strokeDashArray_2: '4,4',
  },
  hostile: {
    templated: false,
    d: 'M 100,28 L172,100 100,172 28,100 100,28 Z',
    fill: 'rgb(255,128,128)',
  },
  hostileTemplated: {
    templated: true,
    d: 'M 100,28 L172,100 100,172 28,100 100,28 Z',
    fill: 'rgb(255,128,128)',
    fill_2: 'none',
    stroke_2: 'rgb(239, 239, 239)',
    strokeWidth_2: '5',
    strokeDashArray_2: '4,4',
  },
  unknown: {
    templated: false,
    d: 'M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z',
    fill: 'rgb(255,255,128)',
  },
  pending: {
    templated: true,
    d: 'M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z',
    fill: 'rgb(255,255,128)',
    fill_2: 'none',
    stroke_2: 'rgb(239, 239, 239)',
    strokeWidth_2: '5',
    strokeDashArray_2: '4,4',
  },
  neutral: {
    templated: false,
    d: 'M45,45 l110,0 0,110 -110,0 z',
    fill: 'rgb(170, 255, 170)',
  },
};

// * MILITARY SYMBOLS OBJECT * //
const militarySymbolsObject = {
  default: {
    fullName: 'Default Land Unit',
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: '',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  chemicalRecon: {
    fullName: 'CBRN Chemical Recon',
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85',
          fill: 'none',
        },
        path_2: {
          d: 'M25,150L175,50',
        },
        circle_1: {
          cx: '75',
          cy: '90',
          r: '6',
        },
        circle_2: {
          cx: '125',
          cy: '90',
          r: '6',
        },
        text: {
          symbolText: 'C',
          x: '100',
          y: '77',
          textAnchor: 'middle',
          fontSize: '30',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        const propertyToModify = {
          path_2: {
            d: 'M65,137L137,65',
            fill: 'none',
          },
        };
        // There has to be a better way to do this instead of spamming this const in every affiliation...
        const modifiedTarget = Object.assign({}, this.friendly, propertyToModify);
        return modifiedTarget;
      },
      get hostileTemplated() {
        return this.hostile;
      },
      get unknown() {
        const propertyToModify = {
          path_2: {
            d: 'M50,135L150,65',
            fill: 'none',
          },
        };
        const modifiedTarget = Object.assign({}, this.friendly, propertyToModify);
        return modifiedTarget;
      },
      get pending() {
        return this.unknown;
      },
      get neutral() {
        // https://stackoverflow.com/questions/37932434/how-to-change-a-property-on-an-object-without-mutating-it
        const propertyToModify = {
          path_2: {
            d: 'M45,155L155,45',
            fill: 'none',
          },
        };
        // So basically all modifiedTarget does is copy the properties of the friendly key. propertyToModify then edits the path_2 key with new data
        const modifiedTarget = Object.assign({}, this.friendly, propertyToModify);
        return modifiedTarget;
      },
    },
  },
  infantry: {
    fullName: 'Infantry',
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,50 L175,150 M25,150 L175,50',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M65,65 L137,137 M65, 137 L137, 65',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'M50,65L150,135M50,135L150,65',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,45L155,155M45,155L155,45',
        },
      },
    },
  },
  uas: {
    fullName: 'Unmanned Aerial Surveillance',
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'm 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      get hostile() {
        return this.friendly;
      },
      get hostileTemplated() {
        return this.friendly;
      },
      get unknown() {
        return this.friendly;
      },
      get pending() {
        return this.friendly;
      },
      get neutral() {
        return this.friendly;
      },
    },
  },
  airDefenseArtillery: {
    fullName: 'Air Defense Artillery (radar dome)',
    type: 'Land Unit',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,150 C25,110 175,110 175,150',
          fill: 'none',
        },
      },
      get friendlyTemplated() {
        return this.friendly;
      },
      hostile: {
        path: {
          d: 'M70,142 C70,115 130,115 130,142',
          fill: 'none',
        },
      },
      get hostileTemplated() {
        return this.hostile;
      },
      unknown: {
        path: {
          d: 'm 55,135 c 10,-20 80,-20 90,0',
          fill: 'none',
        },
      },
      get pending() {
        return this.unknown;
      },
      neutral: {
        path: {
          d: 'M45,150 C45,110 155,110 155,150',
          fill: 'none',
        },
      },
    },
  },
};

// * SYMBOL GENERATOR FUNCTION * //
// TODO: Why on God's earth is this function 143 lines long? There has GOT to be a better way
// example - matchPaths('chemicalRecon', '.newSVG');
function matchPaths(symbol, symbolLocation) {
  // ! I cant change these 2 fucking vars to let/const and it's driving me insane
  // eslint-disable-next-line no-var
  var symbol = militarySymbolsObject[symbol].affiliation[selectAffiliation.value];
  // eslint-disable-next-line no-var
  var symbolLocation = document.querySelector(symbolLocation);
  // Create the SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  // Create the group that will contain the Symbol affiliation outline
  const outlineGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  outlineGroup.classList.add('outline');

  // If the symbol affiliation is templated, then add the second path overlay. Otherwise only add 1
  switch (affiliationOutline[selectAffiliation.value].templated) {
    case true:
      const outline1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      outline1.setAttributeNS(null, 'd', `${affiliationOutline[selectAffiliation.value].d}`);
      outline1.setAttributeNS(null, 'fill', `${affiliationOutline[selectAffiliation.value].fill}`);
      outline1.setAttributeNS(null, 'stroke', 'black');
      outline1.setAttributeNS(null, 'stroke-width', '4');
      const outline2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      outline2.setAttributeNS(null, 'd', `${affiliationOutline[selectAffiliation.value].d}`);
      outline2.setAttributeNS(null, 'fill', `${affiliationOutline[selectAffiliation.value].fill_2}`);
      outline2.setAttributeNS(null, 'stroke', `${affiliationOutline[selectAffiliation.value].stroke_2}`);
      outline2.setAttributeNS(null, 'stroke-width', `${affiliationOutline[selectAffiliation.value].strokeWidth_2}`);
      outline2.setAttributeNS(null, 'stroke-dasharray', `${affiliationOutline[selectAffiliation.value].strokeDashArray_2}`);
      outlineGroup.append(outline1, outline2);
      break;
    default: {
      const outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      outline.setAttributeNS(null, 'd', `${affiliationOutline[selectAffiliation.value].d}`);
      outline.setAttributeNS(null, 'fill', `${affiliationOutline[selectAffiliation.value].fill}`);
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
    if (key.indexOf('path') == 0) {
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
Object.keys(militarySymbolsObject).forEach((e) => {
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
    matchPaths(e, `.symbolFigure.${str}`);
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
    console.log('There is no match between the li class and symbol class');
  }
});

// ! This exposes the militarySymbolsObject and matchPaths function to the window so you can access them via console. Remove on production
window.militarySymbolsObject = militarySymbolsObject;
window.matchPaths = matchPaths;
