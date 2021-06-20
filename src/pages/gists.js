import debounce from "lodash.debounce"
import React, { Component } from "react"
import { connect } from "react-redux"
import { Header } from "../components"
import { getAllGists } from "../store"

export class GistsView extends Component{

    state = {
        query: "",
    }

    componentDidMount(){
        
    }

    handleChange = debounce( (e) => {
        const value= e.target.value
        this.setState({query: value}); 
        console.log((this.state));
        if(value){
            this.props.getAllGists(value)}
    },500)

    render(){
        const { pending, gists, error,} = this.props

        if (error) {
            return <h1>Ooops....</h1>
        }

        return(
            <div>
                <Header/>
                <h1>Test</h1>
                <h1>Поиск</h1>
                <input
                placeholder="search"
                
                
                onChange={this.handleChange}           
                />
                {pending ? (
                <h1>pending</h1>
                ) : (
                <ul>
                    {gists?.map((item, index) => (
                    <li key={index}>{item.description || "Нет описания"}</li>
                    ))}
                </ul>
                )}
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
    getAllGists: (query) => dispatch(getAllGists(query)),
  })
  
  export const Gists = connect(
    mapStateToProps,
    mapDispachToProps,
  )(GistsView)
  