const config = require("config");
const winston = require("winston");
const express = require("express");
const app = express();

require("./startup/logging.js")();
const broker = require("./startup/broker")();
const server = require("./startup/server")(app);

const mqtt_port = config.get("mqtt_port") || 1881;
broker.listen(+mqtt_port, () => {
  winston.debug(`mqtt started at ${mqtt_port}`);
});

server.listen(app.get("server_port"), app.get("host"), () => {
  winston.debug(`Server is connected to port ${app.get("host")}:${app.get("server_port")}`);
});
