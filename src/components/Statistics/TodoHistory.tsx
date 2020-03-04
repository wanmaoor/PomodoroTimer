import React, {Component} from "react"
import {connect} from "react-redux"
import _ from "lodash"
import {format} from "date-fns"
import {Tabs} from "antd"
import TodoHistoryItem from "./TodoHistoryItem"
import "./TodoHistory.scss"

const {TabPane} = Tabs

interface ITodoHistoryProps {
  todos: ITodo[]
}


class TodoHistory extends Component<ITodoHistoryProps> {
  get finishedTodos() {
    return this.props.todos.filter(t => t.completed && !t.deleted)
  }
  
  get deletedTodos() {
    return this.props.todos.filter(t => t.deleted)
  }
  
  
  get dailyFinishedTodos() {
    return _.groupBy(this.finishedTodos, (todo) => format(Date.parse(todo.updated_at), "yyyy-MM-dd"))
  }
  
  get dailyDeletedTodos() {
    return _.groupBy(this.deletedTodos, (todo) => format(Date.parse(todo.updated_at), "yyyy-MM-dd"))
  }
  
  get finishedDates() {
    return Object.keys(this.dailyFinishedTodos)
  }
  
  render() {
    const finishedTodoList = this.finishedDates.map(date => {
      return (
        <div key={date} className={"dailyTodos"}>
          <div className={"summary"}>
            <p className="date">
              <span>{date}</span>
              <span>周五</span>
            </p>
            <p className={"finishedCount"}>完成了{this.dailyFinishedTodos[date].length}个任务</p>
          </div>
          <div className={"todoList"}>
            {
              this.dailyFinishedTodos[date].map(todo => <TodoHistoryItem key={todo.id} {...todo}
                                                                         itemType={"finished"}/>)
            }
          </div>
        </div>
      )
    })
  
    const deletedTodoList = this.deletedTodos.map(todo => <TodoHistoryItem key={todo.id} {...todo}
                                                                           itemType={"deleted"}/>)
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="已完成任务" key="1">
          <div className={"TodoHistory"} id={"TodoHistory"}>
            {finishedTodoList}
          </div>
        </TabPane>
        <TabPane tab="已删除任务" key="2">
          <div className={"TodoHistory"} id={"TodoHistory"}>
            {deletedTodoList}
          </div>
        </TabPane>
      </Tabs>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    todos: state.todos,
    ...ownProps
  }
}

export default connect(mapStateToProps, null)(TodoHistory)
