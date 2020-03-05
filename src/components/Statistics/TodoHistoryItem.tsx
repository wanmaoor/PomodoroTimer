import axios from "config/axios"
import { format } from "date-fns"
import React, { Component } from "react"
import { connect } from "react-redux"
import { updateTodo } from "redux/actions/todoActions"
import "./TodoHistoryItem.scss"

interface ITodoHistoryItemProps extends ITodo {
  itemType: "deleted" | "finished"
  updateTodo: (params: any) => void
}

class TodoHistoryItem extends Component<ITodoHistoryItemProps> {
  updateTodo = async (params: any) => {
    try {
      const response = await axios.put(`todos/${this.props.id}`, params)
      this.props.updateTodo(response.data.resource)
    } catch (e) {
      throw new Error(e)
    }
  }
  
  render() {
    let action
    let timeFormat = "HH:MM"
    let time = this.props.updated_at
    if (this.props.itemType === "finished") {
      action = (
        <div className={"action"}>
          <span onClick={() => {this.updateTodo({completed: false})}}>恢复</span>
          <span onClick={() => {this.updateTodo({deleted: true})}}>删除</span>
        </div>
      )
    } else {
      timeFormat = "yyyy-MM-dd"
      time = this.props.created_at
      action = (
        <div className={"action"}>
          <span onClick={() => {this.updateTodo({deleted: false})}}>恢复</span>
        </div>
      )
    }
    return (
      <div className={"todoItem"}>
        <div className="text">
          <span>{format(Date.parse(time), timeFormat)}</span>
          <span>{this.props.description}</span>
        </div>
        {action}
      </div>
    )
  }
}

const mapDispatchToProps = {
  updateTodo
}

export default connect(null, mapDispatchToProps)(TodoHistoryItem)

