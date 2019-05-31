var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserProfile = new Schema(
    {
        username: {type: String, required: true, max: 100},
        password: {type: String, required: true, max: 100},
        email: {type: String},
        profileImage: {type: String}
    }
);

//Export model
module.exports = mongoose.model('profileUser', UserProfile);