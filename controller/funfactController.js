const states = require("../model/states.json");

  
// Get Kansas and Capital
function Kansas(name) {
  if (name.state === "Kansas"){
    return {funfact: name.funfacts}
  };
}


const getFunfact= (req, res) => {
  res.json(Kansas(states.find(Kansas)));
};

const handleNewFunfact = async (req, res) => {
    const stateCode = req.body.stateCode;
    const funfact = req.body.funfact;
  
    if (!stateCode || !funfact)
      return res
        .status(400)
        .json({ message: "State code and funfact is required" });
    try {
       // create and store the new user
      const result = await stateCode.create({
        stateCode: code,
        funfact: funfact,
      });
      console.log(result);
      res.status(201).json({ success: `New funfact ${funfact} is created!` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


module.exports = {
  getFunfact,
  handleNewFunfact,
};