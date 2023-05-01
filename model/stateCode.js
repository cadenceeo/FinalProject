const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const state = new Schema({
  stateCode: {
    type: String,
    required: true,
  },
  funfacts: {
    funfacts: Array,
  },
});

module.exports = mongoose.model("state", state);