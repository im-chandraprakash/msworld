const Branch = require("../models/branch");
const { success, error } = require("../utils/responseWrapper");
const cloudinary = require("cloudinary").v2;

const createBranchController = async (req, res) => {
    try {
        const { branchName, branchImg } = req.body;

        const result = await cloudinary.uploader.upload(branchImg, {
            public_id: `${Date.now()}`,
            resource_type: "auto",
            folder: "branchImg",
        });

        if (!branchName) {
            return res.send(error(400, "All fields are required"));
        }
        const data = await Branch.create({
            branchName,
            image: {
                publicId: result.public_id,
                url: result.url,
            },
        });
        return res.send(success(200, { data }));
    } catch (e) {
        return res.send(error(400, e.message));
    }
};

const getAllBranchController = async (req, res) => {
    try {
        const data = await Branch.find();
        return res.send(success(200, { data }));
    } catch (e) {
        return res.send(error(400, e.message));
    }
};

module.exports = {
    createBranchController,
    getAllBranchController,
};
