// models/country.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Country = sequelize.define('country', {
  Code: {
    type: DataTypes.CHAR(3),
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING(52),
    allowNull: false,
  },
  Continent: {
    type: DataTypes.ENUM(
      'Asia',
      'Europe',
      'North America',
      'Africa',
      'Oceania',
      'Antarctica',
      'South America'
    ),
    allowNull: false,
  },
  Region: {
    type: DataTypes.STRING(26),
    allowNull: false,
  },
  SurfaceArea: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  IndepYear: {
    type: DataTypes.SMALLINT,
  },
  Population: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  LifeExpectancy: {
    type: DataTypes.DECIMAL(3, 1),
  },
  GNP: {
    type: DataTypes.DECIMAL(10, 2),
  },
  GNPOld: {
    type: DataTypes.DECIMAL(10, 2),
  },
  LocalName: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  GovernmentForm: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  HeadOfState: {
    type: DataTypes.STRING(60),
  },
  Capital: {
    type: DataTypes.INTEGER,
  },
  Code2: {
    type: DataTypes.CHAR(2),
    allowNull: false,
  },
}, {
  timestamps: false // Disable timestamps
});

module.exports = Country;
