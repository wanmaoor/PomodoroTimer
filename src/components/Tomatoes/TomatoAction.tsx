import React, {Component} from "react"
import {Button, Icon, Input} from "antd"
import axios from "config/axios"
import CountDown from "./CountDownHook"

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
      showcase = <Button className={"startTomatoButton"} onClick={() => {this.props.startTomato()}}>开始番茄</Button>
    } else {
      const started_at = Date.parse(this.props.unfinishedTomato?.started_at)
      const duration = this.props.unfinishedTomato?.duration
      const now = new Date().getTime()
      if (now - started_at > duration) {
        showcase = <div>
          <Input
            placeholder={"请输入你刚才完成的任务"}
            value={this.state.description}
            onChange={e => {this.setState({description: e.target.value})}}
            onKeyUp={e => {this.handleKeyUp(e.key)}}
          />
          <Icon type={"close-circle"}/>
        </div>
      } else if (now - started_at < duration) {
        const timer = duration - now + started_at
        showcase = <CountDown timer={timer} onFinish={this.onFinish}/>
      }
    }
    
    return (
      <div className={"TomatoAction"} id={"TomatoAction"}>
        {showcase}
      </div>
    )
  }
  
  onFinish = () => {
    this.render()
  }
  
  private handleKeyUp = (key: string) => {
    if (key === "Enter" && this.state.description !== "") {
      this.addDescription().then(() => {this.setState({description: ""})})
    }
  }
  
  private addDescription = async () => {
    try {
      const response = await axios.put(`tomatoes/${this.props.unfinishedTomato?.id}`,
        {description: this.state.description, ended_at: new Date()})
      this.props.updateTomato(response.data.resource)
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default TomatoAction
