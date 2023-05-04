const express = require("express");
const router = express();
const capitalController = require("../controller/capitalController");

router
  .route("/")
  .get(capitalController.getCapital)

  

  module.exports = router;