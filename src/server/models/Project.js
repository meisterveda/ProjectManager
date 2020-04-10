const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        require: [true, 'Please add some text']
    },
    description: {
        type: String,
    },
    technology: {
        type: [String],
    },
    createdby: {
        type: String,
    },
    timeofcreation: {
        type: String,
    },
    lastmodifiedby: {
        type: String,
    },
    administrator: {
        type: String,
    },
    gitname: {
        type: String,
    }
});

module.exports = mongoose.model('Project', ProjectSchema);