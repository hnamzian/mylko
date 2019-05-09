const { Dairy } = require("../../startup/db");
const validate = require("./_validate");
const _ = require("lodash");

module.exports = async (req, resp) => {
  const dairy = _.pick(req.body, ["id", "name", "address"]);
  const adminId = req.userId;

  const { error } = validate(dairy);
  if (error) return resp.status(400).send("Joi: " + error.details[0].message);

  try {
    const [_, affectedRows] = await Dairy.update(dairy, {
      where: { id: dairy.id, AdminId: adminId },
      returning: true,
      plain: true
    });

    if (affectedRows) {
      let dairyData = await Dairy.findOne({ where: { id: dairy.id, AdminId: adminId } });
      return resp.send({
        success: true,
        message: "dairy updated",
        dairy: dairyData
      });
    }

    resp.send({
      success: false,
      message: "invalid dairy"
    });
  } catch (ex) {
    throw ex.errors[0].message;
  }
};
