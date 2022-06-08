const express = require("express");

const router = express.Router();

const { newUser, userLogin } = require("../controllers/userController")

router.route("/register").post(newUser);

router.route("/login").post(userLogin)

module.exports = router;