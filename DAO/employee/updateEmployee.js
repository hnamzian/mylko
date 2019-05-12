const { Employees } = require("../../startup/db");

module.exports = async employee => {
  try {
    console.log(employee)
    const [_, affectedRows] = await Employees.update(employee, {
      where: { id: employee.id, DairyId: employee.DairyId, AdminId: employee.AdminId },
      returning: true,
      plain: true
    });

    if (affectedRows) {
      let employeeData = await Employees.findOne({
        where: { id: employee.id, DairyId: employee.DairyId }
      });
      return employeeData;
    }
  } catch (ex) {
    console.log(ex);
  }
};
