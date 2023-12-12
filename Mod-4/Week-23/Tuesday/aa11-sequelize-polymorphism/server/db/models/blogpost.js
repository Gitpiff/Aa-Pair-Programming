'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Step 2 - define polymorphic association
      // Your code here 
      BlogPost.hasMany(models.Image, {
        foreignKey: 'imageableId',
        //disable foreingKey constraints
        constraints: false,
        //define what we need to connect the fk
        scope: {
          //This column will connect the fk with the BlogPost model
          imageableType: 'BlogPost'
        }
      })
    }
  };
  BlogPost.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BlogPost',
  });
  return BlogPost;
};