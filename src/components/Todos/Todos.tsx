import React, {Component} from "react"
import {connect} from "react-redux"
import {editTodo, initTodos, updateTodo} from "../../redux/actions"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import axios from "config/axios"
import "./Todos.scss"


class Todos extends Component<any> {
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
    return this.props.todos.filter(t => !t.deleted)
  }
  
  get completedTodos() {
    return this.unDeletedTodos.filter(t => t.completed)
  }
  
  render() {
    return (
      <div className={"Todos"} id={"Todos"}>
        <TodoInput/>
        <div className={"todoList"}>
          {this.unCompletedTodos.map(todo => <TodoItem key={todo.id} {...todo} update={this.postTodo}
                                                       editTodo={this.isTodoEditable}/>)}
          {
            this.completedTodos.map(todo => <TodoItem key={todo.id} {...todo} update={this.postTodo}
                                                      editTodo={this.isTodoEditable}/>)
          }
        </div>
      </div>
    )
  }
  
  isTodoEditable = (id: number) => {
    this.props.editTodo(id)
  }
  
  postTodo = async (id: number, params: any) => {
    try {
      const response = await axios.put(`todos/${id}`, params)
      this.props.updateTodo(response.data.resource)
    } catch (e) {
      throw new Error(e)
    }
  }
  
  getTodos = async () => {
    try {
      const response = await axios.get("todos")
      const todos = response.data.resources.map((t: any) => Object.assign({}, t, {editable: false}))
      this.props.initTodos(todos)
    } catch (e) {
      throw new Error(e)
    }
  }
  
  
  componentDidMount(): void {
    this.getTodos()
  }
}

const mapStateToProps = (state: ITodosState, ownProps: any) => {
  return {
    todos: state.todos,
    ...ownProps
  }
}
const mapDispatchToProps = {
  initTodos,
  editTodo,
  updateTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
