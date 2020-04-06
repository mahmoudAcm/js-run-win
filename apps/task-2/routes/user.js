const express = require('express')
const User = require('../models/users')

const app = new express.Router() 


app.post('/signup', async (req, res) => {
    try{
        const user = await User(req.body)
        await user.save()
        res.send(user)
    } catch(e){
        res.status(404).send(e)
    }
})

app.post('/login', async (req, res) => {
    try{
        const user = await User.findByCredentilas(req.body.email, req.body.password) 
        res.send(user)
    } catch(e){
        res.status(404).send(e)
    }
})

module.exports = app 