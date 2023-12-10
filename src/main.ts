// main.ts

import { LED } from "led";

const ledPin = 28;

const led = new LED(ledPin);
led.off();

setInterval(() => {
  led.toggle();
  console.log(`Pin ${led.pin} is ${led.read() == HIGH?"HIGH":"LOW"}`);
}, 1000);
