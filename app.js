const affiliationOutline = {
  friendly: {
    d: 'M25,50 l150,0 0,100 -150,0 z',
    fill: 'rgb(128,224,255)'
  },
  hostile: {
    d: 'M 100,28 L172,100 100,172 28,100 100,28 Z',
    fill: 'rgb(255,128,128)'
  }
};

//example - matchPaths('chemicalRecon', '.newSVG');
function matchPaths(symbol, symbolLocation) {
  const affiliationValue = document.querySelector('.affiliationDropdown').value;
  var symbol = testObj[symbol].affiliation[affiliationValue];
  var symbolLocation = document.querySelector(symbolLocation);
  //Create the SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  //Create the group that will contain the Symbol affiliation outline
  const outlineGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  outlineGroup.classList.add('outline');
  const outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  outline.setAttributeNS(null, 'd', `${affiliationOutline[affiliationValue].d}`);
  outline.setAttributeNS(null, 'fill', `${affiliationOutline[affiliationValue].fill}`);
  outline.setAttributeNS(null, 'stroke', 'black');
  outline.setAttributeNS(null, 'stroke-width', '4');
  outlineGroup.append(outline);
  //Create the group that will contain all the symbol decorator elements
  const decoratorGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  decoratorGroup.classList.add('decorator');
  //this.symbol = testObj[symbol].affiliation[affiliationValue];
  for (var key in symbol) {
    if (key.indexOf('path') == 0) {
      const element = symbol[key];
      const decorator = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      decorator.setAttributeNS(null, 'd', `${element.d}`);
      //If the default decorator fill is missing, default to black
      if (!element.fill) {
        decorator.setAttributeNS(null, 'fill', 'black');
      } else {
        decorator.setAttributeNS(null, 'fill', `${element.fill}`);
      }
      //If the default decorator stroke is missing, default to black
      if (!element.stroke) {
        decorator.setAttributeNS(null, 'stroke', 'black');
      } else {
        decorator.setAttributeNS(null, 'stroke', `${element.stroke}`);
      }
      //If the default decorator stroke is missing, default to 4
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
      //Default circle decorator stroke to black
      if (!element.stroke) {
        circle.setAttributeNS(null, 'stroke', 'black');
      } else {
        circle.setAttributeNS(null, 'stroke', `${element.stroke}`);
      }
      //Default circle decorator stroke width to 4
      if (!element.strokeWidth) {
        circle.setAttributeNS(null, 'stroke-width', '4');
      } else {
        circle.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
      }
      //Default circle decorator fill to black
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
      //Default decorator font family to Arial
      if (!element.fontFamily) {
        text.setAttributeNS(null, 'font-family', 'Arial');
      } else {
        text.setAttributeNS(null, 'font-family', `${element.fontFamily}`);
      }
      //Default decorator font weight to 30
      if (!element.fontWeight) {
        text.setAttributeNS(null, 'font-weight', '30');
      } else {
        text.setAttributeNS(null, 'font-weight', `${element.fontWeight}`);
      }
      //Default decorator font stroke to none
      if (!element.stroke) {
        text.setAttributeNS(null, 'stroke', 'none');
      } else {
        text.setAttributeNS(null, 'stroke', `${element.stroke}`);
      }
      //Default decorator font stroke width to 4
      if (!element.strokeWidth) {
        text.setAttributeNS(null, 'stroke-width', '4');
      } else {
        text.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
      }
      //Default decorator font fill to black
      if (!element.fill) {
        text.setAttributeNS(null, 'fill', 'black');
      } else {
        text.setAttributeNS(null, 'fill', `${element.fill}`);
      }
      decoratorGroup.append(text);
    }
  }
  svg.append(outlineGroup, decoratorGroup);
  //document.querySelector('.newSVG').append(svg);
  symbolLocation.append(svg);
  svg.setAttributeNS(null, 'preserveAspectRatio', 'none');
  svg.setAttributeNS(null, 'viewBox', `${svg.getBBox().x} ${svg.getBBox().y} ${svg.getBBox().width} ${svg.getBBox().height}`);
  svg.setAttributeNS(null, 'width', `${svg.getBBox().width}`);
  svg.setAttributeNS(null, 'height', `${svg.getBBox().height}`);
}

var testObj = {
  chemicalRecon: {
    fullName: 'CBRN Chemical Recon',
    affiliation: {
      friendly: {
        path_1: {
          d: 'm 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85',
          fill: 'none'
        },
        path_2: {
          d: 'M25,150L175,50'
        },
        circle_1: {
          cx: '75',
          cy: '90',
          r: '6'
        },
        circle_2: {
          cx: '125',
          cy: '90',
          r: '6'
        },
        text: {
          symbolText: 'C',
          x: '100',
          y: '77',
          textAnchor: 'middle',
          fontSize: '30'
        }
      },
      hostile: {
        path_1: {
          d: 'm 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85',
          strokeWidth: '4',
          stroke: 'black',
          fill: 'none'
        },
        path_2: {
          d: 'M60,130L140,70',
          strokeWidth: '4',
          stroke: 'black',
          fill: 'black'
        },
        circle_1: {
          cx: '75',
          cy: '90',
          r: '6',
          strokeWidth: '4',
          stroke: 'black',
          fill: 'black'
        },
        circle_2: {
          cx: '125',
          cy: '90',
          r: '6',
          strokeWidth: '4',
          stroke: 'black',
          fill: 'black'
        },
        text: {
          symbolText: 'C',
          x: '100',
          y: '77',
          textAnchor: 'middle',
          fontSize: '30',
          fontFamily: 'Arial',
          fontWeight: 'bold',
          strokeWidth: '4',
          stroke: 'none',
          fill: 'black'
        }
      },
      //https://stackoverflow.com/questions/2787245/how-can-a-javascript-object-refer-to-values-in-itself
      get neutral() {
        return this.friendly;
      },
    }
  },
  infantry: {
    fullName: 'Infantry',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,50 L175,150 M25,150 L175,50',
          stroke: 'pink'
        }
      },
      hostile: {
        path: {
          d: 'M60,70L140,130M60,130L140,70'
        }
      }
    }
  },
  uas: {
    fullName: 'UAS',
    affiliation: {
      friendly: {
        path: {
          d: 'm 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z',
          fill: 'black',
          stroke: 'black',
          strokeWidth: 4
        }
      }
    }
  },
  ada: {
    fullName: 'Air Defense',
    affiliation: {
      friendly: {
        path: {
          d: 'M25,150 C25,110 175,110 175,150',
          fill: 'none',
          stroke: 'black',
          strokeWidth: 4
        }
      }
    }
  }
};

//This exposes the testObj and matchPaths function to the window so you can access them via console. Remove on production
window.testObj = testObj;
window.matchPaths = matchPaths;

//Add symbol thumbnails to the dropdown menu
Object.keys(testObj).forEach(e => {
  const mdcList = document.querySelector('.mdc-list');
  const newli = document.createElement('li');
  newli.setAttribute('class', 'mdc-list-item');
  newli.setAttribute('data-value', e);
  newli.textContent = testObj[e].fullName;
  mdcList.append(newli);
  const newFigure = document.createElement('figure');
  newFigure.setAttribute('class', `newFigure ${e}`); //add the symbol key to the classlist so they can match up with the list item
  newli.prepend(newFigure);
  //This will add the icons to the dropdown list
  const str = e.toString();
  if (newFigure.classList.contains(str)) {
    matchPaths(e, `.newFigure.${str}`);
    //Now set the viewBox and dimensions for the thumbnails
    document.querySelectorAll('.newFigure svg').forEach(e => {
      e.setAttribute('viewBox', '21 46 158 108');
      e.setAttribute('width', '63');
      e.setAttribute('height', '43');
    });
  } else {
    console.log('There is no match between the li class and symbol class')
  }
});
