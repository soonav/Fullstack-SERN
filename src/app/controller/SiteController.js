const db = require("../../models/index");
const CRUDService = require("../services/CRUDsevices");
class SiteController {
  async index(req, res) {
    try {
      let data = await db.User.findAll();
      res.send(data);
    } catch (e) {
      console.log("e", e);
    }
  }

  async crudService(req, res) {
    await CRUDService.createService();
  }
}

module.exports = new SiteController();
