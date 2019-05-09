const { SMSToken } = require("../../startup/db");
const generateSMSToken = require("../../utilities/generateSMSToken");
const parseMobile = require("../../utilities/parseMobile");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = async (req, resp) => {
  const mobile = parseMobile(req.body.mobile);
  
  if (!mobile)
  return resp.send({
    success: false,
    message: "invalid mobile number"
  });
  
  const { smsCode, expiredAt } = await _getSMSCode(mobile);
  
  const smsToken = generateSMSToken(mobile, expiredAt);
  console.log(smsToken)

  return resp.send({
    success: true,
    smsCode,
    smsToken
  });
};

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
