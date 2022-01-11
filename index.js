const {query} = require('express');
const express = require('express');
const PORT = process.env.PORT || 5000
const app = express();
app.use(express.static(__dirname + '/public'));
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(process.env.PORT || 5000, function(){
    console.log('express server listening on port %d in %s mode', this.address().port, app.settings.env);
})

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/home', (req, res) =>{
    res.render('home')
})
app.get('/about', (req, res) =>{
    res.render('about')
})
app.get('/mission', (req, res) =>{
    res.render('mission')
})
app.get('*', (req, res) => {
    res.render('home')
})