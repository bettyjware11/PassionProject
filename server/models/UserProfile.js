var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserProfile = new Schema(
    {
        username: {type: String, required: true, max: 100},
        password: {type: String, required: true, max: 100},
        email: {type: String},
        // photo: {data: Buffer, contentType: String},
        // uploadDate: {type: Date, default: Date.now},
        // comments: {type: HTMLTextAreaElement}
    }
);

//Export model
module.exports = mongoose.model('user', UserProfile);