var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserExoticStyleSchema = new Schema(
    {
        styleName: {type: String, required: true, max: 100},
        photo: {data: Buffer, contentType: String},
        uploadDate: {type: Date, default: Date.now},
        styleColor: {type: String},
        uniqueColorMix: {type: Boolean},
        uniqueColorChoice: {type: String},
        comments: {type: String}

    }
);

//Export model
module.exports = mongoose.model('exoticStyle', UserExoticStyleSchema);