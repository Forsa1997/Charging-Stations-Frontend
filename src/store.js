import { createStore, applyMiddleware, combineReducers } from 'redux'
import authReducer from "./reducers/authReducer";
import messageReducer from "./reducers/messageReducer";
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    authReducer,
    messageReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

export default store;
