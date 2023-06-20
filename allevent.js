var event = require('events');

var eventEmitter = new event.EventEmitter();

var fun1 = eventEmitter.on("call",function(msg){
    console.log("this is call event function",+ msg);
    console.log(eventEmitter.getMaxListeners(50));
});

var fun2 = eventEmitter.on("call",function(msg){
    console.log("this is call event function2" + msg);
});

eventEmitter.setMaxListeners(30);
console.log("Set Maximum value has been changed");
console.log(eventEmitter.getMaxListeners(fun1));
eventEmitter.emit("call");
console.log(eventEmitter.listenerCount("call"));
eventEmitter.addListener('myEvent', fun1)
eventEmitter.emit('myEvent','Event Add');
eventEmitter.removeListener('myEvent', fun1);
eventEmitter.emit('myEvent', 'Event Remove');
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun2);
eventEmitter.off('myEvent', fun2);
eventEmitter.emit('myEvent', 'Event occured');
