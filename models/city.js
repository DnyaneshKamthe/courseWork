// models/city.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');



// imported the Country model
const Country = require('./country');



const City = sequelize.define('city', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING(35),
    allowNull: false,
  },
  CountryCode: {
    type: DataTypes.CHAR(3),
    allowNull: false,
  },
  District: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  Population: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  timestamps: false // Disable timestamps
});


// Define association after City definition
// City.belongsTo(Country, { foreignKey: 'CountryCode', targetKey: 'Code' });


module.exports = City;
