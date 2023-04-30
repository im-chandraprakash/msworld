const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    topic_id: {
        type: Number,
        required: true,
    },
    intro: {
        type: String,
        required: true,
    },
    content: [
        {
            heading: {
                type: String,
                required: true,
            },
            about: {
                type: String,
                required: true,
            },
        },
    ],
    author: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    advantage: String,
    disadvantage: String,
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Content", contentSchema);
