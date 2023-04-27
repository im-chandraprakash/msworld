const router = require("express").Router();

const cseController = require("../controllers/cseController");

router.post("/createSubject", cseController.createSubjectController);
router.get("/getAllSubject", cseController.getAllSubjectController);
router.post("/createTopic" ,cseController.createTopicController );
router.get("/getAllTopic", cseController.getTopicController);

module.exports = router;
