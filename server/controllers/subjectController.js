const { error, success } = require("../utils/responseWrapper");
const Subject = require('../models/Sujects');

const getAllSubjectController = async (req, res) => {

    try {        
       const allSubjects = await Subject.find();
       return res.send(success(200 , {allSubjects}));
    } catch (e) {
        console.log(e);
    }
};

const createSubjectController = async (req , res) =>{

    try {
         const { subject } = req.body;

         

         if (!subject) {
             return res.send(error(400, "Subject is required"));
         }

         const check = await Subject.findOne({ subject });

         if (check) {
             return res.send(error(409, "Subject Name already exist"));
         }

         const data = await Subject.create({
             subject,
         });

         return res.send(success(200, { data }));
    } catch (e) {
        console.log(e)   
    }
   
}


module.exports = {
    getAllSubjectController,
    createSubjectController,
};
