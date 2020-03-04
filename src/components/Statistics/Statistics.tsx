import React, {Component} from "react"
import {connect} from "react-redux"
import "./Statistics.scss"
import Polygon from "./Polygon"
import _ from "lodash"
import {format} from "date-fns"
import TodoHistory from "./TodoHistory"

interface IStatisticsProps {
  todos: ITodo[]
}

class Statistics extends Component<IStatisticsProps> {
  
  get finishedTodos() {
    return this.props.todos.filter(t => t.completed && !t.deleted)
  }
  
  get dailyTodos() {
    return _.groupBy(this.finishedTodos, (todo) => format(Date.parse(todo.updated_at), "yyyy-MM-dd"))
  }
  
  render() {
    return (
      <div className={"Statistics"} id={"Statistics"}>
        <ul>
          <li>统计</li>
          <li>目标</li>
          <li>番茄历史</li>
          <li>
            任务历史
            累计完成{this.finishedTodos.length}个任务
            <Polygon data={this.dailyTodos} totalFinishedCount={this.finishedTodos.length}/>
          </li>
        </ul>
        <TodoHistory/>
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    todos: state.todos,
    ...ownProps
  }
}
export default connect(mapStateToProps, null)(Statistics)
