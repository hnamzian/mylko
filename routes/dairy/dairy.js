const addDairy = require("./addDairy");
const getDairy = require("./getDairy");
const authTokenMW = require("../../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", [authTokenMW], getDairy);
router.post("/add", [authTokenMW], addDairy);

module.exports = router;
