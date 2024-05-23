//Part 1: Routes, Templates, and Views

// Create a view engine that allows you to customize at least three portions of your views. 

// https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application

const express = require('express');

const PORT = 3000;

// Creating the express application
const app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index');
});
  
// about page
app.get('/about', function(req, res) {
    res.render('about');
});
  

app.listen(PORT);