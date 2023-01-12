const bcrypt = require("bcryptjs");
const db = require("../../models");

var salt = bcrypt.genSaltSync(10);

let createService = () => {};

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let password = await hashUserPassword(data.password);
      await db.User.create({
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

let getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};
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

let getUserId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userData = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });
      if (userData) {
        resolve(userData);
      } else {
        resolve([]);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let updateUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: {
          id: data.id,
        },
        raw: true,
      });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        await user.save();
        resolve("update done");
      } else {
        resolve("not found user");
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createService: createService,
  createNewUser: createNewUser,
  getAllUser: getAllUser,
  getUserId: getUserId,
  updateUser: updateUser,
};
