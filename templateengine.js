var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('display', {user:'karthik'});
});

app.listen(3000, function(){
    console.log('Node server is running');
})