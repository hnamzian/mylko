const { Employees } = require("../startup/db");
const config = require("config");
const Joi = require("joi");
const winston = require("winston");
const _ = require("lodash");
const express = require("express");
router = express.Router();

router.post("/add", async (req, resp) => {
  const employee = _.pick(req.body, ["firstName", "lastName", "mobile", "email", "address", "position", "DairyId"]);

  const { error } = validate(employee);
  if (error) return resp.status(400).send("Joi: " + error.details[0].message);

  try {
    const result = await Employees.create(employee);
    resp.send(result);
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
});

function validate(employee) {
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
    address: Joi.string().min(0),
    position: Joi.string()
      .min(5)
      .max(255)
      .required(),
    DairyId: Joi.number()
  };

  return Joi.validate(employee, schema);
}

module.exports = router;
