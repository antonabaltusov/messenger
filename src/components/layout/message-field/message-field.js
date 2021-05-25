import { Input, InputAdornment, withStyles } from '@material-ui/core';
import {Send} from '@material-ui/icons';
import React from "react"
import styled from 'styled-components'
import {Message} from "./message"
import styles from "./message-field.module.css"

const Message_field = styled.div`
    display: flex;
    flex-direction: column;
    aling-self: center;
    height: 50vh;
    width: 70%;
    padding: 15px;
    
`;

const Message_list = styled.div`
margin-top: auto;
    overflow:y;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #e2e2e2;
    min-height: 100%;
    width: 100%;
    
`;

const StyledInput = withStyles(() =>({
    root:{
        "&":{
            color: "#9a9fa1",
            padding: "10px 15px",
            fontSize: "15px",
        },
    },
}))(Input)

export class MessageField extends React.Component {
    state = {
        messages:[{author:"user", value:"hi bot"},{author:"bot", value:"hi, i'm bot"}],
        value:"",
    }
    

    sendMessage = ({author, value}) =>{
        const {messages} = this.state

        this.setState({
            messages:[...messages,{author, value}],
            value: ""
        })
    }

    handleChangeInput = ({target}) => {
        this.setState({
            value: target.value,
        })
    }

    handlePressInput = ({code}) => {
        const {value} = this.state


        if(code==="Enter" && value){
            this.sendMessage({author:"user", value })
        }
    }

    componentDidUpdate(_, state){
        const {messages} = this.state

        const lastMessage = messages[messages.length - 1]

        if(lastMessage.author === "user" && state.messages !== messages){
            setTimeout(() =>
            this.sendMessage({author: "bot", value: "пока, отстань, я бот"}),500)
        }
    }

    render(){
        const {messages, value} = this.state

        return (
            <Message_field>
                <Message_list>
                { messages.map((message, index) => (
                <Message key={ index } message={message} />)) }
                </Message_list>
                <StyledInput 
                    value = {value}
                    onChange={this.handleChangeInput}  
                    onKeyPress={this.handlePressInput}
                    placeholder="введите сообщение..." 
                    fullWidth={true} 
                    endAdornment={
                    <InputAdornment position="end">
                        {value && <Send 
                        onClick={() => this.sendMessage({author:"user", value }) } 
                        className={styles.icon}/>}
                    </InputAdornment>}/>
            </Message_field>
        )
    }
};

  