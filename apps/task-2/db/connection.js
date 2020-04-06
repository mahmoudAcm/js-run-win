const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/runAndWin',{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
})