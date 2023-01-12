const userServices = require("../services/userServices");
class UserController {
  async handleLogin(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
      return res.status(500).json({
        errorCode: 1,
        message: "missing email or password",
      });
    }
    let userData = await userServices.handleUserLogin(email, password);
    return res.status(200).json({
      errorCode: userData.errorCode,
      message: userData.message,
      user: userData.user ? userData.user : {},
    });
  }
}

module.exports = new UserController();
