const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    id: Number,
    name:{
        type: String,
        required: true
    },
    topic_id : {
        type: Number,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.module("Content", contentSchema);