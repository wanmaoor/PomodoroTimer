import React, {Component} from "react"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import axios from "config/axios"
import "./Todos.scss"


class Todos extends Component<any, ITodosState> {
  constructor(props: any) {
    super(props)
    this.state = {
      todos: []
    }
  }
  
  get unCompletedTodos() {
    return this.unDeletedTodos.filter(t => !t.completed)
  }
  
  get unDeletedTodos() {
    return this.state.todos.filter(t => !t.deleted)
  }
  
  get completedTodos() {
    return this.unDeletedTodos.filter(t => t.completed)
  }
  
  render() {
    return (
      <div className={"Todos"} id={"Todos"}>
        <TodoInput addTodo={(params: any) => {this.addTodo(params).then(r => console.log(r))}}/>
        <div className={"todoList"}>
          {this.unCompletedTodos.map(todo => <TodoItem key={todo.id} {...todo} update={this.updateTodo}
                                                       editTodo={this.editTodo}/>)}
          {
            this.completedTodos.map(todo => <TodoItem key={todo.id} {...todo} update={this.updateTodo}
                                                      editTodo={this.editTodo}/>)
          }
        </div>
      </div>
    )
  }
  
  editTodo = (id: number) => {
    const {todos} = this.state
    const newTodos = todos.map(t => {
      if (id === t.id) {
        return Object.assign({}, t, {editable: !t.editable})
      } else {
        return Object.assign({}, t, {editable: false})
      }
    })
    this.setState({todos: newTodos})
  }
  
  updateTodo = async (id: number, params: any) => {
    const {todos} = this.state
    try {
      const response = await axios.put(`todos/${id}`, params)
      const newTodos = todos.map(t => {
        if (id === t.id) {
          return response.data.resource
        } else {
          return t
        }
      })
      this.setState({todos: newTodos})
    } catch (e) {
      throw new Error(e)
    }
  }
  
  getTodos = async () => {
    try {
      const response = await axios.get("todos")
      console.log(response.data.resources)
      const todos = response.data.resources.map((t: any) => Object.assign({}, t, {editable: false}))
      this.setState({todos})
    } catch (e) {
      throw new Error(e)
    }
  }
  
  componentDidMount(): void {
    this.getTodos()
  }
  
  private async addTodo(params: any) {
    const {todos} = this.state
    try {
      const response = await axios.post("todos", params)
      this.setState({todos: [response.data.resource, ...todos]})
    } catch (e) {
      throw new Error(e)
    }
  }
}


export default Todos
