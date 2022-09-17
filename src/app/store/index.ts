import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ICountriesState, ICountry } from '../models/country';
import { countriesReducer, logger } from './reducers/countries.reducers';

export interface IAppState {
  countries: ICountriesState;
  //countryList:ICountriesState
}

export const rootReducers: ActionReducerMap<IAppState> = {
  //AppState: AppReducer,
  countries:countriesReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
