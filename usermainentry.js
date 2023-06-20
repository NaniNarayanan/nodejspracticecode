const express = require('express');
const posts = require('./userposts');
const users = require('./users');
const app = express();
const PORT = 3000;

app.use('/api/userposts', posts);
app.use('/api/users', users);
app.listen(PORT, function(){
    console.log("Server listening on PORT:", PORT)
})
