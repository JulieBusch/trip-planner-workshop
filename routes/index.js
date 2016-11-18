const express = require('express');
const router = express.Router();
const models = require('../models');
var Hotel = models.Hotel;
var Place = models.Place;
var Activity = models.Activity;
var Restaurant = models.Restaurant;


// router.get('/', function(req, res, next) {
//   res.render('index');
// });

router.get('/', function(req, res, next) {
  var findingHotels = Hotel.findAll();
  var findingActivities = Activity.findAll();
  var findingRestaurants = Restaurant.findAll();

Promise.all([findingHotels, findingActivities, findingRestaurants])
    .then(function(resultsArr) {

      var allResults = {

        hotels: resultsArr[0],
        activities: resultsArr[1],
        restaurants: resultsArr[2]
      };
      console.log('all results here! :' + allResults);
      res.render('index', {results: allResults});
    })
    .catch(next);
});


module.exports = router;
