module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Device", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    macAddress: Sequelize.STRING,
    parlourName: Sequelize.STRING,
    sectionName: Sequelize.STRING,
    unitName: Sequelize.STRING,
    type: {
      type: Sequelize.ENUM,
      values: ["MILKING"]
    }
  });
};
