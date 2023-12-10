// index.js

const ledPin = 28;

pinMode(ledPin, OUTPUT);
setInterval(() => {
  digitalToggle(ledPin);
}, 1000);
