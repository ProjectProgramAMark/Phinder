var express = require('express');
var watson = require('watson-developer-cloud');
var router = express.Router();

/* POST personality stuff. */
router.post('/', function(req, res, next) {
  // Uncomment when data being input actually works
  //var my_profile = "Call me Ishmael. Some years ago-never mind how long precisely-having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off-then, I account it high time to get to sea as soon as I can.";
  var my_profile = req.body.you;
  var personality_insights = watson.personality_insights({
    username: "d13898db-a97e-4093-a466-c99b9e2fe56c",
    password: "QoRtdggvoTjK",
    url: "https://gateway.watsonplatform.net/personality-insights/api",
    version: 'v2'
  });
  // console.log(req.body.you);
  personality_insights.profile({ text: my_profile },
  function (err, profile) {
    if (err)
      console.log(err);
    else
      console.log(profile);
  });
  res.render('index', { title: 'Phinder' });
});

module.exports = router;
