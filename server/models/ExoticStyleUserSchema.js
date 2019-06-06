var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var ExoticStyleUserSchema = new Schema(
    {

        username: String,
        password: String,
        // profileImage: String,
        exoticStyleName:String,
        exoticStyleDetails: {
            styleImage: {data: Buffer, contentType:String},
            uniqueColorMix: String,
            styleColor: String,
            comments: String
        },

    }
);

//Export model
module.exports = mongoose.model('exoticStyle', ExoticStyleUserSchema);