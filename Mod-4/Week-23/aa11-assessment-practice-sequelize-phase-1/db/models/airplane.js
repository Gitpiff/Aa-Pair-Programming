'use strict';
const {
  Model
} = require('sequelize');
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
        len: [2, 2],
        isUppercase: true
      }
    },
    flightNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        notEmpty: true,
        len: [1, 4]
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
    currentNumPassengers: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 853,
        checkMax(value) {
          if(value > this.maxNumPassengers) {
            throw new Error()
          }
        },
        checkService(value) {
          if(this.inService === false && value !== null) {
            throw new Error()
          }
        }
      }
    },
    firstFlightDate: {
      type: DataTypes.DATE,
      validate: {
          isBefore: "2022-01-01",
					isAfter: "2019-12-31", 
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};