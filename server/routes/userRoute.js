const express = require("express");
const router = express.Router();

const { signupCtrl, loginCtrl } = require("../controllers/userCtrl");

//Register User
router.post("/register", signupCtrl);

//Login User
router.post("/login", loginCtrl);

module.exports = router;
