import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import rootReducer from '../reducers';

import { addTodo } from "../actions";

// createStore の時点で rootReducer に登録した関数が 1 回動く.
const store = createStore(rootReducer);

// store に addTodo('Hello World!') で表される action が dispatch されたときに、
// rootReducer に登録した関数が動き、todo 関数の返り値が store の state となる。
store.dispatch( addTodo('Hello World23333!') );
// console.log(store.getState());


const App = () => (
  <Provider store={store}>  
  <div>
    <div>  hellosagsag </div>
    <VisibleTodoList />
    <AddTodo />
    {/* helloo soeaage */}
    {/* <Footer /> */}
  </div>
  </Provider>  
);

export default App;
