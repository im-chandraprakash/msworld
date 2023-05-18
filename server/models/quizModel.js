const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        startTime: {
            type: Number,
            // required: true,
        },
        endTime: {
            type: Number,
            // required: true,
        },
        quizQuestions: [
            {
                question: {
                    type: String,
                    required: true,
                },
                option1: {
                    type: String,
                    required: true,
                },
                option2: {
                    type: String,
                    required: true,
                },
                option3: {
                    type: String,
                    required: true,
                },
                option4: {
                    type: String,
                    required: true,
                },
                answer: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("quiz", quizSchema);
