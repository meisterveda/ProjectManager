const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,

        trim: true,
        require: [true, 'Please add some text']
    },
    description: {
        type: String,
    },
    body: {
        type: String,
    },
    filetype: {
        type: String,
    },
    parent: {
        type: String,
    },
    secondaryparent: {
        type: String,
    },
    location: {
        type: String,
    }

});

module.exports = mongoose.model('Template', TemplateSchema);