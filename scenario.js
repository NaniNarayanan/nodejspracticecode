const express = require('express');
const app = express();
const path = require('path')


const users = [
  { username: 'surya', password: '123' },
  { username: 'karthi', password: '456' }
];


const isAuthenticated = (req, res, next) => {
 
  if (req.isAuthenticated()) {
  
    return next();
  } else {

    res.status(401).send('Authentication required');
  }
};


app.get('/getUsers', isAuthenticated, (req, res) => {
  res.send('This is the getUsers page');
});

app.get('/getdetails', isAuthenticated, (req, res) => {
  res.send('This is the getdetails page');
});

app.post('/updatedetails', isAuthenticated, (req, res) => {
  res.send('This is the updatedetails page');
});

app.get('/isloggedin', isAuthenticated, (req, res) => {
  res.send('This is the isloggedin page');
});

app.get('/isloggedout', isAuthenticated, (req, res) => {
  res.send('This is the isloggedout page');
});


var public = path.join(__dirname, 'public')

app.get('/login', (req, res) => {
    res.sendFile(path.join(public,'index.html'));
  });
  
  
  app.post('/authenticate', (req, res) => {
  
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
     
      req.login(user, err => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal server error');
        } else {
          res.redirect('/getUsers');
        }
      });
    } else {
      res.status(401).send('Authentication failed');
    }
  });

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});