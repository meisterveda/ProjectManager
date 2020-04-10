const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,

        trim: true,
        require: [true, 'Please add some text']
    }
});

module.exports = mongoose.model('Report', ReportSchema);