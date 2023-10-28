'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insects.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        titleCased(value) {
          const words = value.split(' ')
          for(let word of words) {
            if(word[0] !== word[0].toUpperCase()) {
              throw new Error('Must be Title Cased')
            }
          }
        }
      }
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING,
      validate: {
        len: [0,240]
      }
    },
    millimiters:{
      type: DataTypes.FLOAT,
        allowNull: false,
        validate : {
          min: 0
        }
    }
  }, {
    sequelize,
    modelName: 'Insects',
  });
  return Insects;
};