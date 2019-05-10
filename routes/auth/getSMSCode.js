const addSMSCode = require("../../DAO/sms/addSMSToken");
const getValidSMSCode = require("../../DAO/sms/getValidSMSCode");
const generateSMSToken = require("../../utilities/generateSMSToken");
const getRandomInt = require("../../utilities/getRandomInt");
const parseMobile = require("../../utilities/parseMobile");

module.exports = async (req, resp) => {
  const mobile = parseMobile(req.body.mobile);

  if (!mobile)
    return resp.send({
      success: false,
      message: "invalid mobile number"
    });

  const { smsCode, expiredAt } = await _getSMSCode(mobile);

  const smsToken = generateSMSToken(mobile, expiredAt);

  return resp.send({
    success: true,
    smsCode,
    smsToken
  });
};

async function _getSMSCode(mobile) {
  let smsCode;

  let lastToken = await getValidSMSCode(mobile);

  if (lastToken == null) {
    smsCode = getRandomInt(6);
    lastToken = await addSMSCode({ mobile, code: smsCode });
  }

  return {
    smsCode: lastToken.dataValues.code,
    expiredAt: lastToken.dataValues.expiredAt
  };
}
