const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Genre = require('./models/genre.js')
const Book = require('./models/book.js')

app.use(bodyParser.json())
//connect to Mongoose
mongoose.connect('mongodb://woojunchoi:spdlxm123@ds257838.mlab.com:57838/woojunmongo')
const db = mongoose.connection
db.once('open', (err, success) => {
    if (err) console.log('NOOOOOOOO');
    console.log('CONNECTED YAYYYYY');
  })

app.get('/', (req,res) => {
    res.send('hello world')
})

// genre
app.get('/api/genres', (req,res) => {
    Genre.getGenres(function(err,genre) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(genre)
        }
    })
})
app.post('/api/genres', (req,res) => {
    let genre = req.body
    Genre.addGenres(genre,(err,genre) => {
        if(err) console.log(err)
        else res.json(genre)
    })
})
// books
app.get('/api/books', (req,res) => {
    Book.getBooks(function(err,book) {
        if(err) console.log(err)
        else res.json(book)
    })
})

app.post('/api/books', (req,res) => {
    let book = req.body
    Book.addBooks(book,(err,books)=>{
        if(err) throw err
        else res.json(books)
    })
})

app.get('/api/books/:_id', (req,res) => {
    Book.getBooksById(req.params._id , (err,book) => {
        if(err) console.log(err)
        else res.json(book)
    })
})

app.listen(3000);
console.log('running on port 3000')