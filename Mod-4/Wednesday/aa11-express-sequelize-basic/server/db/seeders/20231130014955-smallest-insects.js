'use strict';

const { Insect } = require("../models")

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
    await Insect.bulkCreate([
      {
        name: 'Western Pygmy Blue Butterfly',
        description: 'Recognized by copper and blue on wings',
        territory: 'Can be found in NA and MiddleEast',
        fact: 'Butterfly Lifeeee',
        millimeters: 12
      },
      {
        name: 'Patu Digua Spider',
        description: 'Super super super smol',
        territory: 'Western Africa',
        fact: '8 legs for lifeee - if lucky',
        millimeters: 0.76
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects', {
      name: 'Western Pygmy'
    })
  }
};
