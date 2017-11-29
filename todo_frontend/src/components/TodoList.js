import React, { Component } from 'react';
import axios from 'axios'

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
    return(
      <h1>Hello from todo component</h1>
    )
  }
}

export default TodoList;