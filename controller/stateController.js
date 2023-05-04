const data = {
  states: require("../model/states.json"),
  setStates(data) {
    this.states = data;
  },
};

// Get all Employees
const getAllStates = (req, res) => {
  res.json(data.states);
};





module.exports = {
  getAllStates,
};