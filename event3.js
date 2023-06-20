var event = require('events');

var eventEmitter = new event.EventEmitter();

var fun1 = function(){
    console.log("Hello! Event...");
}

var fun2 = function(){
    console.log("Hello! NodeJS");
}

var fun3 = function(){
    console.log("Hello! JavaScript");
}

eventEmitter.on("Hello",fun1);
eventEmitter.on("Hello",fun2);
eventEmitter.on("Hello",fun3);

eventEmitter.emit("Hello");
