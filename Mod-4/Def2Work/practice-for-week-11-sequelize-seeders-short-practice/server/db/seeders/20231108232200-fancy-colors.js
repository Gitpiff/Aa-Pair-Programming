'use strict';

const { Op } = require('sequelize');
const { Color } = require('../models');

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
   await Color.bulkCreate(
    [
      { name: 'fancy1', 
        createdAt: new Date('01/01/2000'), 
        updatedAt: new Date('02/02/2003')
      },
      { name: 'fancy2', 
        createdAt: new Date('01/01/2007'), 
        updatedAt: new Date('02/02/2010')
      }
    ]
   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Colors', {
      name: {
        [Op.in]: ['fancy1', 'fancy2']
      }
    })
  }
};
