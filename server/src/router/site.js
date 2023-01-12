const express = require("express");
const router = express.Router();
const siteController = require("../app/controller/SiteController");
const userController = require("../app/controller/UserController");

router.get("/", siteController.getAllUsers);

router.get("/edit", siteController.editCrud);
router.put("/edit", siteController.updateCrud);
router.post("/api/login", userController.handleLogin);
module.exports = router;
