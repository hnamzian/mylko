const findAdminByIdDAO = require("../../DAO/admin/findAdminById");

module.exports = async (req, resp) => {
  const user = await findAdminByIdDAO(req.userId);

  if (user) {
    return resp.send({
      success: true,
      message: "Admin user found successfuly",
      admin: user
    });
  }

  throw Error("Admin user not found");
};
