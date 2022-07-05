"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "transportationTypes",
      [
        {
          title: "Car, Ford Focus",
          imageUrl:
            "https://s1.eestatic.com/2020/06/23/motor/ford-ford_focus-coches_499960788_154311776_1024x576.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Car, Renault Megane",
          imageUrl:
            "https://noticias.coches.com/wp-content/uploads/2020/02/Renault-Megane-2020-23.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "foot",
          imageUrl:
            "https://media.istockphoto.com/photos/man-walk-in-park-outdoor-people-exercise-healthy-lifestyle-picture-id1144757222?k=20&m=1144757222&s=612x612&w=0&h=x7s4Nn7cjA-azCD9SsKt4vM_UlHzNSxdqmCjxUnS71U=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("transportationTypes", null, {});
  },
};
