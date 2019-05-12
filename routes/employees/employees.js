const AuthTokenMW = require("../../middleware/auth");
const addEmployee = require("./addEmployee");
const updateEmployee = require("./updateEmployee");
const getEmplyee = require("./getEmployeeById");
const getEmployees = require("./getEmployees");
const express = require("express");
const router = express.Router();

router.post("/add", [AuthTokenMW], addEmployee);
router.put("/update", [AuthTokenMW], updateEmployee);
router.get("/", [AuthTokenMW], getEmplyee);
router.get("/all", [AuthTokenMW], getEmployees);

module.exports = router;
