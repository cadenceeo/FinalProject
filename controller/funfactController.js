const states = require("../model/states.json");
const State = require("../model/stateCode");
  
// Get Kansas and Capital
function Kansas(name) {
  if (name.state === "Kansas"){
    return {funfact: name.id}
  };
}

const getFunfact= (req, res) => {
  res.json(Kansas(states.find(Kansas)));
};

/* const GetFunFactsMongo = async (req, res) => {
  const state = await State.find();
  if (!state)
    return res.status(400).json({ message: "No funfact found." });
  res.json(state);
}; */



const handleNewFunfact = async (req, res) => {
    const stateCode = req.body.stateCode;
    const funfacts = req.body.funfacts;
  
    if (!stateCode || !funfacts)
      return res
        .status(400)
        .json({ message: "State code and funfact is required" });
    try {
       // create and store the new funfact
      const result = await State.create({
        stateCode: stateCode,
        funfacts: funfacts,
      });
      console.log(result);
      res.status(201).json({ success: `New funfact ${funfacts} is created!` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


//Update Funfact
const UpdateFunfact = async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ message: "Id parameter is required. " });
  }
  const state = await State.findOne({ _id: req.body.id }).exec();

  if (!state) {
    return res
      .status(204)
      .json({ message: `No state matches Id ${req.body.id}` });
  }
  if (req.body.stateCode) state.stateCode = req.body.stateCode;
  if (req.body.funfacts) state.funfacts = req.body.funfacts;

  const result = await state.save();
  res.json(result);
};

  //Delete state
const DeleteFunfact = async (req, res) => {
  if (!req?.body.id) {
    return res.status(400).json({ message: "ID is required. " });
  }

  const state = await State.findOne({ _id: req.body.id }).exec();

  if (!state) {
    return res
      .status(204)
      .json({ message: `No states matches stateCode ${req.body.id}` });
  }
  const result = await state.deleteOne({ _id: req.body.id });
  res.json(result);
};



module.exports = {
  getFunfact,
 // GetFunFactsMongo,
  handleNewFunfact,
  UpdateFunfact,
  DeleteFunfact,
};