const express = require('express')
const products = require('../models/products')

const Router = new express.Router() 

Router.post('/product', async (req, res) => {
  try{
      const product = await products(req.body) 
      await product.save()
      res.send(product)
  } catch(e){
      res.send(500).send(e)
  }
})


Router.get('/products', async (req, res) => {
    try{
        const read = await products.find({})
        res.send(read)
    } catch(e){
        res.send(500).send(e)
    }
})

Router.post('/product/:id', async (req, res) => {
      try{
        await products.updateProduct(req.params.id, req.body)
        const product = await products.find({})
        res.send(product)
      } catch(e){
        res.status(404).send(e)    
      }
});


Router.delete('/product/:id', async (req, res) => {
    try{
      const product = await products.deleteProduct(req.params.id)
      res.send(product)
    } catch(e){
      res.status(404).send(e)
    }
});

module.exports = Router