var express = require('express');
var router = express.Router();
var mongoURL = process.env.MONGOLAB_URI || "mongodb://person:test@ds041992.mongolab.com:41992/ips";
var collection = require('mongoskin').db(mongoURL).collection("test")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

/* submitForm */
router.post('/submitForm', function(req, res){
	var document = {
		"firstName": req.body.firstName,
		"lastName": req.body.lastName,
		"id": req.body.id
	};
	collection.insert(document, function(err, result){
		if(err){console.log(err)};
	});
  res.status(200);
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