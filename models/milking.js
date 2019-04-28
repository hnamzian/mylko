module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Milking", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    chipId: {
      type: Sequelize.STRING, 
      allowNull: false },
    voltage: { 
      type: Sequelize.INTEGER, 
      allowNull: false 
    },
    temperature: { 
      type: Sequelize.INTEGER, 
      allowNull: false 
    },
    ambientTemp: { 
      type: Sequelize.INTEGER, 
      allowNull: false 
    },
    volume: { 
      type: Sequelize.INTEGER, 
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
    tagNumber: {
      type: Sequelize.STRING, 
      allowNull: false 
    }
    // date: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
  });
};
