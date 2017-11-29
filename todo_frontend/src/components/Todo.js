import React, { Component } from 'react';

const Todo = ({ name, completed }) => (
  <li style={{
    textDecoration: completed? 'line-through' : 'none'
  }}>
  {name}
  </li>
)

export default Todo