import { combineReducers } from 'redux';
import PlotsReducer from './plots';
import ContactsReducer from './contacts';

const rootReducer = combineReducers({
    plots: PlotsReducer,
    contacts: ContactsReducer
});

export default rootReducer;