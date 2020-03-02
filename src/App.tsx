import React from "react"
import "./index.css"
import {Route, Router} from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import history from "./config/history"

function App() {
  return (
    <Router history={history}>
      <Route exact={true} path={"/"} component={Home}/>
      <Route path={"/login"} component={Login}/>
      <Route path={"/signup"} component={SignUp}/>
    </Router>
  )
}

export default App
