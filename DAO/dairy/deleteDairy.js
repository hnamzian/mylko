const { Dairy } = require("../../startup/db");

module.exports = async (dairyId, adminId) => {
  const result = await Dairy.destroy({ where: { id: dairyId, AdminId: adminId } });
  return result;
};
