const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    id: {
        typer: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Course", courseSchema);