import React, {Component} from "react"
import {Button} from "antd"
import axios from "config/axios"

class TomatoAction extends Component {
  private static async startTomato() {
    try {
      const response = await axios.post("tomatoes", {duration: 25 * 60 * 1000})
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }
  
  render() {
    return (
      <div className={"TomatoAction"} id={"TomatoAction"}>
        <Button className={"startTomatoButton"} onClick={TomatoAction.startTomato}>开始番茄</Button>
      </div>
    )
  }
}

export default TomatoAction
