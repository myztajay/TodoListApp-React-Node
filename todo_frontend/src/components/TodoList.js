import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import * as apiCalls from '../helpers/api';

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
  
  async getTodos(){
    let todos = await apiCalls.getTodos()
    this.setState({todos: todos})
  }
  
  async createTodo(name){
    let todo = await apiCalls.createTodo(name)
    this.setState({todos: [...this.state.todos, todo]})  
  }
  
  async deleteTodo(id){
    await apiCalls.deleteTodo(id)
      const todos = this.state.todos.filter((todo) => todo._id !== id)
      this.setState({todos: todos }) 
  }
  
  async toggleTodo(todo){
      let updatedTodo = await apiCalls.toggleTodo(todo)
      const todos = this.state.todos.map(t => 
        (t._id === updatedTodo._id)
        ? {...t, completed: !t.completed}
        : t
      )
      this.setState({ todos: todos }) 
  }
  
  render(){
    const todos = this.state.todos.map((todo) =>{
      return (
        <Todo 
          key={todo._id} 
          {...todo} 
          deleteTodo={this.deleteTodo.bind(this, todo._id)} 
          toggleTodo={this.toggleTodo.bind(this, todo)}
        />
      ) 
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