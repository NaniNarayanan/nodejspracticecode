var express = require('express');
var app = express();
var PORT = 3000;

app.get('/users/:userId/books/:bookId', (req, res) => {
    req.params;
    res.json(req.params);
});

app.get('/flights/:from:to', (req,res) =>{
    req.params;
    res.json(req.params);
});

app.get('/plantae/:genus.:species', (req, res) =>{
    req.params;
    req.json(req.params);
})

app.get('/user/:userId', (req,res) =>{
    req.params;
    res.json(req.params);
})

app.listen(PORT,function(){
    console.log("Server listening on PORT", PORT)
})