const express = require("express");
const router = express();
const funfactController = require("../controller/funfactController");

router
  .route("/")
  .get(funfactController.getFunfact)
  router.post("/", funfactController.handleNewFunfact);

  

  module.exports = router;