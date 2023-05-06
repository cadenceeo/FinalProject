const express = require("express");
const router = express();
const nicknameController = require("../controller/nicknameController");

router
  .route("/")
  .get(nicknameController.getNickname)

  

  module.exports = router;