'use strict';

const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const port = 8080;    
const router = express.Router();  
const contact = require('./controllers/contact');

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



mongoose.connect('mongodb://localhost:27017/contacts');
// middleware to use for all requests
router.use(function(req, res, next) {
    //do logging
    console.log('Authentication can be done here');
    next(); // make sure we go to the next routes and don't stop here
});        

router.get('/', function(req, res) {
    res.json({ message: 'Gotcha!!' });   
});


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