var express = require('express')
var app = express();

const bodyParser = require('body-parser')

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json({extended:false}))
app.get('/formpage', function(req, res){
    res.render('form',{
        heading:"Basic Form Example",
    })
})
app.post('/submit-form',(req, res)=>{
    res.send(JSON.stringify(req.body))
})
app.listen(3000,function(){
    console.log("Node server is running....")
})