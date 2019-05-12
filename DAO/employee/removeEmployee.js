const { Employees } = require("../../startup/db");

module.exports = async (employeeId, dairyId, adminId) => {
  const result = await Employees.destroy({
    where: { id: employeeId, DairyId: dairyId, AdminId: adminId }
  });
  return result;
};
