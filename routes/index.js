var express = require('express');
var router = express.Router();
var mongoURL = process.env.MONGOLAB_URI || "mongodb://person:test@ds041992.mongolab.com:41992/ips";
var collection = require('mongoskin').db(mongoURL).collection("test")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

/* submitForm */
router.post('/submitForm', function(req, res, next){
	var document = {
		"firstName": req.body.firstName,
		"lastName": req.body.lastName,
		"studentAddress": req.body.studentAddress,
		"birthDate": req.body.birthDate
		"street": req.body.street,
		"city": req.body.city,
		"state": req.body.state,
		"zip": req.body.zip,
		"race": req.body.race,
		"ethnicity": req.body.ethnicity,
		"studentHasIEP": req.body.studentHasIEP,
		"currentGrade": req.body.currentGrade,
		"currentSchool": req.body.currentSchool,
		"parentLast": req.body.parentLast, 
		"parentFirst": req.body.parentFirst,
		"parentPhone": req.body.parentPhone,
		"parentEmail": req.body.parentEmail,
		"language": req.body.language,
		"firstProgramChoice": req.body.firstProgramChoice,
		"secondProgramChoice": req.body.secondProgramChoice,
		"thirdProgramChoice": req.body.thirdProgramChoice,
		"performingArtsConcentration": req.body.performingArtsConcentration
	};
	collection.insert(document, function(err, result){
		if(err){console.log(err)};
	});
	res.status(200).send();
});

router.post('/search', function(req, res, next){
	// change the "firstName" to be selected to whatever the filter-type is (req.body.filter-type)???
	// collection.find({ req.body.filterType: req.body.query }, function(err, result){
	// 	if (err){console.log(err)};
	// 	res.send(result);
	// });
	res.status(204);
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

router.get('/status', function(req, res, next) {
  res.render('status');
});

module.exports = router;
