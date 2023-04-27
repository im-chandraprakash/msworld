const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    id: {
<<<<<<< HEAD
=======
        typer: Number,
        required: true
    },
    name:{
        type: String,
        required: true,
        lowercase: true
    },
    subject_id : {
>>>>>>> 2633f8fe3de3ae585a350df6aca12bcbcfc36037
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.module("Topic", topicSchema);