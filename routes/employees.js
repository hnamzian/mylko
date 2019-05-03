const { Employees } = require("../startup/db");
const config = require("config");
const Joi = require("joi");
const winston = require("winston");
const _ = require("lodash");
const express = require("express");
router = express.Router();

router.post("/add", async (req, resp) => {
  const employee = _.pick(req.body, ["firstName", "lastName", "mobile", "email", "address", "position", "DairyId"]);

  try {
    const result = await Employees.create(employee);
    resp.send(result);
  } catch (ex) {
    console.log(ex)
    throw ex;
  }
});

module.exports = router;
