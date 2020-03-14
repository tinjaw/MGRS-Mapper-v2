self.onmessage = (e) => {
  // console.log('worker.js: Message received from main script', e.data);
  // self.postMessage('Hello main');
  // const currentChunk = JSON.parse(e.data);
  // console.log(JSON.parse(e.data[0]));
  const obj = JSON.parse(e.data[0]);
  const abv = e.data[1];
  const menu = JSON.parse(e.data[2]);
  self.postMessage(JSON.parse(e.data[1]));
};
