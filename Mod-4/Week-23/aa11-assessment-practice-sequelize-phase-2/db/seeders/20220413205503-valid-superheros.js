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
    heightCm: 190,
    isMutant: false,
    race: 'human' ,
    universe: 'Marvel',
    releaseYear: 1950,
  },
  {
    name: 'CPPTAIN AMERICA',
    alias: 'SSve Rogers',
    affiliation: 'Avengers',
    heightCm: 190,
    isMutant: false,
    race: 'human' ,
    universe: 'Marvel',
    releaseYear: 1960,
  },
  {
    name: 'CAPIN AMERICA',
    alias: 'Steve Rers',
    affiliation: 'Avengers',
    heightCm: 190,
    isMutant: false,
    race: 'human' ,
    universe: 'Marvel',
    releaseYear: 1970,
  },
  {
    name: 'CAPTTTAIN AMERICA',
    alias: 'Steve sSSSSS',
    affiliation: 'Avengers',
    heightCm: 190,
    isMutant: false,
    race: 'human' ,
    universe: 'Marvel',
    releaseYear: 1980,
  },
  {
    name: 'CAPTAIN AERICA',
    alias: 'StVVVe Rogers',
    affiliation: 'Avengers',
    heightCm: 190,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1990,
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
