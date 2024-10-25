const { Router } = require("express");
const userController = require("../controllers/userController");
const router = Router();

// registration routes

router.post("/signup", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/logout", userController.logOutUser);
router.get("/userDetails", userController.userDetails);

module.exports = router;
