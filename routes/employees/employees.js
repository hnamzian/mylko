const AuthTokenMW = require("../../middleware/auth");
const addEmployee = require("./addEmployee");
const express = require("express");
const router = express.Router();

router.post("/add", [AuthTokenMW], addEmployee);

module.exports = router;
