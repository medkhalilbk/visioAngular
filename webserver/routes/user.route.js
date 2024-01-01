const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/:userId/meets", userController.getMeetsByUserId);

module.exports = router;