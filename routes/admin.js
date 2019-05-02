const { Admin } = require("../startup/db");
const config = require("config");
const Joi = require("joi");
const winston = require("winston");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
router = express.Router();

router.post("/register", async (req, resp) => {
  const admin = _.pick(req.body, ["firstName", "lastName", "mobile", "email", "address", "password"]);

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(admin.password, salt);
  admin.password = hashed;

  const result = await Admin.create(admin);

  const token = jwt.sign({ _id: result.dataValues.id, isAdmin: this.isAdmin }, config.jwtPrivateKey);
  resp.send(token);
});

function validate(admin) {
  const schema = {
    firstName: Joi.string()
      .min(2)
      .required(),
    lastName: Joi.string()
      .min(2)
      .required(),
    mobile: Joi.string()
      .min(11)
      .max(13)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    address: Joi.string(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required()
  };

  return Joi.validate(admin, schema);
}

module.exports = router;
