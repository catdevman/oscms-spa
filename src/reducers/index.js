import { combineReducers } from 'redux';
import PlotsReducer from './plots';
import ContactsReducer from './contacts';
import CemeteriesReducer from './cemeteries';
import CurrentUserReducer from './user';

const rootReducer = combineReducers({
    plots: PlotsReducer,
    contacts: ContactsReducer,
    user: CurrentUserReducer,
    cemeteries: CemeteriesReducer,
});

export default rootReducer;
