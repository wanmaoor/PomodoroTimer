import React, {Component} from "react"
import TomatoAction from "./TomatoAction"
import {connect} from "react-redux"
import "./Tomatoes.scss"
import {addTomato, initTomatoes} from "../../redux/actions/tomatoActions"
import axios from "../../config/axios"


class Tomatoes extends Component<ITomatoesProps> {
  get unfinishedTomato() {
    return this.props.tomatoes.filter(t => !t.description && !t.ended_at)
  }
  
  getTomatoes = async () => {
    try {
      const response = await axios.get("tomatoes")
      console.log(response)
    } catch (e) {
      throw new Error()
    }
  }
  
  componentDidMount(): void {
    this.getTomatoes()
  }
  
  render() {
    return (
      <div className={"Tomatoes"} id={"Tomatoes"}>
        <TomatoAction
          startTomato={this.startTomato}
          unfinishedTomato={this.unfinishedTomato}
        />
      </div>
    )
  }
  
  private startTomato = async () => {
    try {
      const response = await axios.post("tomatoes", {duration: 25 * 60 * 1000})
      this.props.addTomato(response.data.resource)
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }
}

const mapStateToProps = (state: any, props: any) => ({tomatoes: state.tomatoes, ...props})
const mapDispatchToProps = {
  addTomato,
  initTomatoes
}

export default connect(mapStateToProps, mapDispatchToProps)(Tomatoes)
