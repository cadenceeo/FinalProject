
const data = {
    states: require("../model/states.json"),
    setStates(data) {
      this.states = data;
    },
  };


//Test to make sure my function works
/* const nonContigNames = ["Alaska", "Hawaii"];
const contiguousStates = data.states.filter((state) => {
    const isNonContig = nonContigNames.includes(state.state);
    console.log(state.state, isNonContig); // Add this line
    return !isNonContig;
  }); */
  
// Get all contiguous states
 const getContigTrue = (req, res) => {
    const nonContigNames = ["Alaska", "Hawaii"];
    const { url } = req.query;
    const includeNonContig = url && url.includes("?contig=true");
    
    const contiguousStates = data.states.filter((state) => {
        const isNonContig = nonContigNames.includes(state.state);
        return includeNonContig ? true : !isNonContig;
      });
    
    res.json(contiguousStates);
  };  
  


module.exports = {
  getContigTrue,
};