const Sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Milking", {
    deviceId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    mac: Sequelize.STRING,
    ip: Sequelize.INTEGER,
    parlourName: Sequelize.INTEGER,
    sectionName: Sequelize.INTEGER,
    unitName: Sequelize.INTEGER
  });
};
