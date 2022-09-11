import { ActionReducerMap, MetaReducer } from '@ngrx/store';
//import { AppReducer } from './reducers/app.reducers';

export interface IAppState {

}

export const reducers: ActionReducerMap<IAppState> = {
  //AppState: AppReducer,
};
export const metaReducers: MetaReducer<IAppState>[] = [];
