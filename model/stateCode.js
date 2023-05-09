const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const state = new Schema({
  stateCode: {
    type: String,
    required: true,
  },
  funfacts: {
    type: Array,
  },
});

module.exports = mongoose.model("states", state);