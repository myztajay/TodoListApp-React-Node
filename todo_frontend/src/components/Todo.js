import React from 'react';

const Todo = ({ name, completed, deleteTodo, toggleTodo }) => (
  <li> 
  <span
  style={{
    textDecoration: completed? 'line-through' : 'none'
  }}
  onClick={toggleTodo}
  >
  {name}
  </span>
  <span onClick={deleteTodo}> X </span>
  </li>
)

export default Todo