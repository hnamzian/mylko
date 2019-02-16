const config = require("config");
const winston = require("winston");
const express = require("express");
const app = express();

require("./startup/logging.js")();
const broker = require("./startup/broker")();
const server = require("./startup/server")(app);
require("./startup/routes")(app);

broker.listen(+broker.get("mqtt_port"), () => {
  winston.debug(`mqtt started at ${broker.get("mqtt_port")}`);
});

server.listen(app.get("server_port"), app.get("host"), () => {
  winston.debug(`Server is connected to port ${app.get("host")}:${app.get("server_port")}`);
});
