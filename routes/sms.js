const { SMSToken } = require("../startup/db");
const jwt = require("jsonwebtoken");
const config = require("config");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const express = require("express");
const router = express.Router();

router.get("/", async (req, resp) => {
  const mobile = req.body.mobile;

  let smsCode;
  let expiredAt;

  let lastToken = await SMSToken.findAll({
    where: { expiredAt: { [Op.lte]: Date.now() } }
  });

  if (lastToken.length == 0) {
    smsCode = getRandomInt(5);
    expiredAt = Math.floor(Date.now() / 1000) + 10 * 60;
    await SMSToken.create({ mobile, code: smsCode, expiredAt });
  } else {
    smsCode = lastToken[0].dataValues.code;
    expiredAt = Date.now();
  }

  const smsToken = jwt.sign(
    {
      mobile,
      exp: expiredAt
    },
    config.get("jwtPrivateKey")
  );

  return resp.send({
    success: true,
    smsCode,
    smsToken
  });
});

function getRandomInt(length) {
  const min = 10 ** (length - 1);
  const max = 10 ** length - 1;
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = router;
