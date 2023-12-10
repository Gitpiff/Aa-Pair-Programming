require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const { WarehouseItem } = require('./db/models')

app.get('/items', async (req, res, next) => {
  try {
    const allItems = await WarehouseItem.findAll({
      where: {
        isUsed: false
      }
    })
  
    return res.json(allItems)

  }
  catch (error) {
    console.log(error)
  }
})

app.put('/items/:id', async (req, res, next) => {
  const { id } = req.params
  const { name, price, quantity, isUsed } = req.body
  // console.log(req.body.name)
  const item = await WarehouseItem.findByPk(id)
  if(item) {
    const updatedItem = await item.update({
      name, 
      price,
      quantity,
      isUsed
    })
    return res.json(updatedItem)
  }
  
  res.status(404)
  res.json(
    {
      message: "Warehouse Item not found"
    }
  )
})

app.get('/items/:name', async (req, res, next) => {
  const { name } = req.params
  if(item) {
    const item = await WarehouseItem.findOne({
      where: {
        name
      }
    })
    return res.json(item)
  }
  

  res.status(404)
  res.json(
    {
      message: "Warehouse Item not found"
    }
  )
})

app.delete('items/:id', async (req, res, next) => {
  const { id } = req.params

  const item = await WarehouseItem.findByPk(id)
  if(item) {
    item.destroy()
    return res.message('Deleted')
  }

  res.status(404)
  res.json(
    {
      message: "Warehouse Item not found"
    }
  )
  }
)

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}