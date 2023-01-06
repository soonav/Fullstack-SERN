class NewController {
  index(req, res) {
    res.send("newController");
  }
}

module.exports = new NewController();
