const mongoose = require('mongoose');
const sequencesSchema = mongoose.Schema({

   "maxBookId": {type: String, required: true}


});
module.exports = mongoose.model('Book', sequencesSchema);
