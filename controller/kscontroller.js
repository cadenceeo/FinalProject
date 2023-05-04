
 const states = require("../model/states.json");

  
  // Get Kansas
  function Kansas(state) {
    return state.state === "Kansas";
  }
  

  const getKansas = (req, res) => {
    res.json(states.find(Kansas));
  };
  
  
  module.exports = {
    getKansas,
  };