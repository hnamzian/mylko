module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Food", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    volume: {
      type: Sequelize.INTEGER,
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
