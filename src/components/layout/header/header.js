import { Button, withStyles } from '@material-ui/core'
import React from "react"
import styled from 'styled-components'

const Header_div = styled.div`
    display: flex;
    justify-content: flex-start;
    padding:10px;
`
const StyledButton = withStyles(() =>({
    root:{
        margin: '0 5px 0 5px'
    },
}))(Button)

export class Header extends React.Component {
    render(){
        return(
            <Header_div>
                <StyledButton variant="contained" color="primary">Главная</StyledButton>
                <StyledButton variant="contained" color="primary">Новости</StyledButton>
                <StyledButton variant="contained" color="primary">Сообщения</StyledButton>
            </Header_div>
        )
    }
}