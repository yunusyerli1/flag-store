import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ICountry } from '../models/country';
import { countriesReducer, CountriesState, logger } from './reducers/countries.reducers';
//import { AppReducer } from './reducers/app.reducers';

export interface IAppState {
  //countries: any;
  //countryList:CountriesState
}

export const rootReducers: ActionReducerMap<IAppState> = {
  //AppState: AppReducer,
  countries:countriesReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? [logger]
  : [];
