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

//get Books
module.exports.getBooks = function(callback, limit) {
   Book.find(callback).limit(limit);
}

module.exports.getBooksById = function(id,callback) {
    Book.findById(id,callback)
 }
 
 module.exports.addBooks = function(book,callback) {
    Book.create(book, callback)
 }
 module.exports.addBook = (book, callback) => {
	Book.create(book, callback);
}

// Update Book
module.exports.updateBook = (id, book, options, callback) => {
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = (id, callback) => {
	var query = {_id: id};
	Book.remove(query, callback);
}
