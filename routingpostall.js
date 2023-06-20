var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var event = require('events')
var app = express();
var eventEmitter = new event.EventEmitter();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req,res){
    res.sendFile('C:/Users/Admin/Desktop/NodeJS/index.html');
})

app.post('/submit-data', function(req, res){
    var name= req.body.first_name + ' ' + req.body.last_name;
    res.send(name + 'submited successfully');
    fs.writeFileSync('file.txt', name);
    fs.appendFileSync('file.txt',name);
});

app.post('/read', function(req,res){
    var name= req.body.first_name + ' ' + req.body.last_name;
    res.send(name + 'submited successfully');
    fs.readFileSync('file.txt', name);
})

app.get('/view', function(req,res){
    fs.appendFileSync('file.txt');
    res.send('file.txt','Content-Type: text/html')
    res.end();
})

var server = app.listen(3000, function(){
    console.log('Node server is running...');
});