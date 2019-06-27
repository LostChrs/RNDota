import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import dotaReducer from './Reducers/dota';
const logger = createLogger();
const rootReducer = combineReducers({
    dota: dotaReducer,
});

const configureStore = ()=>{
    return createStore(rootReducer,applyMiddleware(thunk,logger));
}

export default configureStore;