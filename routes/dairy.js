const { Dairy } = require("../startup/db");
const Joi = require("joi");
const winston = require("winston");
const _ = require("lodash");
const express = require("express");
router = express.Router();

router.post("/add", async (req, resp) => {
  const dairy = _.pick(req.body, ["name", "address", "AdminId"]);
  
  try {
    const result = await Dairy.create(dairy);
    resp.send(result);
  } catch (ex) {
    throw ex.errors[0].message;
  }
});

module.exports = router;
