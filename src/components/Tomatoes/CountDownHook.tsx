import React, {FC, useEffect, useState} from "react"

let timerId: number
const CountDownHook: FC<{ timer: number, onFinish: () => void }> = (props) => {
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
      document.title = "番茄工作法 - Pomodoro Timer"
    }
    
    return () => {
      window.clearInterval(timerId)
    }
  })
  return (
    <div className={"CountDown"} id={"CountDown"}>
      {min >= 0 || sec >= 0 ? time : `00 : 00`}
    </div>
  )
}
export default CountDownHook
