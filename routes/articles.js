var express = require("express");
var router = express.Router();

router.get("/add", function (req, res) {
  res.render("add_campaign");
});

router.get("/:campaignId", function (req, res) {
  //get the campaign detail using the campaignId
});

router.get("/pending", function (req, res) {
  res.send("hello this is pending");
});

module.exports = router;
