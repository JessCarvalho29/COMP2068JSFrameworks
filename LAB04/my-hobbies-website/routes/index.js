var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/cooking', function(req, res) {
  res.render('cooking');
});

router.get('/hiking', function(req, res) {
  res.render('hiking');
});

router.get('/traveling', function(req, res) {
  res.render('traveling');
});

router.get('/reading', function(req, res) {
  res.render('reading');
});

module.exports = router;
