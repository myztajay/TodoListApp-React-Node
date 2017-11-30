import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
  }
  
  handleChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  
  handleSubmit(e){
    e.preventDefault()
    this.props.createTodo(this.state.inputValue)
  }
  render(){
    return(
      <form >
        <input 
          type='text' 
          value={this.state.inputValue} 
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}> Submit</button>
      </form>
    )
  }
}

export default TodoForm