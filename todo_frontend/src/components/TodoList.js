import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';

const APIURL = '/api/todos'

class TodoList extends Component {
  constructor(props){
    super(props)  
    this.state = {
      todos: []
    }
  }
  componentWillMount(){ 
    this.getTodos()  
  }
  
  getTodos(){
    axios.get(APIURL)
    .catch(err => console.log(err))
    .then(res => {
      this.setState({todos: res.data})
    }) 
  }
  render(){
    const todos = this.state.todos.map((todo) =>{
      return <Todo key={todo._id} {...todo} /> 
    })
    return(
      <div>
        <h1>Todo List</h1>
        <ul>
        {todos}
        </ul>
      </div>  
    )
  }
}

export default TodoList;