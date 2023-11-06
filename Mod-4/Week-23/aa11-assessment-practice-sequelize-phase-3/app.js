require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();
const {WarehouseItem} = require("../aa11-assessment-practice-sequelize-phase-3/db/models")

app.use(express.json());

app.get('/items', async (req, res) => {
  const newItems = await WarehouseItem.findAll({
    where: {
      isUsed: false
    }
  })
  res.json(newItems)
})

app.put('/items/:id', async (req, res) => {
  const { name, price, quantity, isUsed } = req.body 
  //console.log(name, price, quantity, isUsed)
  const item = await WarehouseItem.findByPk(req.params.id)
  if(!item) {
    res.status(404).json({
      message: "Warehouse Item not found"
    })
  }
  // item.name = name
  // item.price = price
  // item.quantity = quantity
  // item.isUsed = isUsed

  await item.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  //await item.save()
  res.status(200).json(item)
})

app.get('/items/:name', async (req, res) => {
  const item = await WarehouseItem.findOne({
    where: {
      name: req.params.name
    }
  })
  if(!item) {
   return res.status(404).json(
    {
      message: "Warehouse Item not found"
    }) 
  }
  res.json(item)
})

app.delete('/items/:id', async (req, res) => {
  const item = await WarehouseItem.findByPk(req.params.id)
  if(!item) {
    return res.status(404).json({
      message: "Warehouse Item not found"
    })
  }
  await item.destroy()
  res.json({
    message: 'Sucessfully deleted'
  })
})

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}