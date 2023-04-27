const { error, success } = require("../utils/responseWrapper");
const Subject = require("../models/subject");
const Topic = require("../models/topic");
const content = require("../models/content");

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
        const { subject, id, semester } = req.body;

        if (!subject || !id || !semester) {
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

const getTopicController = async (req , res)=>{
 try {
    const {subject_id} = req.body;
    const data = await Topic.find({subject_id});
    return res.send(success(200 , {data}));
 } catch (e) {
    console.log(e);
 }
}

const createContentController = async (req, res) => {
    try {
        const { name, id, topic_id, author, description, advantage, disadvantage } = req.body;

        if (!name || !id || !topic_id || !author || !description) {
            return res.send(error(400, "All fields are required"));
        }

        const check = await Content.findOne({ id });

        if (check) {
            return res.send(error(409, "Content id already exist"));
        }

        const data = await Content.create({
            id,
            name,
            topic_id,
            author,
            description,
            advantage,
            disadvantage
        });

        return res.send(success(200, { data }));
    } catch (e) {
        console.log(e);
    }
};

const getContentController = async (req, res) =>{
    try{
        const {topic_id} = req.body;
        const data = await Content.find({topic_id});
        return res.send(success(200, {data}));
    } catch(e){
        console.log(e);
    }
}

module.exports = {
    getAllSubjectController,
    createSubjectController,
    createTopicController,
    getTopicController,
    createContentController,
    getContentController
};
