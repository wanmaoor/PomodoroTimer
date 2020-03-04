import React, {Component} from "react"
import {Dropdown, Icon, Menu} from "antd"
import axios from "config/axios"
import "./Home.scss"
import {connect} from "react-redux"
import {initTodos} from "../../redux/actions/todoActions"
import {initTomatoes} from "../../redux/actions/tomatoActions"
import Statistics from "../Statistics/Statistics"
import Tomatoes from "../Tomatoes/Tomatoes"
import Todos from "../Todos/Todos"

interface IIndexState {
  user: any
}

const Tomato = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_808628_b6nuh19mmf5.js",
})

class Home extends Component<any, IIndexState> {
  constructor(props: any) {
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
    await this.getTodos()
    
  }
  
  getMe = async () => {
    const response = await axios.get("me")
    this.setState({user: response.data})
  }
  getTodos = async () => {
    try {
      const response = await axios.get("todos")
      const todos = response.data.resources.map((t: any) => Object.assign({}, t, {editable: false}))
      this.props.initTodos(todos)
    } catch (e) {
      throw new Error(e)
    }
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
      <div className={"Home"} id={"Home"}>
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
          <Tomatoes/>
          <Todos/>
        </main>
        <footer>
          <Statistics/>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    ...ownProps
  }
}
const mapDispatchToProps = {
  initTodos,
  initTomatoes
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
