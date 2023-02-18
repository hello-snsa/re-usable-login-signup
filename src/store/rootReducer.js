import { combineReducers } from 'redux';

import authReducer from './reducers/auth/authReducer';

const rootReducer = combineReducers({
    authReducer:authReducer
});

export default rootReducer;