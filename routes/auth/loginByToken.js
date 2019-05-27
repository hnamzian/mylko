const findAdminByIdDAO = require("../../DAO/admin/findAdminById");
const generateAuthToken = require("../../utilities/generateAuthToken");

module.exports = async (req, resp) => {
  const userId = req.userId;
  const admin = await findAdminByIdDAO(userId);
  if (admin) {
    const token = generateAuthToken(admin.id);
    return resp.send({
      success: true,
      message: "Login successful",
      user: admin,
      token
    });
  }
};
