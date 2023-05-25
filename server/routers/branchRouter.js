const router = require('express').Router();

const branchController = require('../controllers/branchController');

router.post("/createBranch" , branchController.createBranchController);
router.get("/getAllBranch" , branchController.getAllBranchController);

module.exports = router;