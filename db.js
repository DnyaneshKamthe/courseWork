// db.js

const { Sequelize } = require('sequelize');

// Connect to MySQL database
const sequelize = new Sequelize('world', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
