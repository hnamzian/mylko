const winston = require("winston")

module.exports = (req, resp, next) => {
    let unit = req.params.unit;
    let id = req.params.id;
    let topic = req.topic;
    let data = req.payload;
    data = JSON.parse(data)
    // milkDB.addtoTable(data);
    winston.debug(`${topic}: ${unit}: ${id} ${data}`);

  next();
};
