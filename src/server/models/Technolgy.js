const mongoose = require('mongoose');

const TechnologySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,

        trim: true,
        require: [true, 'Please add some text']
    }
});

module.exports = mongoose.model('Technology', TechnologySchema);