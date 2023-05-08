const router = require('express').Router();
const userController = require('../controllers/userController');
const requireUser = require('../middlewares/requireUser');


router.get("/getMyInfo", requireUser, userController.getMyInfo);
router.put('/updateUserProfile', requireUser , userController.updateUserProfile);

module.exports = router;