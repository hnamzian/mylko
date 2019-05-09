const { Admin } = require("../startup/db");
const SMSTokenMW = require("../middleware/SMSToken");
const config = require("config");
const Joi = require("joi");
const winston = require("winston");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
router = express.Router();

router.post("/register", [SMSTokenMW], async (req, resp) => {
  let admin = _.pick(req.body, ["firstName", "lastName", "email", "address"]);
  admin.mobile = req.mobile;

  const { error } = validate(admin);
  if (error) return resp.status(400).send("Joi: " + error.details[0].message);

  try {
    const result = await Admin.create(admin);
    const token = _generateAuthToken(result.dataValues.id);
    resp.send(token);
  } catch (ex) {
    throw ex.errors[0].message;
  }
});

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

function _generateAuthToken(adminId) {
  return jwt.sign({ _id: adminId, isAdmin: this.isAdmin }, config.jwtPrivateKey);
}

module.exports = router;
