const express = require('express');
const router = express.Router();

const { Player } = require('../db/models');

router.get('/', async (req, res) => {
  let { firstName, number, page, size } = req.query;  //Any value coming out of here is a string

  const where = {};
  const query = {};

  //Page and Size HAVE to be numbers 
  //If page is not a number OR is less than 0, default it to 1, else parse the value of page into a num
  page = isNaN(page) || page < 0 ? 1 : parseInt(page); 
  // if(isNaN(page) || page <= 0) {
  //   page = 1;
  // } else {
  //   page = parseInt(page);
  // };
  size = isNaN(size) || size < 0 ? 2 : parseInt(size);
  // if(isNaN(size) || size <= 0) {
  //   size = 2;
  // } else {
  //   size = parseInt(size);
  // };
  if(size > 10) size = 10;

  //In SQL page becomes limit and size becomes offset
  query.limit = size;
  query.offset = size * (page - 1); //How many items we 'skip'

  if (firstName && firstName !== '') {
    where.firstName = firstName[0].toUpperCase() + firstName.slice(1);
  } else if (firstName === '') {
    res.status(400);
    return res.json({
      errors: [
        { message: 'firstName filter should not be empty' }
      ]
    });
  }

  if (number) {
    if (!isNaN(number) && number >= 0) {
      where.number = parseInt(number);    //Adds number property to where object 
    } else {
      res.status(400);
      return res.json({
        errors: [
          { message: 'number filter should be a number greater or equal to 0' }
        ]
      });
    }
  }

  const players = await Player.findAll({
    where,
    ...query
  });
  return res.json({
    players,
    page,
    size
  });
});

module.exports = router;
