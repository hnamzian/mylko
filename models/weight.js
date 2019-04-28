module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Weight", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    weight: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // animalId: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
};
