const { Dairy } = require("../../startup/db");

module.exports = async (req, resp) => {
  const AdminId = req.userId;
  const dairyId = req.query.dairyId;

  console.log(AdminId, dairyId);

  const result = await Dairy.findOne({
    where: { id: dairyId, AdminId: AdminId }
  });

  resp.send({
    success: true,
    message: "dairy found",
    dairy: result
  });
};
