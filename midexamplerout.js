var express = require('express');
var app = express()
var router = express.Router();

router.use(function(req, res, next){
    console.log('Router level middleware....')
    next()
})

router.get('/user/:id', function(req, res, next){
    console.log(req.params.id)
    res.send({id:1, name:'jhon'})
})

app.use('/',router)

module.exports = router