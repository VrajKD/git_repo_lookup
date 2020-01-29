import { createStore, applyMiddleware } from 'redux';
// import { rootReducer } from './root-reducer'
import { searchRepo, filterRepoByLang, filterRepoByType } from './reducers'
import { combineReducers } from 'redux';
import logger from 'redux-logger';


const rootReducer = combineReducers({ searchRepo, filterRepoByLang, filterRepoByType }, applyMiddleware(logger));
export const store = createStore(rootReducer);