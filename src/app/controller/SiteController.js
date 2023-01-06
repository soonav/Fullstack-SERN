const db = require("../../models/index");
class SiteController {
  async index(req, res) {
    try {
      let data = await db.User.findAll();
      res.send(data);
    } catch (e) {
      console.log("e", e);
    }
  }
}

module.exports = new SiteController();
