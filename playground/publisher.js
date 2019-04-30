const moment = require("moment");
var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://176.9.174.30:1881");

const parlourName = "Mylko";
const sectionName = "Milking";
const unitName = "u-1";

const tags = ["211.244.225.84.120", "211.244.225.84.130", "211.244.225.84.140", "211.244.225.84.150", "211.244.225.84.160"];

let data = {
  chipId: "80:7D:3A:45:59:00",
  voltage: 33,
  temperature: 308,
  ambientTemp: 235,
  volume: 3659,
  macAddress: "21:34:53:89:31",
  tagNumber: "",
  date: ""
};

client.on("connect", function() {
  for (let dateOffset = 0; dateOffset < 800; dateOffset++) {
    for (let tag of tags) {
      let date = moment()
        .add(dateOffset, "days")
        .format();
      data.tagNumber = tag;
      data.date = date;
      client.publish(`milking/${parlourName}/${sectionName}/${unitName}`, JSON.stringify(data));
      console.log(data);
    }
  }
});
