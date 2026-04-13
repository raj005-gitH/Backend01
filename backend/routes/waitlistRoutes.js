const express = require("express");

const router = express.Router();

const createWaitlist = require("../controller/waitlistControllers");

router.post("/waitlist", createWaitlist);

module.exports = router;