const theDbConnection = require('./db');
const Hotel = require('./hotel');
const Place = require('./place');
const Restaurant = require('./restaurant');
const Activity = require('./activity');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
// 
// Hotel.hasMany(Place);
// Restaurant.hasMany(Place);
// Activity.hasMany(Place);



module.exports = {
  db: theDbConnection,
  Hotel: Hotel,
  Restaurant: Restaurant,
  Place: Place,
  Activity: Activity
};
