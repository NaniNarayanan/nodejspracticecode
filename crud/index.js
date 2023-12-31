
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', { msg: 'This is home page'});
});
app.get('/about-us', (req, res) => {
    res.render('about-us');
});

// port where app is served
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});
