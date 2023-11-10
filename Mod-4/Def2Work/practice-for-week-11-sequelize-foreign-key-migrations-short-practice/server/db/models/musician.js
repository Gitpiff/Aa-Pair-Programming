'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musician extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //One to One  -One Musician belonegs to One Band
     Musician.belongsTo(models.Band, {
      foreignKey: 'bandId'
     })

     //One to Many  -One Instrument can have Many Musicians
     Musician.belongsToMany(models.Instrument, {
      through: 'MusicianInstrument'
     })
    }
  };
  Musician.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Musician',
  });
  return Musician;
};