var express = require('express');
var app = express();
app.set('view engine',"ejs");
var authors =[
    {
        name:"Andrew",
        article:"node js"
    },
    {
        name:"Brade",
        article:"express js"
    },
    {
        name:"John",
        article:"mongoDB"
    }
]

app.get('/authors', function(req, res){
    res.render('authors',{authors})
});
app.listen(3000);