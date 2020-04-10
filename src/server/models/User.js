const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,

        trim: true,
        require: [true, 'Please add some text']
    },
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    roles: {
        type: String,
    },
    hash: {
        type: String,
    },
    salt: {
        type: String,
    }
});

module.exports = mongoose.model('user', userSchema);