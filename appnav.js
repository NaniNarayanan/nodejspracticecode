var express = require("express"); 
var app = express(); 
app.set("view engine","ejs");
app.get('/index', function (req, res){
    res.render('index', {
      subject: 'EJS template engine',
      name: 'our template',
      link: 'https://google.com'
    });
  });
app.listen(3000, function() {
    console.log("Node server is running..");
});
