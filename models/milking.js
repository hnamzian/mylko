module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Milking", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    chipId: { type: Sequelize.STRING },
    voltage: { type: Sequelize.INTEGER },
    temperature: { type: Sequelize.INTEGER },
    ambientTemp: { type: Sequelize.INTEGER },
    volume: { type: Sequelize.INTEGER },
    parlourName: { type: Sequelize.STRING },
    sectionName: { type: Sequelize.STRING },
    unitName: { type: Sequelize.STRING },
    tagNumber: { type: Sequelize.STRING },
    date: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
  });
};
