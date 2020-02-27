import React, {Component} from "react"
import {Dropdown, Icon, Menu} from "antd"
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
    const menu = (
      <Menu style={{textAlign: "right"}}>
        <Menu.Item>
          <span onClick={(e) => {e.preventDefault()}}>
            设置&nbsp;<Icon type={"setting"}/>
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
          <span className="log">LOGO</span>
          <Dropdown overlay={menu}>
            <span
              className="ant-dropdown-link"
              onClick={e => e.preventDefault()}
              style={{color: '#1890ff', cursor: 'pointer'}}
            >
              你好, {this.state.user?.account} <Icon type="down"/>
            </span>
          </Dropdown>
        </header>
      </div>
    )
  }
}

export default Index
