import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import apiGoogleMaps from './redux/reducer/ApiGoogleMaps'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const   reducer  = combineReducers({
    apiGoogleMaps
});

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
 export default store