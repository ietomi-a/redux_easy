import { combineReducers } from 'redux'
import todos from './todos'
import myComp from './MyComp'

// console.log("before a");
// const a = 
// console.log("before cobine229");
const reducers = combineReducers( { todos, myComp } );
//console.log("after cobine");
//const reducers = combineReducers( { todos} );
export default reducers
