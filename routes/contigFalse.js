const express = require("express");
const router = express();
const contigFalseController = require("../controller/contigFalseController");

router
  .route("/")
  .get(contigFalseController.getContigFalse)

  

  module.exports = router;