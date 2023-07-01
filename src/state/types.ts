import {store} from '@/state/store';


export type ReduxState = ReturnType<typeof store.getState>;

export type ReduxStore = typeof store;

export type Dispatcher = typeof store.dispatch;
