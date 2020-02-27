import React, {Component} from "react"
import {Button} from "antd"
import axios from "config/axios"

interface IRouter {
  history: any
}

interface IIndexState {
  user: any
}

class Index extends Component<IRouter, IIndexState> {
  constructor(props: Readonly<IRouter>) {
    super(props)
    this.state = {
      user: {}
    }
  }
  
  logout = () => {
    localStorage.setItem("x-token", "")
    this.props.history.push("/login")
  }
  
  async UNSAFE_componentWillMount() {
    await this.getMe()
  }
  
  getMe = async () => {
    const response = await axios.get("me")
    this.setState({user: response.data})
  }
  
  render(): React.ReactNode {
    return (
      <div>
        <h1>你好, {this.state.user?.account}</h1>
        <Button onClick={this.logout}>退出登录</Button>
      </div>
    )
  }
}

export default Index
