const express = require('express');
const router = express.Router();
// Your code here 

const { Entree } = require('../db/models')

router.get('/', async (req, res) => {
    const entrees = await Entree.findAll({
        order: [['price', 'DESC'], ['name']]
    })
    console.log(entrees)
    return res.json(entrees)
})

module.exports = router;
