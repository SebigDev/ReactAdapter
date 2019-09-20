import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function merchantsReducer(state = initialState.merchants, action){
    switch(action.type){
        case types.CREATE_MERCHANT:
            return [...state, {...action.merchant}];

        case types.LOAD_MERCHANTS_SUCCESS:
            return action.merchants;
            
        default:
            return state; 
    }
}