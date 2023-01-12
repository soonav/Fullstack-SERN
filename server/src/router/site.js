const express = require("express");
const router = express.Router();
const siteController = require("../app/controller/SiteController");

router.get("/", siteController.getAllUsers);

router.get("/edit", siteController.editCrud);
router.put("/edit", siteController.updateCrud);

module.exports = router;
