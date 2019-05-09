const addDairy = require("./addDairy");
const authTokenMW = require("../../middleware/auth");
const express = require("express");
const router = express.Router();

router.post("/add", [authTokenMW], addDairy);

module.exports = router;
