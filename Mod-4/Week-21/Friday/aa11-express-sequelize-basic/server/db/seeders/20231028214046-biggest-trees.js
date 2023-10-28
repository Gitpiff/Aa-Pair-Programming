'use strict';

const { Tree } = require("../models")
const { Op } = require("sequelize")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await Tree.bulkCreate([
        {
          tree: 'General Sherman',
          location: 'Sequoia National Park',
          heightFt: 274.9,
          groundCircumferenceFt: 102.6
      },
      {
          tree: 'General Grant',
          location: 'Kings Canyon National Park',
          heightFt: 268.1,
          groundCircumferenceFt: 107.5
      }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Trees', {
      tree: {
        [Op.in]: ['General Sherman', 'General Grant']
      }
    }, {})
  }
};
