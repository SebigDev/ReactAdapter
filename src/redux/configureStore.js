import { createStore, applyMiddleware, compose } from 'redux';
import  rootReducer  from '../redux';
import  reduxImmutableStateInvariant  from "redux-immutable-state-invariant";


export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; //ends redux dev tools
    return createStore(
        rootReducer, 
        initialState, 
       composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())));//handling immutability
}