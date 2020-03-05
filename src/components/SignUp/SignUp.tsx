import { Button, Icon, Input } from "antd"
import axios from "config/axios"
import { ACCOUNT, CONFIRM, PASSWORD } from "constants/Sign"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./SignUp.scss"

interface ISignUp {
	account: string
	password: string
	passwordConfirmed: string
}

export default class SignUp extends Component<any, ISignUp> {
	constructor(props: any) {
		super(props)
		this.state = {
			account: "",
			password: "",
			passwordConfirmed: ""
		}
	}

	render(): React.ReactNode {
		const { account, password, passwordConfirmed } = this.state
		return (
			<div className={"SignUp"} id={"SignUp"}>
				<h1>Pomodoro 注册</h1>
				<Input
					placeholder={"输入用户名"}
					prefix={<Icon
						type={"user"}
						style={{ color: "rgba(0,0,0.25)" }}
					/>}
					value={account}
					onChange={(e) => { this.onChange("account", e.target.value)}}
				/>
				<Input.Password
					placeholder="输入密码"
					value={password}
					onChange={(e) => { this.onChange("password", e.target.value)}}
				/>
				<Input.Password
					placeholder="请再次输入密码"
					value={passwordConfirmed}
					onChange={(e) => { this.onChange("passwordConfirmed", e.target.value)}}
					onKeyDown={(e) => {this.handleKeyDown(e.key)}}
				/>
				<Button
					onClick={this.submit}
					className={"signUpButton"}
					type={"primary"}
				>
					注册
				</Button>
				<p>已有账号? <Link to={{ pathname: "/login" }}>登录</Link>
				</p>
			</div>
		)
	}

	private onChange: (name: "account" | "password" | "passwordConfirmed", value: string) => void = (name, value) => {
		this.setState({ ...this.state, [name]: value })
	}

	private submit: () => void = async () => {
		const { account, password, passwordConfirmed } = this.state

		try {
			await axios.post("sign_up/user", {
				[ACCOUNT]: account, [PASSWORD]: password, [CONFIRM]: passwordConfirmed
			})
			console.log("成功")
			this.props.history.push("/")
		} catch (e) {
			throw new Error(e)
		}
	}

	private handleKeyDown(value: string) {
		if (value === "Enter") {
			this.submit()
		}
	}
}

