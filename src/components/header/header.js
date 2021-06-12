import { Button, withStyles } from '@material-ui/core'
import React from "react"
import styles from "./header.module.css"

const StyledButton = withStyles(() =>({
    root:{
        margin: '0 5px 0 5px'
    },
}))(Button)

export class Header extends React.Component {
    render(){
        return(
            <div className={styles.header}>
                <StyledButton href="/profile" variant="contained" color="primary">Профиль</StyledButton>
                <StyledButton variant="contained" color="primary">Новости</StyledButton>
                <StyledButton href="/chat" variant="contained" color="primary">Сообщения</StyledButton>
            </div>
        )
    }
}