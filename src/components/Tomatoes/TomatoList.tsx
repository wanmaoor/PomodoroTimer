import React, {Component} from "react"
import {format} from "date-fns"

interface ITomatoListProps {
  finishedTomatoes: any
}

const TomatoItem = function (props: ITomato) {
  return (
    <div className={"TomatoItem"}>
      <span>{format(Date.parse(props.started_at), "H:mm")} - {format(Date.parse(props.ended_at), "H:mm")}</span>
      <span>{props.description}</span>
    </div>
  )
}

class TomatoList extends Component<ITomatoListProps> {
  get dates() {
    let dates = Object.keys(this.props.finishedTomatoes)
    return dates.sort((a, b) => Date.parse(a) - Date.parse(b))
  }
  
  render() {
    const list = this.dates.map(d => {
      const tomatoes: ITomato[] = this.props.finishedTomatoes[d]
      return (
        <div key={d}>
          <div className="title">
            <span>{d}</span>
            <span>完成了{tomatoes.length}个番茄</span>
          </div>
          {
            tomatoes.map(t => <TomatoItem key={t.id} {...t}/>)
          }
        </div>
      )
    })
    return (
      <div className={"TomatoList"} id={"TomatoList"}>{list}</div>
    )
  }
}

export default TomatoList
