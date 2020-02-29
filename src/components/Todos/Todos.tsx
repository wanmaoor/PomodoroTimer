import React, {Component} from "react"
import TodoInput from "./TodoInput"
import axios from "config/axios"
import "./Todos.scss"

interface ITodosState {
  todos: Array<{description: string, id: string}>
}

class Todos extends Component<any, ITodosState> {
  constructor(props: any) {
    super(props)
    this.state = {
      todos: []
    }
  }
  
  render() {
    return (
      <div className={"Todos"} id={"Todos"}>
        <TodoInput addTodo={(params: any) => {this.addTodo(params).then(r => console.log(r))}}/>
        <main>
          {this.state.todos.map(todo => {
            return <div key={todo.id}>{todo.description}</div>
          })}
        </main>
      </div>
    )
  }
  
  getTodos = async () => {
    try {
      const response = await axios.get("todos")
      this.setState({todos: response.data.resources})
    } catch (e) {
      throw new Error(e)
    }
  }
  
  componentDidMount(): void {
    this.getTodos().then(r => console.log(r))
  }
  
  private  async addTodo(params: any) {
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
