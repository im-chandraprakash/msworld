const router = require("express").Router();
const authController = require("../controllers/authController");
// const { route } = require("./postRouter");

router.post("/login", authController.loginController);
router.post("/signup", authController.signUpController);
router.get("/refresh" , authController.refreshAccessTokenController);

module.exports = router;
