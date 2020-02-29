import React, {Component} from "react"
import TodoInput from "./TodoInput"
import axios from 'config/axios'
import './Todos.scss'
class Todos extends Component {
 
  render() {
    return (
      <div className={'Todos'} id={'Todos'}>
        <TodoInput addTodo={(params: any) => {Todos.addTodo(params).then(r => console.log(r))}}/>
      </div>
    )
  }
  
  private static async addTodo(params: any) {
    try {
      await axios.post('todos', params)
    } catch (e) {
      throw new Error(e)
    }
  }
}


export default Todos
