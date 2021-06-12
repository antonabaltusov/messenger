import React from "react";

export class MessageProvider extends React.Component {
    state = {
        conversations: [
            {id:1, title:"room1", value: ""},
            {id:2, title:"room2", value: ""}
        ],
        messages:{
            room1:[{author:"User", message:"hi bot", date: new Date()},{author:"bot", message:"hi, i'm bot", date: new Date()}],
            room2: [{author:"User", message:"hi bot222", date: new Date()},{author:"bot", message:"hi, i'm bot2222", date: new Date()}]
        },
    }

    handleChangeValue = (event) => {
        const {target:{value},} = event
        const {match} = this.props
        const {params} = match// :roomId - передаем в роут

        this.setState({
            conversations: this.state.conversations.map(conversations => {
                if(params.roomId ===conversations.title) {
                    return {...conversations, value }
                }

                return conversations
            }),
        })
    }

    sendMessage = ({author, message}) => {
        if(!message) {
            return
        }
        const {messages, conversations} = this.state
        const {match} = this.props
        const {params} = match

        const newMessage = {author, message, date: new Date()}

        this.setState({
            messages: {
                ...messages,
                [params.roomId]: [...(messages[params.roomId] || []),newMessage],
            },
            conversations: conversations.map((conversation) =>
                conversation.title === params.roomId
                ? {
                    ...conversation,
                    value: "",
                    }
                : conversation,
            ),
        })
    }

    addNewChat = () => {
        const {messages, conversations} = this.state;
        const newRoom = "newChat"//скорее всего я думаю лучше весь функционал привязать в id который будет создаваться рандомно
        const newConversation = {title:newRoom, value: ""}
    
        this.setState({ 
            //...this.state,
            messages: {...messages,[newRoom]:[]},
            conversations: [...conversations,newConversation]            
        },
            ()=>{console.log(this.state)}
        )
    }

    componentDidUpdate(_, prevState) {
        const {
            match: { params },
          } = this.props

          if (!params.roomId) {
            return
          }

        const {messages} = this.state

        const currentMessages = messages[params.roomId]
        const prevMessages = prevState.messages[params.roomId]
        const lastMessage = currentMessages[currentMessages.length - 1]

        if(lastMessage?.author !== "bot" && currentMessages !== prevMessages){
            setTimeout(() =>{
                this.sendMessage({author: "bot", value: "пока, отстань, я бот"})
            },500)
        }
    }

    render() {
        console.log(this.state)
        const {children, match} = this.props
        const {params} = match

        const {conversations, messages} = this.state

        const state = {
            conversations,//их будет использовать chatlist
            allMessages: messages,
            messages: messages[params.roomId] || [],
            value: conversations.find(conversations => conversations.title === params.roomId)?.value || "", 
            addNewChat: this.addNewChat,
        }

        const action = {
            sendMessage: this.sendMessage,
            handleChangeValue: this.handleChangeValue,
            
        }

        return children([state, action])
    }
}