// const data = {
//   employees: require("../model/employees.json"),
//   setEmployees: (data) => {
//     this.employees = data;
//   },
// };

const Employee = require("../model/Employee");

//Get all employees
const GetStates = async (req, res) => {
  const states = await StateCode.find();
  if (!states)
    return res.status(400).json({ message: "No states found." });
  res.json(states);
};


//Get Employee
const GetState = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "State code is required. " });
  }

  const state = await StateCode.findOne({ _id: req.params.id }).exec();

  if (!state) {
    return res
      .status(204)
      .json({ message: `No State matches state code ${req.params.id}` });
  }
  res.json(state);
};
module.exports = {
  GetStates,
  GetState,
};