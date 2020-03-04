import React, {Component} from "react"

interface IPolygonProps {
  data: any
  totalFinishedCount: number
}


class Polygon extends Component<IPolygonProps> {
  
  points = () => {
    const dates = Object.keys(this.props.data).sort((a, b) => Date.parse(a) - Date.parse(b))
    const firstDay = dates[0]
    if (firstDay) {
      const lastDay = dates[dates.length - 1]
      const range = Date.parse(lastDay) - Date.parse(firstDay)
      let finishedCount = 0
      const pointsArr = dates.map(date => {
        const x = (Date.parse(date) - Date.parse(firstDay)) / range * 240
        finishedCount += this.props.data[date].length
        const y = (1 - (finishedCount / this.props.totalFinishedCount)) * 60
        return `${x}, ${y}`
      })
      return ["0,60", ...pointsArr, "240,60"].join(" ")
    } else {
      return "0,60 0,60"
    }
  }
  
  render() {
    return (
      <div className={"Polygon"} id={"Polygon"}>
        <svg>
          <polygon fill="rgba(215,78,78,0.1)" stroke="rgba(215,78,78,0.5)" strokeWidth="1"
                   points={this.points()}/>
        </svg>
      </div>
    )
  }
}

export default Polygon
