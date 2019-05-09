const getSMSCode = require("./getSMSCode");
const verifySMSCode = require("./verifySMSCode");
const SMSTokenMW = require("../../middleware/SMSToken");
const express = require("express");
const router = express.Router();

router.post("/get-sms-code", getSMSCode);
router.post("/verify-sms-code", [SMSTokenMW], verifySMSCode);

module.exports = router;
