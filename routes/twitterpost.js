var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var watson = require('watson-developer-cloud');
var jsonfile = require('jsonfile');
var logic = require('../public/javascripts/Logic');

/* POST personality stuff from Twitter feed. */
router.post('/', function(req, res, next) {
var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});


var options = { screen_name: req.body.twitter };

client.get('statuses/user_timeline', options , function(err, data) {
  var tweetsArray = [];
  // if(err) {
  //   res.render(index);
  //   req.assert()
  // }
  for (var i = 0; i < data.length ; i++) {
    console.log(data[i].text);
    tweetsArray.push(data[i].text);
  }
  var tweets = tweetsArray.toString();
  var personality_insights = watson.personality_insights({
    username: "d13898db-a97e-4093-a466-c99b9e2fe56c",
    password: "QoRtdggvoTjK",
    url: "https://gateway.watsonplatform.net/personality-insights/api",
    version: 'v2'
  });
  // console.log(req.body.you);
  personality_insights.profile({ text: tweets },
  function (err, profile) {
    if (err)
      console.log(err);
    else
      var result = logic.logic(profile);
      // console.log(result);
      // return result;
      // res.render(results, {title: 'Results', philosopher: result.philosopher, trait: result.finalexpression});


      // var file = '/tmp/data.json';
      // var obj = profile;
      // //console.log(profile);
      // jsonfile.writeFile(file, obj, function (err) {
      //   console.error(err);
      // });
  });
});

  console.log(req.body.you);
  // famous quote, book, image, description
  res.render('results', { title: 'Results' });
});

module.exports = router;
