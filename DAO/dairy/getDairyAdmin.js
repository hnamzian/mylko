const { Dairy } = require("../../startup/db");

module.exports = async dairyId => {
  const result = await Dairy.findOne({ where: { id: dairyId } });
  return result ? result.AdminId : null;
};
