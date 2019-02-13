const winston = require("winston");
const { Milking } = require("../startup/db");

module.exports = async (req, resp, next) => {
  const parlourName = req.params.parlour;
  const sectionName = req.params.section;
  const unitName = req.params.unit;
  const id = req.params.id;
  const topic = req.topic;
  let data = req.payload;
  data = JSON.parse(data);

  const milk = { ...data, parlourName, sectionName, unitName };
  await Milking.create(milk);

  winston.debug(`${topic}: ${unit}: ${id} ${JSON.stringify(milk)}`);

  //   resp.topic("$milking/response").publish("success");

  next();
};
