import * as types from './actionTypes';
import * as ApiUrls from '../../route';

export function loadTransactionsSuccess(transactions){
    return({type: types.LOAD_TRANSACTIONS_SUCCESS, transactions})
}
export function loadCreateTransactionSuccess(res){
    return ({type: types.CREATE_TRANSACTION, res})
}

export function loadTransactions(){
   return function (dispatch){
       return ApiUrls.getTransactions()
       .then(transactions => {
           dispatch(loadTransactionsSuccess(transactions))
       }).catch(error => {
           throw  error;
       })
   }
}

export function createTransaction(data){
    return function(dispatch){
        return ApiUrls.createAlatTransaction(data)
        .then(res => {
            dispatch(loadCreateTransactionSuccess(res))
        }).catch(err =>{
            throw err;
        })
    }
}