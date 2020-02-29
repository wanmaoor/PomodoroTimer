import React, {Component} from "react"
import {Input} from "antd"

interface ITodoInputState {
  description: string
}

class TodoInput extends Component<any, ITodoInputState> {
  constructor(props: any) {
    super(props)
    this.state = {
      description: ""
    }
  }
  
  onChange = (value: string) => {
    this.setState({description: value})
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
    if (e.key === "Enter") {
      // 提交 todo
      console.log("添加")
      this.setState({description: ""})
    }
  }
}


export default TodoInput
