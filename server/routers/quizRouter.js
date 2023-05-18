const router = require('express').Router();
const quizController = require('../controllers/quizController');
router.post("/createQuiz" , quizController.createQuizController);
router.get("/getAllQuiz" , quizController.getAllQuizController);

module.exports = router; 