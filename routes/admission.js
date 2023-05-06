const express = require("express");
const router = express();
const admissionController = require("../controller/admissionController");

router
  .route("/")
  .get(admissionController.getAdmission)

  

  module.exports = router;