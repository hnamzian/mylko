module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Device", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    mac: Sequelize.STRING,
    parlourName: Sequelize.INTEGER,
    sectionName: Sequelize.INTEGER,
    unitName: Sequelize.INTEGER,
    type: {
      type: Sequelize.ENUM,
      values: ["MILKING"]
    }
  });
};
