const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  const token = req.header("Authorization");
  console.log(token);
  if (!token) return res.status(401).send("Access denied. token not provided");

  try {
    const decodedToken = jwt.verify(token, config.get("jwtPrivateKey"));
    req.userId = decodedToken.id;

    next();
  } catch (ex) {
    res.status(400).send("invalid token");
  }
};
