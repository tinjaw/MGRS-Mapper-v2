// When handleRemovePlayer is invoked we iterate through the players array in state and filter out only the player objects whose ID does NOT equal the ID passed into handleRemovePlayer
handleRemovePlayer = (id) => {
  this.setState(prevState => ({
    players: prevState.players.filter(player => player.id !== id),
  }));
};
// manifest.json provides metadata used when your web app is added to the
// homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/


let bs = {
  text_1: {
    symbolText: 'ASLT',
    x: '100',
    y: '71',
    fontSize: '22',
    textAnchor: 'middle',
  },
};

let propertyToModify = {
  text_1: {
    fontSize: '19',
  },
};


selectMod1.menu_.items.map((key) => {
  const mod1Element = key.querySelectorAll('li figure svg g.outline path')[0];
  mod1Element.setAttributeNS(null, 'fill', 'transparent');
  mod1Element.setAttributeNS(null, 'stroke-width', '0');
  mod1Element.setAttributeNS(null, 'd', '');
  mod1Element.parentElement.parentElement.setAttributeNS(null, 'viewBox', '80 55 40 20');
  mod1Element.parentElement.parentElement.setAttributeNS(null, 'max-width', 'calc(100% - 20px)');
});
