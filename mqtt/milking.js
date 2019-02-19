const winston = require("winston");
const { Milking } = require("../startup/db");

module.exports = async (req, resp, next) => {
  const parlourName = req.params.parlour;
  const sectionName = req.params.section;
  const unitName = req.params.unit;
  const topic = req.topic;
  let data = req.payload;
  data = JSON.parse(data);

  // ToDo: device validation
  // ToDo: find device by macAddress and add deviceId to milk data
  const milk = { ...data, parlourName, sectionName, unitName };
  await Milking.create(milk);

  winston.debug(`${topic}: ${unitName} ${JSON.stringify(milk)}`);

  // ToDo: publish response on request
  //   resp.topic("$milking/response").publish("success");

  next();
};
