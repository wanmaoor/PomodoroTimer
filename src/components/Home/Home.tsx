import { Dropdown, Icon, InputNumber, Menu, Modal, notification } from "antd"
import axios from "config/axios"
import React, { Component } from "react"
import { connect } from "react-redux"
import { initTodos } from "redux/actions/todoActions"
import { initTomatoes } from "redux/actions/tomatoActions"
import Statistics from "../Statistics/Statistics"
import Todos from "../Todos/Todos"
import Tomatoes from "../Tomatoes/Tomatoes"
import "./Home.scss"

interface IIndexState {
	user: any,
	visible: boolean,
	timer: number | undefined
}


const Tomato = Icon.createFromIconfontCN({
	scriptUrl: "//at.alicdn.com/t/font_808628_b6nuh19mmf5.js",
})

const openNotification = () => {
	notification.open({
		message: '使用小提示',
		description:
			'按下回车键即可添加新的todo噢',
		onClick: () => {
			console.log('Notification Clicked!');
		},
	});
};

const openNotification1 = () => {
	notification.open({
		message: '使用小提示',
		description:
			'番茄时间结束后输入你刚才完成的事情',
		onClick: () => {
			console.log('Notification Clicked!');
		},
	});
}

class Home extends Component<any, IIndexState> {
	constructor(props: any) {
		super(props)
		this.state = {
			user: {},
			visible: false,
			timer: 25
		}
	}

	logout = () => {
		localStorage.setItem("x-token", "")
		this.props.history.push("/login")
	}

	public componentDidMount(): void {
		let count = Number(localStorage.getItem("count"))
		if (count === 1) {
			openNotification()
			openNotification1()
		}
	}

	async UNSAFE_componentWillMount() {
		await this.getMe()
		await this.getTodos()
		await this.getTomatoes()
	}

	getMe = async () => {
		const response = await axios.get("me")
		this.setState({ ...this.state, user: response.data })
	}
	getTodos = async () => {
		try {
			const response = await axios.get("todos")
			const todos = response.data.resources.map((t: any) => Object.assign({}, t, { editable: false }))
			this.props.initTodos(todos)
		} catch (e) {
			throw new Error(e)
		}
	}
	getTomatoes = async () => {
		try {
			const response = await axios.get("tomatoes")
			this.props.initTomatoes(response.data.resources)
		} catch (e) {
			throw new Error()
		}
	}

	handleOk = () => {
		this.setState({
			...this.state,
			visible: false,
		});
	}

	handleCancel = () => {
		this.setState({
			...this.state,
			visible: false,
		});
	}
	showModal = () => {
		this.setState({
			...this.state,
			visible: true,
		});
	}
	onInputValChange = (val: number | undefined) => {
		this.setState({
			...this.state,
			timer: val
		})
	}

	render(): React.ReactNode {
		const menu = (

			<Menu style={{ textAlign: "right" }}>
				<Menu.Item>
          <span onClick={() => {this.showModal()}}>
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
				<Modal
					title="设置一个番茄的时间"
					visible={this.state.visible}
					onOk={() => {this.handleOk()}}
					onCancel={() => {this.handleCancel()}}
				>
					<InputNumber min={1} max={100} defaultValue={25} onChange={(e) => {this.onInputValChange(e)}}/> min
				</Modal>
				<header>
          <span className="logo">
            <Tomato type={"i-Tomato"} className={"icon"}/>
          </span>
					<Dropdown overlay={menu}>
            <span
	            className="ant-dropdown-link"
	            onClick={e => e.preventDefault()}
	            style={{ color: "#1890ff", cursor: "pointer", fontSize: "1rem" }}
            >
              你好, {this.state.user?.account} <Icon type="down"/>
            </span>
					</Dropdown>
				</header>
				<main>
					<Tomatoes timer={this.state.timer}/>
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
