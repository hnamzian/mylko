const { Employees } = require("../../startup/db");

module.exports = async (dairyId, adminId) => {
  const employees = await Employees.findAll({ where: { DairyId: dairyId, AdminId: adminId } });
  return employees;
};
