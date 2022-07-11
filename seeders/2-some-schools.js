"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "schools",
      [
        {
          name: "Public Elementary Merkelbach School",
          address:
            "Arent Janszoon Ernststraat 128, 1082 LP Amsterdam, Netherlands",
          latitude: "52.332418491201096",
          longitude: "4.8784350390994335",
          imageUrl: "https://pbs.twimg.com/media/DcBj8ukXUAE7ExC.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Public Elementary School Multatuli",
          address: "Sara Burgerhartstraat 5, 1055 KV Amsterdam, Netherlands",
          latitude: "52.38697177012084",
          longitude: "4.8480999172572465",
          imageUrl:
            "https://www.watjijwilt.amsterdam/wp-content/uploads/2019/11/Multatuli-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "De Visserschool",
          address: "Columbusplein 34, 1057 VB Amsterdam, Netherlands",
          latitude: "52.36978626416691",
          longitude: "4.854623049326118",
          imageUrl:
            "https://www.amsterdamheefthet.nl/wp-content/uploads/2017/07/visserschool-columbusplein.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("schools", null, {});
  },
};
