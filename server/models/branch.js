const mongoose = require("mongoose");

const branchSchema = mongoose.Schema({

    branchName:{
        type:String,
        required:true,
    },
    image:{
        publicId:String,
        url:String,
    }
});

module.exports = mongoose.model("branch" , branchSchema);