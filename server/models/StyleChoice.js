var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StyleChoice = new Schema(
    {
        name: {type: String, required: true, max: 100},
        style: {type: String, required: true, max: 100},
        color: {type: String},
        uniqueColorMix: {type: Boolean},
        uniqueColorChoice: {type: String},

    }
);

//Export model
module.exports = mongoose.model('user', StyleChoice);