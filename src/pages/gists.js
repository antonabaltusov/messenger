import React, { Component } from "react"
import { connect } from "react-redux"
import { Header } from "../components"
import { getAllGists } from "../store"

export class GistsView extends Component{

    componentDidMount(){
        this.props.getAllGists()
        
    }

    render(){
        const {gists, pending} = this.props
        return(
            <div>
                <Header/>
                <h1>Test</h1>
                <h1>Поиск</h1>
                {/* <input
                placeholder="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                /> */}
                {/* {pending ? (
                <h1>pending</h1>
                ) : ( */}
                <ul>
                    {gists?.map((item, index) => (
                    <li key={index}>{item.description || "Нет описания"}</li>
                    ))}
                </ul>
                
          </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
      gists: state.gistsReducer.gists || [],
      pending: state.gistsReducer.pending,
      error: state.gistsReducer.error,
    }
  }
  
  const mapDispachToProps = (dispatch) => ({
    getAllGists: () => dispatch(getAllGists()),
  })
  
  export const Gists = connect(
    mapStateToProps,
    mapDispachToProps,
  )(GistsView)
  