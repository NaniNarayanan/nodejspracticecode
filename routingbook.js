var express = require('express');
var router = express.Router();
router.get('/', function(req,res){
    res.send('GET random book');
});

router.post('/', function(req,res){
    res.send('Add a book');
});

module.exports = router;