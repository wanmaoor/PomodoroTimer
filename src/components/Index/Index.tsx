import React, {Component} from "react"
import {Button} from "antd"

class Index extends Component<any, any> {
  
  login = () => {
    console.log(this.props)
    this.props.history.push("/login")
  }
  
  render(): React.ReactNode {
    return (
      <div>
        <Button onClick={this.login}>登录</Button>
      </div>
    )
  }
}

export default Index
