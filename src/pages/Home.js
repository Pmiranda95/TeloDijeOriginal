import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../componentes/AppBar'
import Map from '../componentes/Map'



class Home extends React.Component {
   
    componentDidMount(){
       //this.props.getPlaces('telos','-34.7340213','-58.4565015');
    }

    
   
    render (){
        return (
            <Container >
                <AppBar />
                <Map 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDRqhzhh41yso8ukuwCwIXNbU-UddGSRaw`} 
                containerElement= {<div style={{height:'600px'}} />}
                mapElement = {<div style={{height:'100%'}} />}
                loadingElement = {<p>Cargando</p>}                
                />
            </Container>
            
        );
    }

}





export default  Home;
