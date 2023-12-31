var express = require('express');
var app = express();
var path = require('path');

var public = path.join(__dirname,'public');
app.get('/', function(req, res){
    res.sendFile(path.join(public, 'app.html'));
});

app.use('/', express.static(public));
app.listen(3000);