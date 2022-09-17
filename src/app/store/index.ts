import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { countriesReducer, logger } from './reducers/countries.reducers';

export interface IAppState {
  //countries: any;
  //countryList:ICountriesState
}

export const rootReducers: ActionReducerMap<IAppState> = {
  //AppState: AppReducer,
  countries:countriesReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
