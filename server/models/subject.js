const mongoose = require("mongoose");

const subject = mongoose.Schema({
    id: {
        typer: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    semester_id: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date
    }
});

module.exports = mongoose.module("subject", subject);