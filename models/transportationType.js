"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transportationType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.transportationType, {
        foreignKey: "transportationTypeId",
      });
    }
  }
  transportationType.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "transportationType",
    }
  );
  return transportationType;
};
