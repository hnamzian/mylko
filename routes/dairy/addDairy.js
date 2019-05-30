const addDairyDAO = require("../../DAO/dairy/addDairy");
const getDairiesDAO = require("../../DAO/dairy/getDairies");
const Joi = require("joi");
const winston = require("winston");
const _ = require("lodash");
const express = require("express");
router = express.Router();

module.exports = async (req, resp) => {
  const dairy = _.pick(req.body, ["name", "address"]);
  dairy.AdminId = req.userId;

  const { error } = validate(dairy);
  if (error) return resp.status(400).send("Joi: " + error.details[0].message);

  try {
    await addDairyDAO(dairy);
    const dairies = await getDairiesDAO(dairy.AdminId);
    resp.send({
      success: true,
      message: "new dairy added",
      dairies
    });
  } catch (ex) {
    throw ex.errors[0].message;
  }
};

function validate(dairy) {
  const schema = {
    name: Joi.string()
      .min(2)
      .required(),
    address: Joi.string().min(0),
    AdminId: Joi.number()
  };

  return Joi.validate(dairy, schema);
}
