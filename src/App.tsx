import React from "react"
import "./App.scss"
import {HashRouter as Router, Route} from "react-router-dom"
import Index from "./components/Index/Index"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"

function App() {
  return (
    <Router>
      <Route exact={true} path={"/"} component={Index}/>
      <Route path={"/login"} component={Login}/>
      <Route path={"/signup"} component={SignUp}/>
    </Router>
  )
}

export default App
