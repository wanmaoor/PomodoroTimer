import React, {Component} from "react"
import {connect} from "react-redux"
import _ from "lodash"
import {format} from "date-fns"

interface ITodoHistoryProps {
  todos: ITodo[]
}

const TodoItem = (props: ITodo) => {
  return (
    <div>
      <span>{props.updated_at}</span>
      <span>{props.description}</span>
    </div>
  )
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
  
  get dates() {
    return Object.keys(this.dailyFinishedTodos)
  }
  
  render() {
    const todoList = this.dates.map(date => {
      return (
        <div key={date}>
          <div>
            {date}
            完成了{this.dailyFinishedTodos[date].length}个任务
          </div>
          <div>
            {
              this.dailyFinishedTodos[date].map(todo => <TodoItem key={todo.id} {...todo}/>)
            }
          </div>
        </div>
      )
    })
    return (
      <div className={"TodoHistory"} id={"TodoHistory"}>
        {todoList}
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

export default connect(mapStateToProps, null)(TodoHistory)
