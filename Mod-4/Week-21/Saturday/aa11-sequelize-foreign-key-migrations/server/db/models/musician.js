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
      // Your code here 
              //One to many relationship
      //Model.prototype.belongsTo() Used for the child in a one to many relationship
      Musician.belongsTo(models.Band, {
        foreignKey: 'bandId'
      })    

      Musician.belongsToMany(models.Instrument, {
        through: models.MusicianInstrument
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
