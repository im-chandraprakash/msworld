const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema({
    id: Number,
    name:{
        type: String,
        required: true
    },
    course_id : {
        type: Number,
        required: true
    },
    date : {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.module("Semester", semesterSchema);