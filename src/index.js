import "./index.css"
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Chat, Profile} from "./pages"

ReactDOM.render(
    <BrowserRouter>
        <Switch>
        <Route path="/chat" component={(props) => <Chat {...props} />} />
        <Route path="/profile" component={(props) => <Profile {...props} />} />
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>, 
document.getElementById("root"))