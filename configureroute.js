var express = require('express');
var app = express();
var PORT = 3000;

app.all('/user/', function(req, res, next){
    console.log("User API Called");
    res.send("<html><body><h1>Hello World</h1></body></html>");
    next();
});

app.get('/user1', function(req, res, next) {
    res.send("<html><body><h1>Get request userpage</h1></body></html>");
    next();
  })

app.post('/user2', function(req, res, next) {
    res.send("<html><body><h1>Post request userpage</h1></body></html>");
    next();
  })

app.listen(PORT,function(){
    console.log("Server listening on PORT", PORT)
})