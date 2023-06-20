var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req,res){
    res.sendFile('C:/Users/Admin/Desktop/NodeJS/index.html');
})

app.post('/submit-data', function(req, res){
    var name= req.body.first_name + ' ' + req.body.last_name;
    res.send(name + 'submited successfully');
});

var server = app.listen(3000, function(){
    console.log('Node server is running...');
});