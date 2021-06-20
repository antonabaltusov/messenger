import "./index.css"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import {Chat, ProfilePage, Gists} from "./pages"
import { store, persistor } from "./store"

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Switch>
            <Route path="/chat" component={(props) => <Chat {...props} />} />
            <Route path="/profile" component={(props) => <ProfilePage {...props} />} />
            <Route path="/gists" component={(props) => <Gists {...props} />} />
            <Route path="*" component={() => <h1>404</h1>} />
          </Switch>
        </PersistGate>
      </Provider>
    </BrowserRouter>, 
document.getElementById("root"))