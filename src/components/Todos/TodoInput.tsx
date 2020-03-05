import { Input } from "antd"
import axios from "config/axios"
import React, { Component } from "react"
import { connect } from "react-redux"
import { addTodo } from "redux/actions/todoActions"

class TodoInput extends Component<ITodoInputProps, ITodoInputState> {
	constructor(props: ITodoInputProps) {
		super(props)
		this.state = {
			description: ""
		}
	}

	onChange = (value: string) => {
    this.setState({description: value})
  }
  
  postTodo = async () => {
    try {
      let response = await axios.post("todos", {description: this.state.description})
      this.props.addTodo(response.data.resource)
    } catch (e) {
      throw new Error(e)
    }
  }
  
  render() {
    const {description} = this.state
    return (
      <div className={"TodoInput"} id={"TodoInput"}>
        <Input
          placeholder="今天要干什么"
          value={description}
          allowClear
          onChange={(e) => {this.onChange(e.target.value)}}
          onKeyUp={e => {this.handleKeyUp(e)}}
        />
      </div>
    )
  }
  
  private handleKeyUp(e: React.KeyboardEvent<HTMLInputElement> | { [p: string]: any }) {
    if (e.key === "Enter" && this.state.description !== "") {
      this.postTodo().then(() => {this.setState({description: ""})})
    }
  }
}


const mapStateToProps = (state: any, ownProps: any) => {
  return {
    todos: state.todos,
    ...ownProps
  }
}
const mapDispatchToProps = {
  addTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)

