import { GET_CEMETERIES } from "../actions";

const INITIAL_STATE = {all:[]};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_CEMETERIES:
            return {
                ...state,
                all: action.payload.data
            };
        default:
            return state
    }
}
