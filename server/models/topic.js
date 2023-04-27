const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    id: {
        typer: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    subject_id : {
        type: Number,
        required: true
    },
    date : {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.module("Topic", topicSchema);