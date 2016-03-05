var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //comment
  res.render('index', { title: 'Phinder' });
});

module.exports = router;
