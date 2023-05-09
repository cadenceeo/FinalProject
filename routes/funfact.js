const express = require("express");
const router = express();
const funfactController = require("../controller/funfactController");

router
  .route("/")
  .get(funfactController.getFunfact)
  //.get(funfactController.GetFunFactsMongo)
  router.post("/", funfactController.handleNewFunfact);
  router.delete("/", funfactController.DeleteFunfact);
  router.patch("/", funfactController.UpdateFunfact);

  

  module.exports = router;