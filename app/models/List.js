var mongoose = require('mongoose');

//------------------------------------------------------------------------
// Reference Schema

//------------------------------------------------------------------------
// Validator
// var validator = Utils.getValidator('booking');

//------------------------------------------------------------------------
// Schema definition
var listSchema = mongoose.Schema({

    name  : { type: String, required: true, trim: true },
    items : { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }], default: [] }
});

//------------------------------------------------------------------------
// Exports
module.exports = mongoose.model('List', listSchema);