import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import {
  Layout,
  Header,
  ChatList,
  MessageField,
  MessagesNotFound,
  MessageProvider,
} from "../components"

export class Profile extends Component{
    render(){
        return(
            <>
                <Header/>
                <h1>Profil</h1>
            </>
        )
    }
}