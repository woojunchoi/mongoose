const mongoose = require('mongoose')

let bookSchema = mongoose.Schema({
    title:{
       type: String,
       required: true
   },
   genre: {
       type: String,
       required: true
   },
   description: {
       type: String
   },
   author: {
        type: String,
        required: true
   },
   publisher: {
        type: String,
    },
   pages: {
        type: String,
   },
   image_url:{
       type:String
   },
   buy_url: {
       type:String
   },
   create_date: {
       type: Date,
       default: Date.now
   },
})

const Book = module.exports = mongoose.model('books', bookSchema)

//get Genres
module.exports.getBooks = function(callback, limit) {
   Book.find(callback).limit(limit);
}


