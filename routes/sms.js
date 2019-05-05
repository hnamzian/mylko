const { SMSToken } = require("../startup/db");
const jwt = require("jsonwebtoken");
const config = require("config");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const SMSTokenMW = require("../middleware/SMSToken");
const express = require("express");
const router = express.Router();

router.get("/", async (req, resp) => {
  const mobile = req.body.mobile;

  const { smsCode, expiredAt } = await _getSMSCode(mobile);

  console.log(smsCode, expiredAt)
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

async function _getSMSCode(mobile) {
  let smsCode;
  let expiredAt;

  let lastToken = await SMSToken.findAll({
    where: {
      mobile: { [Op.eq]: mobile },
      expiredAt: { [Op.gte]: Date.now() / 1000 }
    }
  });

  if (lastToken.length == 0) {
    smsCode = _getRandomInt(5);
    expiredAt = Math.floor(Date.now() / 1000) + 10 * 60;
    await SMSToken.create({ mobile, code: smsCode, expiredAt });
  } else {
    smsCode = lastToken[0].dataValues.code;
    expiredAt = lastToken[0].dataValues.expiredAt;
  }

  return { smsCode, expiredAt };
}

function _getRandomInt(length) {
  const min = 10 ** (length - 1);
  const max = 10 ** length - 1;
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = router;
