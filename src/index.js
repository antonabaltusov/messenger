
import React from "react"
import ReactDOM from "react-dom"
// import styled from 'styled-components'
import {Layout, ChatList, MessageField} from "./components"

const App = () => {
    return (
        <Layout chatList={<ChatList/>} messageField={<MessageField/>}/>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))