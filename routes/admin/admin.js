const { Admin } = require("../../startup/db");
const SMSTokenMW = require("../../middleware/SMSToken");
const AuthTokenMW = require("../../middleware/auth");
const generateAuthToken = require("../../utilities/generateAuthToken");
const parseMobile = require("../../utilities/parseMobile");
const Joi = require("joi");
const _ = require("lodash");
const getAdmin = require("./getAdmin");
const updateAdmin = require("./updateAdmin");
const registerAdmin = require("./registerAdmin");
const express = require("express");
router = express.Router();

router.post("/register", [SMSTokenMW], registerAdmin);

router.put("/update", [AuthTokenMW], updateAdmin);

router.get("/", [AuthTokenMW], getAdmin);

function validate(admin) {
  const schema = {
    firstName: Joi.string().min(2),
    lastName: Joi.string().min(2),
    mobile: Joi.string()
      .min(11)
      .max(13)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .email(),
    address: Joi.string().min(0)
  };

  return Joi.validate(admin, schema);
}

module.exports = router;
