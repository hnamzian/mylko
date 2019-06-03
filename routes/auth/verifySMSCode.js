const findOrCreateAdmin = require("../../DAO/admin/findOrCreateAdmin");
const validateSMSCode = require("../../DAO/sms/validateSMSCode");
const generateAuthToken = require("../../utilities/generateAuthToken");
const parseMobile = require("../../utilities/parseMobile");

module.exports = async (req, resp) => {
  const mobile = parseMobile(req.mobile);
  if (!mobile) throw Error("invalid mobile number");

  const result = await validateSMSCode(mobile, req.body.smsCode);

  if (result && result.dataValues.code == req.body.smsCode) {
    const user = await findOrCreateAdmin({ mobile: mobile });
    const authToken = generateAuthToken(user.id);
    return resp.send({
      success: true,
      message: "user found successfuly",
      user,
      token: authToken
    });
  }

  throw Error("Invalid SMS Code");
};
