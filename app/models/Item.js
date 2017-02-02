var mongoose = require('mongoose');

//------------------------------------------------------------------------
// Schema definition
var itemSchema = mongoose.Schema({

    name  : { type: String, required: true, trim: true }
});

//------------------------------------------------------------------------
// Exports
module.exports = mongoose.model('Item', itemSchema);