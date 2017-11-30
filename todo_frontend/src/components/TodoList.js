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
  
  deleteTodo(id){
    axios.delete(`${APIURL}/${id}`)
    .catch(err => console.log(err))
    .then(() => {
      const todos = this.state.todos.filter((todo) => todo._id !== id)
      console.log(todos);
      this.setState({todos: todos }) 
    })
  }
  
  toggleTodo(todo){
    axios.put(`${APIURL}/${todo._id}`, {completed: !todo.completed})
    .catch(err => console.log(err))
    .then((updatedTodo) => {
      const todos = this.state.todos.map(t => 
        (t._id === updatedTodo.data._id)
        ? {...t, completed: !t.completed}
        : t
      )
      console.log(todos);
      this.setState({ todos: todos }) 
    })
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