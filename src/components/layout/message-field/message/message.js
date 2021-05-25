import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Message_div = styled.div`
    background-color: lightblue;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 18px;
    margin: 5px;
    align-self:${(props) => (props.author === "bot" ?  "flex-start" : "flex-end")};
`
const Message_sender = styled.div`
    color: gray;
    font-size: 14px;
`


export class Message extends React.Component {
    static propTypes = {
        message: PropTypes.shape({
            author: PropTypes.string,
            value: PropTypes.string
        })

    }
 
    render() {
        const {author, value} = this.props.message

        return (
        <Message_div author ={author}>
            <div>{ value }</div>
            <Message_sender>{ author }</Message_sender>
        </Message_div>
        )
    }
 }

 