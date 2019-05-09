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

  const { error } = validate(admin);
  if (error) return resp.status(400).send("Joi: " + error.details[0].message);

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(admin.password, salt);
  admin.password = hashed;

  try {
    const result = await Admin.create(admin);
    const token = jwt.sign({ _id: result.dataValues.id, isAdmin: this.isAdmin }, config.jwtPrivateKey);
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

module.exports = router;
