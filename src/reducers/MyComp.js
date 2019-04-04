
const myComp = (state=null, action) => {
  switch (action.type) {
  case "INCREMENT":
      return { amount: action.amount }
    default:
      return state
  }
  
}

export default myComp
