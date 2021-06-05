import { Checkbox } from '@material-ui/core'
import React, {Component} from "react"
import { connect } from "react-redux"
import { changeStatus } from "../../store"
//import styles from "./profile.module.css"



export class ProfileView extends Component {

    handleChangeStatus = (event) => {
       changeStatus(event.target.checked)
    }
    
    render(){
        const {status, name} = this.props

        return (
            <>
                <h1>Profile</h1>
                <h2>{name}</h2>
                <Checkbox checked={status} onChange={this.handleChangeStatus}/>
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
})
  
export const Profile = connect(
    mapStateToProps,
    mapDispachToProps,
)(ProfileView)