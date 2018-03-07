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

let Genre = module.exports = mongoose.model('Genre', genreSchema)

//get Genres
moudle.exports.getGenre = function(callback, limit) {
   Genre.find(callback).limit(limit);
}


