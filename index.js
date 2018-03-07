const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore')
const db = mongoose.connection

app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(3000);
console.log('running on port 3000')