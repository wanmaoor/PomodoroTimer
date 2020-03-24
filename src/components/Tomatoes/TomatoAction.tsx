import {Button, Icon, Input, Modal} from "antd"
import axios from "config/axios"
import {TITLE} from "constants/Sign"
import React, {Component} from "react"
import CountDown from "./CountDownHook"
import "./TomatoAction.scss"

const {confirm} = Modal

class TomatoAction extends Component<ITomatoActionProps, ITomatoActionState> {
  constructor(props: ITomatoActionProps) {
    super(props)
    this.state = {
      description: ""
    }
  }
  
  render() {
    let showcase = <div/>
    if (this.props.unfinishedTomato === undefined) {
      showcase = <Button type={"primary"} block
                         onClick={() => {this.props.startTomato()}}>开始番茄</Button>
    } else {
      const started_at = Date.parse(this.props.unfinishedTomato?.started_at)
      const duration = this.props.unfinishedTomato?.duration
      const now = new Date().getTime()
      if (now - started_at > duration) {
        showcase = <div className={"inputWrapper"}>
          <Input
            placeholder={"请输入你刚才完成的任务"}
            value={this.state.description}
            onChange={e => {this.setState({description: e.target.value})}}
            onKeyUp={e => {this.handleKeyUp(e.key)}}
          />
          <Icon type={"close-circle"} className={"abort"} onClick={() => {this.abortTomato()}}/>
        </div>
      } else if (now - started_at < duration) {
        const timer = duration - now + started_at
        showcase = (
          <div className={"countDownWrapper"}>
            <CountDown timer={timer} onFinish={this.onFinish} duration={duration}/>
            <Icon type={"close-circle"} className={"abort"} onClick={this.showConfirm}/>
          </div>
        )
      }
    }
    
    return (
      <div className={"TomatoAction"} id={"TomatoAction"}>
        {showcase}
      </div>
    )
  }
  
  onFinish = () => {
    this.forceUpdate()
  }
  
  abortTomato = () => {
    this.updateTomato({aborted: true}).then(() => {document.title = TITLE})
  }
  
  updateTomato = async (params: any) => {
    try {
      const response = await axios.put(`tomatoes/${this.props.unfinishedTomato?.id}`, params)
      this.props.updateTomato(response.data.resource)
    } catch (e) {
      throw new Error(e)
    }
  }
  
  private handleKeyUp = async (key: string) => {
    if (key === "Enter" && this.state.description !== "") {
      await this.updateTomato({description: this.state.description, ended_at: new Date()})
      await this.setState({description: ""})
    }
  }
  
  private showConfirm = () => {
    confirm({
      title: "确认丢弃这个番茄?",
      onOk: () => {
        this.abortTomato()
      },
      onCancel() {},
      cancelText: "取消",
      okText: "确定"
    })
  }
}

export default TomatoAction
