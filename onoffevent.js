var event = require('events');

var eventEmitter = new event.EventEmitter();

var fun1 = function(msg){
    console.log("Message from fun1", + msg);
};

var fun2 = function(msg){
    console.log("Message from fun2", + msg);
};

eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun2);

eventEmitter.off('myEvent', fun1);

eventEmitter.emit('myEvent','Event occured');