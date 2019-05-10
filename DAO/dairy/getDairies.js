const { Dairy } = require("../../startup/db");

module.exports = async (adminId) => {
  const result = await Dairy.findAll({ where: { AdminId: adminId } });
  return result;
};
