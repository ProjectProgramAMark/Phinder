var express = require('express');
var router = express.Router();

/* GET meet page. */
router.get('/', function(req, res, next) {
  res.render('meet');
});

module.exports = router;
