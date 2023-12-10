'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airlineCode: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      flightNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      inService: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      maxNumPassengers: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      currentNumPassengers: {
        type: Sequelize.INTEGER
      },
      firstFlightDate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });

    //We can add an Index without having to create a migration file 
    // await queryInterface.addIndex('Airplanes', {
    //   fields: ['airlineCode', 'flightNumber'],
    //   unique: true
    // })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};