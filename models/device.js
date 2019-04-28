module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Device", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    macAddress: {
      type: Sequelize.STRING,
      allowNull: false
    },
    parlourName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sectionName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    unitName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.ENUM,
      values: ["MILKING"],
      allowNull: false
    }
  });
};
