module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Vaccin", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    vaccinType: {
      type: Sequelize.STRING,
      allowNull: false
    },
    vaccinName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // animalId: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    }
  });
};
