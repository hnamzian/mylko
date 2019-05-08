const { SMSToken, Admin } = require("../startup/db");
const jwt = require("jsonwebtoken");
const config = require("config");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const SMSTokenMW = require("../middleware/SMSToken");
const express = require("express");
const router = express.Router();

router.post("/get-sms-code", async (req, resp) => {
  const mobile = req.body.mobile;

  const { smsCode, expiredAt } = await _getSMSCode(mobile);

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

router.post("/verify-sms-code", [SMSTokenMW], async (req, resp) => {
  const result = await SMSToken.findAll({
    where: {
      mobile: { [Op.eq]: req.mobile },
      expiredAt: { [Op.gte]: req.expiredAt }
    }
  });

  if (result[0].dataValues.code == req.body.smsCode) {
    const admin = { mobile: req.mobile };
    const result = await Admin.findOrCreate({ where: admin });
    console.log(result[0].dataValues);
    return resp.send({
      success: true,
      message: "user found successfuly",
      user: result[0].dataValues
    });
  }
  return resp.send({ success: false, message: "Invalid SMS Code" });
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
    smsCode = _getRandomInt(6);
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
