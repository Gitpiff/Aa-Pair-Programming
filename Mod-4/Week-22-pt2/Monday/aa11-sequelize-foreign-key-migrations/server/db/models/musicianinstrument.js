'use strict';
const {
  Model
} = require('sequelize');
const musician = require('./musician');
module.exports = (sequelize, DataTypes) => {
  class MusicianInstrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  MusicianInstrument.init({
    musicianId: DataTypes.INTEGER,
    instrumentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MusicianInstrument',
  });
  return MusicianInstrument;
};