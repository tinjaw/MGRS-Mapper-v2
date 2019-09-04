// When handleRemovePlayer is invoked we iterate through the players array in state and filter out only the player objects whose ID does NOT equal the ID passed into handleRemovePlayer
handleRemovePlayer = (id) => {
  this.setState(prevState => ({
    players: prevState.players.filter(player => player.id !== id),
  }));
};
// manifest.json provides metadata used when your web app is added to the
// homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
