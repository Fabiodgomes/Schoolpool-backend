"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "scheduledTrips",
      [
        {
          numberOfKids: 2,
          latitude: "52.36086629406845",
          longitude: "4.898383537219418",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          plannedTripId: 1,
        },
        {
          numberOfKids: 1,
          latitude: "52.37407305459745",
          longitude: "4.923773372619383",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          plannedTripId: 1,
        },
        {
          numberOfKids: 1,
          latitude: "52.35394689131837",
          longitude: "4.9345812079585905",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          plannedTripId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("scheduledTrips", null, {});
  },
};
