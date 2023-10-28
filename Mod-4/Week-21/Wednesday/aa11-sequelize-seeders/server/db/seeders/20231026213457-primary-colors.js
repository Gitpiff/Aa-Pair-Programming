'use strict';

const { Color } = require("../models")    //Import Color Model
const { Op }  = require("sequelize")

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
    */ //MODEL            //TABLE   //Columns:values
  

      await Color.bulkCreate([
       { name: "red" },
       { name: "blue" },
       { name: "yellow" }
      ], { validate: true })
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      "Colors",
      {
        name: {
          [Op.in]: ["red", "blue", "yellow"]
        }
      }, 
      {}
    )
  }
};
