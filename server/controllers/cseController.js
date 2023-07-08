const { error, success } = require("../utils/responseWrapper");
const Subject = require("../models/subject");
const Topic = require("../models/topic");
const Content = require("../models/content");
const Exclude = require('express-fileupload')
const cloudinary = require("cloudinary").v2;
const uploaderExpress = require('express-fileupload');
const fs = require("fs");


const getAllSubjectController = async (req, res) => {
    try {
        const allSubjects = await Subject.find();
        return res.send(success(200, { allSubjects }));
    } catch (e) {
        console.log(e);
    }
};

const createSubjectController = async (req, res) => {
    try {
        const { subject, id, semester,description } = req.body;

        if (!subject || !id || !semester || !description) {
            return res.send(error(400, "All fields are required"));
        }

        const check = await Subject.findOne({ subject });

        if (check) {
            return res.send(error(409, "Subject already exist"));
        }

        const data = await Subject.create({
            id,
            subject,
            semester,
            description,
        });

        return res.send(success(200, { data }));
    } catch (e) {
        console.log(e);
    }
};

const createTopicController = async (req, res) => {
    try {
        const { name, id, subject_id } = req.body;

        if (!name || !id || !subject_id) {
            return res.send(error(400, "All fields are required"));
        }

        const check = await Topic.findOne({ id });

        if (check) {
            return res.send(error(409, "Topic id already exist"));
        }

        const data = await Topic.create({
            id,
            name,
            subject_id,
        });

        return res.send(success(200, { data }));
    } catch (e) {
        console.log(e);
    }
};

const getTopicController = async (req, res) => {
    try {
        const { subject_id } = req.params;
        const data = await Topic.find({ subject_id });
        return res.send(success(200, { data }));
    } catch (e) {
        console.log(e);
    }
};

const getAllTopics = async (req ,res) =>{

    try {
        
        const data = await Topic.find();
        res.send(success(200 , {data}));
    } catch (e) {
       res.send(error(400 , e.message));
    }
}
const getLengthOfTopicController = async (req, res) => {
    const length = await Topic.find();
    res.send(success(200, length));
};

const createContentController = async (req, res) => {
    try {            
        const {
            intro,
            id,
            topic_id,
            author,
            content,
            details,
            advantages,
            disadvantages,
            image,
        } = req.body;

          const result = await cloudinary.uploader.upload(image, {
              public_id: `${Date.now()}`,
              resource_type: "auto",
              folder: "images",
          });

          console.log("result is : " , result);
        if (!intro || !id || !topic_id || !author || !details) {
            return res.send(error(400, "All fields are required"));
        }

        const check = await Content.findOne({ id });

        if (check) {
            return res.send(error(409, "Content id already exist"));
        }


        const data = await Content.create({
            id,
            intro,
            topic_id,
            author,
            content,
            details,
            advantages,
            disadvantages,
            image : {
                publicId: result.public_id,
                url:result.url,
            }
        });

        return res.send(success(200, { data }));
    } catch (e) {
        res.send(error(400, e.message));
    }
};


const getContentLengthController = async (req, res) => {
    try {
        const data = await Content.find();
        return res.send(success(200, data));
    } catch (e) {
        return res.send(error(400, e.message));
    }
};

const getContentController = async (req, res) => {
    try {
        const { topic_id } = req.params;
        const data = await Content.find({ topic_id });
        return res.send(success(200, { data }));
    } catch (e) {
        console.log(e);
    }
};

const getAllContents = async (req  , res) =>{

   try {
         const data = await Content.find();
         res.send(success(200, data));
   } catch (e) {
     console.log(e.message);
   }
} 

const findTopicController = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Topic.findOne({ id });
        return res.send(success(200, { data }));
    } catch (e) {
         return res.send(error(400, e.message));
    }
};
module.exports = {
    getAllSubjectController,
    createSubjectController,
    createTopicController,
    getTopicController,
    createContentController,
    getContentController,
    getLengthOfTopicController,
    findTopicController,
    getContentLengthController,
    getAllContents,
    getAllTopics,
};
