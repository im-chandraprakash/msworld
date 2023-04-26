const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    // this will create Schema in database for Sujects
    subject: {
        type: String,
        lowercase: true,
        required:true,
    },
});

module.exports = mongoose.model("subject" , subjectSchema);