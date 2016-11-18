const theDbConnection = require('./db');
const Hotel = require('./hotel');
module.exports = {
  db: theDbConnection,
  Hotel: Hotel
  }
