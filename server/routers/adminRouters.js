const router = require("express").Router();
const adminController = require("../controllers/adminController");

router.post("/login", adminController.adminLoginController);
// router.post("/signup", adminController.adminSignUpController);

module.exports = router;
