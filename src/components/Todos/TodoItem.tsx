import React, {Component} from "react"
import {Checkbox} from "antd"

interface ITodoItemProps {
  id: number
  description: string
  completed: boolean
  update: (id: number, params: any) => void
}

class TodoItem extends Component<ITodoItemProps> {
  
  render() {
    return (
      <div className={"TodoItem"} id={"TodoItem"}>
        <Checkbox
          checked={this.props.completed}
          onChange={(e) => {this.props.update(this.props.id, {completed: e.target.checked})}}
        >Checkbox</Checkbox>
        <span>{this.props.description}</span>
      </div>
    )
  }
}

export default TodoItem
