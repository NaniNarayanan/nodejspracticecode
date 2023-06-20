var event = require('events');

var eventEmitter = new event.EventEmitter();

console.log(eventEmitter.getMaxListeners());
eventEmitter.setMaxListeners(20);
console.log("Set Maximum value has been changed");
console.log(eventEmitter.getMaxListeners());