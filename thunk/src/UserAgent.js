import React from 'react'
import { connect } from 'react-redux'
import {loalUA} from './actions'

export class UserAgent extends React.Component{
    // this when create date, wanna dispatch loaldate
    //theoritical i am adding date to component
    componentDidMount(){
       this.props.loalUA()
    }
    render(){
        if(this.props.isFetching){
          return <span>loading....</span>
        }
        if(this.props.error){
          return <span>Error in page !!</span>
        }
        return <span>user: {this.props.data['user-agent']} </span>

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
    loalUA:() => dispatch(loalUA())
}
}

export default connect(mapStateProps, mapDispatch)(UserAgent)