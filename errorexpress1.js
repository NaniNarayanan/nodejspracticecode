const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.post('/', function(req, res){
    console.log(req.body);
});

app.listen(4000);
axios.post('http://localhost:4000', {Name:"Nani", Age:28});