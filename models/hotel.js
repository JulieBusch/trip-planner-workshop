const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Hotel = dbConnection.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.INTEGER(5)
  },
  amenities: {
    type: Sequelize.STRING
  }
});

module.exports = {Hotel: Hotel};
