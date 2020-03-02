import React, {Component} from "react"
import TomatoAction from "./TomatoAction"
import {connect} from "react-redux"
import "./Tomatoes.scss"
import {addTomato, initTomatoes} from "../../redux/actions/tomatoActions"


class Tomatoes extends Component {
  render() {
    return (
      <div className={"Tomatoes"} id={"Tomatoes"}>
        <TomatoAction/>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({tomatoes: state.tomatoes})
const mapDispatchToProps = {
  addTomato,
  initTomatoes
}

export default connect(mapStateToProps, mapDispatchToProps)(Tomatoes)
