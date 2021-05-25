import React from "react"
import styled from 'styled-components'
import {Chat} from "./chat"

const Chat_List = styled.div`
    width: 30%;
`;

export class ChatList extends React.Component {
    state = {
        chat: ["room1","room2","room3"],
        selectedIndex: 1,
    }

    handleListItemClick2 = () => {
        console.log(2)
    }
    
    handleListItemClick = (event, index) => {//не разобрался зачем тут event
        this.setState({
            selectedIndex: index
        })
        console.log(index)//для проверки 
    }

    render() {
        const{chat, selectedIndex}= this.state

        return <Chat_List>
            {chat.map((chat, index) => (
            <Chat 
            title={chat} 
            key={index}
            index = {index} 
            selected={selectedIndex === index}
            onClick={(event)=>this.handleListItemClick(event, index)}//не работает клик
            />
            ))}</Chat_List>
    }
}