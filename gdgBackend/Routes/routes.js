const express = require('express')
const router = express.Router();

const { login, signup, verifyToken, fetchUsername, checkUser } = require("../Controllers/Auth");
const { saveFeedback } = require('../Controllers/savefeedback');
const { createContact } = require('../Controllers/CreateContact');

router.post("/signup", signup);
router.post("/login", login);
router.get("/verifyToken", verifyToken);
router.get("/users", fetchUsername);
router.get("/checkUser", checkUser);
router.post("/saveFeedback", saveFeedback);
router.post('/contactUs', createContact);


module.exports = router;