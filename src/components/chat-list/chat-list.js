import { List, Button, Dialog, DialogTitle, TextField} from "@material-ui/core"
import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { addChat } from "../../store"
import {Chat} from "./chat"


export class ChatListView extends Component {

  state= {
    visible: false,
    newChatName: "",
  }

  handleOpen = () => {
    this.setState({visible:true})
  }

  handleClose = () => {
    this.setState({visible:false})
  }

  handleChange = (e) =>{
    this.setState({newChatName: e.target.value})
  }

  onAddChat = () => {
    const tittle  =this.state.newChatName;
    const id  = String(+new Date());
    this.props.addChat({tittle, id});
    this.setState({newChatName: ""});
    this.handleClose();
  };


    render() {
        const {
            conversations,
            match,
            messages
          } = this.props
      
          const {id} = match.params
          console.log(match);

        return (
          <>
            <List component="nav">
              {conversations.map((chat) => {
                const msg = messages[chat.id] || []

                return (
                  <Link key={chat.id} to={`/chat/${chat.id}`}>
                    <Chat
                      selected={chat.id === id}
                      chat={chat}
                      lastMessage={msg[msg.length - 1]}
                    />
                  </Link>
                )
              })}
            </List>
            <Button variant="contained" fullWidth={true} color="primary" onClick={this.handleOpen}>новая беседа</Button>
            <Dialog open={this.state.visible} onClose={this.handleClose}>
              <DialogTitle>Please enter a name for new chat</DialogTitle>
              <TextField value={this.state.newChatName} onChange={this.handleChange} />
              <Button onClick={this.onAddChat} disabled={!this.state.newChatName}>
                Submit
              </Button>
            </Dialog>

          </>
        )
    }
}

const mapStateToProps = (state) => ({
  conversations: state.conversationsReducer,
  messages: state.messagesReducer,
})

const mapDispachToProps = (dispatch) => ({
  addChat: (name) => dispatch(addChat(name)),
})

export const ChatList = connect(mapStateToProps, mapDispachToProps)(ChatListView)