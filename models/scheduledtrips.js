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
    }
  }
  scheduledTrips.init(
    {
      numberOfKids: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "scheduledTrip",
    }
  );
  return scheduledTrips;
};
