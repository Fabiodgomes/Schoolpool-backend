"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "plannedTrips",
      [
        {
          date: new Date(2022, 8, 28),
          time: "08:00:00",
          capacity: 2,
          latitude: "52.3676° N",
          longitude: "4.9041° E",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          schoolId: 1,
          transportationTypeId: 1,
        },
        {
          date: new Date(2022, 8, 29),
          time: "08:05:00",
          capacity: 2,
          latitude: "52.3676° N",
          longitude: "4.9041° E",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          schoolId: 2,
          transportationTypeId: 2,
        },
        {
          date: new Date(2022, 8, 29),
          time: "01:00:00",
          capacity: 2,
          latitude: "52.3676° N",
          longitude: "4.9041° E",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          schoolId: 1,
          transportationTypeId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("plannedTrips", null, {});
  },
};
