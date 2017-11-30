import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';
import TodoForm from './TodoForm';

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
  
  createTodo(name){
    axios.post(APIURL,{ name })
    .catch(err => console.log(err))
    .then(res => {
      console.log(res);
      this.setState({todos: [...this.state.todos, res.data]})
    }) 
  }
  
  render(){
    const todos = this.state.todos.map((todo) =>{
      return <Todo key={todo._id} {...todo} /> 
    })
    return(
      <div>
        <h1>Todo </h1>
        <TodoForm List createTodo={this.createTodo.bind(this)}/>
        <ul>
        {todos}
        </ul>
      </div>  
    )
  }
}

export default TodoList;