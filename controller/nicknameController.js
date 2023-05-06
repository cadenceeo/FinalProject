const states = require("../model/states.json");

  
// Get Kansas and Capital
function Kansas(name) {
  if (name.state === "Kansas"){
    return {state: name.state, nickname: name.nickname}
  };
}


const getNickname = (req, res) => {
  res.json(Kansas(states.find(Kansas)));
};


module.exports = {
  getNickname,
};