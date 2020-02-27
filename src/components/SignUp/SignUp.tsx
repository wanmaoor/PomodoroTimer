import React, {ChangeEvent, Component} from "react"
import {Button, Icon, Input} from "antd"
// import axios from '@/config/axios'
import axios from "../../config/axios"
import {Link} from "react-router-dom"
import "./SignUp.scss"
import {ACCOUNT, CONFIRM, PASSWORD} from "constrants/Sign"

interface ISignUp {
  account: string
  password: string
  passwordConfirmed: string
}

export default class SignUp extends Component<any, ISignUp> {
  private onChangeAccount: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    this.setState({account: e.target.value})
  }
  private onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    this.setState({password: e.target.value})
  }
  
  private onChangePasswordConfirmed: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    this.setState({passwordConfirmed: e.target.value})
  }
  private submit: () => void = async () => {
    const {account, password, passwordConfirmed} = this.state
    
    try {
      await axios.post("sign_up/user", {
        [ACCOUNT]: account, [PASSWORD]:password, [CONFIRM]: passwordConfirmed
      })
      console.log("成功")
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
      passwordConfirmed: ""
    }
  }
  
  render(): React.ReactNode {
    const {account, password, passwordConfirmed} = this.state
    return (
      <div className={"SignUp"} id={"SignUp"}>
        <h1>Pomodoro 注册</h1>
        <Input
          placeholder={"输入用户名"}
          prefix={<Icon
            type={"user"}
            style={{color: "rgba(0,0,0.25)"}}
          />}
          value={account}
          onChange={this.onChangeAccount}
        />
        <Input.Password
          placeholder="输入密码"
          value={password}
          onChange={this.onChangePassword}
        />
        <Input.Password
          placeholder="请再次输入密码"
          value={passwordConfirmed}
          onChange={this.onChangePasswordConfirmed}
        />
        <Button
          onClick={this.submit}
          className={"signUpButton"}
          type={"primary"}
        >
          注册
        </Button>
        <p>已有账号? <Link to={"/login"}>登录</Link>
        </p>
      </div>
    )
  }
}

