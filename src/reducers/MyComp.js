// let my_count = 0

const myComp = (state={amount: 7 }, action) => {
  //console.log("in MyComp Reducer, state = ", state )
  //console.log("in MyComp Reducer, action = ", action )
  //my_count = my_count + 1
  //console.log("in MyComp Reducer, my_count = ", my_count )  
  switch (action.type) {
  case "INCREMENT":
    return { amount: action.amount }
  default:
    return { amount: state.amount }
  }
  
}

export default myComp
