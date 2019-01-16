const milkDB = require("../models/milk");

module.exports = (req, resp, next) => {
  let unit = req.params.unit;
  let id = req.params.id;
  let topic = req.topic;
  let data = req.payload;
  data = JSON.parse(data)
  milkDB.addtoTable(data);
//   console.log(`${topic}: ${unit}: ${id} ${data}`);
  next();
};
