import React from "react"
import "./index.css"
import {Route, Router} from "react-router-dom"
import Index from "./components/Index/Index"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import history from "./config/history"

function App() {
  return (
    <Router history={history}>
      <Route exact={true} path={"/"} component={Index}/>
      <Route path={"/login"} component={Login}/>
      <Route path={"/signup"} component={SignUp}/>
    </Router>
  )
}

export default App
