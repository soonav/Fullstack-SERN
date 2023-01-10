const bcrypt = require("bcryptjs");
const db = require("../../models");

var salt = bcrypt.genSaltSync(10);

let createService = () => {};

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let password = await hashUserPassword(data.password);
      await db.User.creatre({
        firstName: data.firstName,
        password: password,
        lastName: data.lastName,
        email: data.email,
        typeRole: data.typeRole,
        keyRole: data.keyRole,
        address: data.address,
        gender: data.gender === "1" ? true : false,
      });
      resolve("ok, created user done");
    } catch (e) {
      reject(e);
    }
  });
};
let hashUserPassword = (userpassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync("B4c0//", salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createService: createService,
  hashUserPassword: hashUserPassword,
};
