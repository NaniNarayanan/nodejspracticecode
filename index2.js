var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res, next){
    res.sendFile('C:/Users/Admin/Desktop/NodeJS/index.html');
    next()
})

app.post('/submit-data', function(req, res){
    var name= req.body.first_name + ' ' + req.body.last_name;
    res.send(name + 'submited successfully');
    console.log(req.body);
});

var server = app.listen(3000, function(){
    console.log('Node server is running...');
});