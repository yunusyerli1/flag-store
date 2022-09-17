import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ICountry, ICountriesState } from '../models/country';
import { countriesReducer, logger } from './reducers/countries.reducers';
//import { AppReducer } from './reducers/app.reducers';

export interface IAppState {
  //countries: any;
  //countryList:ICountriesState
}

export const rootReducers: ActionReducerMap<IAppState> = {
  //AppState: AppReducer,
  countries:countriesReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? [logger]
  : [];
