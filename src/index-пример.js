import PropTypes from 'prop-types'
import React, {createRef, useState} from "react"
import ReactDOM from "react-dom"




class Example extends React.Component {

  static propTypes = {
    age: PropTypes.number.isRequired,
  }

  constructor(props){
    super(props)
    console.log("constructor")

    this.state = {
      counter:0,
      messages:[],
    }

    this.ref = createRef()
    this.timerId = null
  }

  foo = () => {
    console.log("click")
    this.setState(() =>({messages: [...this.state.messages, "test"]}),
    () => {console.log(this.state)},
    )
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("componentDidMount", ) 
    // this.ref.current.focus()
    //document.addEventListener("click", this.foo)

    // this.timerId = setInterval(()=>{
    //   this.setState({counter: this.state.counter + 1})
    // },(1000));


  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate")
    return {age: 12}
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate", snapshot)
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
    document.removeEventListener("click", this.foo)
    clearInterval(this.timerId )
  }

  render() {

    console.log("render")
    return (
      <div>
        <h1 onClick={this.foo}>Example {this.state.counter}</h1>
        <input ref={this.ref}/>
      </div>
      )
  }
}

const Test = () => {
  const [isVisible, setState] = useState(true)

  return (
    <div>
      <button onClick={() => setState(!isVisible)}>set state</button>
      {isVisible ?<Example age={2}/> : null}
    </div>
  )
}

// class ErrorBoundary extends Component {

//   static getDerivedStateFromError() {
//     return { hasError: true}
//   }

//   constructor(props) {
//     super(props)
//     this.state = {
//       hasError: false,
//     }
//   }

//   componentDidCatch(error, info) {
//     console.error({error, info})
//   }

//   render(){
//     if(this.state.hasError) {
//       return <h1>Произошла ошибка</h1>
//     }
//     return this.props.children
//   }
// }

ReactDOM.render(<><Test/></>, document.getElementById("root"))


// const messages = ["test1"]

// const sendMessage = () => {
//   messages.push("Нормально!")
//   render()
// }

// const Message = ({ message }) => {
//   return (
//     <React.Fragment>
//       <h1>{message}</h1>
//       <p>&quot;qwd&quot;</p>
//     </React.Fragment>
//   )
// }

// const MessageField = ({ messages }) => {
//   return (
//     <>
//       <button onClick={sendMessage}>send</button>
//       {messages.map((message, index) => (
//         <Message message={message} key={index} isVisible={true} />
//       ))}
//     </>
//   )
// }