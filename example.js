var event = require('events')
querystring = require('querystring');
const fs = require('fs')
var url = require('url');
var eventEmitter = new event.EventEmitter();
const { error } = require('console');


var fun1 = function(){
    const obj1 = querystring.parse('name=sivam&company=javapoint');
    const obj2 = querystring.stringify('name=sivam&comapny=javapont');
    const obj3 = querystring.escape('name=sivam&company=javapiont');
    const obj4 = querystring.unescape('name=sivam&company=javapiont');
    console.log(obj1);
    console.log(obj2);
    console.log(obj3);
    console.log(obj4);
}



var fun2 = function(){
    
    var adr = 'http://localhost:8080/default.html?year=2023&month=april';
    var q = url.parse(adr, true);
    
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);
    
    var qdata = q.query;
    console.log(qdata.month);
}



var fun3 = function(){
    fs.writeFileSync('file.txt', 'Welcome to Nodejs');
}

var fun4 = function(){
    var http = require('http');

    http.createServer(function(req,res){
        res.writeHead(200,{'content-Type':"text/html"});
        res.end("Hi Hello World!");
    }).listen(8080)
}

var fun5 = function(){
        
    console.log("Going to get file info");
    
    fs.stat('file.txt',function(err, stats){
        if(err){
            return console.error(err);
        }
        console.log(stats);
        console.log("Got file info Successfully");
        //check file type
        console.log("isFile?" + stats.isFile());
        console.log("isDirectory" + stats.isDirectory());
        console.log("isblockdevice" + stats.isBlockDevice());
    });
   
}


var fun6 = function(){
//Asynchronous-opening file

console.log("Going to open File");

fs.open('file.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("File Opend Successfully");

});
   
}




var fun7 = function(){
   
    fs.open('file.txt','w+',function(err,fd){
        if(err){
            return console.error(err);
        }
        console.log("File Successfully wirte");
    });
}

var fun8 = function(){
    fs.unlink('file.txt',function(err){
        if(err)throw err;
        console.log('File Deleted');
    });
   
}

var fun9 = function(){
    var util = require('util');
    var my_name = "Nani";
    my_class = 5,
    my_roll_no= 143,
    my_fav_subject= {subj1:"Tamil", subj2:"Maths"};

    var format1 = util.format("My name is %s", my_name);
    var format2 = util.format("I read in class %d", my_class);
    var format3 = util.format("My roll no is %d", my_roll_no);
    var format4 = util.format("My favorite subjects are %j", my_fav_subject);

    console.log(format1);
    console.log(format2);
    console.log(format3);
    console.log(format4);
}


eventEmitter.setMaxListeners(7)
console.log(eventEmitter.getMaxListeners());


eventEmitter.addListener('myevent1',fun1);
eventEmitter.addListener('myevent2',fun2);
eventEmitter.addListener('myevent3',fun3);
eventEmitter.addListener('myevent4',fun4);
eventEmitter.addListener('myevent5',fun5);
eventEmitter.addListener('myevent6',fun6);
eventEmitter.addListener('myevent7',fun7);
// eventEmitter.addListener('myevent8',fun8);
eventEmitter.addListener('myevent9',fun9);


eventEmitter.emit('myevent1')
eventEmitter.emit('myevent2')
eventEmitter.emit('myevent3')
eventEmitter.emit('myevent4')
eventEmitter.emit('myevent5')
eventEmitter.emit('myevent6')
eventEmitter.emit('myevent7')
// eventEmitter.emit('myevent8')
eventEmitter.emit('myevent9')

// eventEmitter.removeListener('myevent1')
// eventEmitter.emit('myevent1')