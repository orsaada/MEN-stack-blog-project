const express = require("express");
const router = express.Router();

router.get("/new", function (req, res) {
  res.render("articles/new");
});

router.post("/", function (req, res) {});

module.exports = router;
