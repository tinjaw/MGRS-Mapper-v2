import militarySymbolsObject from './symbolObjects/militarySymbols';
import mod1Object from './symbolObjects/mod1';
import mod2Object from './symbolObjects/mod2';
import commandPostObject from './symbolObjects/commandPost';

const testobj = {
  a: 'hello',
  b: 'I',
  c: 'am',
  d: 'gay!',
};

self.onmessage = (e) => {
  // const message = JSON.parse(e.data);
  // Object.entries(message).forEach((key) => {
  //   switch (key[1].object) {
  //     case 'militarySymbolsObject':
  //       self.postMessage([militarySymbolsObject, key[1].abbreviation, key[1].menu]);
  //       break;
  //     case 'mod1Object':
  //       self.postMessage([mod1Object, key[1].abbreviation, key[1].menu]);
  //       break;
  //     case 'mod2Object':
  //       self.postMessage([mod2Object, key[1].abbreviation, key[1].menu]);
  //       break;
  //     case 'commandPostObject':
  //       self.postMessage([commandPostObject, key[1].abbreviation, key[1].menu]);
  //       break;
  //     default:
  //       break;
  //   }
  // });
  if (e.data === 'militarySymbolsObject') {
    self.postMessage(militarySymbolsObject);
  }
  if (e.data === 'mod1Object') {
    self.postMessage(mod1Object);
  }
  if (e.data === 'mod2Object') {
    self.postMessage(mod2Object);
  }
  if (e.data === 'commandPostObject') {
    self.postMessage(commandPostObject);
  }
};
