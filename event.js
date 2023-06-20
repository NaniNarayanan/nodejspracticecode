var event = require('events');

var eventEmitter = new event.EventEmitter();

var fun = function(){
    console.log("Hello! Event...");
}

eventEmitter.on('hello',fun);

eventEmitter.emit("hello");