'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
  // just need to make sense based from the migration and model files.

const validSuperheros = [
  // Your code here 
  {
    name: 'CAPTAIN AMERICA',
    alias: 'Steve Rogers',
    affiliation: 'Avengers',
    heightCm: 180,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 2020
  },
  {
    name: 'CAPTAIN AMEERTERTRICA',
    alias: 'Steve Rodgdfhdgers',
    affiliation: 'Avengers',
    heightCm: 180,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 2018
  },
  {
    name: 'CAPTAIN AMERICFSDSDFSA',
    alias: 'Steve Rogerdfsdfsds',
    affiliation: 'Avengers',
    heightCm: 180,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 2010
  },
  {
    name: 'CAPTDASDASDAAIN AMERICA',
    alias: 'Stevdsfdsfsdfe Rogers',
    affiliation: 'Avengers',
    heightCm: 180,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 2015
  },
  {
    name: 'CAPTAIN AMESDFSFRICA',
    alias: 'Stfsdfsdfeve Rogers',
    affiliation: 'Avengers',
    heightCm: 180,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 2021
  },
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
