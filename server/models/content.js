const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
<<<<<<< HEAD
    id: {
=======
    id: Number,
    name:{
        type: String,
        required: true,
        lowercase: true
    },
    topic_id : {
>>>>>>> 2633f8fe3de3ae585a350df6aca12bcbcfc36037
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    topic_id: {
        type: Number,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.module("Content", contentSchema);