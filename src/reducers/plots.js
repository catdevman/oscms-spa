import { GET_PLOTS, GET_PLOT } from "../actions";

const INITIAL_STATE = {all:[], plot:{}};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_PLOTS:
            return {
                ...state,
                all: action.payload.data
            };
        case GET_PLOT:
            return {...state, plot: action.payload.data}
        default:
            return state
    }
}