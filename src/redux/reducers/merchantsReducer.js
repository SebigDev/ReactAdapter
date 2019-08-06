export default function merchantsReducer(state = [], action){
    switch(action.type){
        case "CREATE_MERCHANT":
            return [...state, {...action.merchant}];
        default:
            return state;
    }
}