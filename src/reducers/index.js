import { combineReducers } from 'redux'
import todos from './todos'
import myComp from './MyComp'

const reducers = combineReducers( { todos, myComp } );
//const reducers = combineReducers( { todos} );
export default reducers
