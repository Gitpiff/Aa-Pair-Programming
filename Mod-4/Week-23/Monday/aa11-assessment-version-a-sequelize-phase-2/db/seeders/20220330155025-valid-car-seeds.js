'use strict';

const { Car } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real car data as values! The data values
  // just need to make sense based from the migration and model files.

const validCars = [
  // Your code here 
  {
    make: 'FORD',
    model: 'Expedition',
    modelYear: 2007,
    bodyStyle: 'PLATINUM',
    trimLevel: 'Platinum',
    milesPerGallon: 20,
    powerTrain: 'gas',
    isAutomatic: true
  },
  {
    make: 'CHEVY',
    model: 'Silverado',
    modelYear: 2008,
    bodyStyle: 'PLATINUM',
    trimLevel: 'Platino',
    milesPerGallon: 20,
    powerTrain: 'gas',
    isAutomatic: true
  },
  {
    make: 'TOYOTA',
    model: 'Sienna',
    modelYear: 2009,
    bodyStyle: 'PLATINUM',
    trimLevel: 'Platinums',
    milesPerGallon: 20,
    powerTrain: 'gas',
    isAutomatic: true
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Car.bulkCreate(validCars, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    for (let carInfo of validCars) {
      try {
        await Car.destroy({
          where: carInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validCars,
};

