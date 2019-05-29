var express = require('express');
var router = express.Router();
// exports.users = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Passion Project' });
});

router.get('/addUser', function(req, res, next) {
  res.render('index', { title: 'Add User Here' });
});



module.exports = router;
