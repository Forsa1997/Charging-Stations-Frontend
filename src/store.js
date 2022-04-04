import { createStore, applyMiddleware, combineReducers } from 'redux'
import authReducer from "./reducers/authReducer";
import messageReducer from "./reducers/messageReducer";
import mapReducer from "./reducers/mapReducer";
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    authReducer,
    messageReducer,
    mapReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default store;
