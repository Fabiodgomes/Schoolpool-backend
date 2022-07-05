"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.school, { foreignKey: "schoolId" });
      this.belongsTo(models.transportationType, {
        foreignKey: "transportationTypeId",
      });
    }
  }
  trip.init(
    {
      date: { type: DataTypes.DATEONLY, allowNull: false },
      time: { type: DataTypes.TIME, allowNull: false },
      capacity: { type: DataTypes.INTEGER, allowNull: false },
      latitude: { type: DataTypes.STRING, allowNull: false },
      longitude: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "plannedTrip",
    }
  );
  return trip;
};
