import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import rootReducer from '../reducers';

import { addTodo } from "../actions";

import MyComponent from "./MyReduxSample";



// redux のデバッガーを使う場合は以下をコメントアウト.
// declare global {
//     interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
// }

// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__
//         && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// createStore の時点で rootReducer に登録した関数が 1 回動く.
const store = createStore(
    rootReducer
);

// store に addTodo('Hello World!') で表される action が dispatch されたときに、
// rootReducer に登録した関数が動き、todo 関数の返り値が store の state となる。
store.dispatch( addTodo('Hello World23333!') );
// console.log(store.getState());


const App = () => (
  <Provider store={store}>  
    <div>
      <MyComponent />
      <div>  hellosagsag </div>
      <VisibleTodoList />
      <AddTodo />
      {/* helloo soeaage */}
      {/* <Footer /> */}
    </div>
  </Provider>  
);

export default App;
