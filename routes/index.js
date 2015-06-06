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
		"id": req.body.id
	};
	collection.insert(document, function(err, result){
		if(err){console.log(err)};
	});
	res.status(200).send();
});


router.post('/search', function(req, res, next){
  console.log("here");
  search(req.body.filterType,req.body.query,function(err,result){
    if(err){
      res.status(404)
    } else {

    res.json(result).send()
  }
  });
});


function search(filterType,query,callback){
  collection.find({ filterType:query}).toArray(function(err,result){
    callback(err,result);
  });

}



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
