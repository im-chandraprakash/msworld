const router = require("express").Router();

const cseController = require("../controllers/cseController");

router.post("/createSubject", cseController.createSubjectController);
router.get("/getAllSubject", cseController.getAllSubjectController);
router.post("/createTopic", cseController.createTopicController);
router.get("/getAllTopic/:subject_id", cseController.getTopicController);
router.get("/getTopicLength", cseController.getLengthOfTopicController);
router.get("/findTopic/:id", cseController.findTopicController);
router.post("/createContent", cseController.createContentController);
router.get("/getContentLength", cseController.getContentLengthController);

module.exports = router;
