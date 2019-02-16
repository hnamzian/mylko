module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Milking", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    chipId: Sequelize.STRING,
    voltage: Sequelize.INTEGER,
    temperature: Sequelize.INTEGER,
    ambientTemp: Sequelize.INTEGER,
    volume: Sequelize.INTEGER,
    parlourName: Sequelize.STRING,
    sectionName: Sequelize.STRING,
    unitName: Sequelize.STRING,
    tagNumber: Sequelize.STRING
  });
};
