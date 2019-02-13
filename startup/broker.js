const milking = require("../mqtt/milking.js");
const config = require("config");
const mors = require("mors");
const broker = mors();

module.exports = function() {
  broker.set("mqtt_port", config.get("mqtt_port") || 1881);
  broker.use("milking/:parlour?/:section?/:unit?/:id?", milking);
  return broker;
};
