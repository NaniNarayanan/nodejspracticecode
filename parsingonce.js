var event = require('events');

var eventEmitter = new event.EventEmitter();

var fun = function(name,city){
    console.log("Hello","My name is:" + name + "My city is:" + city);
}

eventEmitter.once("info",fun);

eventEmitter.emit("info","Jhon","Los Vegas");
eventEmitter.emit("info","Christoper","New York");
eventEmitter.emit("info","Eddy","London City");