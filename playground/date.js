const moment = require("moment");

const time = moment().format("YYYY-MM-DD hh:mm:ss")
console.log(time);

console.log(moment(time, "Y-M-D h:m:s").format('Y-M-D'));
