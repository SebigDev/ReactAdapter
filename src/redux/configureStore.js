import { createStore, applyMiddleware, compose } from 'redux';
import  rootReducer  from './reducers/index';
import  reduxImmutableStateInvariant  from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';


export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; //adds redux dev tools
    return createStore(
        rootReducer, 
        initialState, 
       composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())));//handling immutability
}