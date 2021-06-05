import { Input, InputAdornment, withStyles } from '@material-ui/core';
import {Send} from '@material-ui/icons';
//import classnames from "classnames"
import React, {Component, createRef} from "react"
import { connect } from "react-redux"
import { sendMessage, changeValue } from "../../store"
import {Message} from "./message"
import styles from "./message-field.module.css"
import { MessagesNotFound } from "./messages-not-found"

const StyledInput = withStyles(() =>({
    root:{
        "&":{
            color: "#9a9fa1",
            padding: "10px 15px",
            fontSize: "15px",
        },
    },
}))(Input)

export class MessageFieldView extends Component {
    ref = createRef()

    handleChangeInput = (event) => {
        console.log(1)
        const { changeValue, match } = this.props
        const { id } = match.params

        changeValue(id, event?.target.value || "")
    }

    handlePressInput = ({code}) => {
        if (code === "Enter") {
            this.handleSendMessage()
          }
    }
    
    handleSendMessage = () => {
        const { sendMessage, value, match } = this.props
        const { id } = match.params

        sendMessage({ author: "User", message: value, room: id })

        this.handleChangeInput()
    }

    

    handleScrollBottom = () => {
        if (this.ref.current) {
          this.ref.current.scrollTo(0, this.ref.current.scrollHeight)
        }
      }
    
    componentDidUpdate() {
        this.handleScrollBottom()
    }

    render(){
        const {messages, value} = this.props

        return (
            <>
                <div ref={this.ref}>
                    {!messages.length ? (
                        <MessagesNotFound />
                    ) : (
                        messages.map((message, index) => (
                            <Message message={message} key={index} />
                        ))
                    )}
                </div>

                <StyledInput 
                    value = {value}
                    onChange={this.handleChangeInput}  
                    onKeyPress={this.handlePressInput}
                    placeholder="введите сообщение..." 
                    fullWidth={true} 
                    endAdornment={
                        value && (
                            <InputAdornment position="end">
                                <Send 
                                onClick={this.handleSendMessage} 
                                className={styles.icon}
                                />
                            </InputAdornment>
                        )
                    }
                />
            </>
        )
    }
};

const mapStateToProps = (state, props) => {
    const { id } = props.match.params
  
    return {
      messages: state.messagesReducer[id] || [],
      value:
        state.conversationsReducer.find(
          (conversation) => conversation.title === id,
        )?.value || "",
    }
} 

const mapDispachToProps = (dispatch) => ({
    sendMessage: (params) => dispatch(sendMessage(params)),
    changeValue: (id, value) => dispatch(changeValue(id, value)),
})
  
export const MessageField = connect(
    mapStateToProps,
    mapDispachToProps,
)(MessageFieldView)