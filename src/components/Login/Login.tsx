import React, {Component} from "react"
import {Button, Icon, Input} from "antd"
import axios from "../../config/axios"
import {Link} from "react-router-dom"
import "./Login.scss"
import {ACCOUNT, PASSWORD} from "../../constrants/Sign"

interface ILogin {
  account: string
  password: string
}


export default class Login extends Component<any, ILogin> {
  private onChange: (name: "account" | "password", value: string) => void = (name, value) => {
    const newState: any = {}
    newState[name] = value
    this.setState(newState)
  }
  private submit: () => void = async () => {
    const {account, password} = this.state
    
    try {
      await axios.post("sign_in/user", {
        [ACCOUNT]: account, [PASSWORD]: password
      })
      console.log("成功")
      this.props.history.push("/")
    } catch (e) {
      throw new Error(e)
    } finally {
      console.log("over")
    }
  }
  
  constructor(props: any) {
    super(props)
    this.state = {
      account: "",
      password: "",
    }
  }
  
  render(): React.ReactNode {
    const {account, password} = this.state
    return (
      <div className={"Login"} id={"Login"}>
        <h1>Pomodoro 登录</h1>
        <Input
          placeholder={"输入用户名"}
          prefix={<Icon
            type={"user"}
            style={{color: "rgba(0,0,0.25)"}}
          />}
          value={account}
          onChange={(e) => { this.onChange("account", e.target.value)}}
        />
        <Input.Password
          placeholder="输入密码"
          value={password}
          onChange={(e) => { this.onChange("password", e.target.value)}}
          onKeyDown={(e) => {this.handleKeyDown(e.key)}}
        />
        <Button
          onClick={this.submit}
          className={"loginButton"}
          type={"primary"}
        >
          登录
        </Button>
        <p>没有账号? <Link to={"/signup"}>注册</Link>
        </p>
      </div>
    )
  }
  
  
  private handleKeyDown(value: string) {
    if (value === "Enter") {
      this.submit()
    }
  }
}

