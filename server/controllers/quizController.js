const Quiz = require("../models/quizModel");
const { error, success } = require("../utils/responseWrapper");

const createQuizController = async (req, res) => {
    try {
        const { id, name, startTime, endTime, quizQuestions } = req.body;

        // const check = await Quiz.findOne({s})
        const data = await Quiz.create({
            id,
            name,
            startTime,
            endTime,
            quizQuestions,
        });

        return res.send(success(200, { data }));
    } catch (e) {
        return res.send(error(400, e.message));
    }
};
const getAllQuizController = async (req, res) => {
    try {
        const data = await Quiz.find();
        return res.send(success(200, { data }));
    } catch (e) {
        return res.send(error(200, e.message));
    }
};

// const addQuesionsToQuiz = async (req, res) => {
//     try {
//         const { quesions } = req.body;

//         const user = await User.findById(req._id);

//         if (name) {
//             user.name = name;
//         }
//         if (clgName) {
//             user.clgName = clgName;
//         }
//         if (semester) {
//             user.semester = semester;
//         }
//         if (avatar) {
//             const cloudImg = await cloudinary.uploader.upload(avatar, {
//                 public_id: `${Date.now()}`,
//                 resource_type: "auto",
//                 folder: "Profile Images",
//             });

//             user.avatar = {
//                 url: cloudImg.secure_url,
//                 public_id: cloudImg.public_id,
//             };
//         }
//         await user.save();
//         return res.send(success(200, { user }));
//     } catch (e) {
//         return res.send(error(500, e.message));
//     }
// };

module.exports = {
    createQuizController,
    getAllQuizController,
};
