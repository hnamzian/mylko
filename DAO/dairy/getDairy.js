const { Dairy } = require("../../startup/db");

module.exports = async (dairyId, adminId) => {
  const result = await Dairy.findOne({ where: { id: dairyId, AdminId: adminId } });
  return result;
};
