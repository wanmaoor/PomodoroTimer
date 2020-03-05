import { BackTop } from "antd"
import React from "react"
import { Route, Router } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import history from "./config/history"
import "./index.css"

function App() {
  return (
    <Router history={history}>
      <BackTop/>
      <Route exact={true} path={"/"} component={Home}/>
      <Route path={"/login"} component={Login}/>
      <Route path={"/signup"} component={SignUp}/>
    </Router>
  )
}

export default App
