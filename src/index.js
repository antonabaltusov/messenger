import React from "react"
import ReactDOM from "react-dom"

const messages = ["test1"]

const sendMessage = () => {
  messages.push("Нормально!")
  render()
}

const Message = ({ message }) => {
  return (
    <React.Fragment>
      <h1>{message}</h1>
      <p>&quot;qwd&quot;</p>
    </React.Fragment>
  )
}

const MessageField = ({ messages }) => {
  return (
    <>
      <button onClick={sendMessage}>send</button>
      {messages.map((message, index) => (
        <Message message={message} key={index} isVisible={true} />
      ))}
    </>
  )
}

const render = () => {
  ReactDOM.render(
    <MessageField messages={messages} />,
    document.getElementById("root"),
  )
}
render()

