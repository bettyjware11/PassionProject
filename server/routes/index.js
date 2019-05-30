var express = require('express');
var router = express.Router();
var UserProfileCollection = require('../models/UserProfile');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Passion Project' });
});






module.exports = router;
