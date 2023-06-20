const express = require('express');
const app = express();

app.get('/user', (req, res, next)=>{
    if(!req.query.name){
        const err = new Error("Please provide user name");
        return next(err);
    }
    console.log('User Name:', req.query.name);
    res.send("Success");
});

app.use((err, req, res, next)=>{
    console.log(err.message);
    res.status(500);
    res.send(err.message)
});

app.listen(3000, (req, res)=>{
    console.log('Server runing on port 3000');
})