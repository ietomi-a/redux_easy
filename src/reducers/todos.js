//let my_count2 = 0

const todos = (state = [], action) => {
  //console.log("in todos Reducer, state = ", state )
  //console.log("in todos Reducer, action = ", action )
  //my_count2 = my_count2 + 1
  //console.log("in todos Reducer, my_count2 = ", my_count2 )    
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
  
}

export default todos
