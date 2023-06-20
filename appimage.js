var express = require('express');
var app = express()

app.set("view engine","ejs");
app.use(express.static('public'))
app.get('/image', (req, res)=>{
    res.render('displayImage')
})
app.listen(3000);