import { combineReducers } from 'redux';
import merchants from "./reducers/merchantsReducer";

const rootReducer = combineReducers({
    merchants: merchants
});

export default rootReducer;