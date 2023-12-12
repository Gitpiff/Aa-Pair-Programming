'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EntreeIngredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entreeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Entrees'
        }
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ingredients'
        }
      },
      quantity: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EntreeIngredients');
  }
};