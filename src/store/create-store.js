import { combineReducers, createStore, compose } from "redux"
import { conversationsReducer } from "./conversations"
import { messagesReducer } from "./messages"
import { profileReducer } from "./profile"

export const store = createStore(
  combineReducers({
    messagesReducer,
    conversationsReducer,
    profileReducer,
  }),
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : () => {},
  ),
)
