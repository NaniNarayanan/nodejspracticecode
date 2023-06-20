const express = require('express');
const router = express.Router();

const app = express();

router.use('/user/:id', function(req, res, next){
    console.log('Request URL:', req.originalUrl);
    next();
})

router.get('/user/:id',function(req, res, next){
    res.send('User')
    next();
});

module.exports = router