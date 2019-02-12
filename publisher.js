var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:1881");

client.on("connect", function() {
  client.subscribe("milking/response", (topic, message) => {
    console.log(topic, message);
  });

  setInterval(function() {
    client.publish("milk/117263/224938", "12.3");
    console.log(new Date().toLocaleTimeString());
  }, 5000);
});
