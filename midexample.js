const express = require('express');
const path = require('path');
const approute = require('./midexampleapp');
const route = require('./midexamplerout');
const app = express();
const PORT = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();
router.use((req, res, next) => {
  console.log('Router middleware called');
  next();
});

app.get('/', function(req, res){
    res.sendFile('C:/Users/Admin/Desktop/NodeJS/index.html')
});

app.post('/submit-data', (req, res) => {
    var name = req.body.first_name + ' ' + req.body.last_name;
    res.send(name + 'submited successfully');
  });

app.use('api/approute', approute);
app.use('api/route', route)

app.listen(PORT, function(){
    console.log("Server running", PORT)
})