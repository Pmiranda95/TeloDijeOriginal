import React from 'react'
import AppBar from './AppBar'
import { connect } from 'react-redux'
import {getDetails} from "../API/redux/actions/ApiGoogleMaps"
import { bindActionCreators } from 'redux'


class Detail extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getDetails("ChIJuTGIS9fSvJURWp4kJL8oKh8")
        console.log("hola entre a details")
    }
    render() {
        return (
        <div>
            <AppBar/>
            <ul>
                <li><img src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAFBA4ZlbMnpu6yxv24MhagnFlCJ42mW_259PW_WvidQ7MFa2sCuLyb9Uoe2XGGAlj7of8sTO--6UN6QivjLynrBOy-L2wY11c85MxPgZf-lis8YrX17GB4u6RXT6as_zHEhCzNl9saKMHGwdD3HxdJOl7GhQj4I9cTpzxV9ANTMZNE3GRVCYC_A&key=AIzaSyDRqhzhh41yso8ukuwCwIXNbU-UddGSRaw"}></img></li>
            </ul>

        </div>
        )
    }

 

}



const mapStateToProps = state => ({
    details: state.apiGoogleMaps.details
})

const mapDispatchToProps = dispatch => ({
    getDetails: bindActionCreators(getDetails, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps) (Detail) 