module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Disease", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    diseaseName: {
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
