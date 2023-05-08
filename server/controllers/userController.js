const User = require("../models/User");
const { success, error } = require("../utils/responseWrapper");
const cloudinary = require('cloudinary').v2;

const getMyInfo = async (req , res) =>{

    try {
        const user = await User.findById(req._id);
        return res.send(success(200 , {user}));
    } catch (e) {
        return res.send(error(500 , e.message));
    }
}

const updateUserProfile = async (req , res)=>{

    try {
        
        const {name , clgName , semester ,avatar} = req.body;

        const user = await User.findById(req._id);

        if(name){
            user.name = name;
        }
        if(clgName){
            user.clgName = clgName;
        }
        if(semester){
            user.semester = semester;
        }
        if(avatar){
            const cloudImg = await cloudinary.uploader.upload(avatar, {
                public_id: `${Date.now()}`,
                resource_type: "auto",
                folder: "Profile Images",
            });

            user.avatar = {
                url:cloudImg.secure_url,
                public_id:cloudImg.public_id,
            }
        }
        await user.save();
        return res.send(success(200 , {user}))

    } catch (e) {
        return res.send(error(500 , e.message));
    }
}

module.exports = {
    getMyInfo,
    updateUserProfile,
};