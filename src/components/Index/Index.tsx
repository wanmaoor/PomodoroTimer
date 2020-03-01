import React, {Component} from "react"
import {Dropdown, Icon, Menu} from "antd"
import axios from "config/axios"
import "./Index.scss"
import Todos from "../Todos/Todos"

interface IRouter {
  history: any
}

interface IIndexState {
  user: any
}

const Tomato = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_808628_b6nuh19mmf5.js",
})

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
    const menu = (
      <Menu style={{textAlign: "right"}}>
        <Menu.Item>
          <span onClick={(e) => {e.preventDefault()}}>
            偏好设置&nbsp;<Icon type={"setting"}/>
          </span>
        </Menu.Item>
        <Menu.Item>
          <span onClick={(e) => {
            e.preventDefault()
            this.logout()
          }}>退出登录&nbsp;<Icon type={"logout"}/></span>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className={"Index"} id={"Index"}>
        <header>
          <span className="logo">
            <Tomato type={"i-Tomato"} className={"icon"}/>
          </span>
          <Dropdown overlay={menu}>
            <span
              className="ant-dropdown-link"
              onClick={e => e.preventDefault()}
              style={{color: "#1890ff", cursor: "pointer", fontSize: "1rem"}}
            >
              你好, {this.state.user?.account} <Icon type="down"/>
            </span>
          </Dropdown>
        </header>
        <main>
          <Todos/>
        </main>
      </div>
    )
  }
}

export default Index
