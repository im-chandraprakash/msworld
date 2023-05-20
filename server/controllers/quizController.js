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

const addQuesionsToQuiz = async (req, res) => {
    try {
        const { quizQuestions , id } = req.body;

        const data = await Quiz.find({id});
        const quiz = data[0];
        console.log("All Questions" , quizQuestions);

        if (quizQuestions) {
            quiz.quizQuestions = quizQuestions;
        }
        await quiz.save();

        return res.send(success(200, { quiz }));
    } catch (e) {
        return res.send(error(500, e.message));
    }
};

module.exports = {
    createQuizController,
    getAllQuizController,
    addQuesionsToQuiz,
};
