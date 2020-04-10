const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,

        trim: true,
        require: [true, 'Please add some text']
    }
});

module.exports = mongoose.model('Setting', SettingSchema);