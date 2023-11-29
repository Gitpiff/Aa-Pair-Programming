'use strict';

const { Color } = require('../models') 

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
    const fancyColors = [
      {
        name: 'indigo', 
        createdAt: new Date('01 Jan 1990'),
        updatedAt: new Date('5 July 1997')
      }, 
      {
        name: 'fiusha',
        createdAt: new Date('02 Jan 1990'),
        updatedAt: new Date('7 July 1997')
      }, 
      {
        name: 'lightblue',
        createdAt: new Date('01 Jan 1996'),
        updatedAt: new Date('5 July 1999')
      }
    ]
    await Color.bulkCreate(fancyColors, { validate: true })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Colors', {
      name: ['indigo', 'fiusha', 'lightblue']
    })
  }
};
