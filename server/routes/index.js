// Express and router allows you to use router.get/post/etc
var express = require('express');
var router = express.Router();

// Grabbing model to allow you to use Mongoose database functions like find and create
var ExoticStyleUserCollection = require('../models/ExoticStyleUserSchema');

/* Go to the root ('/') of this router group (exoticStyles) and using GET. In the client you'll have to fetch '/hairstyles' with the default GET request */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Hair Styling is my Passion!' });
});


module.exports = router;
