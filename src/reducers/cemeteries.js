import { GET_CEMETERIES, SET_CURRENT_CEMETERY } from "../actions";

const INITIAL_STATE = {all:[], cemetery: null};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_CEMETERIES:
            return {
                ...state,
                all: action.payload.data.listCemeterys.items
            };
        case SET_CURRENT_CEMETERY:
          return {
              ...state,
              cemetery: action.payload
          };
        default:
            return state
    }
}
