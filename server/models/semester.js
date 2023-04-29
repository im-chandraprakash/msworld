const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema({
    id: {
        typer: Number,
        required: true
    },
    name:{
        type: String,
        required: true,
        lowercase: true
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

module.exports = mongoose.model("Semester", semesterSchema);