const { Admin } = require("../../startup/db");

module.exports = async admin => {
  const [numberOfAffectedRows, affectedRows] = await Admin.update(admin, {
    where: { id: req.userId, mobile: admin.mobile },
    returning: true,
    plain: true
  });
  if (affectedRows) {
    let adminData = await Admin.findOne({ where: { id: req.userId, mobile: admin.mobile } });
    return adminData;
  }
  return null;
};
