const { Employees } = require("../../startup/db");

module.exports = async (employeeId, dairyId, adminId) => {
  const employee = await Employees.findOne({
    where: { id: employeeId, DairyId: dairyId, AdminId: adminId }
  });
  return employee;
};
