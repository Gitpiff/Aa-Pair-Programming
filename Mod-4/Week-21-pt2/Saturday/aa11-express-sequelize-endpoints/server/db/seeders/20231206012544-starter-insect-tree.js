'use strict';

const InsectTree = require('../models');

const seedData = [
  {

  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    //Make an array with data to seed
    //Find the insect by name -findOne-
    const insects = await queryInterface.sequelize.query(
      `select id from insects where name = "Western Pygmy Blue Butterfly"`
    )
    //Find tree by name 
    //Model.create 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
