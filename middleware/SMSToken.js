const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  const token = req.header("SMSToken");
  if (!token) return res.status(401).send("Access denied. token not provided");

  try {
    const decodedToken = jwt.verify(token, config.get("jwtPrivateKey"));
    if (decodedToken.exp < Date.now() / 1000) {
      return res.send({
        success: false,
        message: "Token is expired"
      });
    }

    req.mobile = decodedToken.mobile;
    req.expiredAt = decodedToken.exp;

    next();
  } catch (ex) {
    res.status(400).send("invalid token");
  }
};
