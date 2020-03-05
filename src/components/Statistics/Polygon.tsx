import React, { Component } from "react"

interface IPolygonProps {
  data: any
  totalFinishedCount: number
}


class Polygon extends Component<IPolygonProps> {
  
  points = () => {
    const dates = Object.keys(this.props.data).sort((a, b) => Date.parse(a) - Date.parse(b))
    const firstDay = dates[0]
    if (firstDay) {
      const range = new Date().getTime() - Date.parse(firstDay)
      let finishedCount = 0
      let finishedY = null
      const pointsArr = dates.map(date => {
        const x = (Date.parse(date) - Date.parse(firstDay)) / range * 240
        finishedCount += this.props.data[date].length
        const y = (1 - (finishedCount / this.props.totalFinishedCount)) * 60
        finishedY = y
        return `${x}, ${y}`
      })
      return ["0,60", ...pointsArr, `240,${finishedY}`, `240, 60`].join(" ")
    } else {
      return "0,60 0,60"
    }
  }
  
  render() {
    return (
      <div className={"Polygon"} id={"Polygon"}>
        <svg>
          <polygon fill="rgba(24, 144, 255, 0.1)" stroke="rgba(24, 144, 255, 0.5)" strokeWidth="1"
                   points={this.points()}/>
        </svg>
      </div>
    )
  }
}

export default Polygon
