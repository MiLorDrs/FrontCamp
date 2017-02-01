let mongoose = require('mongoose');
let config = require('./../config');

mongoose.connect(config.get('mongoose:uri'));

let Schema = mongoose.Schema;

let News = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    }
});

let NewsModel = mongoose.model('News', News);

let UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

let UserModel = mongoose.model('User', UserSchema);

module.exports = {
    NewsModel: NewsModel,
    UserModel: UserModel
};