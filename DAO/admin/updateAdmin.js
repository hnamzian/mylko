const { Admin } = require("../../startup/db");

module.exports = async admin => {
  const [numberOfAffectedRows, affectedRows] = await Admin.update(admin, {
    where: { mobile: admin.mobile },
    returning: true,
    plain: true
  });
  if (affectedRows) {
    let adminData = await Admin.findOne({ where: { mobile: admin.mobile } });
    return adminData;
  }
  return null;
};
