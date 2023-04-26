const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    id: Number,
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