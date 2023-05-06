
const states = require("../model/states.json");

  
// Get Kansas and Capital
function Kansas(name) {
  if (name.state === "Kansas"){
    return {state: name.state, admission: name.admission_date}
  };
}


const getAdmission = (req, res) => {
  res.json(Kansas(states.find(Kansas)));
};


module.exports = {
  getAdmission,
};