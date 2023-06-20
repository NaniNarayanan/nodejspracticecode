var express = require('express');
var app = express();

app.get('/req', (req, res) =>{
    console.log(req.protocol)
    console.log(req.hostname)
    res.send('req')
})

app.get('/params', (req, res) =>{
    console.log(req.params)
    res.send('params')
})

app.get('/querystrings', (req,res) =>{
    console.log(req.query)
    res.send('Querystrings')
})

app.get('/route', (req,res) =>{
    console.log(req.route)
    res.send('Route')
})

app.get('/app1', function(req,res){
    res.append('Link',['<http://localhost/>','<http://localhost:3000/>'])
    res.append('warning','209 Miscellaneous warning');
    // res.attachment('attach.txt');
    console.log(res.get('Link'));
    console.log(res.get('warning'));
    // console.log(res.get('content-dispatched'));
    res.end();
});

app.use('/app2', function(req, res, next){
    res.set({
        'Content-Type':'application/xml',
    });
    next();
});

app.get('/app2', function(req, res){
    console.log("Content-Type",res.get('Content-Type'));
    res.send();
});






app.listen(PORT, function(err){
    if(err) console.log(err);
    console.log("server listening on PORT", PORT);
})



var PORT = app.listen(3000, function(){
    console.log('Node server is running...')
})