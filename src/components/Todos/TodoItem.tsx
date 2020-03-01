import React, {Component} from "react"
import {Checkbox, Icon} from "antd"
import classNames from "classnames"
import "./TodoItem.scss"

class TodoItem extends Component<ITodoExtend, ITodoItemState> {
  constructor(props: any) {
    super(props)
    this.state = {
      editText: this.props.description
    }
  }
  
  
  render() {
    const Editing = (
      <div className={"editing"}>
        <input type={"text"} value={this.state.editText}
               onChange={(e) => {this.handleEditTextChange(e.target.value)}}
               onKeyUp={(e) => {this.handelKeyUp(e)}}
               onBlur={() => {this.props.editTodo(this.props.id)}}
               autoFocus={true}
        />
        <div className="iconWrapper">
          <Icon type={"enter"} onClick={() => {this.submit()}} className={"enter"}/>
          <Icon type={"delete"} onClick={() => {this.props.update(this.props.id, {deleted: true})}}/>
        </div>
      </div>
    )
    const Text = (<span className={"Text"}
    >{this.props.description}</span>)
    const todoItemClass = classNames({
      TodoItem: true,
      editing: this.props.editable,
      completed: this.props.completed
    })
    return (
      <div className={todoItemClass} id={"TodoItem"} onDoubleClick={() => {this.props.editTodo(this.props.id)}}>
        <Checkbox
          checked={this.props.completed}
          onChange={(e) => {this.props.update(this.props.id, {completed: e.target.checked})}}
        />
        {
          this.props.editable ? Editing : Text
        }
      </div>
    )
  }
  
  private handelKeyUp(e: React.KeyboardEvent) {
    if (e.key === "Enter" && this.state.editText !== "") {
      this.props.update(this.props.id, {description: this.state.editText})
    }
  }
  
  
  private submit() {
    if (this.state.editText !== "") {
      this.props.update(this.props.id, {description: this.state.editText})
    }
  }
  
  private handleEditTextChange = (val: string) => {
    this.setState({editText: val})
  }
}

export default TodoItem
