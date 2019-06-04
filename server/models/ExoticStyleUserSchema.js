var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var ExoticStyleUserSchema = new Schema(
    {
            username:String,
            password:String,
            profileImage:String,
            exoticStyles:[{styleName:String, styleImage:String,  uniqueColorMix:Boolean, styleColor:String, comments:String}],
        // styleName: {type: String, required: true, max: 100},
        // styleImage: {type: String},
        // uploadDate: {type: Date, default: Date.now},
        // styleColor: {type: String},
        // uniqueColorMix: {type: Boolean},
        // uniqueColorChoice: {type: String},
        // comments: {type: String}

    }
);

//Export model
module.exports = mongoose.model('exoticStyle', ExoticStyleUserSchema);