import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountriesState } from '../reducers/countries.reducers';

export const selectCountriesState = createFeatureSelector<any>("countries")

export const selectAllCountries = createSelector(
  selectCountriesState,
  (countries) => countries.countries
);

export const selectCountriesLoaded = createSelector(
  selectCountriesState,
  (state: CountriesState) => state.loaded
);

export const selectCountriesError = createSelector(
  selectCountriesState,
  (state: CountriesState) => state.error
);
