const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
    id: {
        type:Number,
        required:true,
    },
    subject: {
        type: String,
        required: true,
        lowercase: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date,
    },
});

module.exports = mongoose.model("subject", subjectSchema);
