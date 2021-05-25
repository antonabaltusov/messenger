import React from "react"
import styled from 'styled-components'
import {Header} from "./header"


const Layout_div = styled.div`
    display: flex;
    flex-direction: column;
`

const Main = styled.div`
    display: flex;
`

export const Layout = ({chatList, messageField}) => {
    return (
        <Layout_div>
            <Header/>
            <Main>
                {chatList}
                {messageField}
            </Main>
        </Layout_div>
    )
}
