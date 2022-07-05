"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "scheduledTrips",
      [
        {
          numberOfKids: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          plannedTripId: 1,
        },
        {
          numberOfKids: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          plannedTripId: 1,
        },
        {
          numberOfKids: 1,
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
