const express = require('express')
const router = express.Router();

router.get('/:id',(req, res)=>{
    res.send('ID:' + req.params.id);
});

module.exports = router;