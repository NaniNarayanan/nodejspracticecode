var express = require('express');
var app = express();
var PORT = 3000;

app.get('/', function(req, res){
    console.log(res.headersSent);
    res.send('OK');
});

app.get('/user2', function(req, res){
    res.status(200).send("User Page");
    res.download('express\attach.txt',['file'][fn])
})

app.listen(PORT, function(err){
    if(err) console.log(err);
    console.log('Server lisening on PORT', PORT);
});