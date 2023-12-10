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
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isUppercase: true,
        // capitalized(value) {
        //   if(value !== value.toUpperCase()) {
        //     throw new Error('Airline Code Must Be Capitalized')
        //   }
        // },
        len: [2, 2]
      }
    },
    flightNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        // numsOnly(value) {
        //   if(isNaN(value)) {
        //     throw new Error('Flight Number must be Numbers Only')
        //   }
        // },
        isNumeric: true,
        len: [1, 4]
      }
    },
    inService: { 
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    maxNumPassengers: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 2,
        max: 853
      }
    },
    currentNumPassengers: { 
      type: DataTypes.INTEGER,
      validate: {
        passengersNum(value) {
          if(value > this.maxNumPassengers || this.inService === false) {
            throw new Error('Check the maximum Num of passengers or the state of inService')
          }
        },
        min: 0,
        max: 853
      }
    },
    firstFlightDate: { 
      type: DataTypes.STRING,
      validate: {
        isBefore: '2022-01-01',
        isAfter: '2019-12-31'
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};