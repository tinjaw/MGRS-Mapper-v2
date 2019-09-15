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


let circ = document.querySelector('.newSVG > svg');
let miss = circ.querySelector('g.decorator');
miss.style.transformOrigin = '100px 100px'; // transform from center (cx, cy)
miss.style.transform = 'scale(0.75)';
let mod1 = circ.querySelector('g.mod1');
mod1.style.transform = `translateY(-${circ.viewBox.baseVal.x / circ.viewBox.baseVal.y * 21}px)`
// mod1.style.transform = 'translateY(-10%)';

  [selectSymbol, selectAffiliation, selectUnitSize, selectMod1].forEach((key) => {
    key.selectedText_.textContent = key.value;
    key.listen('MDCSelect:change', () => {
      new MilSym('.newSVG', selectSymbol.value, selectAffiliation.value, selectUnitSize.value, `${selectMod1.value || 'None'}`).placeSymbol();
    });
  });
