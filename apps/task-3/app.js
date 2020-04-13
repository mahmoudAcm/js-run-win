const express = require('express')
const path = require('path')
require('./db/connection')
const productRouter = require('./routes/product')

const app = express() 
const port = process.env.PORT || 3000 

app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))
app.use(productRouter)

app.listen(port, () => {
    console.log(`running up on port ${port}`)
})