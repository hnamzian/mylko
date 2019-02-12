const winston = require("winston");
const { Milking } = require("../startup/db");

module.exports = (req, resp, next) => {
  let unit = req.params.unit;
  let id = req.params.id;
  let topic = req.topic;
  let data = req.payload;
  data = JSON.parse(data);

  Milking.create({}).then(console.log);

  winston.debug(`${topic}: ${unit}: ${id} ${data}`);

  resp.topic("$milking/response").publish("success");

  next();
};
