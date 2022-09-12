import { createSelector } from '@ngrx/store';
import { IAppState } from '../index';
import { CountriesState } from '../reducers/countries.reducers';

export const selectCountries = (state: any) => state.countries;

export const selectAllCountries = createSelector(
  selectCountries,
  (state: CountriesState) => state.countries
);

export const selectCountriesLoaded = createSelector(
  selectCountries,
  (state: CountriesState) => state.loaded
);

export const selectCountriesError = createSelector(
  selectCountries,
  (state: CountriesState) => state.error
);
