const { Dairy } = require("../../startup/db");

module.exports = async dairy => {
  const result = await Dairy.create(dairy);
  return result;
};
