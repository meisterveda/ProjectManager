const mongoose = require('mongoose');

const GitSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        require: [true, 'Please add some text']
    },
    url: {
        type: String,
    },
    api: {
        type: [String],
    },
    key: {
        type: String,
    }
});

module.exports = mongoose.model('Git', GitSchema);