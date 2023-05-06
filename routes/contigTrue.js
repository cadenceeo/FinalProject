const express = require("express");
const router = express();
const contigTrueController = require("../controller/contigTrueController");

router
  .route("/")
  .get(contigTrueController.getContigTrue)

  

  module.exports = router;