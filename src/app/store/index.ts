import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ICountry } from '../models/country';
import { countriesReducer } from './reducers/countries.reducers';
//import { AppReducer } from './reducers/app.reducers';

export interface IAppState {
}

export const rootReducers: ActionReducerMap<IAppState> = {
  //AppState: AppReducer,
  countryList:countriesReducer
};

//export const metaReducers: MetaReducer<IAppState>[] = [];
