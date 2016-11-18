const theDbConnection = require('./db');
const Hotel = require('./hotel');
const Place = require('./place');
const Restaurant = require('./restaurant');
const Activity = require('./activity');


module.exports = {
  db: theDbConnection,
  Hotel: Hotel,
  Restaurant: Restaurant,
  Place: Place,
  Activity: Activity
};
