var event = require('events');

var eventEmitter = new event.EventEmitter();

var fun = function(msg){
    console.log("Message from fun:" + msg);
};

eventEmitter.addListener("myEvent", fun);
eventEmitter.emit("myEvent", 'Event occured');

eventEmitter.removeListener("myEvent", fun);
eventEmitter.emit("myEvent", 'Event again occured');