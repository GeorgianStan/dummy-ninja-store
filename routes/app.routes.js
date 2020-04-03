// /**
//  * Dependencies
//  */
const express = require("express");
const router = express.Router();

/**
 * * Main page - send the README.md file
 */
router.get("/", function(req, res) {
  res.render("index");
});

module.exports = router;
