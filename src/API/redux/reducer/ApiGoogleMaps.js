const initialState =  {
    resultados:[],
    details:''
}


function reducer (store=initialState,action){
    console.log(action.type);
    switch (action.type){
        case 'traerTelos':
            if(!action.payload){
                console.log("no trae resultados de busqueda")
                return null
            }
            return {...store,resultados:action.payload.results}
        case 'traerDetails' : 
            if(!action.payload){
                console.log('no obtengo nada de details')
                return null
            }
            console.log(action.payload)
            return action.payload
        default :
            return store    
    }
}

export default reducer;