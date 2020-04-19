import React from 'react'
import AppBar from './AppBar'
import { connect } from 'react-redux'


class Detail extends React.Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
        <div>
            <AppBar/>
            <ul>
                <li>HOlA</li>
            </ul>

        </div>
        )
    }

 

}

const mapStateToProps = state => ({
    details: state.apiGoogleMaps
})

export default connect(mapStateToProps,null) (Detail) 