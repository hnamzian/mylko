const config = require("config");
const db = require("./startup/db");

const broker = require("./startup/broker")();

const mqtt_port = config.get("mqtt_port") || 1881;

broker.listen(+mqtt_port, () => {
  console.log(`mqtt started at ${mqtt_port}`);
});
