const http = require("http");

module.exports = function(app) {
  app.set("server_port", process.env.PORT || 3000);
  app.set("host", process.env.HOST || "0.0.0.0");
  const server = http.createServer(app);
  return server;
};
