const getAdmin = require("./getAdmin");
const updateAdmin = require("./updateAdmin");
const registerAdmin = require("./registerAdmin");
const SMSTokenMW = require("../../middleware/SMSToken");
const AuthTokenMW = require("../../middleware/auth");
const _ = require("lodash");
const express = require("express");
router = express.Router();

router.post("/register", [SMSTokenMW], registerAdmin);

router.put("/update", [AuthTokenMW], updateAdmin);

router.get("/", [AuthTokenMW], getAdmin);

module.exports = router;
