import React, {Component} from "react"
import {Checkbox, Icon} from "antd"


class TodoItem extends Component<ITodoExtend, ITodoItemState> {
  constructor(props: any) {
    super(props)
    this.state = {
      editText: this.props.description
    }
  }
  
  handleEditTextChange = (val: string) => {
    this.setState({editText: val})
  }
  
  render() {
    const Editing = (
      <div className={"editing"}>
        <input type={"text"} value={this.state.editText}
               onChange={(e) => {this.handleEditTextChange(e.target.value)}}
               onKeyUp={(e) => {this.handelKeyUp(e)}}
        />
        <div className="iconWrapper">
          <Icon type={"enter"}/>
          <Icon type={"delete"} onClick={() => this.props.update(this.props.id, {deleted: true})}/>
        </div>
      </div>
    )
    const Text = (<span onDoubleClick={() => {this.props.editTodo(this.props.id)}}>{this.props.description}</span>)
    return (
      <div className={"TodoItem"} id={"TodoItem"}>
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
  
  
}

export default TodoItem
