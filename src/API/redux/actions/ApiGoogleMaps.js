const url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="
const key = "AIzaSyDRqhzhh41yso8ukuwCwIXNbU-UddGSRaw"
export  const getPlaces = (place,lat,log) => dispatch => {
    fetch(url+place+"&location="+lat+","+log+"&radius=10000&key="+key,{method:'GET', headers:{"Content-Type": "application/json"},credentials:'same-origin',cache:'default',redirect: 'follow'})
    .then(res=> res.json())
        .then(res=> {
            dispatch({
                type:'traerTelos',
                payload:res
            })
    })
    .catch(err => console.log("Error de la peticion:"+err.message))
}


const urlDetails = "https://maps.googleapis.com/maps/api/place/details/json?place_id="

export const getDetails = (placeId) =>  dispatch =>{
    fetch(urlDetails+placeId+"&fields=name,rating,formatted_phone_number,photo&key="+key)
    .then(res => res.json())
        .then(res => {
            dispatch({
                type:'traerDetails',
                payload:res
            })
        })
        .catch(err => console.log('Error de la peticion jjj: '+err.message))
}