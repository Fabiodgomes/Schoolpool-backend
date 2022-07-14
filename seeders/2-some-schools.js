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
          latitude: "52.33277314896316",
          longitude: " 4.87804167116436",
          imageUrl: "https://pbs.twimg.com/media/DcBj8ukXUAE7ExC.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Public Elementary School Multatuli",
          address: "Sara Burgerhartstraat 5, 1055 KV Amsterdam, Netherlands",
          latitude: "52.38283316937052",
          longitude: " 4.848346684302137",
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
        {
          name: "Public Elementary School Bos en Lommer",
          address: "Meimorgenstraat 2, 1061 BN Amsterdam, Netherlands",
          latitude: "52.37886699999999",
          longitude: "4.839838541986019",
          imageUrl:
            "https://s3-eu-west-1.amazonaws.com/static.schoolwijzer.amsterdam.nl/uploads/images/scaled/gallery_medium/866",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Public Elementary School Nicolaas Maes",
          address: "Nicolaas Maesstraat 124, 1071 RH Amsterdam, Netherlands",
          latitude: "52.35401203141819",
          longitude: "4.87577477860589",
          imageUrl:
            "https://lh3.googleusercontent.com/p/AF1QipNG2OwMFbYXFhGeTdYRP5xw7mE8_TC6qGJpMWxc=s1600-w1600",
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
