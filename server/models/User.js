const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    clgName: {
        type: String,
    },
    semester:{
        type:Number,
    },
    avatar: {
        publicId: String,
        url: String,
    },
});

module.exports = mongoose.model("user", userSchema);
