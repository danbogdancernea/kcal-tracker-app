const mongoose = require('mongoose');

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: {type: String, required: true, unique: true, trim: true, minlength: 3},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true, minlength: 6},
        isAdmin: {type: Boolean, require: true, default: false}
    })
);

module.exports = User;
