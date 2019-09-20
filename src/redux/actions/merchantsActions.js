import * as types from './actionTypes';
import * as ApiUrls from '../../route';


export function loadMerchantsSuccess(merchants){
    return({type:types.LOAD_MERCHANTS_SUCCESS, merchants})
}

export function loadCreateMerchantSuccess(res){
    return ({type: types.CREATE_MERCHANT, res})
}



export function loadMerchants(){
    return function (dispatch){
        return ApiUrls.getMerchants()
        .then(merchants => {
            dispatch(loadMerchantsSuccess(merchants));
        }).catch(error => {
            throw error;
        })
    }
}

export function createMerchant(data){
    return function(dispatch){
        return ApiUrls.saveMerchant(data)
        .then(res => {
            dispatch(loadCreateMerchantSuccess(res))
        }).catch(err =>{
            throw err;
        })
    }
}


