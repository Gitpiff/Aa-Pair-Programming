require('express-async-errors');
require('dotenv').config();
const express = require('express');
const { WarehouseItem } = require('./db/models');
const app = express();

app.use(express.json());

app.get("/items", async (req, res) => {
  const newItems = await WarehouseItem.findAll({where: {isUsed: false}})
  res.json(newItems)
})

app.put("/items/:id", async (req, res) => {
  const { name, price, quantity, isUsed } = req.body
  //Find the Item
  const item = await WarehouseItem.findByPk(req.params.id)
  //If no Item
  if(!item) {
    res.status(404).json({message: "Warehouse Item not found"})
  }
  // item.name = name
  // item.price = price
  // item.quantity = quantity
  // item.isUsed = isUsed

  await item.update(req.body, {where: {id: req.params.id}})

  // await item.save()
  res.json(item)
})

app.get("/items/:name", async (req, res) => {
  const item = await WarehouseItem.findOne({where: {name: req.params.name}})

  if(!item) {
    res.status(404).json({message: "Warehouse Item not found"})
  }

  res.json(item)
})

app.delete("/items/:id", async (req, res) => {
  const item = await WarehouseItem.findByPk(req.params.id)
  if(!item) {
    res.status(404).json({
      message: "Warehouse Item not found"
    })
  }
  await item.destroy()
  res.json({
      message: "Successfully deleted"
  })
})


if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}