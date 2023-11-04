'use strict';
const {
  Model
} = require('sequelize');
const { maxNumPassengers } = require('../../test/data/airplane-values');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    airlineCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,2],
        isUppercase: true
      }
    },
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
       len: [1, 4],
       notEmpty: true,
       isNumeric: true 
      }
    },
    inService: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    maxNumPassengers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 2,
        max: 853
      }
    },
    currNumPassengers: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 853,
        checkMaxPassengers(currentNumPassengers) {
          if(currentNumPassengers > this.maxNumPassengers) {
            throw new Error('Current Number of Passengers Cannot Exceeds the Maximum Number')
          }
        },
        checkService(currNumPassengers) {
          if(this.inService === false) {
            throw new Error('Make sure the plane is in service')
          }
        }
      }
    },
    firstFlightDate: {
      type: DataTypes.DATE,
      validate: {
        isBefore: '2021-12-31',
        isAfter: '2020-01-01'
      }
      
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};