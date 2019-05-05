const { SMSToken } = require("../startup/db");
const express = require("express");
const router = express.Router();

function getRandomInt(length) {
  const min = 10 ** (length-1);
  const max = 10 ** length - 1;
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = router;
