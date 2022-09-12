import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { ICountry } from 'src/app/models/country';
import { CountriesActions } from '../actions/action-types';


export interface CountriesState {
  countries: ICountry[];
}

export const initialCountriesState: CountriesState = {
  countries: undefined
}


export const countriesReducer = createReducer(
  initialCountriesState,
  on(CountriesActions.loadCountries, (state, action) => {
    console.log("reducer calısıyor")
    return {
      countries: action.countries
    }
  })
);


