const mongoose = require("mongoose");

<<<<<<< HEAD
const subjectSchema = mongoose.Schema({
    id: {
        type:Number,
        required:true,
=======
const subject = mongoose.Schema({
    id: {
        typer: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        lowercase: true
>>>>>>> 2633f8fe3de3ae585a350df6aca12bcbcfc36037
    },
    subject: {
        type: String,
        required: true,
        lowercase: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date,
    },
});

module.exports = mongoose.model("subject", subjectSchema);
