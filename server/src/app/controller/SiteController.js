const CRUDService = require("../services/CRUDsevices");
class SiteController {
  async crudService(req, res) {
    await CRUDService.createService();
  }

  async getAllUsers(req, res) {
    const allUser = await CRUDService.getAllUser();
    res.send(allUser);
  }
  async editCrud(req, res) {
    const userId = req.query.id;
    if (userId) {
      const userData = await CRUDService.getUserId(userId);
      res.send(userData);
    } else {
      res.send("khong co id");
    }
  }

  async updateCrud(req, res) {
    const data = req.body;
    const userData = await CRUDService.updateUser(data);
    if (userData) {
    } else {
      res.send("can not update  user");
    }
  }
}

module.exports = new SiteController();
