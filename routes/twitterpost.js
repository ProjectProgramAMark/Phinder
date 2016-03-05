var express = require('express');
var router = express.Router();

/* POST personality stuff from Twitter feed. */
router.post('/', function(req, res, next) {
  console.log(req.body.you);

  res.render('index', { title: 'Phinder' });
});

module.exports = router;
