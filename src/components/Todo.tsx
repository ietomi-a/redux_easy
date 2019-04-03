import * as React from 'react';
import * as PropTypes from 'prop-types';

const Todo = ({ text }) => (
  <li>
    {text}
  </li>
);


Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
