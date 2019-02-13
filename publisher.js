var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:1881");

client.on("connect", function() {
  //   client.subscribe("milking/response", (topic, message) => {
  //     console.log(topic, message);
  //   });

  setInterval(function() {
    const parlourName = "Mylko";
    const sectionName = "Milking";
    const unitName = "u-1";
    const data = {
      chipId: "80:7D:3A:45:59:00",
      voltage: 33,
      temperature: 308,
      ambientTemp: 235,
      volume: 3659,
      tagNumber: "211.244.225.84.129",
      macAddress: "21:34:53:89:31"
    };
    client.publish(`milking/${parlourName}/${sectionName}/${unitName}`, JSON.stringify(data));
    console.log(new Date().toLocaleTimeString());
  }, 5000);
});
