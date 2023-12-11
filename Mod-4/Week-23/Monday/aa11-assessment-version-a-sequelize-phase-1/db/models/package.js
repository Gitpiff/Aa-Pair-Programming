'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Package.init({
    trackingNumber: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [10, 10],
        isNumeric: true
      }
    },
    weightKg: DataTypes.INTEGER,
    sender: DataTypes.STRING,
    recipient: DataTypes.STRING,
    isDelivered: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Package',
  });
  return Package;
};