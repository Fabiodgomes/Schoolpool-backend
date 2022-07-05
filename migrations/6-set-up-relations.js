"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("plannedTrips", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE ",
    });
    await queryInterface.addColumn("plannedTrips", "schoolId", {
      type: Sequelize.INTEGER,
      references: {
        model: "schools",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE ",
    });
    await queryInterface.addColumn("plannedTrips", "transportationTypeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "transportationTypes",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE ",
    });
    await queryInterface.addColumn("scheduledTrips", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE ",
    });
    await queryInterface.addColumn("scheduledTrips", "plannedTripId", {
      type: Sequelize.INTEGER,
      references: {
        model: "plannedTrips",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE ",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("plannedTrips", "userId");
    await queryInterface.removeColumn("plannedTrips", "schoolId");
    await queryInterface.removeColumn("plannedTrips", "transportationTypeId");
    await queryInterface.removeColumn("scheduledTrips", "userId");
    await queryInterface.removeColumn("scheduledTrips", "plannedTripId");
  },
};
