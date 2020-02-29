import React, {Component} from "react"
import TodoInput from "./TodoInput"
import axios from 'config/axios'

class Todos extends Component {
 
  render() {
    return (
      <div className={'Todos'} id={'Todos'}>
        <TodoInput />
      </div>
    )
  }
}


export default Todos
