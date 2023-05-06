const express = require("express");
const router = express();
const populationController = require("../controller/populationController");

router
  .route("/")
  .get(populationController.getPopulation)

  

  module.exports = router;