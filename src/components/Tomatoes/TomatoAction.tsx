import React, {Component} from "react"
import {Button} from "antd"

class TomatoAction extends Component<ITomatoActionProps> {
  render() {
    return (
      <div className={"TomatoAction"} id={"TomatoAction"}>
        <Button className={"startTomatoButton"} onClick={() => {this.props.startTomato()}}>开始番茄</Button>
      </div>
    )
  }
}

export default TomatoAction
