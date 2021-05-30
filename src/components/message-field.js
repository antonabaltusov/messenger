import React from "react"
import Message from "./message"

export default class MessageField extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            messages:[{author:"user", text:"hi bot"},{author:"bot", text:"hi, i'm bot"}]
        }
    }

    sendMessage = (author, text) =>{
        this.setState({messages:[...this.state.messages,{author, text}]})
    }

    handleClick = () => {
        this.sendMessage("user", "как дела")
    }

    componentDidUpdate(){
        console.log(this.state.messages[this.state.messages.length - 1].author === "user")
        if(this.state.messages[this.state.messages.length - 1].author === "user"){
            setTimeout(() =>
            this.sendMessage("bot", "нормально"),1000)
        }
    }

    render(){
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={ index } text={ text.text } author={ text.author } />));

            return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Отправить сообщение</button>
        </div>
    }
};

