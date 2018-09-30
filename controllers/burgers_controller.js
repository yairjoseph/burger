var express = require("express");
var burgers = require("../models/burger.js");
var router = express.Router();


router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  module.exports = router;
 