const express = require('express');

const app = express();

app.get('/user:id',function(req, res, next){
    res.send('User')
    next();
});
app.listen(3000)