import { List, Button} from "@material-ui/core"
import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {Chat} from "./chat"


export class ChatListView extends Component {



    render() {
        const {
            conversations,
            match,
            messages
          } = this.props
      
          const {id} = match.params

        return (
          <>
            <List component="nav">
              {conversations.map((chat) => {
                const msg = messages[chat.title] || []

                return (
                  <Link key={chat.title} to={`/chat/${chat.title}`}>
                    <Chat
                      selected={chat.title === id}
                      chat={chat}
                      lastMessage={msg[msg.length - 1]}
                    />
                  </Link>
                )
              })}
            </List>
            {/* <Button variant="contained" fullWidth={true} color="primary" onClick={addNewChat}>новая беседа</Button> */}
          </>
        )
    }
}

const mapStateToProps = (state) => ({
  conversations: state.conversationsReducer,
  messages: state.messagesReducer,
})

export const ChatList = connect(mapStateToProps, null)(ChatListView)