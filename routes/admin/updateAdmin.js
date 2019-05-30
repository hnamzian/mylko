const validate = require("./_validate");
const updateAdminDAO = require("../../DAO/admin/updateAdmin");
const generateAuthToken = require("../../utilities/generateAuthToken");
const parseMobile = require("../../utilities/parseMobile");
const _ = require("lodash");

module.exports = async (req, resp) => {
  let admin = _.pick(req.body, ["id", "firstName", "lastName", "mobile", "email", "address"]);
  if (admin.id != req.userId) return resp.send({ success: false, message: "user mismatch" });

  admin.mobile = parseMobile(admin.mobile);
  if (!admin.mobile) return resp.send({ success: false, message: "invalid mobile number" });

  const { error } = validate(admin);
  if (error) return resp.status(400).send({ success: false, message: error.details[0].message });

  try {
    const adminProfile = await updateAdminDAO(admin);
    if (adminProfile) {
      const token = generateAuthToken(admin.id);

      return resp.send({
        success: true,
        message: "user profile registered",
        admin: adminProfile,
        token
      });
    }
    resp.send({ success: false, message: "invalid user" });
  } catch (ex) {
    throw ex.errors[0].message;
  }
};
