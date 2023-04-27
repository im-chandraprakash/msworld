const router = require("express").Router();

const subjectController = require("../controllers/cseController");

router.post("/createSubject", subjectController.createSubjectController);
router.get("/getAllSubject", subjectController.getAllSubjectController);

module.exports = router;
