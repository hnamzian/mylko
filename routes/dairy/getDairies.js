const { Dairy } = require("../../startup/db");

module.exports = async (req, resp) => {
  const AdminId = req.userId;

  const result = await Dairy.findAll({
    where: { AdminId: AdminId }
  });

  resp.send({
    success: true,
    message: "dairy found",
    dairy: result
  });
};
