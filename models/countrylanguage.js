const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Import the Country model
const Country = require('./country');

const CountryLanguage = sequelize.define('countrylanguage', {
  CountryCode: {
    type: DataTypes.CHAR(3),
    primaryKey: true,
  },
  Language: {
    type: DataTypes.STRING(30),
    primaryKey: true,
  },
  IsOfficial: {
    type: DataTypes.ENUM('T', 'F'),
    allowNull: false,
    defaultValue: 'F',
  },
  Percentage: {
    type: DataTypes.DECIMAL(4, 1),
    allowNull: false,
  },
}, {
  timestamps: false // Disable timestamps
});

// Define association after CountryLanguage definition
// CountryLanguage.belongsTo(Country, { foreignKey: 'CountryCode', targetKey: 'Code' });

module.exports = CountryLanguage;
