const { Dairy } = require("../../startup/db");

module.exports = async dairy => {
  const [_, affectedRows] = await Dairy.update(dairy, {
    where: { id: dairy.id, AdminId: dairy.AdminId },
    returning: true,
    plain: true
  });

  if (affectedRows) {
    let dairyData = await Dairy.findOne({ where: { id: dairy.id, AdminId: dairy.AdminId } });
    return dairyData;
  }
};
