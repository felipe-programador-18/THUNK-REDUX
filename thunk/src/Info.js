import React from 'react'
import {connect} from 'react-redux'

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


export default connect(mapStateProps)(Info)