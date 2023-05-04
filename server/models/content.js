const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        image: {
            publicId: String,
            url: String,
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
        advantages: [
            {
                points: {
                    type: String,
                    required: true,
                },
            },
        ],
        disadvantages: [
            {
                points: {
                    type: String,
                    required: true,
                },
            },
        ],
        date: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Content", contentSchema);
