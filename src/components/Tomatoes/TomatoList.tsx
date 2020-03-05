import { Icon, Spin } from "antd"
import { format } from "date-fns"
import React, { Component } from "react"
import "./TomatoList.scss"

interface ITomatoListProps {
  finishedTomatoes: any
}

interface ITomatoListState {
  spinning: boolean
}

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin/>;

const TomatoItem = function (props: ITomato) {
  return (
    <div className={"TomatoItem"}>
      <span
        className={"timeRange"}>
        {format(Date.parse(props.started_at), "H:mm")} - {format(Date.parse(props.ended_at), "H:mm")}
      </span>
      <span className={"description"}>{props.description}</span>
    </div>
  )
}

class TomatoList extends Component<ITomatoListProps, ITomatoListState> {
  constructor(props: ITomatoListProps) {
    super(props);
    this.state = {
      spinning: true
    }
  }

  get dates() {
    let dates = Object.keys(this.props.finishedTomatoes)
    return dates.sort((a, b) => Date.parse(b) - Date.parse(a)).splice(0, 3)
  }

  public componentDidMount(): void {
    this.setState({ spinning: false })
  }

  render() {
    const list = this.dates.map(d => {
      const tomatoes = this.props.finishedTomatoes[d]
      return (
        <div key={d} className={"dailyTomatoes"}>
          <div className="title">
            <span className={"dateTime"}>{format(Date.parse(d), "M月dd日")}</span>
            <span className={"finishCount"}>完成了{tomatoes.length}个番茄</span>
          </div>
          {
            tomatoes.map((t: JSX.IntrinsicAttributes & ITomato) => <TomatoItem key={t.id} {...t}/>)
          }
        </div>
      )
    })
    return (
      <div className={"TomatoList"} id={"TomatoList"}>
        <Spin indicator={antIcon} spinning={this.state.spinning}/>
        {list}
      </div>
    )
  }
}

export default TomatoList
