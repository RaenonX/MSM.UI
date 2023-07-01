import {combineReducers} from 'redux';

import errorReducer from '@/state/error/reducer';


const reducers = {
  error: errorReducer,
};

export const rootReducer = combineReducers(reducers);
