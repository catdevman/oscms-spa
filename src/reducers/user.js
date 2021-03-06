import { GET_CURRENT_USER } from "../actions";

const INITIAL_STATE = {info:{}};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_CURRENT_USER:
            return {
                ...state,
                info: action.payload
            };
        default:
            return state
    }
}
