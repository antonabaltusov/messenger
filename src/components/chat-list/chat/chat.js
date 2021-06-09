import { 
    ListItem ,
    ListItemIcon,
    ListItemText,
    withStyles,
    Button
} from '@material-ui/core'
import { AccountCircle } from "@material-ui/icons"
import { format } from "date-fns"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { connect } from "react-redux"
import { deleteChat, deleteMessages } from "../../../store"
import styles from "./chat.module.css"


const StyledListItem = withStyles(() => ({
    root: {
      "&.Mui-selected": {
        backgroundColor: "#2b5278",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#2b5278",
      },
    },
  }))(ListItem)

  const StyledButton = withStyles(() => ({
    root: {
      "&.Mui-selected": {
        backgroundColor: "#2b5278",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#2b5278",
      },
    },
  }))(Button)

export class ChatView extends Component {
    static propTypes = {
        selected: PropTypes.bool.isRequired,
    }

    handleDeleteChat = () =>{
      const {chat} = this.props
      const { title } = chat
      this.props.deleteChat(title)
      this.props.deleteMessages(title)
    }

    render() {
      const { handleListItemClick, selected, chat, lastMessage } = this.props
      const { title } = chat
      const time = lastMessage?.date ? format(lastMessage.date, "HH:mm:ss") : null
      //console.log(selected)
        

       
        return (
          <>
          <StyledListItem
            button={true}
            selected={selected}
            onClick={handleListItemClick}
          >
            <ListItemIcon>
              <AccountCircle fontSize="large" className={styles.icon} />
            </ListItemIcon>
            <div className={styles.description}>
              <ListItemText className={styles.text} primary={title} />
              {lastMessage ? (
                <ListItemText
                  className={styles.text}
                  primary={`${lastMessage.author}: ${lastMessage.message}`}
                />
              ) : (
                <ListItemText className={styles.text} primary="Нет сообщений" />
              )}
              <ListItemText className={styles.text} primary={time} />
            </div>
          </StyledListItem>
          <StyledButton color={'primary'} className={styles.button} onClick={this.handleDeleteChat}>Delete</StyledButton>
          </>
        )
    }
}


const mapDispachToProps = (dispatch) => ({
  deleteChat: (tittle) => dispatch(deleteChat(tittle)),
  deleteMessages: (tittle) => dispatch(deleteMessages(tittle)),
})

export const Chat = connect(null, mapDispachToProps)(ChatView)
// 