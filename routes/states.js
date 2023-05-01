const express = require("express");
const router = express();
const stateController = require("../../controller/stateController");

router
  .route("/")
  .get(employeeController.GetStates)


router.route("/:id").get(stateController.GetState);

module.exports = router;