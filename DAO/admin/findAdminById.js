const { Admin } = require("../../startup/db");

module.exports = async id => {
  const admin = await Admin.findOne({ where: { id } });
  return admin
};
