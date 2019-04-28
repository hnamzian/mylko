module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Animal", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    gender: {
      type: Sequelize.ENUM,
      allowNull: false,
      values: ["MALE", "FEMALE"]
    },
    birthDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    birthWeight: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false
    },
    race: {
      type: Sequelize.STRING,
      allowNull: false
    },
    momId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
};
