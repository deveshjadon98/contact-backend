'use strict';

const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080;    

const router = express.Router();  
const mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contacts');
// middleware to use for all requests
router.use(function(req, res, next) {
    //do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});        

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
// router.get('',contact.search);
const contact = require('./controllers/contact');
router.get('/contacts',contact.all);
router.post('/contact',contact.create);
// router.put('/contact/:id',contact.update);

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API running at PORT:' + port);