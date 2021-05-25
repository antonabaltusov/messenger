import { ListItem } from '@material-ui/core';
import PropTypes from "prop-types"
import React from "react"

export class Chat extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        selected: PropTypes.bool
    }

    state = {
        title: "",
        selected: 0,
    }


    render() {
        const {title, selected, onClick} = this.props
        

       
        return <div onClick={onClick}><ListItem  selected={selected}  button={true}>{title}</ListItem></div>
    }
}
// 