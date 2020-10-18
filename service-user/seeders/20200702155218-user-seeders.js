"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Raka",
        profession: "THE BEST SOFTWARE ENGINEER",
        role: "admin",
        email: "haha@haha.com",
        password: await bcrypt.hash("123456", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Mawy",
        profession: "THE BEST SUPPLY CHAIN ENGINEER",
        role: "student",
        email: "hihi@hihi.com",
        password: await bcrypt.hash("123456", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
