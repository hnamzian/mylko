module.exports = broker => {
  // fired when Mosca broker is ready
  broker.on("ready", function() {
    console.log("Mosca broker is up and Running.");
  });

  // fired whena  client is connected
  broker.on("clientConnected", function(client) {
    console.log("client connected", client.id);
  });

  broker.on("published", function(packet, client) {
    fields = packet.topic.split("/");
    if (fields[0] == "milk") {
      db.serialize(function() {
        var data = db.prepare("INSERT INTO Milk VALUES (?,?,?,?,?,?)");
        var date = new Date().toLocaleTimeString();
        data.run(
          123412,
          date,
          parseInt(fields[1]),
          parseInt(fields[2]),
          parseInt(fields[3]),
          parseFloat(packet.payload)
        );
        data.finalize();
        db.each("SELECT * FROM Milk", function(err, row) {
          console.log(
            "Milk id : " + row.id,
            row.dt,
            row.farmID,
            row.stageID,
            row.goatID,
            row.volume
          );
        });
      });
    }
  });

  // fired when a client is disconnecting
  broker.on("clientDisconnecting", function(client) {
    console.log("clientDisconnecting : ", client.id);
  });

  // fired when a client is disconnected
  broker.on("clientDisconnected", function(client) {
    console.log("clientDisconnected : ", client.id);
  });
};
