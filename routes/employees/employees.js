const AuthTokenMW = require("../../middleware/auth");
const addEmployee = require("./addEmployee");
const getEmplyee = require("./getEmployeeById");
const express = require("express");
const router = express.Router();

router.post("/add", [AuthTokenMW], addEmployee);
router.get("/", [AuthTokenMW], getEmplyee);

module.exports = router;
