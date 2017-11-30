import axios from 'axios';

const APIURL = '/api/todos'

export async function getTodos(){
  return axios.get(APIURL)
  .catch(err => console.log(err))
  .then(res => res.data) 
}

export async function createTodo(name){
  return axios.post(APIURL,{ name })
  .catch(err => console.log(err))
  .then(res => res.data) 
}

export async function deleteTodo(id){
  return axios.delete(`${APIURL}/${id}`)
  .catch(err => console.log(err))
}

export async function toggleTodo(todo){
  return axios.put(`${APIURL}/${todo._id}`, {completed: !todo.completed})
  .catch(err => console.log(err))
  .then((res) => res.data)
}