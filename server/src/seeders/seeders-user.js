"use strict";
const bcrypt = require("bcryptjs");

var salt = bcrypt.genSaltSync(10);
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let hashUserPassword = (userpassword) => {
      return new Promise(async (resolve, reject) => {
        try {
          let hashPassword = await bcrypt.hashSync(userpassword, salt);
          resolve(hashPassword);
        } catch (e) {
          reject(e);
        }
      });
    };
    let passwordUser = await hashUserPassword("1234500");
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "soonav2",
        lastName: "an2",
        email: "anvansom00001@gmail.com",
        password: passwordUser,
        address: "tu cuong - thanh mien - hai duong-1",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
