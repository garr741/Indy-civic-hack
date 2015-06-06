var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.post('/submitForm', function(req, res){
	res.status(200).send(req.body.firstName);
});





module.exports = router;