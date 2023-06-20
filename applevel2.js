const express = require('express');

const app = express();

app.use('/user:id',function(req, res, next){
    console.log("Request Type:", req.method);
    next();
});
app.listen(3000)