import React from 'react';
import '../static/css/Map.css'
import Grid from '@material-ui/core/Grid';
import mapStyles from '../static/css/mapStyles';
import {GoogleMap,withScriptjs,withGoogleMap,Marker} from 'react-google-maps';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {getPlaces,getDetails} from "../API/redux/actions/ApiGoogleMaps"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Detail from './Detail'
import { withRouter } from 'react-router-dom';

class Map extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            lat: 0,
            lng: 0,
            flag : false,
            places:['telos','hotel','bares','supermercado'],
            resultados:[]
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
          alert('El navegador no soporta la geolocalización,')
        }
      }

      handleChange = (event) => {
        this.props.getPlaces(event.target.value,this.state.lat,this.state.lng)
      }
      onMarkerClick = (placeId) => {
        console.log('hola')
        this.props.history.push(`/details`)
       //this.props.getDetails(placeId)
       //this.props.getPlaces('hotel',this.state.lat,this.state.lng)
      } 

      componentDidMout(){
        console.log("resultados"+this.props.resultados)
        console.log("detalles"+this.props.details)
      }
      
    render(){
        const { lat, lng } = this.state;
      
        return(
            <Grid xs={12} md={12} sm={12}>
            <Select
              onChange={this.handleChange}
              >
                  {
                      this.state.places.map(place => (
                      <MenuItem key={place} value={place}>{place}</MenuItem>))
                  }
                </Select>
            <div className="map">
               <GoogleMap 
               defaultZoom={14} 
               defaultCenter={{lat:lat,lng:lng}}
               defaultOptions={{styles:mapStyles}}
               ref={map => {
                this.map = map;
                if (map && lat && lng) {
                  map.panTo({ lat, lng });
                }
              }}
               >
                <Marker 
                key={"ubi12"}
                position={{lat:lat,lng:lng}} 
                options={{icon: { url:'https://image.flaticon.com/icons/svg/599/599542.svg',scaledSize: new window.google.maps.Size(50, 50),}}}
                />
                
                {
                  this.state.resultados ?
                this.props.resultados.map(res => (<Marker key={res.id} {...this.props.resultados} onClick={this.onMarkerClick.bind(this,res.place_id)} position={{lat:res.geometry.location.lat,lng:res.geometry.location.lng}} title={res.name}  />) )
                : <div></div>
                }
                
              </GoogleMap> 
            </div>
            
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => ({
  getPlaces: bindActionCreators(getPlaces, dispatch),
})

const mapStateToProps = state => ({
    resultados: state.apiGoogleMaps.resultados,
    //details: state.apiGoogleMaps.details
})

export default withRouter(withScriptjs(withGoogleMap(connect(mapStateToProps,mapDispatchToProps)(Map))));