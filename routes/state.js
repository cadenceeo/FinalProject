const express = require("express");
const router = express();
const ksController = require("../controller/kscontroller");

router
  .route("/")
  .get(ksController.getKansas)

  

  module.exports = router;