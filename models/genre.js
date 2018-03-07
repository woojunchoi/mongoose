const mongoose = require('mongoose')

let genreSchema = mongoose.Schema({
   name:{
       type: String,
       required: true
   },
   create_date: {
       type: Date,
       default: Date.now
   },
})

const Genre = module.exports = mongoose.model('genres', genreSchema)

//get Genres
module.exports.getGenres = function(callback, limit) {
   Genre.find(callback).limit(limit);
}
//add Genres
module.exports.addGenres = function(genre, callback) {
    Genre.create(genre, callback)
}

module.exports.updateGenres = function(id, genre, options, callback) {
    let query = {'_id':id}
    let update = {
        "name" : genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback)
}