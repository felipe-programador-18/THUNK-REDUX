import React from 'react'
import { connect } from 'react-redux'
import {loalData} from './actions'

export class Info extends React.Component{
    // this when create date, wanna dispatch loaldate
    //theoritical i am adding date to component
    componentDidMount(){
       this.props.loalData()
    }
    render(){
        if(this.props.isFetching){
          return <span>loading....</span>
        }
        if(this.props.error){
          return <span>Error in page !!</span>
        }
        return <span>Info: {this.props.data.origin} </span>

    }
}
const mapStateProps = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error

    }
}

const mapDispatch =(dispatch) => {
return {
    loalData:() => dispatch(loalData())
}
}

export default connect(mapStateProps, mapDispatch)(Info)