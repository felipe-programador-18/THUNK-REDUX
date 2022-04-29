import React from 'react'
import {connect} from 'react-redux'
import {loalData} from './actions'

export class Info extends React.Component{
    render(){
        return <span>Testing span Info</span>

    }
}
const mapStateProps = (state) => {
    return {
        isfetching: state.isfetching,

    }
}

const mapDispatch =  (dispatch) => {
return {
    loaldata:() => dispatch(loalData())
}
}

export default connect(mapStateProps, mapDispatch)(Info)