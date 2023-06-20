var express = require('express');
var app = express();
var PORT = 3000;
var books = require('./routingbook.js');

app.use('/books', books);

app.listen(PORT, function(err){
    if(err) console.log(err);
    console.log("Server listening on PORT:", PORT);
})