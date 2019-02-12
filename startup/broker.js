const milking = require("../mqtt/milking.js");
const config = require("config");
const winston = require("winston");
const mors = require("mors");
const broker = mors();

module.exports = function() {
  broker.set("mqtt_port", config.get("mqtt_port") || 1881);
  broker.use("milk/:unit?/:id?", milking);
  broker.use("device", device)
  return broker;
};
