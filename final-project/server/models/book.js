const mongoose = require('mongoose');
const BookSchema = mongoose.Schema({
  id: {type: String, required: true},
  title: {type: String, required: true},
  author: {type: String, required: true},
  img : {type: String, required: true},
  description: {type: String, required: true},
  url: {type: String, required: true}

});

module.exports = mongoose.model('Book', BookSchema);
