var event = require('events');
var call = require("./event5");
const { EventEmitter } = require('stream');

var firstcall = new call(event.EventEmitter());

EventEmitter.on(firstcall);


