var express = require('express');

var app = express();

app.get('/hello', function(req, res){
    res.send('hello mr.singaram');
});

app.listen(3030)