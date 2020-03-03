import React, {Component} from "react"

interface ICountDownProps {
  timer: number
  onFinish: () => void
}

interface ICountDownState {
  countDown: number
}


class CountDown extends Component<ICountDownProps, ICountDownState> {
  private timerId!: number
  
  constructor(props: ICountDownProps) {
    super(props)
    this.state = {
      countDown: this.props.timer
    }
  }
  
  render() {
    const min = Math.floor(this.state.countDown / 1000 / 60)
    const sec = Math.floor(this.state.countDown / 1000 % 60)
    const time = `${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`
    return (
      <div className={"CountDown"} id={"CountDown"}>
        {min >= 0 || sec >= 0 ? time : `00 : 00`}
      </div>
    )
  }
  
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({countDown: this.state.countDown - 1000})
      if (this.state.countDown < 0) {
        this.props.onFinish()
        window.clearInterval(this.timerId)
      }
    }, 1000)
  }
  
  componentWillUnmount(): void {
    clearInterval(this.timerId)
  }
}

export default CountDown
