var express = require('express');
var app = express();
var path = require('path');

var public = path.join(__dirname,'public');
app.get('/', function(req, res, next){
    res.sendFile(path.join(public, 'app1.html'));
    next()
});

app.get('/home',(req, res, next)=>{
    res.send("Welcome to home page");
})


app.use('/', express.static(public));
app.listen(3000);