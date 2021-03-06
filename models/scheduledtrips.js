"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class scheduledTrips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.plannedTrip, { foreignKey: "plannedTripId" });
    }
  }
  scheduledTrips.init(
    {
      numberOfKids: DataTypes.INTEGER,
      latitude: { type: DataTypes.STRING, allowNull: false },
      longitude: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "scheduledTrip",
    }
  );
  return scheduledTrips;
};
