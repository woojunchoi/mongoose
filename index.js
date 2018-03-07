const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//connect to Mongoose
mongoose.connect('mongodb://woojunchoi:spdlxm123@ds257838.mlab.com:57838/woojunmongo')
const db = mongoose.connection
mongoose.connection.once('open', (err, success) => {
    if (err) console.log('NOOOOOOOO');
    console.log('CONNECTED YAYYYYY');
  })

app.get('/', (req,res) => {
    res.send('hello world')
})

app.get('/api/genre', (req,res) => {
    
})

app.listen(3000);
console.log('running on port 3000')