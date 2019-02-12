const winston = require("winston");
const { Device } = require("../startup/db");

module.exports = (req, resp, next) => {
  next();
};
