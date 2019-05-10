const { Employees } = require("../../startup/db");

module.exports = async employee => {
  const result = await Employees.create(employee);
  return result;
};
