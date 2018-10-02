var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne([
    "burger_name",
  ], [
      req.body.burger_name,
    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log(condition)

  burger.updateOne({devoured: true}, condition, function(result) {
    console.log(result)
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/", function(req, res) {
  burger.throwUp(function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
