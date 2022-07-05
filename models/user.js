"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.plannedTrip, { foreignKey: "userId" });
      this.hasMany(models.scheduledTrip, { foreignKey: "userId" });
    }
  }
  user.init(
    {
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.INTEGER },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
