var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.post('/submitForm', function(req, res){
	res.status(200).send(req.body.firstName);
});

router.get('/admin', function(req, res, next) {
  res.render('admin');
});

router.get('/teacher', function(req, res, next) {
  res.render('teacher');
});

router.get('/apply', function(req, res, next) {
  res.render('student');
});

module.exports = router;