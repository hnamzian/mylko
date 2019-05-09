const addDairy = require("./addDairy");
const getDairy = require("./getDairy");
const getDairies = require("./getDairies");
const updateDairy = require("./updateDairy");
const authTokenMW = require("../../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", [authTokenMW], getDairy);
router.get("/all", [authTokenMW], getDairies);
router.post("/add", [authTokenMW], addDairy);
router.put("/update", [authTokenMW], updateDairy);

module.exports = router;
