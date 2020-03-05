import { format } from "date-fns"
import _ from "lodash"
import React, { Component } from "react"
import { connect } from "react-redux"
import { addTomato, updateTomato } from "redux/actions/tomatoActions"
import axios from "../../config/axios"
import TomatoAction from "./TomatoAction"
import "./Tomatoes.scss"
import TomatoList from "./TomatoList"


class Tomatoes extends Component<ITomatoesProps> {

  get unfinishedTomato() {
    return this.props.tomatoes.filter(t => !t.description && !t.ended_at && !t.aborted)[0]
  }

  get finishedTomatoes() {
    const finishedTomatoes = this.props.tomatoes.filter(t => t.description && t.ended_at && !t.aborted)
    return _.groupBy(finishedTomatoes, (tomato) => format(Date.parse(tomato.started_at), "yyyy-MM-dd"))
  }

  public componentDidMount(): void {
    this.setState({ spinning: false })
  }

  render() {
    return (
      <div className={"Tomatoes"} id={"Tomatoes"}>
        <TomatoAction
          startTomato={() => {this.startTomato(this.props.timer)}}
          updateTomato={this.props.updateTomato}
          unfinishedTomato={this.unfinishedTomato}
        />
        <TomatoList finishedTomatoes={this.finishedTomatoes}/>
      </div>
    )
  }

  private startTomato = async (timer: number) => {
    try {
      const response = await axios.post("tomatoes", { duration: timer * 60 * 1000 })
      this.props.addTomato(response.data.resource)
    } catch (e) {
      throw new Error(e)
    }
  }
}

const mapStateToProps = (state: any, props: any) => ({ tomatoes: state.tomatoes, ...props })
const mapDispatchToProps = {
  addTomato,
  updateTomato
}

export default connect(mapStateToProps, mapDispatchToProps)(Tomatoes)
