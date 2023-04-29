const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateCode = new Schema({
  stateCode: {
    type: String,
    required: true,
  },
  funfacts: {
    funfacts: Array,
    required: false,
  },
});

module.exports = mongoose.model("StateCode", StateCode);