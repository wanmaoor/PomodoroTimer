import axios from "config/axios"
import React, { Component } from "react"
import { connect } from "react-redux"
import { editTodo, updateTodo } from "redux/actions/todoActions"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import "./Todos.scss"


class Todos extends Component<any> {

	get unCompletedTodos() {
		return this.unDeletedTodos.filter((t: ITodo) => !t.completed)
	}
  
  get unDeletedTodos() {
    return this.props.todos.filter((t: ITodo) => !t.deleted)
  }
  
  get completedTodos() {
    return this.unDeletedTodos.filter((t: ITodo) => t.completed)
  }
  
  render() {
    return (
      <div className={"Todos"} id={"Todos"}>
        <TodoInput/>
        <div className={"todoList"}>
          {this.unCompletedTodos.map((todo: ITodo) => <TodoItem key={todo.id} {...todo} update={this.postTodo}
                                                                editTodo={this.isTodoEditable}/>)}
          {
            this.completedTodos.map((todo: ITodo) => <TodoItem key={todo.id} {...todo} update={this.postTodo}
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
    if (params.completed) {
      params.completed_at = new Date()
    }
    try {
      const response = await axios.put(`todos/${id}`, params)
      this.props.updateTodo(response.data.resource)
    } catch (e) {
      throw new Error(e)
    }
  }
}

interface IMSTPTodos {
  todos: Array<ITodoExtend>
  
  [propName: string]: any
}

const mapStateToProps: (state: ITodosState, ownProps: any) => IMSTPTodos = (state, ownProps) => {
  return {
    todos: state.todos,
    ...ownProps
  }
}
const mapDispatchToProps = {
  editTodo,
  updateTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
