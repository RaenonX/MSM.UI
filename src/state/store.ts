import {configureStore} from '@reduxjs/toolkit';
import {useDispatch as useReduxDispatch} from 'react-redux';

import {rootReducer} from '@/state/reducer';
import {Dispatcher} from '@/state/types';


export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export const useDispatch = (): Dispatcher => useReduxDispatch<Dispatcher>();
