'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Airplanes', {
      fields: ['airlineCode', 'flightNumber'],
      type: "UNIQUE",
      name: "airlineCode_and_flightNumber_unique"
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Airplanes', "airlineCode_and_flightNumber_unique")
  }
};
