import React, {FC, useEffect, useState} from "react"
import "./CountDown.scss"
import {TITLE} from "../../constants/Sign"

let timerId: number
const CountDownHook: FC<ICountDownProps> = (props) => {
  const [countDown, setCountDown] = useState(props.timer)
  const min = Math.floor(countDown / 1000 / 60)
  const sec = Math.floor(countDown / 1000 % 60)
  const time = `${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`
  useEffect(() => {
    document.title = `${time} - Pomodoro Timer`
    timerId = window.setInterval(() => {
      setCountDown(countDown - 1000)
    }, 1000)
    if (countDown < 0) {
      props.onFinish()
      clearInterval(timerId)
      document.title = TITLE
    }
    
    return () => {
      window.clearInterval(timerId)
    }
  })
  const percent = 1 - countDown / props.duration
  return (
    <div className={"CountDown"} id={"CountDown"}>
      <span className={"restTime"}>{min >= 0 || sec >= 0 ? time : `00 : 00`}</span>
      <div className="progress" style={{width: `${percent * 100}%`}}/>
    </div>
  )
}
export default CountDownHook
