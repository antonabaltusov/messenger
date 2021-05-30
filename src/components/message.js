import React from "react"

export default class Message extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
 
    render() {
        return <div>
            <h2>{ this.props.author }</h2>
            <h1>{ this.props.text }</h1>
        </div>
    }
 }

 