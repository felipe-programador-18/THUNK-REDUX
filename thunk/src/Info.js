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
        return <span>Testing span Info</span>

    }
}
const mapStateProps = (state) => {
    return {
        isFetching: state.isFetching

    }
}

const mapDispatch =(dispatch) => {
return {
    loalData:() => dispatch(loalData())
}
}

export default connect(mapStateProps, mapDispatch)(Info)