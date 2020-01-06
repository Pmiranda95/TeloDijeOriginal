import React from 'react';
import '../static/css/Map.css'
import Grid from '@material-ui/core/Grid';
import mapStyles from '../static/css/mapStyles';
import {GoogleMap,withScriptjs,withGoogleMap,Marker} from 'react-google-maps';


class Map extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            lat: 0,
            lng: 0,
          };
    }
    componentWillMount(){
        
        if (!!navigator.geolocation) {
          navigator.geolocation.watchPosition((position) => {
            this.setState({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (err) => console.log(err),
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 },
          );
        } else {
          //  // No Support Web
          alert('El navegador no soporta la geolocalización,')
        }
      }
    

    render(){
        const { lat, lng } = this.state;

        return(
            <Grid xs={12} md={12} sm={12}>
            <div className="map">
               <GoogleMap 
               defaultZoom={14} 
               defaultCenter={{lat:lat,lng:lng}}
               defaultOptions={{styles:mapStyles}}
               ref={map => {
                this.map = map;
                if (map && lat && lng) {
                 // console.log(bounds);
                  //const bounds = new google.maps.LatLngBounds({ lat, lng });
                  //map.fitBounds(bounds);
                  map.panTo({ lat, lng });
                }
              }}
               

               >
                <Marker 
                position={{lat:lat,lng:lng}} 
                options={{icon: { url:'https://image.flaticon.com/icons/svg/599/599542.svg',scaledSize: new window.google.maps.Size(50, 50),}}}
                />
                </GoogleMap> 
               
            </div>
            </Grid>
        );
    }
}

export default withScriptjs(withGoogleMap(Map))  ;