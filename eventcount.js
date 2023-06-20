var event = require('events');
var fs = require('fs');

var eventEmitter = new event.EventEmitter();

eventEmitter.on("call",function(){
    console.log("this is call event function");
});

eventEmitter.on("call",function(){
    console.log("this is call event function2");
});

eventEmitter.emit("call");
console.log(eventEmitter.listenerCount("call"));