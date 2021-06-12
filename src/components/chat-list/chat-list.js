import { List, Button} from "@material-ui/core"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import {Chat} from "./chat"


export class ChatList extends Component {

    render() {
        const {
            conversations,
            allMessages,
            match: { params },
            addNewChat
          } = this.props
      
          const chatId = params.roomId

        return (
          <>
            <Button variant="contained" color="primary" onClick={addNewChat}>новая беседа</Button>
            <List component="nav">
              {conversations.map((chat) => {
                const currentMessage = allMessages[chat.title]
      
                return (
                  console.log(currentMessage),
                  <Link key={chat.title} to={`/chat/${chat.title}`}>
                    <Chat
                      selected={chat.title === chatId}
                      chat={chat}
                      lastMessage={currentMessage[currentMessage.length - 1]}
                    />
                  </Link>
                )
              })}
            </List>
          </>
        )
    }
}