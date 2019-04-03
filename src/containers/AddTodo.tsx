import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


// dispatch には store が入ってくる。
const _AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <button onClick={ () => {
        dispatch( addTodo(input.value) );
        input.value = '';
      }}>
        Add Todo!
      </button>
      <input ref={node => input = node} />
    </div>
  );
};

const AddTodo = connect()(_AddTodo);
export default AddTodo;
