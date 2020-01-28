import { createStore } from 'redux';
// import { rootReducer } from './root-reducer'
import { searchRepo, filterRepoByLang, filterRepoByType } from './reducers'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ searchRepo, filterRepoByLang, filterRepoByType });
export const store = createStore(rootReducer);