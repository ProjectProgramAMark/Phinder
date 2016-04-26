var express = require('express');
var watson = require('watson-developer-cloud');
var logic = require('../public/javascripts/Logic');
var router = express.Router();

/* POST personality stuff. */
router.post('/', function(req, res, next) {
  var my_profile = req.body.you;
  var personality_insights = watson.personality_insights({
    username: "d13898db-a97e-4093-a466-c99b9e2fe56c",
    password: "QoRtdggvoTjK",
    url: "https://gateway.watsonplatform.net/personality-insights/api",
    version: 'v2'
  });
  personality_insights.profile({ text: my_profile },
  function (err, profile) {
    if (err)
      console.log(err);
    else
      logic.logic(profile);
      res.render('results', { title: 'Results', result: result });
  });
  res.render('results', { title: 'Phinder' });
});

module.exports = router;
