
const data = {
    states: require("../model/states.json"),
    setStates(data) {
      this.states = data;
    },
  };
  
// Get all contiguous states
 const getContigFalse = (req, res) => {
    const nonContigNames = ["Alaska", "Hawaii"];
    const { url } = req.query;
    const includeNonContig = url && url.includes("?contig=false");
    
    const contiguousStates = data.states.filter((state) => {
        const isNonContig = nonContigNames.includes(state.state);
        return includeNonContig ? false : !isNonContig;
      });
    
    res.json(contiguousStates);
  };  



//Test to make sure my function works
/* const nonContigNames = ["Alaska", "Hawaii"];
const contiguousStates = data.states.filter((state) => {
    const isNonContig = nonContigNames.includes(state.state);
    console.log(state.state, isNonContig); // Add this line
    return !isNonContig;
  }); */
  


module.exports = {
  getContigFalse,
};