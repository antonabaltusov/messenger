import React from "react"
import { Link } from "react-router-dom"
import styles from "./header.module.css"

export class Header extends React.Component {
    render(){
        return(
            <div className={styles.header}>
                <Link className={styles.link} to={"/profile"} >Профиль</Link>
                <Link className={styles.link} to={"/gists"}>Gists</Link>
                <Link className={styles.link} to={"/chat"} >Сообщения</Link>
            </div>
        )
    }
}