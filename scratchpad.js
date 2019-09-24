import { selectAffiliation } from './mdcComponents';

// When handleRemovePlayer is invoked we iterate through the players array in state and filter out only the player objects whose ID does NOT equal the ID passed into handleRemovePlayer
handleRemovePlayer = (id) => {
  this.setState(prevState => ({
    players: prevState.players.filter(player => player.id !== id),
  }));
};
// manifest.json provides metadata used when your web app is added to the
// homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/


const bs = {
  text_1: {
    symbolText: 'ASLT',
    x: '100',
    y: '71',
    fontSize: '22',
    textAnchor: 'middle',
  },
};

const propertyToModify = {
  text_1: {
    fontSize: '19',
  },
};


selectMod1.menu_.items.map((key) => {
  const mod1Element = key.querySelectorAll('li figure svg g.outline path')[0];
  const mod1SVGContainer = mod1Element.parentElement.parentElement;
  mod1Element.setAttributeNS(null, 'fill', 'transparent');
  mod1Element.setAttributeNS(null, 'stroke-width', '0');
  mod1Element.setAttributeNS(null, 'd', '');
  mod1SVGContainer.setAttributeNS(null, 'viewBox', '80 55 40 20');
  mod1SVGContainer.style.transform = 'scale(0.75)';
});


selectSymbol.menu_.items.forEach((key) => {
  key.addEventListener('mouseenter', (event) => {
    console.log(event.target);
  });
});


const circ = document.querySelector('.newSVG > svg');
const miss = circ.querySelector('g.decorator');
miss.style.transformOrigin = '100px 100px'; // transform from center (cx, cy)
miss.style.transform = 'scale(0.75)';
const mod1 = circ.querySelector('g.mod1');
mod1.style.transform = `translateY(-${circ.viewBox.baseVal.x / circ.viewBox.baseVal.y * 21}px)`
// mod1.style.transform = 'translateY(-10%)';

  [selectSymbol, selectAffiliation, selectUnitSize, selectMod1].forEach((key) => {
    key.selectedText_.textContent = key.value;
    key.listen('MDCSelect:change', () => {
      new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, `${selectMod1.value || 'None'}`).placeSymbol();
    });
  });

// TODO: If you change the MilSym class to accept an object, then you can instantiate it like this: "new MilSym({location: '.test', symbol: 'Infantry', affiliation: 'friendly', echelon: 'team', mod1: 'Foraging'}).placeSymbol();". The only value I can see from this is making it easier to call this class since you can indent object keys on new lines.
// TODO: get mod1Data() and get mod2Data() in  MilSym are almost identical, there should be a way to combine them

class tttt {
  constructor() {
    this.reinforced = reinforcedSwitch.checked;
    this.reduced = reducedSwitch.checked;
    this.reinforcedAndReduced = this.reinforced && this.reduced;
  }
}

class RRSwitches {
  constructor() {
    this.reinforced = reinforcedSwitch.checked;
    this.reduced = reducedSwitch.checked;
    this.reinforcedAndReduced = this.reinforced && this.reduced;
    this.value = '';
    return this.checkSwitches(); //! You could use this on MilSym instead of using .placeSymbol() every time
  }

  checkSwitches() {
    switch (true) {
      case this.reinforcedAndReduced:
        console.log('I am reinforced and reduced!');
        reducedSwitch.root_.dataset.value = '±';
        reinforcedSwitch.root_.dataset.value = '';
        this.value = '±';
        break;
      case this.reinforced:
        console.log('I am reinforced');
        reinforcedSwitch.root_.dataset.value = '+';
        reducedSwitch.root_.dataset.value = '';
        this.value = '+';
        break;
      case this.reduced:
        console.log('I am Reduced!');
        reducedSwitch.root_.dataset.value = '–';
        reinforcedSwitch.root_.dataset.value = '';
        this.value = '–';
        break;
      default:
        console.log('I am nothing!');
        reducedSwitch.root_.dataset.value = '';
        reinforcedSwitch.root_.dataset.value = '';
        this.value = '';
        break;
    }
}
}

function checkSwitches() {
  this.reinforced = reinforcedSwitch.checked;
  this.reduced = reducedSwitch.checked;
  this.reinforcedAndReduced = this.reinforced && this.reduced;
  switch (true) {
    case this.reinforcedAndReduced:
      console.log('I am reinforced and reduced!');
      reducedSwitch.root_.dataset.value = '±';
      reinforcedSwitch.root_.dataset.value = '';
      break;
    case this.reinforced:
      console.log('I am reinforced');
      reinforcedSwitch.root_.dataset.value = '+';
      reducedSwitch.root_.dataset.value = '';
      break;
    case this.reduced:
      console.log('I am Reduced!');
      reducedSwitch.root_.dataset.value = '–';
      reinforcedSwitch.root_.dataset.value = '';
      break;
    default:
      console.log('I nothing!');
      reducedSwitch.root_.dataset.value = '';
      reinforcedSwitch.root_.dataset.value = '';
      break;
  }
}

const explicit = () => {
  const reinforced = reinforcedSwitch.checked;
  const reduced = reducedSwitch.checked;
  const reinforcedAndReduced = reinforced && reduced;
}

const rr = {
  get reinforced() {
    return reinforcedSwitch.checked;
  },
  get reduced() {
    return reducedSwitch.checked;
  },
  get reinforcedAndReduced() {
    return this.reinforced && this.reduced;
  },
  get truevals() {
    switch (true) {
      case this.reinforcedAndReduced:
        console.log('reinforcedAndReduced');
        reducedSwitch.root_.dataset.value = '±';
        reinforcedSwitch.root_.dataset.value = '';
        MainMS.reinforcedReduced = '±';
        MainMS.placeSymbol();
        break;
      case this.reinforced:
        console.log('reinforced');
        reinforcedSwitch.root_.dataset.value = '+';
        reducedSwitch.root_.dataset.value = '';
        MainMS.reinforcedReduced = '+';
        MainMS.placeSymbol();
        break;
      case this.reduced:
        console.log('reduced');
        reducedSwitch.root_.dataset.value = '–';
        reinforcedSwitch.root_.dataset.value = '';
        MainMS.reinforcedReduced = '–';
        MainMS.placeSymbol();
        break;
      default:
        console.log('none');
        reducedSwitch.root_.dataset.value = '';
        reinforcedSwitch.root_.dataset.value = '';
        MainMS.reinforcedReduced = '';
        MainMS.placeSymbol();
        break;
    }
  }
}

function gv(obj) {
  this.obj = obj;
  console.log(obj)
}

function name() {
  console.log(rr.truevals)
}

var rr6 = {
  reinforced: reinforcedSwitch.checked,
  reduced: reducedSwitch.checked,
  reinforcedAndReduced: reinforcedSwitch.checked && reducedSwitch.checked,
  get truevals() {




    if (this.reinforced) {
      console.log("reinforced true")
    }
    if (this.reduced) {
      console.log("reduced true")
    }
    if (this.reinforcedAndReduced) {
      console.log("reinforced & reduced true")
    }
  }
}

Object.entries(rrobj5).forEach(e => {
	e[1] ? console.log(e) : console.log("untrie")
})

async function lol(prop) {
  await this.prop = window.hasOwnProperty('MainMS');
  if (this.prop) {
    console.log("MainMS is in the window")
    setReinforcedReducedValues().truevals;
  }
}




[reducedSwitch, reinforcedSwitch].forEach(e => e.root_.dataset.value.length > 0 ? e.root_.dataset.value : null)

const m1 = document.querySelector('.mod1');
m1.style.transformBox = 'fill-box';
m1.style.transformOrigin = 'center center';
m1.classList.toggle('bounceIn');

////////

const HandleSelects = () => {
  console.log("I am Running");
  class SelectBoxes {
    constructor(sym, aff, size, mod1, mod2){
      this.sym = selectSymbol;
      this.aff = selectAffiliation;
      this.size = selectUnitSize;
      this.mod1 = selectMod1;
      this.mod2 = selectMod2;
      this.obj = {
          sym,
          aff,
          size,
          mod1,
          mod2,
        }
    }
  }
}
////

class HandleSelects {
  constructor() {
    this.sym = selectSymbol;
    this.aff = selectAffiliation;
    this.size = selectUnitSize;
    this.mod1 = selectMod1;
    this.mod2 = selectMod2;
    this.selectObjects = {
      selectSymbol,
      selectAffiliation,
      selectUnitSize,
      selectMod1,
      selectMod2,
    }
    return this.runFuncs();
  }

  get correctTextContent() {
    console.log("Running Correct Text Content");
    selectSymbol.selectedText_.textContent = selectSymbol.value;
    selectAffiliation.selectedText_.textContent = selectAffiliation.value.replace(/([A-Z])/g, ' / $1').replace(/^./, str => str.toUpperCase());
    selectUnitSize.selectedText_.textContent = selectUnitSize.value.replace(/([A-Z])/g, ' / $1').replace(/^./, str => str.toUpperCase());
    selectMod1.selectedText_.textContent = selectMod1.value;
    selectMod2.selectedText_.textContent = selectMod2.value;
  }

  get changeEvents() {
    console.log("Running Change Events")
    Object.values(this.selectObjects).forEach(key => {
        key.listen('MDCSelect:change', (event) => {
        switch (MainMS.type) {
          case 'Equipment':
            this.runFuncs();
            selectMod1.value !== 'None' ?  this.TransformModifiersOnEquipment('.newSVG > svg') : null;
            selectMod2.value !== 'None' ?  this.TransformModifiersOnEquipment('.newSVG > svg') : null;
            selectUnitSize.disabled = true;
            selectUnitSize.foundation_.adapter_.setSelectedIndex(0);
            uniqueDesignationField.disabled = true;
            uniqueDesignationField.value = '';
            deleteUniqueDesignationButton.root_.style.display = 'none';
            higherFormationField.disabled = true;
            higherFormationField.value = '';
            deleteHigherFormationButton.root_.style.display = 'none';
            reinforcedSwitch.disabled = true;
            reinforcedSwitch.checked = false;
            reducedSwitch.disabled = true;
            reducedSwitch.checked = false;
            return;

          case 'Land Unit':
            this.runFuncs();
            selectUnitSize.disabled = false;
            uniqueDesignationField.disabled = false;
            higherFormationField.disabled = false;
            reinforcedSwitch.disabled = false;
            reducedSwitch.disabled = false;

            if (event.target.classList.contains('symbol-select')) {
              // Only animate the symbol when a new symbol is clicked. This prevents the animation occurring on every single keyup in search field
              !searchField.input_.value ? document.querySelector('.newSVG > svg').setAttributeNS(null, 'class', 'animateSymbol') : null;
            }

            if (event.target.classList.contains('affiliation-select')) {
              selectSymbol.menu_.items.map((key2) => {
                new MilSym(`.symbolFigure[data-symbol-name="${key2.dataset.value}"]`, `${key2.dataset.value}`, `${selectAffiliation.value}`, 'none').placeSymbol();
              })
            }

            if (event.target.classList.contains('unit-size-select')) {
              this.BounceInAnimation('g.echelon');
            }

            if (event.target.classList.contains('mod1-select')) {
              this.BounceInAnimation('g.mod1');
            }

            if (event.target.classList.contains('mod2-select')) {
              this.BounceInAnimation('g.mod2');
            }
            break;
        }
      })

      key.listen('click', () => {
        switch (key.isMenuOpen_) {
          case selectSymbol.isMenuOpen_:
            this.Resizer('.symbolFigure svg');
            break;
          case selectUnitSize.isMenuOpen_:
            this.Resizer('.unitSizeFigure svg', 93, 33);
            break;
          case selectMod1.isMenuOpen_:
            this.Resizer('.mod1Figure svg');
            break;
          case selectMod2.isMenuOpen_:
            this.Resizer('.mod2Figure svg');
            break;
          default:
            break;
        }
      })
    })
  }

  TransformModifiersOnEquipment(equipmentOutline) {
     this.equipmentOutline = document.querySelector(equipmentOutline); // The equipment SVG you want to readjust
     this.equipmentDecorator = this.equipmentOutline.querySelector('g.decorator');
     this.mod1 = this.equipmentOutline.querySelector('g.mod1');
     this.mod2 = this.equipmentOutline.querySelector('g.mod2');
     this.equipmentDecorator.style.transformOrigin = '100px 100px'; // transform from center of circle (cx, cy)
     this.equipmentDecorator.style.transform = 'translateY(2%) scale(0.75)';
     // mod1.style.transform = `translateY(-${equipmentOutline.viewBox.baseVal.x / equipmentOutline.viewBox.baseVal.y * 21}px)`;
     this.mod1.style.transformOrigin = '100px 100px';
     this.mod1.style.transform = 'translateY(-11%) scale(0.85)';
     this.mod2.style.transformOrigin = '100px 140px';
     this.mod2.style.transform = 'scale(0.85)';
  }

  Resizer(symbolElement, width = 93, height = 64) {
    this.symbolElement = document.querySelectorAll(symbolElement);
    this.width = width;
    this.height = height;
    this.symbolElement.forEach((key) => {
      key.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid'); // this is a default value I believe
      key.setAttributeNS(null, 'viewBox', `${key.getBBox().x - 4} ${key.getBBox().y - 4} ${key.getBBox().width + 8} ${key.getBBox().height + 8}`);
      key.setAttributeNS(null, 'width', `${this.width}`);
      key.setAttributeNS(null, 'height', `${this.height}`);
    });
  }

  BounceInAnimation(location) {
    const bounceIn = document.querySelector(location);
    bounceIn.style.transformBox = 'fill-box';
    bounceIn.style.transformOrigin = 'center center';
    bounceIn.classList.toggle('bounceIn');
  }

  runFuncs() {
    this.correctTextContent;
    this.changeEvents;
    const MainMS = new MilSym('.newSVG',
      selectSymbol.value,
      selectAffiliation.value,
      selectUnitSize.value,
      `${selectMod1.value || 'None'}`,
      `${selectMod2.value || 'None'}`,
      uniqueDesignationField.value,
      higherFormationField.value,
      ''
      );
    window.MainMS = MainMS; //! Put this class instance in the global scope so it can be referenced and edited
    MainMS.placeSymbol();
  }
}


///////! no
HandleInputs(selectSymbol, selectAffiliation, selectUnitSize, selectMod1, selectMod2, uniqueDesignationField, higherFormationField, reinforcedSwitch, reducedSwitch)

const HandleInputs = (symbol, affiliation, unitSize, mod1, mod2, uniqueUnit, higherFormation, reinforced, reduced) => {
  this.symbol = symbol;
  this.affiliation = affiliation;
  this.unitSize = unitSize;
  this.mod1 = mod1;
  this.mod2 = mod2;
  this.uniqueUnit = uniqueUnit;
  this.higherFormation = higherFormation;
  this.reinforced = reinforced;
  this.reduced = reduced;

  const inputObjects = {
    symbol: {
      text: symbol.value,
      type: 'select',
      data: symbol,
    },
    affiliation,
  }
  return inputObjects
}

//! NEW SHIT

var HandleInputs = () => {
  const selectObjects = {
    selectSymbol: {
      text: selectSymbol.value,
      type: 'select',
      data: selectSymbol,
    },
    selectAffiliation: {
      text: selectAffiliation.value.replace(/([A-Z])/g, ' / $1').replace(/^./, str => str.toUpperCase()),
      type: 'select',
      data: selectAffiliation,
    },
    selectUnitSize: {
      text: selectUnitSize.value.replace(/([A-Z])/g, ' / $1').replace(/^./, str => str.toUpperCase()),
      type: 'select',
      data: selectUnitSize,
    },
    selectMod1: {
      text: selectMod1.value,
      type: 'select',
      data: selectMod1,
    },
    selectMod2: {
      text: selectMod2.value,
      type: 'select',
      data: selectMod2,
    },
  }

  const textFieldObjects = {
    uniqueDesignationField: {
      text: uniqueDesignationField.value,
      type: 'text',
      data: uniqueDesignationField,
    },
    higherFormationField: {
      text: higherFormationField.value,
      type: 'text',
      data: higherFormationField,
    },
  }

  const switchObjects = {
    reinforcedSwitch: {
      text: null,
      type: 'switch',
      data: reinforcedSwitch,
    },
    reducedSwitch: {
      text: null,
      type: 'switch',
      data: reducedSwitch,
    },
  }


  const runFuncs = () => {
    correctTextContent();
    const MainMS = new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, `${selectMod1.value || 'None'}`, `${selectMod2.value || 'None'}`, uniqueDesignationField.value, higherFormationField.value, ''); //! Remember to put reinforcedReducedValue() function back in there!!
    window.MainMS = MainMS; //! Put this class instance in the global scope so it can be referenced and edited
    MainMS.placeSymbol();
    //changeEvents();
  }

  const correctTextContent = () => {
    console.log("Running correctTextContent")
    Object.values(selectObjects).forEach(key => {
      key.data.selectedText_.textContent = key.text;
    })
  }

  // const changeEvents = () => {
  //   Object.values(selectObjects).forEach(key => {
  //     key.data.listen('MDCSelect:change', (event) => {
  //       switch (MainMS.type) {
  //         case 'Equipment':
  //           console.log("Equipment Found")
  //           return;
  //         case 'Land Unit':
  //           console.log("LAND UNIT")
  //           return;
  //         default:
  //           break;
  //       }
  //     })
  //   })
  // }
  Object.values(selectObjects).forEach(key => {
    key.data.listen('MDCSelect:change', (event) => {
      switch (MainMS.type) {
        case 'Equipment':
          console.log("Equipment Found")
          runFuncs();
          return;
        case 'Land Unit':
          console.log("LAND UNIT")
          runFuncs()
          return;
        default:
          break;
      }
    })
  })

  return runFuncs()
}
//Friendly Flight Outline: M 155,150 C 155,50 115,30 100,30 85,30 45,50 45,150
affiliationOutlineObject + selectAffiliation.value;

function prop() {
  const propertyToModify = {d: 'M 155,150 C 155,50 115,30 100,30 85,30 45,50 45,150',};
  const modifiedTarget = Object.assign({}, affiliationOutlineObject[selectAffiliation.value].d, propertyToModify);
  return modifiedTarget.d;
}