const db = require("../../models");
const bcrypt = require("bcryptjs");

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let userExit = await checkUserEmail(email);
      if (userExit) {
        let user = await db.User.findOne({
          where: { email: email },
          attributes: ["email", "password", "typeRole"],
          raw: true,
        });
        if (user) {
          let check = bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errorCode = 0;
            userData.message = "OK";
            delete user.password;
            userData.user = user;
          } else {
            userData.errorCode = 3;
            userData.message = "Wrong password";
          }
        } else {
          userData.errorCode = 2;
          userData.message = "User not found";
          resolve(userData);
        }
      } else {
        userData.errorCode = 1;
        userData.message = "Your email isn't exist";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: email },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {}
  });
};

let getAllUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = "";
      if (userId == "ALL") {
        user = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      }
      if (userId !== "ALL" && userId) {
        user = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        });
      }
      resolve(user);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = { handleUserLogin, getAllUser };
