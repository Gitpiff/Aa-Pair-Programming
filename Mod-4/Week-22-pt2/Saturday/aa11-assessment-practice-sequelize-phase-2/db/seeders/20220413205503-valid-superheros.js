'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
  // just need to make sense based from the migration and model files.

const validSuperheros = [
  // Your code here 
  {
    name: 'BATMAN',
    alias: 'Bruce Wayne',
    affiliation: 'Justice League',
    heightCm: 190,
    isMutant: false,
    race: 'human',
    universe: 'DC',
    releaseYear: 1950
  },
  {
    name: 'BATMANN',
    alias: 'Bruce Waynee',
    affiliation: 'Justice League',
    heightCm: 190,
    isMutant: false,
    race: 'human',
    universe: 'DC',
    releaseYear: 1951
  }, 
  {
    name: 'BATMANNNN',
    alias: 'Brucee Wayne',
    affiliation: 'Justice League',
    heightCm: 190,
    isMutant: false,
    race: 'human',
    universe: 'DC',
    releaseYear: 1952
  },
  {
    name: 'BATMANNNNN',
    alias: 'Brucee Waynee',
    affiliation: 'Justice League',
    heightCm: 190,
    isMutant: false,
    race: 'human',
    universe: 'DC',
    releaseYear: 1953
  },
  {
    name: 'BATMANNNNNN',
    alias: 'Bruceee Wayne',
    affiliation: 'Justice League',
    heightCm: 190,
    isMutant: false,
    race: 'human',
    universe: 'DC',
    releaseYear: 1954
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};
