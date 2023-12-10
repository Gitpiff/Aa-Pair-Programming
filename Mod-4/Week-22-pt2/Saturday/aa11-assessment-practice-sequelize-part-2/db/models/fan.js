'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Many to Many
      Fan.belongsToMany(models.Player, {
        through: 'DraftPicks',
        foreignKey: 'fanId',
        otherKey: 'playerId'
      })
      //One to Many
      Fan.hasMany(models.DraftPick, {
        foreignKey: 'fanId',
        onDelete: 'CASCADE',
        hooks: true   //without these hooks onDelete will not work properly
      })
    }
  }
  Fan.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Fan',
  });
  return Fan;
};