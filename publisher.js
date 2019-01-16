var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://127.0.0.1');

client.on('connect', function () {
    setInterval(function() {
        client.publish('milk/117263/224938/339102', '12.3');
        console.log(new Date().toLocaleTimeString())
    }, 5000);
});

