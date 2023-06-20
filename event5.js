var event = require('events');

var eventEmitter = new event.EventEmitter();


var fun1 = function(){
    var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':"text/html"});
    res.end("Hi Hello World!");
}).listen(8080)
}


var fun2 = function(){
    var fs = require('fs');

fs.writeFileSync('file.txt', 'Welcome to Nodejs');
}


var fun3 = function(){
    var url = require('url');
var adr = 'http://localhost:8080/default.html?year=2023&month=april';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
}

var value = {fun1,fun2,fun3}