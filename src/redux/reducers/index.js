import { combineReducers } from 'redux';
import merchants from "./merchantsReducer";
import transactions from './transactionReducer';

const rootReducer = combineReducers({
    merchants: merchants,
    transactions: transactions
});

export default rootReducer;