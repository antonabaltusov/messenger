import React, {Component} from "react"
import { connect } from "react-redux"
import { changeStatus, changeName } from "../../store"
//import styles from "./profile.module.css"



export class ProfileView extends Component {
    state= {value: ""}
    

    handleChangeStatus = (event) => {
       this.props.changeStatus(event.target.checked)
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleChangeName = () => {
        this.props.changeName(this.state.value);
        this.setState({value: ""});
    }

    render(){
        const {status, name} = this.props

        return (
            <>
                <h1>Profile</h1>
                <input 
                type="checkbox"
                checked={status}
                value={status}
                onChange={this.handleChangeStatus}
                />
                <span>Show Name</span>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleChangeName}>Change Name</button>
                {status && <h2>{name}</h2>}
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
      status: state.profileReducer.status,
      name: state.profileReducer.name,
    }
} 

const mapDispachToProps = (dispatch) => ({
    changeStatus: (bool) => dispatch(changeStatus(bool)),
    changeName: (name) => dispatch(changeName(name)),
})
  
export const Profile = connect(
    mapStateToProps,
    mapDispachToProps,
)(ProfileView)