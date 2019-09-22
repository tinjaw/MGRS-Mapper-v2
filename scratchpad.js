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

class Gay {
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