const router = require("express").Router();

const subjectController = require('../controllers/subjectController');

router.post("/createSubject" , subjectController.createSubjectController);
router.get("/getAllSubject", subjectController.getAllSubjectController);

module.exports = router;