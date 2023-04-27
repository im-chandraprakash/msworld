const { error, success } = require("../utils/responseWrapper");
const Subject = require("../models/subject");

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

module.exports = {
    getAllSubjectController,
    createSubjectController,
};
