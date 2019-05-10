const { Admin } = require("../../startup/db");

module.exports = async admin => {
  const result = await Admin.findOrCreate({ where: admin });
  return result[0].dataValues;
};
