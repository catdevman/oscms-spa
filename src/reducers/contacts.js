import { GET_CONTACTS, GET_CONTACT } from "../actions";

const INITIAL_STATE = {all:[], contact:{}};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_CONTACTS:
            return {
                ...state,
                all: action.payload.data ? action.payload.data.listContacts.items : []
            };
        case GET_CONTACT:
                return {
                    ...state,
                    contact: action.payload.data ? action.payload.data.getContact : {}
                };
        default:
            return state
    }
}