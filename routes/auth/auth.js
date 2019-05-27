const loginByToken = require("./loginByToken");
const getSMSCode = require("./getSMSCode");
const verifySMSCode = require("./verifySMSCode");
const authTokenMW = require("../../middleware/auth");
const SMSTokenMW = require("../../middleware/SMSToken");
const express = require("express");
const router = express.Router();

router.get("/login", [authTokenMW], loginByToken);
router.post("/get-sms-code", getSMSCode);
router.post("/verify-sms-code", [SMSTokenMW], verifySMSCode);

module.exports = router;
